import { useNavigate } from "@solidjs/router";
import { Routers } from "../../consts";
import { Article } from "../../@types/article";
import "./row.scss";
import Button from "../../@ui/button/button";
import { buttonTypeByIndexation, buttonTypeByYear } from "../../@helpers/color-by-parametres";

type Props = {
    id: number;
    article: Article;
};

export default function Row(props: Props) {
    const navigate = useNavigate();
    return (
        <div
            class="my-row"
            onClick={() => navigate(Routers.Article.replace(":id", `${props.article.index}`))}
        >
            <div class="text index-part">{props.id}.</div>
            <div class="main-part">
                <div class="text decription-part">
                    {props.article.title} // {props.article.authors}
                </div>
                <div class="button-part">
                    <Button
                        type={buttonTypeByYear(props.article.year)}
                        onClick={() => console.log("click")}
                    >
                        <>{props.article.year}</>
                    </Button>
                    <Button
                        type={buttonTypeByIndexation(props.article.indexation)}
                        onClick={() => console.log("click")}
                    >
                        <>
                            {props.article.indexation === 0
                                ? "Другое"
                                : props.article.indexation === 1
                                  ? "РИНЦ"
                                  : "ВАК"}
                        </>
                    </Button>
                </div>
            </div>
        </div>
    );
}
