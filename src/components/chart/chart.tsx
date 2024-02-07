import { onMount } from "solid-js";
import { Chart, Title, Tooltip, Legend, Colors } from "chart.js";
import {  Pie } from "solid-chartjs";

const MyChart = () => {
    /**
     * You must register optional elements before using the chart,
     * otherwise you will have the most primitive UI
     */
    onMount(() => {
        Chart.register(Title, Tooltip, Legend, Colors);
    });

    const chartData = {
        labels: ["Хакатоны", "Олимпиады", "Конференции"],
        datasets: [
            {
                label: "Количество",
                data: [50, 60, 70],
            }
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
    };

    return <Pie data={chartData} options={chartOptions} width={500} height={500} />;
};

export default MyChart;
