import { ARTICLE_STATUS } from "../@hooks/use-form";

const rusTitleForArticleStatus = {
    [ARTICLE_STATUS.PUBLISHED]: "опубликована",
    [ARTICLE_STATUS.NOT_PUBLISHED]: "принята к публикации",
};

export function convertStatusArticle(status: ARTICLE_STATUS) {
    return rusTitleForArticleStatus[status];
}
