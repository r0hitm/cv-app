import DeleteItemBtn from "./DeleteItemBtn.js";

export default function Projects({ data, handleDelete }) {
    return (
        <>
            {data.map((project, index) => {
                return (
                    <div className="list-item" key={index}>
                        <h4>{project.title}</h4>
                        <h5>{project.description}</h5>
                        <a href={`${project.url}`}>{project.url}</a>
                        {handleDelete && <DeleteItemBtn index={index} onDelete={handleDelete} />}
                    </div>
                );
            })}
        </>
    );
}
