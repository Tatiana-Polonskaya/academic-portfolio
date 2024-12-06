
import { For, ParentProps, Show } from "solid-js";
import "./row.scss";
import { ButtonType } from "../../@ui/button/type";

export type ButtonRow = {
    title: string;
    onClick: () => void;
    type: ButtonType;
};

export type TRowProps = {
    id?: number;
    description: string;
    onDblClick?: () => void;
    isHover?: boolean;
};

export default function Row(props: ParentProps<TRowProps>) {
    return (
        <div
            class="my-row"
            classList={{ "my-row-hovering": props.isHover }}
            onDblClick={() => props.onDblClick?.()}
        >
            <Show when={typeof props.id === "number"}>
                <div class="text index-part">{props.id}.</div>
            </Show>
            <div class="main-part">
                <div class="text decription-part">{props.description}</div>
                <div class="button-part">
                    <Show when={props.children}>{props.children}</Show>
                </div>
            </div>
        </div>
    );
}
