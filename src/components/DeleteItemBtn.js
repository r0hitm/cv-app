export default function DeleteItemBtn({ index, onDelete }) {
    return (
        <button className="delete-btn" onClick={_ => onDelete(index)}>
            Delete
        </button>
    );
}
