import { useState } from "react"
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAddDataMutation, useGetContactsQuery } from "../contactsApi";


const object = {
    id: Math.random(),
    stName: '',
    email: '',
    address: '',
}
export const FormUpdate = () => {
    const [dataAddFn] = useAddDataMutation()
    const [stObject, setStObject] = useState(object);
    function updateData(event) {
        const inputValue = event.target.value;
        const inputName = event.target.name;
        const cloneData = { ...stObject }
        cloneData[inputName] = inputValue
        setStObject(cloneData)
    }
    const addData = () => {
        const clonedstState = { ...stObject }
        dataAddFn(clonedstState)
    }
    return (
        <div>
            <Form style={{ width: "1000px", margin: "auto", textAlign: "start" }}>
                <Form.Group className="mb-3" controlId="formBasicId">
                    <Form.Label>ID</Form.Label>
                    <Form.Control disable="true" name="id" value={""} type="text" placeholder="you can't enter id" onChange={updateData} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="stName" value={stObject.stName} type="text" placeholder=" Name" onChange={updateData} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" value={stObject.email} type="email" placeholder="Enter email" onChange={updateData} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control name="address" value={stObject.address} type="text" placeholder="Address" onChange={updateData} />
                </Form.Group>
                <Button variant="primary" type="button" onClick={() => { addData() }}>
                    AddData
                </Button>
            </Form>
            <Link to={"/"}>GO BACK</Link>
        </div>
    )
}