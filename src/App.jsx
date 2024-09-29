import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Board from "./components/Board";
import "./index.css";

export default function App() {
    const [boards, setBoards] = useState([
        {
            id: 1,
            name: "Board 1",
            lists: [
                {
                    id: 1,
                    title: "To Do",
                    cards: [
                        { id: 1, title: " Sing " },
                        { id: 2, title: "Dance" },
                    ],
                },
                {
                    id: 2,
                    title: "In Progress",
                    cards: [
                        { id: 1, title: " Sing 1" },
                        { id: 2, title: "Dance 2" },
                    ],
                },
            ],
        },
    ]);

    console.log(boards);

    const [selectedBoard, setSelectedBoard] = useState({});

    const addBoard = (boardName) => {
        setBoards([...boards, { id: boards.length + 1, name: boardName }]);
    };

    return (
        <div className="app-container">
            <Navbar />
            <div className="main-content">
                <Sidebar
                    boards={boards}
                    addBoard={addBoard}
                    selectedBoard={selectedBoard}
                    setSelectedBoard={setSelectedBoard}
                />
                <Board
                    selectedBoard={selectedBoard}
                    setSelectedBoard={setSelectedBoard}
                    boards={boards}
                    setBoards={setBoards}
                />
            </div>
        </div>
    );
}
