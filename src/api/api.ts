import { Article, Achievement } from "../consts";
import { FormAchievement, FormArticle } from "../hooks/use-form";

const URL = "https://fastapi-production-fd80.up.railway.app";

export async function fetchArticles(): Promise<Article[]> {
  return fetch(`${URL}/articles`).then((response) => {
    return response.json();
  });
}

export async function fetchArticleById(id: string): Promise<Article> {
  return fetch(`${URL}/articles/${id}`).then((response) => response.json());
}

export async function fetchAchievements(): Promise<Achievement[]> {
  return fetch(`${URL}/achievements`).then((response) => response.json());
}

export async function postArticle(data: FormArticle): Promise<Article> {
  return fetch(`${URL}/articles`, {
    method: "POST",
    body: JSON.stringify(data),
  }).then((response) => response.json());
}

export async function postAchievement(
  data: FormAchievement
): Promise<Achievement> {
  return fetch(`${URL}/achievements`, {
    method: "POST",
    body: JSON.stringify(data),
  }).then((response) => response.json());
}
