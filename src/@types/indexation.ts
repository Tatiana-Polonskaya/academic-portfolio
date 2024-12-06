export type TIndexation = {
    id: number;
    title: string;
};

export enum Indexation {
    Other,
    Rinc,
    Vak,
}

export const IndexationTitles = {
    [Indexation.Other]: "Другое",
    [Indexation.Rinc]: "РИНЦ",
    [Indexation.Vak]: "ВАК",
};
