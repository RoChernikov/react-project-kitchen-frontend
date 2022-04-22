import { TAuthor } from './types';

export interface IArticle {
  author: TAuthor;
  body: string;
  createdAt: string;
  description: string;
  favorited: boolean;
  favoritesCount: 0;
  slug: string;
  tagList: string[];
  title: string;
  updatedAt: string;
}
