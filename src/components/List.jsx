import React, { useState } from "react";
import Card from "./Card";
import AddCardForm from "./AddCardForm";
import { Droppable } from "react-beautiful-dnd";

export default function List({ title }) {
    const [cards, setCards] = useState([
        { id: 1, text: "Task 1" },
        { id: 2, text: "Task 2" },
    ]);

    const addCard = (text) => {
        setCards([...cards, { id: cards.length + 1, text }]);
    };

    return (
        <Droppable droppableId={title}>
            {(provided) => (
                <div
                    className="list"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                >
                    <h3>{title}</h3>
                    <div className="cards-container">
                        {cards.map((card, index) => (
                            <Card key={card.id} card={card} index={index} />
                        ))}
                        {provided.placeholder}
                    </div>
                    <AddCardForm addCard={addCard} />
                </div>
            )}
        </Droppable>
    );
}
