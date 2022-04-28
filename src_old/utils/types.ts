export type TErrors = {
  [name: string]: string,
};

export type TAuthor = {
  username: string,
  image: string,
  following: boolean,
};

export type TArticle = {
  author: TAuthor,
  body: string,
  createdAt: string,
  description: string,
  favorited: boolean,
  favoritesCount: 0,
  slug: string,
  tagList: string[],
  title: string,
  updatedAt: string,
};
