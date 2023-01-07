import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { postAsynkThunk } from "../postsSlice";
import { ImPencil } from "react-icons/im";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";

export const AxiosComp = () => {
    const useStore = useSelector((state) => {
        return state
    });
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(postAsynkThunk())
    }, [])
    console.log(useStore)
    return (
        <div>
            <div>
                {useStore.status === "pending" && <h3>loading.....</h3>}
            </div>
            {useStore.data.length && (
                <table width={80 + "%"}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>UserName</th>
                            <th>Street</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {useStore.data.map((item) => {
                            console.log(item);
                            return <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.address.street}</td>
                                <td style={{ width: "100px" }}><button style={{ backgroundColor: "#6a8f33", color: "#fff", padding: " 5px 8px", borderRadius: "4px", border: "none" }}><ImPencil /></button> <button style={{ backgroundColor: "#a923ba", color: "#fff", padding: "5px 8px", borderRadius: "4px", border: "none" }}><MdDelete /></button> <button style={{ backgroundColor: "#a923ba", color: "#fff", padding: "5px 8px", borderRadius: "4px", border: "none" }}><FaEye /></button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            )
            }
            <div>{useStore.status === "reject" && <h2>404</h2>}</div>
        </div >
    )
}