import { useState } from "react";
import Counter from "../Counter";
import ShoppingList from "../ShoppingList";

function StatePage() {

    // name, age and specialty are all 'controlled components', meaning their values are controlled by react state

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [specialty, setSpecialty] = useState("");
    return (
        <>
            <h1>State</h1>
            <Counter />
            <section>
                <h2>Form</h2>
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} required minLength={2} />
                    <label htmlFor="age">Age</label>
                    <input type="number" name="age" id="age" value={age} onChange={(e) => setAge(e.target.value)} required min={0} />
                    <label htmlFor="specialty">Specialty</label>
                    <input type="text" name="specialty" id="specialty" value={specialty} onChange={(e) => setSpecialty(e.target.value)} required minLength={2} />
                </form>
            </section>

            <ShoppingList />
        </>
    );
}

export default StatePage;