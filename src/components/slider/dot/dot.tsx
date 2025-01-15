import { useContext } from "solid-js";

import "./style.scss";
import { SliderContext } from "../slider";

type Props = {
    number: number;
};

export default function Dot(props: Props) {
    const { goToSlide, slideNumber } = useContext(SliderContext);

    return (
        <div
            class={`dot ${slideNumber() === props.number ? "selected" : ""}`}
            onClick={() => goToSlide(props.number)}
        />
    );
}
