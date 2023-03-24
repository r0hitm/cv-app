import { useState } from "react";

import "./App.css";
import Form from "./components/Form.js";
import Experience from "./components/Experience.js";
import Education from "./components/Education.js";
import Project from "./components/Projects.js";

import ExperienceFactory from "./js/ExperienceFactory.js";  // Factory function for Experience objects
import EducationFactory from "./js/EducationFactory.js";  // Factory function for education
import ProjectFactory from "./js/ProjectsFactory.js";  // Factory function for projects

const dummyData = {
    name: "John Doe",
    title: "Software Engineer",
    email: "example@email.com",
    phone: "123-456-7890",
    address: "123 Main St, Anytown, USA 12345",
    experiences: [
        ExperienceFactory(
            "Company A",
            "Software Engineer",
            "2020-01-01",
            "2020-12-31",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        ),
        ExperienceFactory(
            "Company B",
            "Manager",
            "2018-01-01",
            "2019-12-31",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        ),
    ],
    education: [
        EducationFactory(
            "School A",
            "Bachelor of Science",
            "2014-01-01",
            "2018-12-31"
        ),
        EducationFactory(
            "School B",
            "Master of Science",
            "2018-01-01",
            "2020-12-31"
        ),
    ],
    projects: [
        ProjectFactory(
            "Project A",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "2020-01-01",
            "2020-12-31",
            "https://example.com"
        ),
        ProjectFactory(
            "Project B",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "2019-01-01",
            "2019-12-31",
            "https://example.com"
        ),
    ],
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
                        <Experience data={data.experiences} />
                    </section>

                    <section className="cv-section">
                        <h3>Education</h3>
                        <Education data={data.education} />
                    </section>

                    <section className="cv-section">
                        <h3>Projects</h3>
                        <Project data={data.projects} />
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
