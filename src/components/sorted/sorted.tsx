import { For, mergeProps } from "solid-js";
export type SortedItem = {
  id: number;
  title: string;
  onClick: () => void;
};

type Props = {
  sortedItems?: SortedItem[];
};

const defaultProps: SortedItem[] = [
  {
    id: 0,
    title: "Сначала новые",
    onClick: () => {
      console.log("Сначала новые");
    },
  },
  {
    id: 1,
    title: "Сначала поздние",
    onClick: () => {
      console.log("Сначала поздние");
    },
  },
];

/**
 * Элемент для отображения пунктов сортировки
 * @props массив пунктов
 * @returns элемент
 */
export default function Sorted(props: Props) {
  const propsWithDefault = mergeProps(defaultProps, props);
  return (
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i class="bi bi-arrow-down-up" />
      </button>
      <ul class="dropdown-menu">
        <For each={propsWithDefault}>
          {(item) => (
            <li>
              <a class="dropdown-item" onClick={item.onClick}>
                {item.title}
              </a>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
}
