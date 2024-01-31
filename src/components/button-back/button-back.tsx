import { useNavigate } from "@solidjs/router";
import { Show } from "solid-js";

type Props = {
  title?: string;
};

export default function ButtonBack(props: Props) {
  const navigate = useNavigate();
  return (
    <div class="d-flex mt-2 justify-content-md-start ">
      <p
        onClick={() => navigate(-1)}
        class="btn link-secondary link-offset-2  link-underline-secondary link-underline-opacity-100-hover"
      >
        <i class="bi bi-arrow-left" />{" "}
        <Show when={props.title} fallback={"Назад"}>
          {props.title}
        </Show>
      </p>
    </div>
  );
}
