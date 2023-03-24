export default function EducationForm({ onAdd }) {
    function handleSubmit() {
        const form = document.getElementById("education-form");
        const data = {
            school: form.school.value,
            degree: form.degree.value,
            startDate: form.startDate.value,
            endDate: form.endDate.value,
        };
        if (data.school === "" || data.degree === "") {
            alert("Please at least fill in the school and degree fields.");
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
        <form className="list-form" id="education-form">
            <div className="form-field">
                <input
                    type="text"
                    placeholder="School"
                    name="school"
                />
            </div>
            <div className="form-field">
                <input type="text" placeholder="Degree" name="degree" />
            </div>
            <div className="form-field">
                <label htmlFor="startDate">Start Date</label>
                <input type="date" id="startDate" name="startDate" />
            </div>
            <div className="form-field">
                <label htmlFor="endDate">End Date</label>
                <input type="date" id="endDate" name="endDate" />
            </div>
            <button type="button" onClick={handleSubmit}>
                Add
            </button>
        </form>
    );
}
