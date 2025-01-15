import "./style.scss";
import { For, useContext } from "solid-js";
import { SliderContext } from "../slider";
import Slide from "../slide/slide";

export default function SlidesList() {
    const { slideNumber, items } = useContext(SliderContext);

    return (
        <div class="slide-list" style={{ transform: `translateX(-${slideNumber() * 100}%)` }}>
            <For each={items()}>{(slide) => <Slide title={slide.title} img={slide.img} />}</For>
        </div>
    );
}
