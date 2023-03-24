import { useState } from "react";

import "./App.css";
import Form from "./components/Form.js";

const dummyData = {
    name: "John Doe",
    title: "Software Engineer",
    email: "example@email.com",
    phone: "123-456-7890",
    address: "123 Main St, Anytown, USA 12345",
    // Add more fields later: experience, education, projects
    skills: "JavaScript, React, Node, Express, MongoDB",
};

function App() {
    const [data, setData] = useState(dummyData);
    const [editMode, setEditMode] = useState(false);

    /**
     * Update CV data
     */
    function updateData(newData) {
        const oldData = data;
        setData(newData);
        console.log("updateData() called", { oldData, newData });
    }

    /**
     * Edit mode toggle
     * @param {void}
     * @returns {void}
     */
    function toggleEditMode() {
        const oldEditMode = editMode;
        const newEditMode = !editMode;
        setEditMode(newEditMode);
        console.log(
            "toggleEditMode() called and editMode is now: ",
            newEditMode
        );
        console.log("oldEditMode was: ", oldEditMode);
    }

    if (editMode) {
        return (
            <div className="App">
                <Form
                    data={data}
                    updateData={updateData}
                    editMode={editMode}
                    toggleEditMode={toggleEditMode}
                />
            </div>
        );
    } else {
        return (
            <div className="App">
                <div className="cv-view">
                    <section className="cv-section">
                        <h1>{data.name}</h1>
                        <h2>{data.title}</h2>
                    </section>

                    <section className="cv-section">
                        <address>{data.address}</address>
                        <a className="email" href={`mailto:${data.email}`}>
                            {data.email}
                        </a>
                        <a className="phone" href={`tel:${data.phone}`}>
                            {data.phone}
                        </a>
                    </section>

                    <section className="cv-section">
                        <h3>Experience</h3>
                        <p>TODO</p>
                    </section>

                    <section className="cv-section">
                        <h3>Education</h3>
                        <p>TODO</p>
                    </section>

                    <section className="cv-section">
                        <h3>Projects</h3>
                        <p>TODO</p>
                    </section>

                    <section className="cv-section">
                        <h3>Skills</h3>
                        <p>{data.skills}</p>
                    </section>

                    <button onClick={toggleEditMode}>Edit</button>
                </div>
            </div>
        );
    }
}

export default App;
