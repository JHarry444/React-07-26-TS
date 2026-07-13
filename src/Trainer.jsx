// React components MUST start with a capital letter

function Trainer({ name, age, specialty }) {
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