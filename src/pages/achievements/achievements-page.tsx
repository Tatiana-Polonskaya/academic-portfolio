import BaseLayout from "../../layouts/base/base-layout";
import ListCards from "../../components/list-cards/list-cards";
import { fetchAchievements } from "../../@api/api";
import { For, Suspense, createResource } from "solid-js";
import Caption from "../../components/caption/caption";
import ControlPanel from "../../components/control-panel/control-panel";
import Spinner from "../../components/spinner/spinner";
import { Routers } from "../../consts";

import "./style.scss";
import LineSeparator from "../../components/line-separator/line-separator";
import InfoBuble from "../../@ui/info-buble/info-buble";
import BubbleBlock from "../../@ui/buble-block/buble-block";
import Link from "../../@ui/link/link";
import MyChart from "../../components/chart/chart";
import Button from "../../@ui/button/button";
import ListRows from "../../components/list-rows/list-rows";
import Input from "../../@ui/input/input";
import Row from "../../components/row/row";
import { useNavigate } from "@solidjs/router";
import { buttonTypeByYear } from "../../@helpers/color-by-parametres";
import { ChartOptions } from "chart.js";
import { ButtonType } from "../../@ui/button/type";

const chartData = {
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
        {
            categoryPercentage: 1,
            barPercentage: 0.8,
            label: "Качество",
            data: [1, 2, 10, 6, 2],
            backgroundColor: ["#FF7C7C", "#7CFFD8", "#BE7CFF", "#E5FF7C"],
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

    responsive: true,
    scales: {
        y: {
            display: false,
            stacked: true,
        },
        x: {
            stacked: true,
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

export default function AchievementsPage() {
    const navigate = useNavigate();
    const [data] = createResource(true, fetchAchievements);

    return (
        <BaseLayout>
            <div class="articles-component">
                <Caption mainText={"Дипломы "} padding="30px 0 0 0" />

                <LineSeparator title="статистика" />

                <div class="row-wrap gap">
                    <div class="col flex-grow gap">
                        <InfoBuble title="105" description="Всего дипломов" class="flex-grow" />

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
                                mainText="Количество дипломов"
                                fontSize="18px"
                                fontWeigth="600"
                            />
                            <MyChart
                                width={"350px"}
                                height={"auto"}
                                options={options}
                                data={chartData}
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
                                mainText="Количество дипломов по годам"
                                fontSize="18px"
                                fontWeigth="600"
                            />
                            <MyChart width="350px" options={optionsBar} data={dataBar} type="bar" />
                        </div>
                    </BubbleBlock>
                </div>

                <LineSeparator title="список" />

                <div class="row-wrap padding little-gap">
                    <Button class="grow-btn" onClick={() => console.log("click")}>
                        год
                        <i class="bi bi-caret-down-fill" />
                    </Button>
                    <Button class="grow-btn" onClick={() => console.log("click")}>
                        абв
                        <i class="bi bi-caret-down-fill" />
                    </Button>
                    <div class="row flex-grow little-gap">
                        <Input class="flex-grow " placeholder="название статьи..." />
                        <Button class="grow-btn" onClick={() => console.log("click")}>
                            поиск
                        </Button>
                    </div>
                </div>

                <Suspense fallback={<Spinner />}>
                    <ListRows>
                        <For each={data()}>
                            {(elem, id) => (
                                <Row
                                    id={id() + 1}
                                    description={`${elem.title}`}
                                    onClick={() =>
                                        navigate(
                                            Routers.Achievement.replace(":id", `${elem.index}`),
                                        )
                                    }
                                    hasButtons
                                    buttons={[
                                        {
                                            title: new Date(elem.date).getFullYear() + "",
                                            onClick: () => console.log("click"),
                                            type: buttonTypeByYear(
                                                new Date(elem.date).getFullYear().toLocaleString(),
                                            ),
                                        },
                                        {
                                            title: elem.level,
                                            onClick: () => console.log("click"),
                                            type: ButtonType.Default,
                                        },
                                    ]}
                                />
                            )}
                        </For>
                    </ListRows>
                </Suspense>
            </div>
        </BaseLayout>
    );
}
