import { createStore } from "solid-js/store";
import { Article } from "../@types/article";
import { createEffect, createMemo, on } from "solid-js";

function useControlPanel(initial?: Article[], searchValue?: string) {
    const [store, setStore] = createStore({
        searchValue: searchValue || "",
        articles: initial || [],
    });

    const setArticles = (articles: Article[]) => {
        setStore("articles", articles);
    };

    const setSeachValue = (value: string) => {
        setStore("searchValue", value);
    };

    const sortedByFn = (fn: (a: Article, b: Article) => number) => {
        setStore("articles", store.articles.sort(fn));
    };

    const filterByFn = (fn: (item: Article) => boolean) => {
        setStore("articles", store.articles.filter(fn));
    };

    const clearFilters = () => setStore("articles", [...initial]);

    return { store, setArticles, searchValue ,  setSeachValue, filterByFn, sortedByFn, clearFilters };
}

export { useControlPanel };
