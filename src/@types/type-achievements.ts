export type TTypeAchievements = {
    id: number;
    title: string;
};

export enum Achievements {
    Olimpic,
    Hacaton,
    Kon,
}

export const AchievementsTitles = {
    [Achievements.Olimpic]: "Олимпиада",
    [Achievements.Hacaton]: "Хакатон",
    [Achievements.Kon]: "Конкурс",
};
