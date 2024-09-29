import React from "react";
import { Draggable } from "react-beautiful-dnd";

export default function Card({ card }) {
    return (
        <div>
            <h4>{card.title}</h4>
        </div>
    );
}
