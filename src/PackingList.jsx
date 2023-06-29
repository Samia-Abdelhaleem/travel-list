import React, { useState } from "react";
import Item from "./Item";

const PackingList = ({ items, onDeleteItem, onToggleItem, onClearList }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  const sortedItemsOptions = {
    input: items,
    description: items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description)),
    packed: items.slice().sort((a, b) => a.packed - b.packed),
  };
  sortedItems = sortedItemsOptions[sortBy];

  return (
    <div className="list">
      <ul>
        {" "}
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input"> sort by input</option>
          <option value="description"> sort by description</option>
          <option value="packed"> sort by packed</option>
        </select>
        <button onClick={onClearList}> clear list</button>
      </div>
    </div>
  );
};

export default PackingList;
