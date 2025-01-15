import { mergeProps } from "solid-js";
import "./caption.scss";

type Props = {
    mainText: string;
    fontSize?: string;
    fontWeigth?: string;
    padding?: string;
    textAlign?: "start" | "center";
};

export default function Caption(_props: Props) {
    const props = mergeProps(
        {
            fontSize: "36px",
            fontWeigth: "700",
            textAlign: "start",
            padding: "",
        },
        _props,
    );
    return (
        <h2
            class="my-caption"
            style={{
                "font-size": props.fontSize,
                "font-weight": props.fontWeigth,
                "text-align": props.textAlign,
                padding: props.padding,
            }}
        >
            {props.mainText}
        </h2>
    );
}
