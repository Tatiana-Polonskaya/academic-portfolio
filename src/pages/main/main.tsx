import BaseLayout from "../../layouts/base/base-layout";
import MyChart from "../../components/chart/chart";
import Caption from "../../components/caption/caption";
import LineSeparator from "../../components/line-separator/line-separator";
import BubbleBlock from "../../@ui/buble-block/buble-block";
import InfoBuble from "../../@ui/info-buble/info-buble";
import Link from "../../@ui/link/link";
import "./main.scss";
import { useDataInitContext } from "../../context/data-init-context";
import { ArticleBarChartOptions, ArticleChartOption } from "../../@consts/article-chart-option";
import {
    AchievementBarChartOptions,
    AchievementChartOption,
} from "../../@consts/achievement-chart-option";
import { Routers } from "src/consts";
import { ArticleMiniTable } from "src/components/article-mini-table/article-mini-table";
import Slider from "src/components/slider/slider";

export default function MainPage() {
    const {
        achievements,
        articles,
        chartDataByArticles,
        barChartDataByArticles,
        chartDataByAchievements,
        barChartDataByAchievements,
    } = useDataInitContext();

    const allAmount = () => achievements().length + articles().length;

    return (
        <BaseLayout isContact>
            <div class="main-block">
                <Caption mainText="Академическое портфолио" />
                <LineSeparator title="общее" />
                <div class="grid">
                    <InfoBuble title={allAmount()} description="Общее количество показателей" />
                    <InfoBuble
                        title={articles().length}
                        description="Общее количество научных статей"
                    />
                    <InfoBuble
                        title={achievements().length}
                        description="Общее количество технических статей"
                    />
                    <InfoBuble
                        title={achievements().length}
                        description="Общее количество полученных дипломов"
                    />
                </div>
                <LineSeparator title="статьи" />
                <div class="articles">
                    <BubbleBlock>
                        <Caption mainText={`Количество\n индексируемых статей`} class="small" />
                        <MyChart
                            class="chart"
                            options={ArticleChartOption}
                            data={chartDataByArticles()}
                            type="doughnut"
                        />
                    </BubbleBlock>

                    <BubbleBlock class="double-col last-order">
                        <div class="table">
                            <div class="row">
                                <Caption
                                    mainText="Последние статьи"
                                    class="small"
                                    textAlign="start"
                                />
                                <Link title="подробнее" direction="rigth" href={Routers.Articles} />
                            </div>
                            <ArticleMiniTable articles={articles()} />
                        </div>
                    </BubbleBlock>

                    <BubbleBlock>
                        <Caption
                            mainText={`Количество статей\n по годам публикации`}
                            class="small"
                        />
                        <MyChart
                            class="chart"
                            options={ArticleBarChartOptions}
                            data={barChartDataByArticles()}
                            type="bar"
                        />
                    </BubbleBlock>
                </div>

                <LineSeparator title="дипломы" />
                <div class="articles">
                    <BubbleBlock>
                        <Caption mainText="Количество дипломов" class="small" />
                        <MyChart
                            class="chart"
                            options={AchievementChartOption}
                            data={chartDataByAchievements()}
                            type="doughnut"
                        />
                    </BubbleBlock>

                    <BubbleBlock class="double-col last-order">
                        <div class="carusel-inner">
                            <div class="row">
                                <Caption mainText="Дипломы" class="small" textAlign="start" />
                                <Link
                                    title="подробнее"
                                    direction="rigth"
                                    href={Routers.Achievements}
                                />
                            </div>
                            <Slider
                                sliders={achievements()}
                                autoPlayTime={5000}
                                autoPlay={true}
                                width={"100%"}
                                height={"100%"}
                            />
                        </div>
                    </BubbleBlock>

                    <BubbleBlock>
                        <Caption mainText={`Количество дипломов\n по годам`} class="small" />
                        <MyChart
                            class="chart"
                            options={AchievementBarChartOptions}
                            data={barChartDataByAchievements()}
                            type="bar"
                        />
                    </BubbleBlock>
                </div>
            </div>
        </BaseLayout>
    );
}
