import { A } from "@solidjs/router";

type Props = {
  link: string;
};

const TITLE = "Добавить";

export default function AddButton(props: Props) {
  return (
    <A class="btn btn-success" href={props.link}>
      <i class="bi bi-plus-lg" /> {TITLE}
    </A>
  );
}
