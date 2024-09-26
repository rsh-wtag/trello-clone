import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar({ boards, addBoard }) {
    const [newBoardName, setNewBoardName] = useState("");

    const handleAddBoard = () => {
        if (newBoardName) {
            addBoard(newBoardName);
            setNewBoardName("");
        }
    };

    return (
        <aside className="sidebar">
            <h2>Boards</h2>
            <ul>
                {boards.map((board) => (
                    <li key={board.id}>
                        <Link to={`/board/${board.id}`}>{board.name}</Link>
                    </li>
                ))}
            </ul>
            <div className="add-board">
                <input
                    type="text"
                    placeholder="New board name"
                    value={newBoardName}
                    onChange={(e) => setNewBoardName(e.target.value)}
                />
                <button onClick={handleAddBoard}>Add Board</button>
            </div>
        </aside>
    );
}
