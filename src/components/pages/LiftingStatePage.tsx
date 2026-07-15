import { useEffect, useState } from "react";
import ListTrainers from "../ListTrainers";
import TrainerForm from "../TrainerForm";
import './lifting.css';
import type { TrainerType } from "../Trainer";


function LiftingStatePage() {
    const [trainers, setTrainers] = useState<TrainerType[]>([]);
    const [filter, setFilter] = useState("");

    // componentDidMount equivalent

    const fetchTrainers = async () => {
        try {
            const res = await fetch("http://localhost:8080/trainers")
            const data = await res.json();
            setTrainers(data);
        } catch (error) {
            console.error("Error fetching trainers:", error);
        }
    }

    useEffect(() => {
        const trainerInterval = setInterval(fetchTrainers, 5_000);

        // componentWillUnmount equivalent
        return () => {
            console.log("Component unmounting!");
            clearInterval(trainerInterval);
        }
    }, []);

    // componentDidUpdate equivalent
    useEffect(() => {

        fetchTrainers();

    }, [filter]);
    // only runs once when the component mounts, because of the empty dependency array
    return (
        <>
            <h1>Lifting State</h1>
            <section className="lifting-container">
                <div>
                    <input type="text" value={filter} onChange={e => setFilter(e.target.value)} />
                    <ListTrainers
                        trainers={trainers.filter(trainer => trainer.name.toLowerCase().startsWith(filter.toLowerCase()))}
                    />
                </div>
                <div>
                    <TrainerForm setTrainers={setTrainers} />
                </div>
            </section>

        </>
    );
}

export default LiftingStatePage;