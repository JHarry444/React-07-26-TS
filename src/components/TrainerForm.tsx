import { useRef, useState } from "react";
import type { TrainerType } from "./Trainer";

// function TrainerForm() {
//     // name, age and specialty are all 'controlled components', meaning their values are controlled by react state

//     const [name, setName] = useState("");
//     const [age, setAge] = useState("");
//     const [specialty, setSpecialty] = useState("");

//     return (
//         <form>
//             <label htmlFor="name">Name</label>
//             <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} required minLength={2} />
//             <label htmlFor="age">Age</label>
//             <input type="number" name="age" id="age" value={age} onChange={(e) => setAge(e.target.value)} required min={0} />
//             <label htmlFor="specialty">Specialty</label>
//             <input type="text" name="specialty" id="specialty" value={specialty} onChange={(e) => setSpecialty(e.target.value)} required minLength={2} />
//         </form>
//     );
// }

// export default TrainerForm;


function TrainerForm({ setTrainers }: { setTrainers: React.Dispatch<React.SetStateAction<TrainerType[]>> }) {
    // name, age and specialty are all 'controlled components', meaning their values are controlled by react state
    const [data, setData] = useState<TrainerType>({
        name: "",
        age: 0,
        specialty: ""
    });

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        // prev is the previous state of trainers, we spread it into a new array and add the new data to it
        try {
            const res = await fetch("http://localhost:8080/trainers", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            if (res.status === 201) {
                setTrainers(prev => [...prev, data]);
                setData({
                    name: "",
                    age: 0,
                    specialty: ""
                });
                nameRef.current?.focus();
            } else {
                throw new Error("Failed to add trainer");
            }
        } catch (error) {
            console.error("Error adding trainer:", error);
        }
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