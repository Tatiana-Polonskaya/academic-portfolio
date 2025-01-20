import { mergeProps } from "solid-js";
import "./caption.scss";

type Props = {
    mainText: string;
    padding?: string;
    textAlign?: "start" | "center";
    class?: "large" | "middle" | "small";
};

export default function Caption(_props: Props) {
    const props = mergeProps(
        {
            padding: "",
            class: "large",
            textAlign: "center",
        },
        _props,
    );
    return (
        <h2
            class="my-caption"
            classList={{
                ["large-text"]: props.class === "large",
                ["middle-text"]: props.class === "middle",
                ["small-text"]: props.class === "small",
                ["align-start"]: props.textAlign === "start",
                ["align-center"]: props.textAlign === "center",
            }}
            style={{
                padding: props.padding,
            }}
        >
            {props.mainText}
        </h2>
    );
}
