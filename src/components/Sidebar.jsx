import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar({
    boards,
    addBoard,
    selectedBoard,
    setSelectedBoard,
}) {
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
                        <button onClick={() => setSelectedBoard(board)}>
                            {board.name}
                        </button>
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
