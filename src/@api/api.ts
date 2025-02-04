import { Achievement, FormAchievement } from "../@types/achievement";
import { Article, FormArticle } from "../@types/article";
import { TIndexation } from "../@types/indexation";

export const PathURL = "http://127.0.0.1:8000";
const headers = { "Content-Type": "application/json; charset=utf-8" };

function updateForService(data: Article | FormArticle) {
    return { ...data, link_article: data.linkArticle, link_collection: data.linkCollection };
}

function updateForWeb(data) {
    return { ...data, linkArticle: data.link_article, linkCollection: data.link_collection };
}

export async function fetchArticles(): Promise<Article[]> {
    return fetch(`${PathURL}/articles`, { headers: headers }).then((response) => {
        return response.json();
    });
}

export async function fetchArticleById(id: string): Promise<Article> {
    return fetch(`${PathURL}/articles/${id}`, { headers: headers })
        .then((response) => response.json())
        .then((data) => updateForWeb(data));
}

export async function fetchAchievements(): Promise<Achievement[]> {
    return fetch(`${PathURL}/achievements`, { headers: headers }).then((response) => response.json());
}

export async function fetchAchievementById(id: string): Promise<Achievement> {
    return fetch(`${PathURL}/achievements/${id}`, { headers: headers }).then((response) =>
        response.json(),
    );
}

export async function postArticle(data: FormArticle): Promise<Response> {
    return fetch(`${PathURL}/articles/`, {
        method: "POST",
        body: JSON.stringify(updateForService(data)),
        headers: headers,
    });
}

export async function putArticle(id: string, data: FormArticle): Promise<Response> {
    return fetch(`${PathURL}/articles/${id}`, {
        method: "PUT",
        body: JSON.stringify(updateForService(data)),
        headers: headers,
    });
}

export async function deleteArticleById(id: string): Promise<Response> {
    return fetch(`${PathURL}/articles/${id}`, {
        method: "DELETE",
    });
}

export async function postAchievement(data: FormAchievement): Promise<Achievement> {
    return fetch(`${PathURL}/achievements`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: headers,
    }).then((response) => response.json());
}

export async function getIndexation(): Promise<TIndexation[]> {
    return fetch(`${PathURL}/indexations`, { headers: headers }).then((response) => {
        return response.json();
    });
}
