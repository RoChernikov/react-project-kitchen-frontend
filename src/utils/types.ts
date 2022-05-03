export type TErrors = {
  [name: string]: string;
};

export type TArticle = {
  author: TAuthor;
  body: string;
  createdAt: string;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  tagList: string[];
  title: string;
  updatedAt: string;
};

export type TAuthor = {
  username: string;
  image: string;
  bio?: string;
  following: boolean;
};

export type TComment = {
  id: string;
  body: string;
  createdAt: string;
  author: TAuthor;
};

export type TUser = {
  username: string;
  email: string;
  token: string;
  bio?: string;
  image: string;
};
