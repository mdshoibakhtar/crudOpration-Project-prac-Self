import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { myCreateAsyncThunk } from "./store&slice/usersSlice";

export const AxiosComp = () => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState();
    const [error, setError] = useState()

    const dispath = useDispatch()
    const store = useSelector((state) => {
        return state
    })

    const getData = async () => {
        setLoading(true)
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setData(response.data)
            setLoading(false)
            setError('')
        } catch (error) {
            setLoading(false)
            setError(error)
        }
    }
    useEffect(() => {
        // getData()
        dispath(myCreateAsyncThunk())
    }, [])
    console.log('store', store)
    return (
        <div>
            <div>{(loading || store.status === 'pending') && <h2>Loading......</h2>}</div>
            {(data || store.data.length) && (
                <table style={{ margin: "auto", width: 100 + "%" }}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th> Name</th>
                            <th>User Name</th>
                            <th>Address/street</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {data.map((item) => {
                            return <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.address.street}</td>
                            </tr>
                        })} */}
                        {store.data.length && store.data.map((item) => {
                            return <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.address.street}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            )}
            {(error || store.status === 'rejected') && <div>{error.message}</div>}
        </div>
    )
}