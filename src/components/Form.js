import { useState } from "react";

import Experience from "./Experience.js";
import Education from "./Education.js";
import Project from "./Projects.js";
import ExperienceForm from "./ExperienceForm.js";
import EducationForm from "./EducationForm.js";
import ProjectForm from "./ProjectForm.js";

export default function Form({ data, updateData, toggleEditMode }) {
    const [experiences, setExperiences] = useState(data.experiences);
    const [education, setEducation] = useState(data.education);
    const [projects, setProjects] = useState(data.projects);

    function handleSubmit(event) {
        event.preventDefault();
        // get the form data and create an object to be used by updateData
        const form = event.target;
        const newData = {
            name: form.name.value,
            title: form.title.value,
            email: form.email.value,
            phone: form.phone.value,
            address: form.address.value,
            skills: form.skills.value,
            experiences: experiences,
            education: education,
            projects: projects,
        };

        updateData(newData);
        toggleEditMode();
        console.log("handleSubmit() called", { data, newData });
    }

    function addExperience(newExperience) {
        setExperiences([...experiences, newExperience]);
    }

    function addEducation(newEducation) {
        setEducation([...education, newEducation]);
    }

    function addProject(newProject) {
        setProjects([...projects, newProject]);
    }

    return (
        <form id="cv-edit-form" onSubmit={handleSubmit}>
            <div className="form-field">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    defaultValue={data.name}
                    autoFocus
                    tabIndex={1}
                />
            </div>

            <div className="form-field">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    defaultValue={data.title}
                    tabIndex={2}
                />
            </div>

            <div className="form-field">
                <label htmlFor="address">Address</label>
                <input
                    type="address"
                    id="address"
                    name="address"
                    defaultValue={data.address}
                    tabIndex={5}
                />
            </div>

            <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    defaultValue={data.email}
                    tabIndex={3}
                />
            </div>

            <div className="form-field">
                <label htmlFor="phone">Phone</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    defaultValue={data.phone}
                    tabIndex={4}
                />
            </div>

            <div className="form-field">
                <label>Experience</label>
                <Experience data={experiences} />
                <ExperienceForm onAdd={addExperience} />
            </div>

            <div className="form-field">
                <label>Education</label>
                <Education data={education} />
                <EducationForm onAdd={addEducation} />
            </div>

            <div className="form-field">
                <label>Projects</label>
                <Project data={projects} />
                <ProjectForm onAdd={addProject} />
            </div>

            <div className="form-field">
                <label htmlFor="skills">Skills (separate with commas)</label>
                <textarea
                    id="skills"
                    name="skills"
                    defaultValue={data.skills}
                    // tabIndex={6}
                />
            </div>

            <div className="form-field">
                <button type="submit">Save</button>
            </div>
        </form>
    );
}
