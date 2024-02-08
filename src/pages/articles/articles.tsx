import {
    Suspense,
    createEffect,
    createMemo,
    createResource,
    createSignal,
    on,
    onMount,
} from "solid-js";
import ListRows from "../../components/list-rows/list-rows";

import BaseLayout from "../../layouts/base/base-layout";
import { fetchArticles } from "../../@api/api";
import ControlPanel from "../../components/control-panel/control-panel";
import Caption from "../../components/caption/caption";
import Spinner from "../../components/spinner/spinner";
import { useControlPanel } from "../../@hooks/use-control";
import { Article } from "../../@types/article";
import { STATUS_ARTICLE } from "../../@hooks/use-form";

//TODO: исправить название по годам, взятых из статей

export default function ArticlesPage() {
    const [data] = createResource(true, fetchArticles);

    const [isFilter, setIsFilter] = createSignal(false);
    const [isSorted, setIsSorted] = createSignal(false);
    const [searchValue, setSeachValue] = createSignal("");

    const filterData = createMemo(() => {
        if (!data()) return;
        let res = () => data();
        console.log("filterData", data(), isSorted(), isFilter(), searchValue());
        if (searchValue().length > 0) {
            console.log("searchValue");
            res = () =>
                res().filter(
                    (item) =>
                        item.title.includes(searchValue()) ||
                        item.authors.includes(searchValue()) ||
                        item.conference.includes(searchValue()),
                );
        }
        if (isFilter()) {
            console.log("isFilter");
            res = () => res().filter((item: Article) => item.status === STATUS_ARTICLE.PUBLISHED);
        }
        if (isSorted()) {
            console.log("isSorted");
            res = () => res().sort((a: Article, b: Article) => Number(a.year) - Number(b.year));
        }
        console.log(res());
        return res();
    });

    const handleSearchClick = (value: string) => {
        console.log("value", value);
        setSeachValue(value);
    };

    const handleFilterClick = () => {
        console.log("is filter");
        setIsFilter((prev) => !prev);
    };

    const sortedOptions = [
        {
            id: 1,
            title: "Сначала новые",
            onClick: () => {
                setIsSorted((prev) => !prev);
            },
        },
        {
            id: 2,
            title: "Сначала поздние",
            onClick: () => {
                sortedByFn((a: Article, b: Article) => Number(b.year) - Number(a.year));
            },
        },
    ];

    return (
        <BaseLayout>
            <div class="container-lg px-9 text-center">
                <Caption mainText={"Статьи"} extraText={"за 2020-2024 гг"} />

                <ControlPanel
                    sortedOptions={sortedOptions}
                    onSearchClick={handleSearchClick}
                    onFilterClick={handleFilterClick}
                />

                <Suspense fallback={<Spinner />}>
                    <ListRows articles={filterData()} />
                </Suspense>
            </div>
        </BaseLayout>
    );
}
