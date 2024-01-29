export default function Search() {
  return (
    <form class="d-flex flex-fill" role="search">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Поиск"
        aria-label="Поиск"
      />
      <button class="btn btn-outline-success" type="submit">
        Поиск
      </button>
    </form>
  );
}
