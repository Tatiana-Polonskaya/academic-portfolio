const pattern = /(\d{2})\.(\d{2})\.(\d{4})/;

/**
 * Функция преобразования строки формата 30.10.2000 в тип Date
 * @param str - строка 30.10.2000
 * @returns new Date
 */
export const convertStringToDate = (str: string) => {
    return new Date(str.replace(pattern, "$3-$2-$1"));
};
