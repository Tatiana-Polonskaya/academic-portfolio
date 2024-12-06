import { ChartData } from "chart.js";
import { Article } from "../@types/article";
import { IndexationTitles } from "../@types/indexation";

export const generateDataChartFromArticles = (articles: Article[]): ChartData => {
    let amountArticlesByIndexetion = new Array(Object.keys(IndexationTitles).length).fill(0);

    articles.forEach((elem) => {
        amountArticlesByIndexetion[elem.indexation] += 1;
    });

    return {
        labels: Object.values(IndexationTitles),
        datasets: [
            {
                label: "Количество",
                data: amountArticlesByIndexetion,
                backgroundColor: ["#E5FF7C", "#7CFFD8", "#FF7C7C"],
            },
        ],
    };
};

export const generateDataBarChartFromArticles = (articles: Article[]): ChartData => {
    const uniqueYears: { [key: string]: number } = {};

    articles.forEach((article) => {
        if (article.year in uniqueYears) {
            uniqueYears[article.year] += 1;
        } else {
            uniqueYears[article.year] = 1;
        }
    });

    return {
        labels: Object.keys(uniqueYears),
        datasets: [
            {
                categoryPercentage: 1,
                barPercentage: 0.8,
                label: "Количество",
                data: Object.values(uniqueYears),
                backgroundColor: ["#7CFFD8", "#E5FF7C", "#BE7CFF", "#FF7C7C"],
                borderRadius: 10,
                borderSkipped: false,
            },
        ],
    };
};
