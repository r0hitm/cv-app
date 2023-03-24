export default function ProjectForm({ onAdd }) {
    function handleSubmit() {
        const form = document.getElementById("project-form");
        const data = {
            title: form.title.value,
            description: form.description.value,
            url: form.url.value,
        };
        if (data.title === "") {
            alert("Please at least fill in the title field.");
            return;
        }
        form.reset();
        onAdd(data);
    }

    return (
        <form className="list-form" id="project-form">
            <div className="form-field">
                <input type="text" placeholder="Title" name="title" />
            </div>
            <div className="form-field">
                <textarea placeholder="Description" name="description" />
            </div>
            <div className="form-field">
                <input type="text" placeholder="URL" name="url" />
            </div>
            <button type="button" onClick={handleSubmit}>
                Add
            </button>
        </form>
    );
}
