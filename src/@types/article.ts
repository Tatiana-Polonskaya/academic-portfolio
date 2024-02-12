export type Article = {
    index: string;
    indexation: number;
    title: string;
    year: string;
    conference: string;
    status: number;
    linkArticle: string;
    linkCollection: string;
    authors: string;
    pages: string;
};

export type FormArticle = Omit<Article, "index">;
