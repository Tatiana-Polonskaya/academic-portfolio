import { mergeProps } from "solid-js";
import "./caption.scss";

type Props = {
    mainText: string;
    fontSize?: string;
    fontWeigth?: string;
    padding?: string;
};

export default function Caption(_props: Props) {
    const props = mergeProps(
        {
            fontSize: "36px",
            fontWeigth: "700",
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
                padding: props.padding,
            }}
        >
            {props.mainText}
        </h2>
    );
}
