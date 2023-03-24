export default function Form({ data, updateData, toggleEditMode }) {
    return (
        <form id="cv-edit-form" onSubmit={handleSubmit}>
            <div className="form-field">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={data.name} />
            </div>

            <div className="form-field">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" value={data.title} />
            </div>

            <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={data.email}
                />
            </div>

            <div className="form-field">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" value={data.phone} />
            </div>

            <div className="form-field">
                <label htmlFor="address">Address</label>
                <input
                    type="address"
                    id="address"
                    name="adress"
                    value={data.address}
                />
            </div>

            <div className="form-field">
                <button type="submit">Save</button>
            </div>
        </form>
    );
}

function handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit() called");
}
