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
import { Article } from "../../@types/article";
import { ARTICLE_STATUS } from "../../@hooks/use-form";

//TODO: исправить название по годам, взятых из статей

export default function ArticlesPage() {
    const [articles, setArticles] = createSignal<Article[]>([]);
    const [filterData, setFilterData] = createSignal<Article[]>([]);

    onMount(async () => {
        const temp = await fetchArticles();
        if (temp) {
            setArticles(temp);
            setFilterData(temp);
        }
    });

    const [isFilter, setIsFilter] = createSignal(false);
    const [isSorted, setIsSorted] = createSignal(false);
    const [searchValue, setSeachValue] = createSignal("");

    createEffect(
        on([isFilter, isSorted, searchValue], () => {
            let temp = articles();
            if (isFilter()) {
                temp = temp.filter((item) => item.status === ARTICLE_STATUS.PUBLISHED);
            }
            if (isSorted()) {
                temp = temp.sort((a: Article, b: Article) => Number(a.year) - Number(b.year));
            }
            if (searchValue()) {
                temp = temp.filter(
                    (item) =>
                        item.title.includes(searchValue()) ||
                        item.conference.includes(searchValue()),
                );
            }
            setFilterData(temp);
        }),
    );

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
