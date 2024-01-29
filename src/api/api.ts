import { Article, TCard } from "../consts";

export async function fetchArticles(): Promise<Article[]> {
  return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=20`).then(
    (response) => {
      return response.json();
    }
  );
}

export async function fetchArticleById(id: number): Promise<Article> {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
    (response) => response.json()
  );
}

export async function fetchImages(): Promise<TCard[]> {
  return fetch(`https://jsonplaceholder.typicode.com/photos?_limit=10`).then(
    (response) => response.json()
  );
}
