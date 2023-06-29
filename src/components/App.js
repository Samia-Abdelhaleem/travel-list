import { useState } from "react";
import Footer from "./Footer";
import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";

function App() {
  const [items, setItems] = useState([]);
  function handleAddItem(newItem) {
    setItems((items) => [...items, newItem]);
  }
  function handleDeleteItem(id) {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  }
  function handleToggleItem(id) {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    );
    setItems(newItems);
  }

  function handelClearList() {
    const confirmDelete = window.confirm("Do you want to delete your list ?");
    if (confirmDelete) setItems([]);
  }
  return (
    <div className="app">
      {" "}
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handelClearList}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
