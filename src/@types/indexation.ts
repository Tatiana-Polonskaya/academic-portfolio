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
    [Indexation.Vak]: "ВАК",
    [Indexation.Rinc]: "РИНЦ",
    [Indexation.Other]: "Другое",
};
