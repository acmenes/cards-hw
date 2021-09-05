import { useState, useEffect } from "react";
import axios from "axios";

function useFlip(initialFlipState = true) {
    const [isFlipped, setFlipped] = useState(initialFlipState)

    const flip = () => {
        setFlipped(isUp => !isUp);
    };

    return [isFlipped, flip];
}

function useAxios(BASE_URL) {
    const [responses, setResponses] = useState(null);

    const getRes = async (formatter = data => data, REST_OF_URL = "") => {
        const response = await axios.get(`${BASE_URL}/${REST_OF_URL}`)
        setResponses(data => [...data, formatter(response.data)]);

        const clearRes = () => setResponses([]);

        return [responses, getRes, clearRes];
    }
}
export { useFlip, useAxios };
export default useFlip;