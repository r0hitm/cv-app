export default function Form({ data, updateData, toggleEditMode }) {
    return (
        <div className="form" onSubmit={updateData}>
            {/* <h1>Personal Information</h1> */}
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={data.name} />

                <label htmlFor="title">Title</label>
                <input type="text" id="title" value={data.title} />

                <label htmlFor="email">Email</label>
                <input type="text" id="email" value={data.email} />

                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" value={data.phone} />

                <label htmlFor="address">Address</label>
                <input type="text" id="address" value={data.address} />

                <button type="submit" onClick={toggleEditMode}> {/* TODO */}
                    "Save"
                </button>
            </form>
        </div>
    );
}