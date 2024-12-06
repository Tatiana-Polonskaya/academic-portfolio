import BaseLayout from "../../layouts/base/base-layout";
import { createEffect, createSignal, For, on, Show } from "solid-js";
import Caption from "../../components/caption/caption";

import "./style.scss";
import LineSeparator from "../../components/line-separator/line-separator";
import InfoBuble from "@ui/info-buble/info-buble";
import BubbleBlock from "@ui/buble-block/buble-block";
import Link from "@ui/link/link";
import MyChart from "../../components/chart/chart";
import Button from "@ui/button/button";
import ListRows from "../../components/list-rows/list-rows";
import Input from "@ui/input/input";
import { useDataInitContext } from "../../context/data-init-context";
import {
    AchievementBarChartOptions,
    AchievementChartOption,
} from "@consts/achievement-chart-option";
import { Achievement } from "../../@types/achievement";
import { changeSortType, getSortFunctionByType, SortedType } from "../../@types/sort";
import { hasAchievementText } from "./helper";
import { AchievementRow } from "../../components/achievement-row/achievement-row";

export default function AchievementsPage() {
    const { achievements, barChartDataByAchievements, chartDataByAchievements } =
        useDataInitContext();

    const [filterData, setFilterData] = createSignal<Achievement[]>([]);

    createEffect(() => {
        setFilterData(achievements());
    });

    const [enteredValue, setEnteredValue] = createSignal("");

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
                let filtered = [...achievements()];
                if (enteredValue()) {
                    filtered = filtered.filter((achievement) =>
                        hasAchievementText(achievement, enteredValue()),
                    );
                }
                if (yearSort() !== SortedType.None) {
                    if (yearSort() === SortedType.Abs) {
                        //    filtered.sort((a, b) => Number(a.year) - Number(b.year));
                    } else {
                        //    filtered.sort((a, b) => Number(b.year) - Number(a.year));
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
                <Caption mainText={"Дипломы "} />

                <LineSeparator title="статистика" />

                <div class="row-wrap gap">
                    <div class="col flex-grow gap">
                        <InfoBuble
                            title={achievements().length.toString()}
                            description="Общее количество дипломов"
                            class="flex-grow"
                        />

                        <BubbleBlock class="flex-grow">
                            <div class="col link-buble">
                                <Caption mainText="Мероприятия" fontSize="18px" fontWeigth="600" />
                                <Link title="eLibrary" direction="rigth" href="" />
                                <Link title="Google Scholar" direction="rigth" href="" />
                                <Link title="Хабр" direction="rigth" href="" />
                            </div>
                        </BubbleBlock>
                    </div>

                    <BubbleBlock class="flex-grow">
                        <div class="col padding">
                            <Caption
                                mainText="Количество дипломов"
                                fontSize="18px"
                                fontWeigth="600"
                            />
                            <MyChart
                                width={"350px"}
                                height={"auto"}
                                options={AchievementChartOption}
                                data={chartDataByAchievements()}
                                type="doughnut"
                            />
                        </div>
                    </BubbleBlock>

                    <BubbleBlock class="flex-grow">
                        <div class="col padding">
                            <Caption
                                mainText="Количество дипломов по годам"
                                fontSize="18px"
                                fontWeigth="600"
                            />
                            <MyChart
                                width="350px"
                                options={AchievementBarChartOptions}
                                data={barChartDataByAchievements()}
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
                            placeholder="Введите название мероприятия..."
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
                        <For each={achievements()}>
                            {(elem, id) => (
                                <AchievementRow
                                    id={id() + 1}
                                    achievement={elem}
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
