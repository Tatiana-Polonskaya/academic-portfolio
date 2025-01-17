import { For, Show, createEffect, createSignal, on } from "solid-js";
import ListRows from "../../components/list-rows/list-rows";

import BaseLayout from "../../layouts/base/base-layout";
import Caption from "../../components/caption/caption";
import { Article } from "../../@types/article";

import LineSeparator from "../../components/line-separator/line-separator";
import InfoBuble from "../../@ui/info-buble/info-buble";
import BubbleBlock from "../../@ui/buble-block/buble-block";
import MyChart from "../../components/chart/chart";

import Link from "../../@ui/link/link";
import Input from "../../@ui/input/input";
import Button from "../../@ui/button/button";

import "./articles.scss";
import { ArticleRow } from "../../components/article-row/article-row";
import { changeSortType, getSortFunctionByType, SortedType } from "../../@types/sort";
import { hasArticleText } from "./helpers";
import { useDataInitContext } from "../../context/data-init-context";
import { ArticleBarChartOptions, ArticleChartOption } from "../../@consts/article-chart-option";

export default function ArticlesPage() {
    const [filterData, setFilterData] = createSignal<Article[]>([]);

    const { articles, chartDataByArticles, barChartDataByArticles } = useDataInitContext();

    createEffect(() => {
        setFilterData(articles());
    });

    //#region -------------------- INPUT --------------------
    const [enteredValue, setEnteredValue] = createSignal("");

    //#endregion

    const [yearSort, setYearSort] = createSignal(SortedType.None);
    const [textSort, setTextSort] = createSignal(SortedType.None);

    const handleYearSortChange = () => {
        setYearSort((prev) => changeSortType(prev));
    };

    const handleTextSortChange = () => {
        setTextSort((prev) => changeSortType(prev));
    };

    createEffect(
        on(
            () => [enteredValue(), yearSort(), textSort()],
            () => {
                let filtered = [...articles()];
                if (enteredValue()) {
                    filtered = filtered.filter((acticle) =>
                        hasArticleText(acticle, enteredValue()),
                    );
                }
                if (yearSort() !== SortedType.None) {
                    if (yearSort() === SortedType.Abs) {
                        filtered.sort((a, b) => Number(a.year) - Number(b.year));
                    } else {
                        filtered.sort((a, b) => Number(b.year) - Number(a.year));
                    }
                }
                if (textSort() !== SortedType.None) {
                    filtered = filtered.sort(getSortFunctionByType(textSort()));
                }
                setFilterData(filtered);
            },
        ),
    );

    return (
        <BaseLayout>
            <div class="articles-component">
                <Caption mainText={"Публикации и статьи"} />

                <LineSeparator title="статистика" />

                <div class="row-wrap little-gap">
                    <div class="col flex-grow">
                        <InfoBuble
                            title={articles().length.toString()}
                            description={`Общее количество статей`}
                            class="flex-grow"
                        />

                        <BubbleBlock class="flex-grow">
                            <div class="col link-buble">
                                <Caption
                                    mainText="Открытые источники"
                                    fontSize="18px"
                                    fontWeigth="600"
                                />
                                <Link
                                    title="eLibrary"
                                    direction="rigth"
                                    href="https://clck.ru/3FkzbE"
                                    target="_blank"
                                />
                                <Link
                                    title="Google Scholar"
                                    direction="rigth"
                                    href="https://clck.ru/3Fkxtg"
                                    target="_blank"
                                />
                                <Link
                                    title="Хабр"
                                    direction="rigth"
                                    href="https://clck.ru/3Fkxss"
                                    target="_blank"
                                />
                            </div>
                        </BubbleBlock>
                    </div>

                    <BubbleBlock class="flex-grow">
                        <div class="col padding">
                            <Caption
                                mainText="Количество индексируемых статей"
                                fontSize="18px"
                                fontWeigth="600"
                            />
                            <MyChart
                                width={"350px"}
                                height={"auto"}
                                options={ArticleChartOption}
                                data={chartDataByArticles()}
                                type="doughnut"
                            />
                        </div>
                    </BubbleBlock>

                    <BubbleBlock class="flex-grow">
                        <div class="col padding">
                            <Caption
                                mainText="Количество статей по годам публикации"
                                fontSize="18px"
                                fontWeigth="600"
                            />
                            <MyChart
                                width="350px"
                                options={ArticleBarChartOptions}
                                data={barChartDataByArticles()}
                                type="bar"
                            />
                        </div>
                    </BubbleBlock>
                </div>

                <LineSeparator title="список" />

                <div class="row-wrap padding little-gap">
                    <Button class="grow-btn" onClick={handleYearSortChange}>
                        год
                        <i
                            classList={{
                                "bi bi-caret-down-fill": yearSort() === SortedType.Desc,
                                "bi bi-caret-up-fill": yearSort() === SortedType.Abs,
                            }}
                        />
                    </Button>
                    <Button class="grow-btn" onClick={handleTextSortChange}>
                        абв
                        <i
                            class="bi"
                            classList={{
                                "bi-caret-down-fill": textSort() === SortedType.Desc,
                                "bi-caret-up-fill": textSort() === SortedType.Abs,
                            }}
                        />
                    </Button>
                    <div class="row flex-grow little-gap">
                        <Input
                            class="flex-grow "
                            placeholder="Введите название статьи..."
                            value={enteredValue()}
                            onChange={setEnteredValue}
                        />
                        <Button onClick={[setEnteredValue, ""]}>
                            <i class="bi bi-backspace" />
                        </Button>
                    </div>
                </div>

                <ListRows>
                    <Show
                        when={filterData().length > 0}
                        fallback={"Упс, почему-то ничего не нашлось..."}
                    >
                        <For each={filterData()}>
                            {(article, id) => (
                                <ArticleRow
                                    article={article}
                                    id={id() + 1}
                                    onLableClick={setEnteredValue}
                                />
                            )}
                        </For>
                    </Show>
                </ListRows>
            </div>
        </BaseLayout>
    );
}
