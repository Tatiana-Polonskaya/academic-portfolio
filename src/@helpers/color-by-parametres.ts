import { ARTICLE_STATUS } from "../@hooks/use-form";
import { ButtonType } from "../@ui/button/button";

export function buttonTypeByYear(year: string) {
    switch (year) {
        case "2020":
            return ButtonType.Green;
        case "2021":
            return ButtonType.Red;
        case "2022":
            return ButtonType.Yellow;
        case "2023":
            return ButtonType.Cyan;
        default:
            return ButtonType.Default;
    }
}

//заменить на бек
export function buttonTypeByIndexation(indexation: number) {
    switch (indexation) {
        case 0:
            return ButtonType.Yellow;
        case 1:
            return ButtonType.Cyan;
        case 2:
            return ButtonType.Red;
        default:
            return ButtonType.Default;
    }
}

export function buttonTypeByArticleStatus(status: ARTICLE_STATUS) {
    switch (status) {
        case 0:
            return ButtonType.Yellow;
        case 1:
            return ButtonType.Green;
        default:
            return ButtonType.Cyan;
    }
}
