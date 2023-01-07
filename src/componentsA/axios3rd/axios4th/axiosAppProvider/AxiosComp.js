import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { todosAsyncThunk } from "../todosSlice";

export const AxiosComp = () => {
    const useTdStore = useSelector((state) => {
        return state
    })
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(todosAsyncThunk())
    }, [])
    console.log("hiiiiii", useTdStore);
    return (
        <div>
            <div>{useTdStore.status === "pending" && <h4>loading......</h4>}</div>
            <div>data</div>
            <div>error</div>
        </div>
    )
}