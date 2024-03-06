import { Show } from "solid-js";
import "./link.scss";
import { A } from "@solidjs/router";

type Props = {
    title: string;
    href: string;
    direction: "rigth" | "left";
};

export default function Link(props: Props) {
    return (
        <A class="my-link" href={props.href}>
            <Show when={props.direction === "left"}>
                <i class="bi bi-arrow-right" />
            </Show>
            <span class="title">{props.title}</span>

            <Show when={props.direction === "rigth"}>
                <i class="bi bi-arrow-right" />
            </Show>
        </A>
    );
}
