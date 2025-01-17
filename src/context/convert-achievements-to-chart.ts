import { convertStringToDate } from "src/@helpers/convertStringToDate";
import { Achievement } from "../@types/achievement";
import { AchievementsTitles } from "../@types/type-achievements";

export const generateDataChartFromAchievements = (achievements: Achievement[]) => {
    let amountTypeAchievements = new Array(Object.values(AchievementsTitles).length).fill(0);

    achievements.forEach((elem) => {
        amountTypeAchievements[elem.type] += 1;
    });

    return {
        labels: Object.values(AchievementsTitles),
        datasets: [
            {
                label: "Количество",
                data: amountTypeAchievements,
                backgroundColor: ["#E5FF7C", "#7CFFD8", "#FF7C7C"],
            },
        ],
    };
};

export const generateDataBarChartFromAchievements = (achievements: Achievement[]) => {
    const uniqueYears: { [key: string]: number } = {};

    achievements.forEach((achievement) => {
        const year = convertStringToDate(achievement.date).getFullYear();
        if (year in uniqueYears) {
            uniqueYears[year] += 1;
        } else {
            uniqueYears[year] = 1;
        }
    });
    return {
        labels: Object.keys(uniqueYears),
        datasets: [
            {
                categoryPercentage: 1,
                barPercentage: 0.8,
                label: "Количество",
                data: Object.values(uniqueYears),
                backgroundColor: ["#7CFFD8", "#E5FF7C", "#BE7CFF", "#FF7C7C"],
                borderRadius: 10,
                borderSkipped: false,
            },
            // {
            //     categoryPercentage: 1,
            //     barPercentage: 0.8,
            //     label: "Качество",
            //     data: [1, 2, 10, 6, 2],
            //     backgroundColor: ["#FF7C7C", "#7CFFD8", "#BE7CFF", "#E5FF7C"],
            //     borderRadius: 10,
            //     borderSkipped: false,
            // },
        ],
    };
};
