import { useNavigate } from "@solidjs/router";
import { Article, Routers } from "../../consts";

type Props = {
  article: Article;
};

export default function Row(props: Props) {
  const navigate = useNavigate();
  return (
    <tr
      class="g-2"
      style={{ cursor: "pointer" }}
      onClick={() =>
        navigate(Routers.Article.replace(":id", `${props.article.index}`))
      }
    >
      <td>{props.article.index}</td>
      <td>{props.article.title}</td>
      <td>{props.article.conference}</td>
    </tr>
  );
}
