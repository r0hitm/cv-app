import Experience from "./Experience.js";
import Education from "./Education.js";
import Project from "./Projects.js";
import ExperienceForm from "./ExperienceForm.js";
import EducationForm from "./EducationForm.js";
import ProjectForm from "./ProjectForm.js";

export default function EditMode({
    personalInfo,
    updatePersonalInfo,
    experiences,
    updateExperiences,
    education,
    updateEducation,
    projects,
    updateProjects,
    expDelete,
    eduDelete,
    projDelete,
}) {
    function savePersonalInfo(event) {
        event.preventDefault();
        // get the form data and create an object to be used by updateData
        const form = event.target;
        const data = {
            ...personalInfo,
            name: form.name.value,
            title: form.title.value,
            email: form.email.value,
            phone: form.phone.value,
            address: form.address.value,
            skills: form.skills.value,
        };
        if (data.name === "") {
            alert("Please at least fill in the name field.");
            return;
        }

        updatePersonalInfo(data);

        alert("Personal info saved!");
        // console.log("Personal info saved!"); // For DEBUG
    }

    return (
        <>
            <form onSubmit={savePersonalInfo}>
                <div className="form-field">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        defaultValue={personalInfo.name}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        defaultValue={personalInfo.title}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="address">Address</label>
                    <input
                        type="address"
                        id="address"
                        name="address"
                        defaultValue={personalInfo.address}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        defaultValue={personalInfo.email}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        defaultValue={personalInfo.phone}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="skills">
                        Skills (separate with commas)
                    </label>
                    <textarea
                        id="skills"
                        name="skills"
                        defaultValue={personalInfo.skills}
                    />
                </div>

                <div className="form-field">
                    <button type="submit">Save Personal Info</button>
                </div>
            </form>

            <div className="form-field border">
                <Experience data={experiences} handleDelete={expDelete} />
                <ExperienceForm onAdd={updateExperiences} />
            </div>

            <div className="form-field border">
                <Education data={education} handleDelete={eduDelete} />
                <EducationForm onAdd={updateEducation} />
            </div>

            <div className="form-field border">
                <Project data={projects} handleDelete={projDelete} />
                <ProjectForm onAdd={updateProjects} />
            </div>
        </>
    );
}
