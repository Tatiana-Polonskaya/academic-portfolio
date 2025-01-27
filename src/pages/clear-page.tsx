import BaseLayout from "src/layouts/base/base-layout";
import BubbleBlock from "src/@ui/buble-block/buble-block";
import Caption from "src/components/caption/caption";
import MyChart from "src/components/chart/chart";
import { useDataInitContext } from "src/context/data-init-context";
import { ArticleBarChartOptions, ArticleChartOption } from "src/@consts/article-chart-option";

import "./clear.scss";

export default function ClearPage() {
    const { chartDataByArticles, barChartDataByArticles } = useDataInitContext();

    return (
        <BaseLayout isContact>
            <div class="main-block">
                <BubbleBlock>
                    <Caption mainText={`Количество\n индексируемых статей`} class="small" />
                    <div class="chart-inner">
                        <MyChart
                            class="chart"
                            options={ArticleChartOption}
                            data={chartDataByArticles()}
                            type="doughnut"
                        />
                    </div>
                </BubbleBlock>

                {/* <BubbleBlock>
                    <div class="chart-inner">
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
                    </div>
                </BubbleBlock> */}
            </div>
        </BaseLayout>
    );
}
