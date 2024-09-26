import React, { useState } from "react";
import List from "./List";
import { DragDropContext } from "react-beautiful-dnd";

export default function Board() {
    const [lists, setLists] = useState([
        { id: 1, title: "To Do" },
        { id: 2, title: "Doing" },
    ]);

    const addList = (title) => {
        setLists([...lists, { id: lists.length + 1, title }]);
    };

    const onDragEnd = (result) => {
        // Logic to handle drag and drop between lists
    };

    return (
        <div className="board">
            <h2>Board</h2>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="lists-container">
                    {lists.map((list) => (
                        <List key={list.id} title={list.title} />
                    ))}
                </div>
            </DragDropContext>
            <button onClick={() => addList("New List")}>Add List</button>
        </div>
    );
}
