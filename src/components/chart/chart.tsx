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
    width?: string;
    height?: string;
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
            width: "auto",
            height: "auto",
        },
        _props,
    );
    onMount(() => {
        Chart.register(Title, Tooltip, Legend, Colors);
    });
    return (
        <div style={{ width: props.width, height: props.height }}>
            <DefaultChart type={props.type} data={props.data} options={props.options} />
        </div>
    );
};
export default MyChart;
