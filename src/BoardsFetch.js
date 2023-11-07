import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Axios from "axios";
import "./BoardsFetch.css";

function BoardsFetch() {
    const [boardsData, setBoardsData] = useState([]);

    useEffect(() => {
        // To retrieve services data
        Axios.get("https://boards.api.huddo.com/v")
            .then((response) => {
                setBoardsData(response.data); // Input fetched data to boardsData
            })
            .catch((error) => {
                console.error("Error fetching services:", error);
            });
    }, []); // Fetch services' data once when the component mounts
    return (
        <div className="BoardsFetch">
            <h1>Huddo Boards Services List</h1>
            <Table>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Name</th>
                        <th>Version</th>
                    </tr>
                </thead>
                <tbody>
                    {boardsData.map((data, index) => (
                        <tr key={index}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                {data.name}
                            </td>
                            <td>
                                {data.version}
                            </td>
                        </tr>
                    ))}

                </tbody>
            </Table>
        </div >
    )
}

export default BoardsFetch;