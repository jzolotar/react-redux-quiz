import { createSlice, configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import { act } from 'react-dom/test-utils';

const initialState = {
  menu: true,
  quiz: false,
  modal: false,
  loading: false,
  error: false,
  correct: 0,
  index: 0,
  url: `https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple`,
  questions: [],
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuestions(state, action) {
      state.questions = [...action.payload];
      console.log(state.questions);
    },
    setMenu(state, action) {
      state.menu = action.payload;
    },

    setModal(state, action) {
      state.modal = action.payload;
    },

    nextQuestion(state) {
      if (state.index + 1 >= state.questions.length) {
        state.index = 0;
        return;
      }
      state.index++;
    },
    resetQuiz(state) {
      state = initialState;
    },
    checkCorrect(state, action) {
      //check for correct answer
      const correctAnswer = state.questions[state.index].correct_answer;
      const userAnswer = action.payload;
      console.log(correctAnswer, userAnswer);
      if (correctAnswer === userAnswer) state.correct++;
    },
  },
});

const store = configureStore({
  reducer: quizSlice.reducer,
});

export const {
  setQuestions,
  setMenu,
  setModal,
  nextQuestion,
  resetQuiz,
  checkCorrect,
} = quizSlice.actions;
export default store;

export const getQuestions = (url) => async (dispatch) => {
  const response = await axios(url).catch((err) => console.log(err));
  dispatch(setQuestions(response.data.results));
};
