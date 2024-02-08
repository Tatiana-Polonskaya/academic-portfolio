type Props = {
    onClick: () => void;
};

export default function Filter(_props: Props) {
    return (
        <button class="btn btn-secondary" type="button" onClick={_props.onClick}>
            <i class="bi bi-funnel" />
        </button>
    );
}
