import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useParams, } from 'react-router-dom';
import { fillData, myCreateThunkAsync } from '../store&slice/slice';
import { MdDelete, MdEdit, MdPreview } from 'react-icons/md';
import { Table, Button } from 'react-bootstrap';
export const ContactComp = () => {
    const store = useSelector((state) => {
        return state
    })

    const [VfData, setvfData] = useState(store.data)
    const params = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(myCreateThunkAsync())
    }, [])


    function handleDelete(id) {

        const DfilterData = store.data.filter((item) => {
            return item.id !== id
        })
        console.log(DfilterData);
        dispatch(fillData(DfilterData))
    }
    function handleView(id) {
        const VfilterData = store.data.filter((item) => {
            return item.id === params
        })
        setvfData(VfilterData)
        console.log(VfilterData);
    }

    return (
        <div style={{ margin: "auto", width: 87 + "%", }}>
            <div style={{ display: "flex", justifyContent: "center" }}>{store.status === "pending" && <h2>loading..... </h2>}</div>
            {store.data.length && (

                <Table style={{ margin: "auto", width: 80 + "%" }} striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>e-mail</th>
                            <th>Addres</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {store.data && store.data.map((item) => {
                            return <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.address}</td>
                                <td style={{ display: "flex", alinItem: "centre" }}>
                                    <Link to={`/edit/${item.id}`} style={{ backgroundColor: "#0d6efd", padding: "5px", color: "white", margin: "0 2px", borderRadius: "4px" }}><MdEdit /></Link>
                                    <Button type='button' style={{ backgroundColor: "#0d6efd", color: "white", padding: "5px" }} onClick={() => handleDelete(item.id)}><MdDelete /></Button>
                                    <Link to={`/view/${item.id}`} style={{ backgroundColor: "#0d6efd", padding: "5px", color: "white", margin: "0 2px", borderRadius: "4px" }}><MdPreview /></Link>

                                </td>
                            </tr>
                        })}
                    </tbody>
                </Table>
            )
            }
            <div>{store.status === "rejected" && <h2>{store.data.message}</h2>}</div>
        </div >

    );
}