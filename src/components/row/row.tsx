import { useNavigate } from "@solidjs/router";
import { Article, Routers } from "../../consts";
import { STATUS_ARTICLE } from "../../hooks/use-form";

type Props = {
  id: number;
  article: Article;
};

export default function Row(props: Props) {
  const navigate = useNavigate();
  return (
    <tr
      class="g-2"
      style={{ cursor: "pointer" }}
      classList={{
        "table-warning": props.article.status === STATUS_ARTICLE.NOT_PUBLISHED,
      }}
      onClick={() =>
        navigate(Routers.Article.replace(":id", `${props.article.index}`))
      }
    >
      <td>{props.id}</td>
      <td>{props.article.title}</td>
      <td>{props.article.conference}</td>
      <td>{props.article.year}</td>
    </tr>
  );
}
