import trainers from '../data/trainers.json';
import Trainer from './Trainer';

function ExternalData() {
    return (
        <>
            {
                trainers.map(({ id, name, age, specialty }) => (
                    <Trainer
                        key={id}
                        name={name}
                        age={age}
                        specialty={specialty}
                    />
                ))
            }
        </>
    );
}

export default ExternalData;