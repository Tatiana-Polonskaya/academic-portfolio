import { mergeProps, onMount } from "solid-js";
import {
    Chart,
    Title,
    Tooltip,
    Legend,
    Colors,
    ChartData,
    ChartOptions,
    ChartTypeRegistry,
} from "chart.js";
import { DefaultChart } from "solid-chartjs";

type Props = {
    data: ChartData;
    options?: ChartOptions;
    type?: keyof ChartTypeRegistry;
    class?: string;
};

const MyChart = (_props: Props) => {
    const props = mergeProps(
        {
            data: [],
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
            },
            type: "line",
            class: "",
        },
        _props,
    );
    onMount(() => {
        Chart.register(Title, Tooltip, Legend, Colors);
    });
    return (
        <div class={props.class}>
            <DefaultChart type={props.type} data={props.data} options={props.options} />
        </div>
    );
};
export default MyChart;
