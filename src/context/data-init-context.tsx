import { createContext, createMemo, onMount, ParentProps, useContext } from "solid-js";
import { fetchAchievements, fetchArticles } from "../@api/api";
import { createStore } from "solid-js/store";
import { Article } from "../@types/article";
import {
    generateDataBarChartFromArticles,
    generateDataChartFromArticles,
} from "./convert-articles-to-chart";
import { ChartData } from "chart.js";
import { Achievement } from "../@types/achievement";
import {
    generateDataBarChartFromAchievements,
    generateDataChartFromAchievements,
} from "./convert-achievements-to-chart";

const initContext = {
    articles: () => [],
    achievements: () => [],
};

type TDataInitContext = {
    articles: () => Article[];
    achievements: () => Achievement[];
    chartDataByArticles?: () => ChartData;
    barChartDataByArticles?: () => ChartData;
    chartDataByAchievements?: () => ChartData;
    barChartDataByAchievements?: () => ChartData;
};

type TContextStore = {
    articles: Article[];
    achievements: Achievement[];
};

const initStore: TContextStore = {
    articles: [],
    achievements: [],
};

const DataInitContext = createContext<TDataInitContext>(initContext);

export function DataInitProvider(props: ParentProps) {
    const [store, setStore] = createStore<TContextStore>(initStore);

    const chartDataByArticles = createMemo<ChartData>(() => {
        if (store.articles.length > 0) return generateDataChartFromArticles([...store.articles]);
        return;
    });

    const barChartDataByArticles = createMemo<ChartData>(() => {
        if (store.articles.length > 0) return generateDataBarChartFromArticles([...store.articles]);
        return;
    });

    const chartDataByAchievements = createMemo<ChartData>(() => {
        if (store.articles.length > 0)
            return generateDataChartFromAchievements([...store.achievements]);
        return;
    });

    const barChartDataByAchievements = createMemo<ChartData>(() => {
        if (store.articles.length > 0)
            return generateDataBarChartFromAchievements([...store.achievements]);
        return;
    });

    onMount(() => {
        fetchArticles().then((response) => {
            if (response.length) {
                setStore("articles", response);
            }
        });

        fetchAchievements().then((response) => {
            if (response.length) {
                setStore("achievements", response);
            }
        });
    });

    const value: TDataInitContext = {
        articles: () => store.articles,
        achievements: () => store.achievements,
        chartDataByArticles,
        barChartDataByArticles,
        chartDataByAchievements,
        barChartDataByAchievements,
    };

    return <DataInitContext.Provider value={value}>{props.children}</DataInitContext.Provider>;
}

export function useDataInitContext() {
    return useContext(DataInitContext);
}
