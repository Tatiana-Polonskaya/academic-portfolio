import { Article } from "../@types/article";

export enum TypeBiblio {
    Book,
    ArticleFromCollection,
    ArticleFromMagazine,
}

//TODO: добавить создание бибило записи для всех типов источников
// пока только статьи из сборника
export function createBiblioRecord(type: TypeBiblio, article: Article) {
    if (type === TypeBiblio.ArticleFromCollection) {
        return `${article.title} / ${article.authors} // ${article.conference}. U+002d ${article.year}. U+002d № 5(139). U+002d С. 24-29.`;
    }
    return "";
}
