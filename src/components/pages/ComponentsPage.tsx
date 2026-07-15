import Input from "../Input";
import Trainer from "../Trainer";

function ComponentsPage() {
    return (
        <>
            <h2>Components</h2>
            <Trainer name="JH" age={32} specialty="Java" />
            {Trainer({ name: "JH", age: 32 })}
            <Trainer age={33} name="CG" specialty="Web" />
            <input style={{ display: "inline" }} />
            <Input />
        </>
    );
}

export default ComponentsPage;