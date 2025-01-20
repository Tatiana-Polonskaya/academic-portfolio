import { useParams } from "@solidjs/router";
import { Show } from "solid-js";
import BaseLayout from "src/layouts/base/base-layout";
import Caption from "src/components/caption/caption";
import { Routers } from "src/consts";
import Link from "@ui/link/link";
import LineSeparator from "src/components/line-separator/line-separator";
import Row from "src/components/row/row";
import BubbleBlock from "@ui/buble-block/buble-block";
import ListRows from "src/components/list-rows/list-rows";
import { useDataInitContext } from "src/context/data-init-context";
import Button from "@ui/button/button";
import { buttonTypeByTypeAchievement, buttonTypeByYear } from "@helpers/color-by-parametres";
import { AchievementsTitles } from "src/@types/type-achievements";

import "./achievement.scss";
import { convertStringToDate } from "src/@helpers/convertStringToDate";

export default function AchievementPage() {
    const params = useParams();
    const { getAchievementById } = useDataInitContext();

    const achievement = () => getAchievementById(params.id);
    const year = () => convertStringToDate(achievement().date).getFullYear().toString();

    return (
        <BaseLayout>
            <div class="single-achievement">
                <Link direction="left" href={Routers.Articles} title="назад" />
                <LineSeparator title="общая информация" />
                <Show when={achievement()}>
                    <BubbleBlock>
                        <div class="bubble row">
                            <div class="img-col">
                                <img src={achievement().img} class="img" />
                            </div>
                            <div class="list-col">
                                <Caption
                                    mainText={achievement().title}
                                    class="middle"
                                    padding="0 10px 20px 20px"
                                />
                                <ListRows>
                                    <Row description={`Название: ${achievement().title}`} />
                                    <Row description={`Уровень: ${achievement().level}`} />
                                    <Row description={`Результат: ${achievement().reward}`} />
                                    <Row description={`Дата: ${achievement().date}`} />
                                </ListRows>
                                <div class="button-group">
                                    <Button
                                        classButton={buttonTypeByTypeAchievement(
                                            achievement().type,
                                        )}
                                    >
                                        {AchievementsTitles[achievement().type]}
                                    </Button>
                                    <Button classButton={buttonTypeByYear(year())}>{year()}</Button>
                                </div>
                            </div>
                        </div>
                    </BubbleBlock>
                </Show>
                <Show when={achievement()?.event_link}>
                    <LineSeparator title="источник" />
                    <Row description={`Сайт мероприятия: ${achievement().event_link}`} />
                </Show>
            </div>
        </BaseLayout>
    );
}
