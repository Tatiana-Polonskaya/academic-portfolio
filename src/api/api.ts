import { Article, Achievement } from "../consts";
import { FormAchievement, FormArticle } from "../hooks/use-form";

const URL = "http://127.0.0.1:8000";
const headers = { "Content-Type": "application/json; charset=utf-8" };

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

export async function postArticle(data: FormArticle): Promise<Response> {
  return fetch(`${URL}/articles/`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: headers,
  });
}

export async function postAchievement(
  data: FormAchievement
): Promise<Achievement> {
  return fetch(`${URL}/achievements`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: headers,
  }).then((response) => response.json());
}
