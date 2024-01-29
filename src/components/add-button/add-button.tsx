type Props = {
  onClick: () => void;
};

const TITLE = "Добавить";

export default function AddButton(props: Props) {
  return (
    <button
      type="button"
      class="btn btn-success"
      onClick={() => props.onClick()}
    >
      <i class="bi bi-plus-lg" /> {TITLE}
    </button>
  );
}
