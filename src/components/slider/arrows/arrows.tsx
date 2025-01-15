import { useContext } from "solid-js";

import "./styles.scss";
import { SliderContext } from "../slider";

export default function Arrows() {
    const { changeSlide } = useContext(SliderContext);

    return (
        <div class="arrows">
            <div class="arrow left" onClick={() => changeSlide(-1)} />
            <div class="arrow right" onClick={() => changeSlide(1)} />
        </div>
    );
}
