import {
    createContext,
    createEffect,
    createMemo,
    onMount,
    ParentProps,
    useContext,
} from "solid-js";
import { fetchArticles } from "../@api/api";
import { createStore } from "solid-js/store";
import { Article } from "../@types/article";
import {
    generateDataBarChartFromArticles,
    generateDataChartFromArticles,
} from "./convert-articles-to-chart";
import { ChartData } from "chart.js";

const initContext = {
    articles: () => [],
};

type TDataInitContext = {
    articles: () => Article[];
    chartDataByArticles?: () => ChartData;
    barChartDataByArticles?: () => ChartData;
};

type TContextStore = {
    articles: Article[];
};

const initStore: TContextStore = {
    articles: [],
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

    onMount(() => {
        // получение статей
        fetchArticles().then((response) => {
            if (response) {
                setStore("articles", response);
            }
        });

        // получение дипломов
        // конвертирование и сохранение данных для графиков
    });

    const value: TDataInitContext = {
        articles: () => store.articles,
        chartDataByArticles,
        barChartDataByArticles,
    };

    return <DataInitContext.Provider value={value}>{props.children}</DataInitContext.Provider>;
}

export function useDataInitContext() {
    return useContext(DataInitContext);
}
