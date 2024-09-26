import React from "react";
import { Draggable } from "react-beautiful-dnd";

export default function Card({ card, index }) {
    return (
        <Draggable draggableId={`${card.id}`} index={index}>
            {(provided) => (
                <div
                    className="card"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    {card.text}
                </div>
            )}
        </Draggable>
    );
}
