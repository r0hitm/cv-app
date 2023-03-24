export default function EditToggleBtn({ editMode, toggleEditMode }) {
    return (
        <button className="toggleEdit" onClick={toggleEditMode}>
            {editMode ? "Read-Only Mode" : "Edit Mode"}
        </button>
    );
}
