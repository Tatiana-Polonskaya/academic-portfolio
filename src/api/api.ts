import { Article, Achievement } from "../consts";

const URL = "https://fastapi-production-fd80.up.railway.app";

export async function fetchArticles(): Promise<Article[]> {
  return fetch(`${URL}/articles`).then((response) => {
    return response.json();
  });
}

export async function fetchArticleById(id: string): Promise<Article> {
  return fetch(`${URL}/articles/${id}`).then((response) => response.json());
}

export async function fetchImages(): Promise<Achievement[]> {
  return fetch(`${URL}/achievements`).then((response) => response.json());
}
