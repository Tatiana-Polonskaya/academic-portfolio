import Button, { ButtonType } from "../../@ui/button/button";

import { For, Show } from "solid-js";
import "./row.scss";

export type ButtonRow = {
    title: string;
    onClick: () => void;
    type: ButtonType;
};

type Props = {
    id?: number;
    description: string;
    onClick: () => void;
    hasButtons?: boolean;
    buttons?: ButtonRow[];
    isHover?: boolean;
};

export default function Row(props: Props) {
    return (
        <div
            class="my-row"
            classList={{ "my-row-hovering": props.isHover }}
            onClick={() => props.onClick()}
        >
            <Show when={typeof props.id === "number"}>
                <div class="text index-part">{props.id}.</div>
            </Show>
            <div class="main-part">
                <div class="text decription-part">{props.description}</div>
                <div class="button-part">
                    <Show when={props.hasButtons}>
                        <For each={props.buttons}>
                            {(elem) => (
                                <Button type={elem.type} onClick={elem.onClick}>
                                    {elem.title}
                                </Button>
                            )}
                        </For>
                    </Show>
                </div>
            </div>
        </div>
    );
}
