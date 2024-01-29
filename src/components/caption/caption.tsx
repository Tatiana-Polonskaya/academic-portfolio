import { Show } from "solid-js";

type Props = {
  mainText: string;
  extraText?: string;
};

export default function Caption(props: Props) {
  return (
    <h2 class="display-6 mt-2">
      {props.mainText}{" "}
      <Show when={props.extraText}>
        <small class="text-body-secondary">{props.extraText}</small>
      </Show>
    </h2>
  );
}
