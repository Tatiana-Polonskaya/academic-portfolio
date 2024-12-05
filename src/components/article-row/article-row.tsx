import { useNavigate } from "@solidjs/router";
import { Article } from "../../@types/article";
import { Routers } from "../../consts";
import Row from "../row/row";
import { buttonTypeByIndexation, buttonTypeByYear } from "../../@helpers/color-by-parametres";
import { IndexationTitles } from "../../@types/indexation";
import Button from "../../@ui/button/button";

type Props = {
    id: number;
    article: Article;
    onLableClick: (year: string) => void;
};

export const ArticleRow = (props: Props) => {
    const navigate = useNavigate();

    return (
        <Row
            id={props.id}
            description={`${props.article.title} // ${props.article.authors}`}
            onDblClick={() => navigate(Routers.Article.replace(":id", `${props.article.index}`))}
            isHover
        >
            <Button
                type={buttonTypeByYear(props.article.year)}
                onClick={() => props.onLableClick(props.article.year)}
            >
                {props.article.year}
            </Button>
            <Button
                type={buttonTypeByIndexation(props.article.indexation)}
                onClick={() => props.onLableClick(IndexationTitles[props.article.indexation])}
            >
                {IndexationTitles[props.article.indexation]}
            </Button>
        </Row>
    );
};
