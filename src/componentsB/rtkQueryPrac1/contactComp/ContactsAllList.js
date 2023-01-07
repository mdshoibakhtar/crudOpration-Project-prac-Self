import { Button, Table } from "react-bootstrap";
import { useDeleteContactsListMutation, useGetContactsQuery } from "./contactsApi";
import { EditStData } from "./editComp/EditStData";
import { Link, Outlet } from "react-router-dom";

import "../../../App.css"
import "./contact.css"
export const ContactsAllList = () => {
    const { data, isError, isLoading, isSuccess } = useGetContactsQuery()
    const [deleteContactsList] = useDeleteContactsListMutation()

    const deleteList = (id) => {
        // console.log(id);
        deleteContactsList(id)
    };
    return (
        <div>
            <div>
                {isLoading && <h2>isLoading....</h2>}
                {isError && <h2>some will be erorr....</h2>}
                {isSuccess && (
                    <Table striped bordered hover className="stDataTable">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th> Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => {
                                return <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.stName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <Link to={`/contacts/view${item.id}`}>View</Link>
                                        <Link to={`/contacts/edit${item.id}`} element={<EditStData />}>edit</Link>
                                        <Button onClick={() => { deleteList(item.id) }}>Delete</Button>
                                    </td>
                                </tr>

                            })}
                        </tbody>
                    </Table>
                )}
            </div>
            <Link to={'/contacts/adddata'}>
                AddData
            </Link>
            <Outlet></Outlet>
        </div >
    );
}