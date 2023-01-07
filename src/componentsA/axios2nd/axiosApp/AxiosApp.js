import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { myCreateThunkAsync } from "../postSlice"

export const AxiosApp = () => {
    const store = useSelector((state) => {
        return state
    })
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(myCreateThunkAsync())
    }, [])
    return (
        <div>
            <div>{store.status === "pending" && <h2>loading..... </h2>}</div>
            {store.data.length && (
                <table style={{ margin: "auto", width: 100 + "%" }}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>username</th>
                            <th>street</th>
                            <th>City</th>
                            <th>code</th>
                        </tr>
                    </thead>
                    <tbody>
                        {store.data.map((item) => {
                            return <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.address.street}</td>
                                <td>{item.address.city}</td>
                                <td>{item.address.zipcode}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            )}
            <div>{store.status === "rejected" && <h2>Error</h2>}</div>
        </div>
    )
}