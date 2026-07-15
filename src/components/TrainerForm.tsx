import { useRef, useState } from "react";
import type { TrainerType } from "./Trainer";

function TrainerForm({ setTrainers }: { setTrainers: React.Dispatch<React.SetStateAction<TrainerType[]>> }) {
    // name, age and specialty are all 'controlled components', meaning their values are controlled by react state
    const [data, setData] = useState({
        name: "",
        age: 0,
        specialty: ""
    });

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        // prev is the previous state of trainers, we spread it into a new array and add the new data to it
        setTrainers(prev => [...prev, data]);
        setData({
            name: "",
            age: 0,
            specialty: ""
        });
        nameRef.current?.focus();
    }

    const nameRef = useRef<HTMLInputElement>(null);



    return (
        <>
            <h2>Trainer Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })} required minLength={2} ref={nameRef} />
                <label htmlFor="age">Age</label>
                <input type="number" name="age" id="age" value={data.age}
                    onChange={(e) => setData({ ...data, age: Number(e.target.value) })} required min={18} />
                <label htmlFor="specialty">Specialty</label>
                <input type="text" name="specialty" id="specialty" value={data.specialty}
                    onChange={(e) => setData({ ...data, specialty: e.target.value })} required minLength={2} />
                <button type="submit">Submit</button>
            </form>
        </>

    );
}

export default TrainerForm;