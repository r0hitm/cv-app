export default function Experience({ data }) {
    return (
        <>
            {data.map((experience, index) => {
                return (
                    <div key={index}>
                        <h4>{experience.company}</h4>
                        <h5>{experience.title}</h5>
                        <p>
                            {experience.startDate} - {experience.endDate}
                        </p>
                        <p>{experience.description}</p>
                    </div>
                );
            })}
        </>
    );
}
