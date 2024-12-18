import { useNavigate } from "@solidjs/router";
import { Routers } from "../../consts";
import Row from "../row/row";
import { buttonTypeByTypeAchievement, buttonTypeByYear } from "../../@helpers/color-by-parametres";
import Button from "../../@ui/button/button";
import { Achievement } from "../../@types/achievement";
import { AchievementsTitles } from "../../@types/type-achievements";

type Props = {
    id: number;
    achievement: Achievement;
    onLableClick: (year: string) => void;
};

export const AchievementRow = (props: Props) => {
    const navigate = useNavigate();

    const year = new Date(props.achievement.date).getFullYear().toString();

    return (
        <Row
            id={props.id}
            description={props.achievement.title}
            onDblClick={() => navigate(Routers.Achievement.replace(":id", props.achievement.index))}
            isHover
        >
            <Button classButton={buttonTypeByYear(year)} onClick={() => props.onLableClick(year)}>
                {year}
            </Button>
            <Button
                classButton={buttonTypeByTypeAchievement(props.achievement.type)}
                onClick={() => props.onLableClick(AchievementsTitles[props.achievement.type])}
            >
                {AchievementsTitles[props.achievement.type]}
            </Button>
        </Row>
    );
};
