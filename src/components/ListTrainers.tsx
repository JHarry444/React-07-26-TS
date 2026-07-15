import Trainer from "./Trainer";

import type { TrainerType } from "./Trainer";

function ListTrainers({ trainers }: { trainers: TrainerType[] }) {
    return (
        <>
            <h2>List of Trainers</h2>
            <div className="trainers-container">
                {
                    trainers.map(({ name, age, specialty }) => (
                        <div>
                            <Trainer
                                key={name}
                                name={name}
                                age={age}
                                specialty={specialty}
                            />
                        </div>

                    ))
                }
            </div>

        </>
    );
}

export default ListTrainers;