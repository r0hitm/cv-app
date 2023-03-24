// Factory function for Experience objects
const ExperienceFactory = (company, title, startDate, endDate, description) => {
    return {
        company,
        title,
        startDate,
        endDate,
        description
    };
}

export default ExperienceFactory;