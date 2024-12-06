import BaseLayout from "../../layouts/base/base-layout";
import MyChart from "../../components/chart/chart";
import Caption from "../../components/caption/caption";
import LineSeparator from "../../components/line-separator/line-separator";
import BubbleBlock from "../../@ui/buble-block/buble-block";
import InfoBuble from "../../@ui/info-buble/info-buble";
import Link from "../../@ui/link/link";
import "./main.scss";
import ContactBlock from "../../components/contact-block/contact-block";
import Slider from "../../components/slider/slider";
import { useDataInitContext } from "../../context/data-init-context";
import { ArticleBarChartOptions, ArticleChartOption } from "../../@consts/article-chart-option";

// все получить с бд
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

const options = {
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

const optionsBar = {
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

const dataPie = {
    labels: ["РИНЦ", "ВАК", "Другое"],
    datasets: [
        {
            label: "Общее количество",
            data: [12, 5, 10],
        },
    ],
};

// страница с выводом графиков по различным данным
export default function MainPage() {
    const { chartDataByArticles, barChartDataByArticles } = useDataInitContext();

    return (
        <BaseLayout isContact>
            <Caption mainText="Академическое портфолио" padding="30px 0 0 0" />
            <LineSeparator title="общее" />
            <div
                style={{
                    display: "flex",
                    "flex-flow": "row wrap",
                    "justify-content": "space-between",
                    "align-items": "stretch",
                    "align-content": "stretch",
                    gap: "20px",
                }}
            >
                <InfoBuble title="105" description="Всего" />
                <InfoBuble title="105" description="Всего" />
                <InfoBuble title="105" description="Всего" />
                <InfoBuble title="105" description="Всего" />
            </div>
            <LineSeparator title="статьи" />
            <div class="article-block">
                <BubbleBlock>
                    <div
                        style={{
                            width: "350px",
                            height: "auto",
                            display: "flex",
                            "flex-flow": "column nowrap",
                            "align-items": "center",
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
                            options={ArticleChartOption}
                            data={chartDataByArticles()}
                            type="doughnut"
                        />
                    </div>
                </BubbleBlock>

                <BubbleBlock class="grow">
                    <div
                        style={{
                            width: "100%",
                            display: "flex",
                            "flex-flow": "row nowrap",
                            "align-items": "center",
                            "justify-content": "space-between",
                            padding: "10px 10px",
                        }}
                    >
                        <Caption mainText="Последние статьи" fontSize="18px" fontWeigth="600" />
                        <Link title="подробнее" direction="rigth" href="" />
                    </div>
                </BubbleBlock>

                <BubbleBlock>
                    <div
                        style={{
                            width: "350px",
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
                        <MyChart
                            width="350px"
                            options={ArticleBarChartOptions}
                            data={barChartDataByArticles()}
                            type="bar"
                        />
                    </div>
                </BubbleBlock>
            </div>

            <LineSeparator title="дипломы" />
            <div class="article-block">
                <BubbleBlock>
                    <div
                        style={{
                            width: "350px",
                            height: "auto",
                            display: "flex",
                            "flex-flow": "column nowrap",
                            "align-items": "center",
                            padding: "10px 20px",
                            gap: "20px",
                        }}
                    >
                        <Caption mainText="Количество дипломов" fontSize="18px" fontWeigth="600" />
                        <MyChart options={options} data={data} type="doughnut" />
                    </div>
                </BubbleBlock>

                <BubbleBlock class="grow">
                    <div
                        style={{
                            width: "100%",
                            display: "flex",
                            "flex-flow": "row nowrap",
                            "align-items": "center",
                            "justify-content": "space-between",
                            padding: "10px 10px",
                        }}
                    >
                        <Caption mainText="Дипломы" fontSize="18px" fontWeigth="600" />
                        <Link title="подробнее" direction="rigth" href="" />
                    </div>
                    <Slider />
                </BubbleBlock>
            </div>
        </BaseLayout>
    );
}
