import { useState } from "react";

import "./App.css";
import EditMode from "./components/EditMode.js";
import Experience from "./components/Experience.js";
import Education from "./components/Education.js";
import Project from "./components/Projects.js";
import EditToggleBtn from "./components/EditToggleBtn.js";

import dummyCVData from "./dummyCVData.json";

function App() {
    const [personalInfo, setPersonalData] = useState(dummyCVData.personalInfo);
    const [experiences, setExperiences] = useState(dummyCVData.experiences);
    const [education, setEducation] = useState(dummyCVData.education);
    const [projects, setProjects] = useState(dummyCVData.projects);
    const [editMode, setEditMode] = useState(false);

    function updatePersonalInfo(newData) {
        setPersonalData(newData);
    }

    function updateExperiences(newExperience) {
        const newExperiences = [...experiences, newExperience];
        setExperiences(newExperiences);
        // updateData({ ...data, experiences: newExperiences });
    }

    function updateEducation(edu) {
        const newEducation = [...education, edu];
        setEducation(newEducation);
        // updateData({ ...data, education: newEducation });
    }

    function updateProjects(newProject) {
        const newProjects = [...projects, newProject];
        setProjects(newProjects);
        // updateData({ ...data, projects: newProjects });
    }

    function removeExperience(index) {
        const newData = [...experiences];
        newData.splice(index, 1);
        setExperiences(newData);
    }

    function removeEducation(index) {
        const newData = [...education];
        newData.splice(index, 1);
        setEducation(newData);
    }

    function removeProject(index) {
        const newData = [...projects];
        newData.splice(index, 1);
        setProjects(newData);
    }

    function toggleEditMode() {
        setEditMode(!editMode);
    }

    if (editMode) {
        return (
            <div className="App">
                <EditMode
                    personalInfo={personalInfo}
                    updatePersonalInfo={updatePersonalInfo}
                    experiences={experiences}
                    updateExperiences={updateExperiences}
                    education={education}
                    updateEducation={updateEducation}
                    projects={projects}
                    updateProjects={updateProjects}
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
                        <h1>{personalInfo.name}</h1>
                        <h2>{personalInfo.title}</h2>
                    </section>

                    <section className="cv-section">
                        <address>{personalInfo.address}</address>
                        <a
                            className="email"
                            href={`mailto:${personalInfo.email}`}
                        >
                            {personalInfo.email}
                        </a>
                        <a className="phone" href={`tel:${personalInfo.phone}`}>
                            {personalInfo.phone}
                        </a>
                    </section>

                    <section className="cv-section">
                        <Experience data={experiences} />
                    </section>

                    <section className="cv-section">
                        <Education data={education} />
                    </section>

                    <section className="cv-section">
                        <Project data={projects} />
                    </section>

                    <section className="cv-section">
                        <h3>Skills</h3>
                        <p>{personalInfo.skills}</p>
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
