import { useState } from "react";

import "./App.css";
import EditMode from "./components/EditMode.js";
import Experience from "./components/Experience.js";
import Education from "./components/Education.js";
import Project from "./components/Projects.js";
import EditToggleBtn from "./components/EditToggleBtn.js";

import dummyCVData from "./dummyCVData.json";

function App() {
    const [data, setData] = useState(dummyCVData);
    const [name, setName] = useState(data.name);
    // const [title, setTitle] = useState(data.title);
    // const [email, setEmail] = useState(data.email);
    // const [phone, setPhone] = useState(data.phone);
    // const [address, setAddress] = useState(data.address);
    // const [skills, setSkills] = useState(data.skills);
    // const [experiences, setExperiences] = useState(data.experiences);
    // const [education, setEducation] = useState(data.education);
    // const [projects, setProjects] = useState(data.projects);
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

    function removeExperience(index) {
        const newData = { ...data };
        newData.experiences.splice(index, 1);
        setData(newData);
    }

    function removeEducation(index) {
        const newData = { ...data };
        newData.education.splice(index, 1);
        setData(newData);
    }

    function removeProject(index) {
        const newData = { ...data };
        newData.projects.splice(index, 1);
        setData(newData);
    }

    if (editMode) {
        return (
            <div className="App">
                <EditMode
                    data={data}
                    updateData={updateData}
                    toggleEditMode={toggleEditMode}
                    eduDelete={removeEducation}
                    expDelete={removeExperience}
                    projDelete={removeProject}
                />
                <EditToggleBtn
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

                    <EditToggleBtn
                        editMode={editMode}
                        toggleEditMode={toggleEditMode}
                    />
                </div>
            </div>
        );
    }
}

export default App;
