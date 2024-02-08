import { Achievement, FormAchievement } from "../@types/achievement";
import { Article, FormArticle } from "../@types/article";
import { Indexation } from "../@types/indexation";

const URL = "http://127.0.0.1:8000";
const headers = { "Content-Type": "application/json; charset=utf-8" };

export async function fetchArticles(): Promise<Article[]> {
    return fetch(`${URL}/articles`, { headers: headers }).then((response) => {
        return response.json();
    });
}

export async function fetchArticleById(id: string): Promise<Article> {
    return fetch(`${URL}/articles/${id}`, { headers: headers }).then((response) => response.json());
}

export async function fetchAchievements(): Promise<Achievement[]> {
    return fetch(`${URL}/achievements`, { headers: headers }).then((response) => response.json());
}

export async function postArticle(data: FormArticle): Promise<Response> {
    return fetch(`${URL}/articles/`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: headers,
    });
}

export async function putArticle(id: string, data: FormArticle): Promise<Response> {
    return fetch(`${URL}/articles/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: headers,
    });
}

export async function deleteArticleById(id: string): Promise<Response> {
    return fetch(`${URL}/articles/${id}`, {
        method: "DELETE",
    });
}

export async function postAchievement(data: FormAchievement): Promise<Achievement> {
    return fetch(`${URL}/achievements`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: headers,
    }).then((response) => response.json());
}

export async function getIndexation(): Promise<Indexation[]> {
    return fetch(`${URL}/indexations`, { headers: headers }).then((response) => {
        return response.json();
    });
}
