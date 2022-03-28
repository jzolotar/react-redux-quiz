import { createSlice, configureStore } from '@reduxjs/toolkit';
import axios from 'axios';

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
      if (state.questions !== 0) {
        state.loading = false;
        state.quiz = true;
      }
    },
    setMenu(state, action) {
      state.menu = action.payload;
    },

    setModal(state, action) {
      state.modal = action.payload;
    },

    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    nextQuestion(state) {
      if (state.index + 1 >= state.questions.length) {
        // state.quiz = false;
        state.modal = true;

        return;
      }
      state.index++;
    },
    resetQuiz: () => initialState,
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
  setLoading,
  setError,
  resetQuiz,
  checkCorrect,
} = quizSlice.actions;
export default store;

export const getQuestions = (url) => async (dispatch) => {
  dispatch(setMenu(false));
  dispatch(setLoading(true));
  const response = await axios(url).catch((err) => {
    if (err.response) {
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
      dispatch(setError({ status: true, msg: err.response }));
    } else if (err.request) {
      console.log(err.request);
      dispatch(setError({ status: true, msg: err.response }));
    } else {
      console.log('Error', err.message);
      dispatch(setError({ status: true, msg: err.response }));
    }
  });
  if (response.data.response_code !== 0) {
    //no data has been fetched
    console.log('no data' + response.data.response_code);
    dispatch(setError({ status: true, msg: "data couldn't be loaded" }));
    //handle this scenario - modal
    return;
  }
  dispatch(setQuestions(response.data.results));
};
