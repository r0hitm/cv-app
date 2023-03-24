export default function Form({ data, updateData, toggleEditMode }) {
    function handleSubmit(event) {
        event.preventDefault();
        // get the form data and create an object to be used by updateData
        const formData = new FormData(event.target);
        const newData = {};
        for (let [key, value] of formData.entries()) {
            newData[key] = value;
        }
        // const oldData = data;
        updateData(newData);
        toggleEditMode();
        console.log("handleSubmit() called", {data, newData});
    }

    return (
        <form id="cv-edit-form" onSubmit={handleSubmit}>
            <div className="form-field">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" defaultValue={data.name} />
            </div>

            <div className="form-field">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" defaultValue={data.title} />
            </div>

            <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    defaultValue={data.email}
                />
            </div>

            <div className="form-field">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" defaultValue={data.phone} />
            </div>

            <div className="form-field">
                <label htmlFor="address">Address</label>
                <input
                    type="address"
                    id="address"
                    name="adress"
                    defaultValue={data.address}
                />
            </div>

            <div className="form-field">
                <button type="submit">Save</button>
            </div>
        </form>
    );
}
