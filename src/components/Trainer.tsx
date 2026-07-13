// React components MUST start with a capital letter
export type TrainerProps = {
    name: string;
    age: number;
    specialty: string;
}
function Trainer({ name, age, specialty }: TrainerProps) {
    console.log("PROPS:", { name, age, specialty });

    return (
        <div>
            <p>Name: {name}</p>
            {/* use {} to insert code */}
            <p>Age: {age}</p>
            <p>Specialty: {specialty}</p>
        </div>
    )
}

export default Trainer