// src/features/articleSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../Store';

interface Article {
  urlToImage: string;
  title: string;
  description: string;
  publishedAt: string;
  content?:string
  url?:string
}

interface ArticleState {
  selectedArticle: Article | null;
}

const initialState: ArticleState = {
  selectedArticle: null,
};

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setSelectedArticle: (state, action: PayloadAction<Article | null>) => {
      state.selectedArticle = action.payload;
    },
  },
});

export const { setSelectedArticle } = articleSlice.actions;

export const selectSelectedArticle = (state: RootState) => state.article.selectedArticle;

export default articleSlice.reducer;
