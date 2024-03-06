import { ARTICLE_STATUS } from "../@hooks/use-form";



const rusTitleForArticleStatus = {
    [ARTICLE_STATUS.PUBLISHED]: "Опубликована",
    [ARTICLE_STATUS.NOT_PUBLISHED]: "Принята к публикации",
};

export function convertStatusArticle(status: ARTICLE_STATUS) {
    return rusTitleForArticleStatus[status];
}
