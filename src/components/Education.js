export default function Education({ data }) {
    return (
        <>
            {data.map((education, index) => {
                return (
                    <div className="list-item" key={index}>
                        <h4>{education.school}</h4>
                        <h5>{education.degree}</h5>
                        <p>
                            {education.startDate} - {education.endDate}
                        </p>
                    </div>
                );
            })}
        </>
    );
}
