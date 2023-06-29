import React, { useState } from "react";

const Item = ({ item, onDeleteItem, onToggleItem }) => {
  const { id, description, quantity, packed } = item;

  return (
    <li>
      <input
        type="checkbox"
        checked={packed}
        onChange={() => onToggleItem(id)}
      />

      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {" "}
        <span> {quantity}</span>
        <span> {description}</span>
      </span>
      <button onClick={() => onDeleteItem(id)}> ❌ </button>
    </li>
  );
};

export default Item;
