import React, { useState } from "react";
import Card from "./Card";
import AddCardForm from "./AddCardForm";
import { Droppable } from "react-beautiful-dnd";

export default function List({ list }) {
    return (
        <div>
            <h3>{list?.title}</h3>
            <ul>
                {list?.cards?.map((card) => (
                    <Card key={card?.id} card={card} />
                ))}
            </ul>
        </div>
    );
}
