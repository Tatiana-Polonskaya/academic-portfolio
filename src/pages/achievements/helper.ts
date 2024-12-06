import { Achievement } from "../../@types/achievement";

export const hasAchievementText = (achievement: Achievement, text: string) => {
    return Object.values(achievement).join("").includes(text);
};
