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
        navigate(Routers.Article.replace(":id", `${props.article.id}`))
      }
    >
      <td>{props.article.id}</td>
      <td>{props.article.title}</td>
      <td>{props.article.body}</td>
    </tr>
  );
}
