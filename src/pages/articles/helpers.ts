import { Article } from "../../@types/article";

export const hasArticleText = (article: Article, text: string) => {
    return Object.values(article).join("").includes(text);
};
