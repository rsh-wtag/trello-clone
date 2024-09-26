import React, { useState } from "react";

export default function AddCardForm({ addCard }) {
    const [cardText, setCardText] = useState("");

    const handleAddCard = () => {
        if (cardText) {
            addCard(cardText);
            setCardText("");
        }
    };

    return (
        <div className="add-card-form">
            <input
                type="text"
                placeholder="Add a card"
                value={cardText}
                onChange={(e) => setCardText(e.target.value)}
            />
            <button onClick={handleAddCard}>Add Card</button>
        </div>
    );
}
