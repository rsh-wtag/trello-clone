import React, { useState } from "react";

import { useParams } from "react-router-dom";
import List from "./List";

export default function Board({
    selectedBoard,
    setSelectedBoard,
    boards,
    setBoards,
}) {
    const [newListName, setNewListName] = useState("");

    const handleAddButton = () => {
        const newList = {
            id: selectedBoard.lists.length + 1,
            title: newListName,
            cards: [],
        };

        const newBoards = JSON.parse(JSON.stringify(boards));

        const index = newBoards.findIndex(
            (board) => board.id === selectedBoard.id
        );

        newBoards[index].lists.push(newList);

        setSelectedBoard(newBoards[index]);
        setBoards(newBoards);
        setNewListName("");
    };

    return (
        <div className="board">
            <h2>{selectedBoard.name}</h2>

            <div className="lists-container">
                <ul>
                    {selectedBoard?.lists?.map((list, index) => (
                        <List key={list.id} list={list} />
                    ))}
                </ul>
            </div>
            <input
                type="text"
                value={newListName}
                onChange={(e) => setNewListName(e.target.value)}
            />
            <button onClick={handleAddButton}>Add List</button>
        </div>
    );
}
