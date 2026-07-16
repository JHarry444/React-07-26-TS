import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

function Input() {
    const theme = useSelector((state: RootState) => state.theme);
    return (<input type="text" placeholder="Type something..." style={{ display: "inline" }} className={theme} />);
}

export default Input;