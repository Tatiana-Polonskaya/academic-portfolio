import { Article, TCard } from "../consts";

export async function fetchArticles(): Promise<Article[]> {
  return fetch(`https://jsonplaceholder.typicode.com/posts`).then(
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
  return fetch(`https://jsonplaceholder.typicode.com/photos`).then((response) =>
    response.json()
  );
}
