import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Board from "./components/Board";
import "./index.css";

export default function App() {
    const [boards, setBoards] = useState([{ id: 1, name: "Board 1" }]);

    const addBoard = (boardName) => {
        setBoards([...boards, { id: boards.length + 1, name: boardName }]);
    };

    return (
        <Router>
            <div className="app-container">
                <Navbar />
                <div className="main-content">
                    <Sidebar boards={boards} addBoard={addBoard} />
                    <Routes>
                        {boards.map((board) => (
                            <Route
                                key={board.id}
                                path={`/board/${board.id}`}
                                element={<Board />}
                            />
                        ))}
                        <Route
                            path="/"
                            element={<div>Select a board to view</div>}
                        />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}
