export default function ProjectOverlay({onAdd}) {
    function handleSubmit() {
        const form = document.getElementById("project-form");
        const data = {
            title: form.title.value,
            description: form.description.value,
            url: form.url.value,
        };
        form.reset();
        onAdd(data);
    }

    return (
        <form className="list-form" id="project-form">
            <div className="form-field">
                <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    autoFocus
                />
            </div>
            <div className="form-field">
                <textarea
                    placeholder="Description"
                    name="description"
                />
            </div>
            <div className="form-field">
                <input
                    type="text"
                    placeholder="URL"
                    name="url"
                />
            </div>
            <button type="button" onClick={handleSubmit}>Add</button>
        </form>
    );
}