export default function ExperienceForm({ onAdd }) {
    function handleSubmit() {
        const form = document.getElementById("experience-form");
        const data = {
            company: form.company.value,
            title: form.title.value,
            startDate: form.startDate.value,
            endDate: form.endDate.value,
            description: form.description.value,
        };
        if (
            data.company === "" ||
            data.title === "" ||
            data.startDate === "" ||
            data.endDate === ""
        ) {
            alert("All fields except description are required.");
            return;
        }
        if (data.startDate > data.endDate) {
            alert("Please correct the date range.");
            return;
        }
        form.reset();
        onAdd(data);
    }

    return (
        <form className="list-form" id="experience-form">
            <div className="form-field">
                <input
                    type="text"
                    placeholder="Company"
                    name="company"
                    autoFocus
                />
            </div>
            <div className="form-field">
                <input type="text" placeholder="Title" name="title" />
            </div>
            <div className="form-field">
                <label htmlFor="startDate">Start Date</label>
                <input type="date" id="startDate" name="startDate" />
            </div>
            <div className="form-field">
                <label htmlFor="endDate">End Date</label>
                <input type="date" id="endDate" name="endDate" />
            </div>
            <div className="form-field">
                <textarea placeholder="Description" name="description" />
            </div>
            <button type="button" onClick={handleSubmit}>
                Add
            </button>
        </form>
    );
}
