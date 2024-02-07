/* eslint-disable no-unused-vars */
export enum Routers {
  Main = "/",
  Cards = "/cards",
  Achievement = "/achievement/:id",
  Articles = "/articles",
  AddArticle = "/articles/add",
  EditArticle = "/articles/:id/edit",
  Article = "/articles/:id",
}



export type Achievement = {
  index: string;
  date: string;
  title: string;
  link: string;
  img: string;
};
