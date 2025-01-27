import { createContext, createEffect, createSignal, on } from "solid-js";
import "./slider.scss";
import Arrows from "./arrows/arrows";
import SlidesList from "./slides-list/slides-list";
import { Achievement } from "src/@types/achievement";

type Props = {
    sliders: Achievement[];
    width: string;
    height: string;
    autoPlay: boolean;
    autoPlayTime: number;
};

type TContext = {
    // goToSlide: (number: number) => void;
    changeSlide: (number: number) => void;
    slideNumber: () => number;
    items: () => Achievement[];
};

export const SliderContext = createContext<TContext>();

export default function Slider(props: Props) {
    const [items, setItems] = createSignal([]);
    const [slide, setSlide] = createSignal(0);

    const [touchPosition, setTouchPosition] = createSignal(null);

    createEffect(() => {
        setItems(props.sliders);
    });

    const changeSlide = (direction = 1) => {
        let slideNumber = 0;

        if (slide() + direction < 0) {
            slideNumber = items().length - 1;
        } else {
            slideNumber = (slide() + direction) % items().length;
        }
        setSlide(slideNumber);
    };

    // const goToSlide = (number) => {
    //     setSlide(number % items().length);
    // };

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX;

        setTouchPosition(touchDown);
    };

    const handleTouchMove = (e) => {
        if (touchPosition === null) {
            return;
        }

        const currentPosition = e.touches[0].clientX;
        const direction = touchPosition() - currentPosition;

        if (direction > 10) {
            changeSlide(1);
        }

        if (direction < -10) {
            changeSlide(-1);
        }

        setTouchPosition(null);
    };

    createEffect(
        on(
            () => [items.length, slide],
            () => {
                if (!props.autoPlay) return;

                const interval = setInterval(() => {
                    changeSlide(1);
                }, props.autoPlayTime);

                return () => {
                    clearInterval(interval);
                };
            },
        ),
    );

    return (
        <div class="slider" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
            <SliderContext.Provider
                value={{
                    changeSlide,
                    slideNumber: slide,
                    items,
                }}
            >
                <Arrows />
                <SlidesList />
            </SliderContext.Provider>
        </div>
    );
}
