import DeleteItemBtn from "./DeleteItemBtn.js";

export default function Experience({ data, handleDelete }) {
    return (
        <>
            {data.map((experience, index) => {
                return (
                    <div className="list-item" key={index}>
                        <h4>{experience.company}</h4>
                        <h5>{experience.title}</h5>
                        <p>
                            {experience.startDate} - {experience.endDate}
                        </p>
                        <p>{experience.description}</p>
                        {handleDelete && <DeleteItemBtn index={index} onDelete={handleDelete} />}
                    </div>
                );
            })}
        </>
    );
}
