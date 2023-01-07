import { Button, Table } from "react-bootstrap"
import { Header } from "../Header";
import { useGetContactsQuery } from "../store&api/contactsApi"

export const Dashbord = () => {
    const contactsData = useGetContactsQuery();
    console.log("contacts------", contactsData.data)
    if (contactsData.data === undefined) {
        return contactsData.data
    }
    return (
        <div>
            <Header />
            < Table className="tableCont" striped bordered hover >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {contactsData.data.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.stName}</td>
                                <td>{item.email}</td>
                                <td>{item.address}</td>
                                <td>
                                    <Button>edit</Button>
                                </td>
                            </tr>
                        )

                    })}

                </tbody>
            </Table >
        </div >
    )
}