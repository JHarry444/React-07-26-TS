import { createSlice } from "@reduxjs/toolkit";
import type { TrainerType } from "../components/Trainer";

const trainerSlice = createSlice({
    name: "trainers",
    initialState: [] as TrainerType[],
    reducers: {
        setTrainers: (state, action) => {
            return action.payload as TrainerType[];
        },
        addTrainer: (state, action) => {
            return [...state, action.payload as TrainerType];
        }
    }
});

export const { setTrainers, addTrainer } = trainerSlice.actions;

export default trainerSlice.reducer;