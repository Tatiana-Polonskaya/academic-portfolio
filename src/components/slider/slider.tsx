import { Slider, SliderButton, SliderProvider, createSlider } from "solid-slider";
import "./slider.scss";
import autoplay from "solid-slider/plugins/autoplay";
import { createSignal } from "solid-js";

export default function MySlider() {
    const [slider, { current, next, prev, moveTo }] = createSlider();
    slider;
    return (
        <>
            <div use:slider class="flex">
                <div class="slide slide1">1</div>
                <div class="slide slide2">2</div>
                <div class="slide slide3">3</div>
                <div class="slide slide4">4</div>
                <div class="slide slide5">5</div>
                <div class="slide slide6">6</div>
            </div>
            <br />
            <div style={{ "text-align": "center" }}>
                Current Slide: {current() + 1}
                <br />
                <button onClick={prev}>Prev</button>
                <select onChange={(evt) => moveTo(parseInt(evt.currentTarget.value) - 1)}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                <button onClick={next}>Next</button>
            </div>
        </>
    );
}
