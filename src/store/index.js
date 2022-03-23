import { createSlice, configureStore } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  menu: true,
  quiz: false,
  modal: false,
  loading: false,
  error: false,
  index: 0,
  url: `https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple`,
  questions: [],
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuestions(state, action) {
      state.questions = { ...action.payload };
      console.log(action.payload);
    },
    setMenu(state, action) {
      state.menu = action.payload;
    },

    setModal(state, action) {
      state.modal = action.payload;
    },

    incrementIndex(state, action) {
      state.index++;
    },
  },
});

const store = configureStore({
  reducer: quizSlice.reducer,
});

export const { setQuestions } = quizSlice.actions;
export default store;

export const getQuestions = () => async (dispatch) => {
  const response = await axios(
    `https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple`
  ).catch((err) => console.log(err));
  dispatch(setQuestions(response.data.results));
};
