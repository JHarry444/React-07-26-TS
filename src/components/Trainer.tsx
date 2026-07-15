// React components MUST start with a capital letter
export type TrainerType = {
    name: string;
    age: number;
    specialty?: string;
}
function Trainer({ name, age, specialty }: TrainerType) {
    console.log("PROPS:", { name, age, specialty });

    return (
        <div>
            <p>Name: {name}</p>
            {/* use {} to insert code */}
            <p>Age: {age}</p>
            {specialty && <p>Specialty: {specialty}</p>}
        </div>
    )
}

export default Trainer