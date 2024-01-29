/* eslint-disable no-unused-vars */
export enum Routers {
  Main = "/",
  Cards = "/cards",
  Articles = "/articles",
  AddArticle = "/articles/add",
  Article = "/articles/:id",
}

export type Article = {
  id: number;
  title: string;
  body: string;
};

export type TCard = {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};
