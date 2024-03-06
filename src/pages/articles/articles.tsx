import { Suspense, createEffect, createSignal, on, onMount } from "solid-js";
import ListRows from "../../components/list-rows/list-rows";

import BaseLayout from "../../layouts/base/base-layout";
import { fetchArticles } from "../../@api/api";
import ControlPanel from "../../components/control-panel/control-panel";
import Caption from "../../components/caption/caption";
import Spinner from "../../components/spinner/spinner";
import { Article } from "../../@types/article";
import { ARTICLE_STATUS } from "../../@hooks/use-form";
import { Routers } from "../../consts";
import LineSeparator from "../../components/line-separator/line-separator";
import InfoBuble from "../../@ui/info-buble/info-buble";
import BubbleBlock from "../../@ui/buble-block/buble-block";
import MyChart from "../../components/chart/chart";

import "./articles.scss";
import Link from "../../@ui/link/link";
import { ChartOptions } from "chart.js";

const data = {
    labels: ["Статьи", "Олимпиады", "Хакатоны"],
    datasets: [
        {
            label: "Количество",
            data: [26, 4, 10],
            backgroundColor: ["#E5FF7C", "#7CFFD8", "#FF7C7C"],
        },
    ],
};

const options: ChartOptions = {
    plugins: {
        legend: {
            labels: {
                // This more specific font property overrides the global property
                font: {
                    family: "Montserrat Alternates",
                    size: 14,
                    weight: "normal",
                },
                padding: 20,
                pointStyle: "circle",
                usePointStyle: true,
            },
            position: "bottom",
        },
        colors: {
            enabled: false,
        },
        tooltip: {
            titleFont: {
                family: "Montserrat Alternates",
                size: 14,
                weight: "normal",
            },
            backgroundColor: "#fff",
            titleColor: "#4A2570",
            bodyColor: "",
            bodyFont: {
                family: "Montserrat Alternates",
                size: 14,
                weight: "normal",
            },
            borderColor: "rgba(0, 0, 0, 0.2)",
            borderWidth: 1,
        },
    },
    layout: {
        padding: 5,
    },
};

const dataBar = {
    labels: ["2021", "2022", "2023", "2024"],
    datasets: [
        {
            categoryPercentage: 1,
            barPercentage: 0.8,
            label: "Количество",
            data: [1, 2, 10, 6, 2],
            backgroundColor: ["#7CFFD8", "#E5FF7C", "#BE7CFF", "#FF7C7C"],
            borderRadius: 10,
            borderSkipped: false,
        },
    ],
};

const optionsBar: ChartOptions = {
    plugins: {
        legend: {
            display: false,
        },
        colors: {
            enabled: false,
        },
        tooltip: {
            titleFont: {
                family: "Montserrat Alternates",
                size: 14,
                weight: "normal",
            },
            backgroundColor: "#fff",
            titleColor: "#4A2570",
            bodyColor: "",
            bodyFont: {
                family: "Montserrat Alternates",
                size: 14,
                weight: "normal",
            },
            borderColor: "rgba(0, 0, 0, 0.2)",
            borderWidth: 1,
        },
    },
    layout: {
        padding: 5,
    },

    scales: {
        y: {
            display: false,
        },
        x: {
            grid: {
                display: false,
                lineWidth: 0,
            },
            ticks: {
                autoSkip: false,
                labelOffset: 12,
                maxRotation: 45,
                minRotation: 45,
                color: "#4A2570",
                font: {
                    family: "Montserrat",
                    size: 16,
                    weight: "normal",
                },
            },
        },
    },
};

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

    return (
        <BaseLayout>
            <div class="articles-component">
                <Caption mainText={"Публикации и статьи"} padding="30px 0 0 0" />

                <LineSeparator title="статистика" />

                <div class="row">
                    <div class="col flex-grow">
                        <InfoBuble title="105" description="Всего" class="flex-grow" />

                        <BubbleBlock class="flex-grow">
                            <div class="col link-buble">
                                <Caption
                                    mainText="Открытые источники"
                                    fontSize="18px"
                                    fontWeigth="600"
                                />
                                <Link title="eLibrary" direction="rigth" href="" />
                                <Link title="Google Scholar" direction="rigth" href="" />
                                <Link title="Хабр" direction="rigth" href="" />
                            </div>
                        </BubbleBlock>
                    </div>

                    <BubbleBlock class="flex-grow">
                        <div
                            style={{
                                display: "flex",
                                "flex-flow": "column nowrap",
                                "align-items": "center",
                                "justify-content": "center",
                                padding: "10px 20px",
                                gap: "20px",
                            }}
                        >
                            <Caption
                                mainText="Количество индексируемых статей"
                                fontSize="18px"
                                fontWeigth="600"
                            />
                            <MyChart
                                width={"350px"}
                                height={"auto"}
                                options={options}
                                data={data}
                                type="doughnut"
                            />
                        </div>
                    </BubbleBlock>

                    <BubbleBlock class="flex-grow">
                        <div
                            style={{
                                width: "",
                                display: "flex",
                                "flex-flow": "column nowrap",
                                "align-items": "center",
                                padding: "10px 10px",
                                gap: "20px",
                            }}
                        >
                            <Caption
                                mainText="Количество статей по годам публикации"
                                fontSize="18px"
                                fontWeigth="600"
                            />
                            <MyChart width="350px" options={optionsBar} data={dataBar} type="bar" />
                        </div>
                    </BubbleBlock>
                </div>

                <LineSeparator title="список" />

                <Suspense fallback={<Spinner />}>
                    <ListRows articles={filterData()} />
                </Suspense>
            </div>
        </BaseLayout>
    );
}
