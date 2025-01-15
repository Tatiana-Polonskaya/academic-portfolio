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
import { AchievementChartOption } from "../../@consts/achievement-chart-option";
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
    } = useDataInitContext();

    const allAmount = () => achievements().length + articles().length;

    return (
        <BaseLayout isContact>
            <div class="main-block">
                <Caption mainText="Академическое портфолио" padding="30px 0 0 0" />
                <LineSeparator title="общее" />
                <div class="row">
                    <InfoBuble
                        title={allAmount()}
                        description="Общее количество показателей"
                        class="flex-grow"
                    />
                    <InfoBuble
                        title={articles().length}
                        description="Общее количество научных статей"
                        class="flex-grow"
                    />
                    <InfoBuble
                        title={achievements().length}
                        description="Общее количество технических статей"
                        class="flex-grow"
                    />
                    <InfoBuble
                        title={achievements().length}
                        description="Общее количество полученных дипломов"
                        class="flex-grow"
                    />
                </div>
                <LineSeparator title="статьи" />
                <div class="grid">
                    <BubbleBlock>
                        <div class="chart-inner">
                            <Caption
                                mainText={`Количество\n индексируемых статей`}
                                fontSize="18px"
                                fontWeigth="600"
                                textAlign="center"
                            />
                            <MyChart
                                width={"320px"}
                                height={"auto"}
                                options={ArticleChartOption}
                                data={chartDataByArticles()}
                                type="doughnut"
                            />
                        </div>
                    </BubbleBlock>

                    <BubbleBlock>
                        <div class="chart-inner table">
                            <div class="row">
                                <Caption
                                    mainText="Последние статьи"
                                    fontSize="18px"
                                    fontWeigth="600"
                                />
                                <Link title="подробнее" direction="rigth" href={Routers.Articles} />
                            </div>
                            <ArticleMiniTable articles={articles()} />
                        </div>
                    </BubbleBlock>

                    <BubbleBlock>
                        <div class="chart-inner">
                            <Caption
                                mainText={`Количество статей\n по годам публикации`}
                                fontSize="18px"
                                fontWeigth="600"
                                textAlign="center"
                            />
                            <MyChart
                                width="320px"
                                options={ArticleBarChartOptions}
                                data={barChartDataByArticles()}
                                type="bar"
                            />
                        </div>
                    </BubbleBlock>
                </div>

                <LineSeparator title="дипломы" />
                <div class="row">
                    <BubbleBlock>
                        <div class="chart-inner">
                            <Caption
                                mainText="Количество дипломов"
                                fontSize="18px"
                                fontWeigth="600"
                                textAlign="center"
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

                    <BubbleBlock>
                        <div class="carusel-inner">
                            <div class="row space-between">
                                <Caption mainText="Дипломы" fontSize="18px" fontWeigth="600" />
                                <Link
                                    title="подробнее"
                                    direction="rigth"
                                    href={Routers.Achievements}
                                />
                            </div>
                            <Slider
                                sliders={achievements()}
                                autoPlay={true}
                                autoPlayTime={5000}
                                width={"100%"}
                                height={"100%"}
                            />
                        </div>
                    </BubbleBlock>
                </div>
            </div>
        </BaseLayout>
    );
}
