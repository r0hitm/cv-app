export default function Projects({ data }) {
    return (
        <>
            {data.map((project, index) => {
                return (
                    <div key={index}>
                        <h4>{project.title}</h4>
                        <h5>{project.description}</h5>
                        <p>
                            {project.startDate} - {project.endDate}
                        </p>
                        <a href={`${project.url}`}>{project.url}</a>
                    </div>
                );
            })}
        </>
    );
}
