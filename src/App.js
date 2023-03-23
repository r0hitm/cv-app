import { useState } from "react";

import "./App.css";
import Form from "./components/Form.js";

const dummyData = {
    name: "John Doe",
    title: "Software Engineer",
    email: "example@email.com",
    phone: "123-456-7890",
    address: "123 Main St, Anytown, USA 12345",
    // Add more fields later: experience, education, projects, skills
};

function App() {
    const [data, setData] = useState(dummyData);
    const [editMode, setEditMode] = useState(false);

    /**
     * TODO: Add a function that takes an object and updates the data state
     */
    function updateData() {
      console.log("updateData() called");
    }

    /**
     * TODO: Add a function that toggles the editMode state
     * Hint: use the setEditMode function
     */
    function toggleEditMode() {
        console.log("toggleEditMode() called");
    }

    if (editMode) {
        return (
            <div className="App">
                <Form
                    data={data}
                    updateData={updateData}
                    editMode={editMode}
                    toggleEditMode={toggleEditMode}
                />
            </div>
        );
    } else {
        return <div className="App">To implement the view mode</div>;
    }
}

export default App;
