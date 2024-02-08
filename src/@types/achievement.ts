export type Achievement = {
    index: string;
    date: string;
    title: string;
    reward: string;
    level: string;
    diploma_link: string;
    event_link: string;
    img: string;
};

export type FormAchievement = Omit<Achievement, "index">;
