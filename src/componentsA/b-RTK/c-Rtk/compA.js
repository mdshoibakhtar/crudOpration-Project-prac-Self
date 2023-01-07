import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./st-scl/rtkSlice";

export const CompA = () => {
    const dispatch = useDispatch()
    const store = useSelector((state) => state)

    const getData = async () => {
        const p1 = await axios.get("https://jsonplaceholder.typicode.com/users")
        const data = p1.data
        dispatch(fetchData(data))
    }
    useEffect(() => {
        getData()

    }, [])
    console.log('store--', store)
    return (<div style={{ width: "200px", border: "solid 1px red", margin: "10px", padding: '30px' }}>
        A
    </div>)
}