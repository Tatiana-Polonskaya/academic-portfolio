/* eslint-disable no-unused-vars */
export enum Routers {
  Main = "/",
  Cards = "/cards",
  Achievement = "/achievement/:id",
  Articles = "/articles",
  AddArticle = "/articles/add",
  Article = "/articles/:id",
}

export type Article = {
  index: string;
  title: string;
  year: string;
  conference: string;
  status: number;
  link: string;
};

export type Achievement = {
  index: string;
  date: string;
  title: string;
  link: string;
  img: string;
};
