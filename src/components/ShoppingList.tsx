import { useRef, useState } from "react";

function ShoppingList() {
    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState<string[]>([]);


    function addItem() {
        setItems([...items, newItem])
        setNewItem("");
        itemRef.current?.focus();
    }

    const itemRef = useRef<HTMLInputElement>(null);

    return (
        <section>
            <h2>Shopping List</h2>
            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                ref={itemRef}
            />
            <button onClick={addItem}>Add</button>
            <ul>
                {
                    items.map((item) => (<li>{item}</li>))
                }
            </ul>
        </section>
    );
}

export default ShoppingList;