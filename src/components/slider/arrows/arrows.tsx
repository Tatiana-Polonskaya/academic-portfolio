import { useContext } from "solid-js";

import "./styles.scss";
import { SliderContext } from "../slider";

export default function Arrows() {
    const { changeSlide } = useContext(SliderContext);

    return (
        <div class="arrows">
            <div>
                <i class="bi bi-caret-left-fill arrow left" onClick={() => changeSlide(-1)} />
            </div>
            <div>
                <i class="bi bi-caret-right-fill arrow right" onClick={() => changeSlide(1)} />
            </div>
        </div>
    );
}
