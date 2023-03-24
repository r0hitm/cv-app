// Factory function for projects
const ProjectFactory = (title, description, startDate, endDate, url) => {
    return {
        title,
        description,
        startDate,
        endDate,
        url,
    };
}

export default ProjectFactory;