import { Article } from "./article";

export enum SortedType {
    None,
    Abs,
    Desc,
}

export const changeSortType = (prev: SortedType) => {
    switch (prev) {
        case SortedType.Abs: {
            return SortedType.Desc;
        }
        case SortedType.Desc: {
            return SortedType.None;
        }
        case SortedType.None: {
            return SortedType.Abs;
        }
    }
};

export const getSortFunctionByType = (type: SortedType) => {
    switch (type) {
        case SortedType.Abs: {
            return (a: Article, b: Article) => {
                return a.title.toLocaleLowerCase() > b.title.toLocaleLowerCase() ? 1 : -1;
            };
        }
        case SortedType.Desc: {
            return (a: Article, b: Article) => {
                return a.title.toLocaleLowerCase() < b.title.toLocaleLowerCase() ? 1 : -1;
            };
        }
    }
};
