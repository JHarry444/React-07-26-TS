import { useEffect, useState, useCallback } from "react";
import { setTrainers } from "../../redux/trainers";
import ListTrainers from "../ListTrainers";
import TrainerForm from "../TrainerForm";
import './lifting.css';
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

function LiftingStatePage() {
    const [filter, setFilter] = useState("");
    const trainers = useSelector((state: RootState) => state.trainers);
    // componentDidMount equivalent
    const dispatch = useDispatch();
    const fetchTrainers = useCallback(async () => {
        try {
            const res = await fetch("http://localhost:8080/trainers")
            const data = await res.json();
            dispatch(setTrainers(data));
        } catch (error) {
            console.error("Error fetching trainers:", error);
        }
    }, [dispatch]);

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

    }, [filter, fetchTrainers]);
    // only runs once when the component mounts, because of the empty dependency array
    console.log("TRAINERS:", trainers);

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
                    <TrainerForm />
                </div>
            </section>

        </>
    );
}

export default LiftingStatePage;