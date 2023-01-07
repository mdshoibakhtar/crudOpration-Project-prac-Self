import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useEditDataMutation, useGetContactsQuery } from "../contactsApi";

export const EditStData = () => {
    const { data } = useGetContactsQuery()
    const [updateData] = useEditDataMutation()

    const params = useParams()
    const [val, setVal] = useState({
        id: '',
        stName: '',
        email: '',
        address: '',
    })
    function controlInput(e) {
        const inputValue = e.target.value;
        const inputName = e.target.name;
        const cloneData = { ...val }
        cloneData[inputName] = inputValue
        setVal(cloneData)
    }
    const updateInpData = () => {
        const cloneStudentData = { ...val }
        updateData(cloneStudentData)
    }

    useEffect(() => {
        if (!data) {
            return
        }
        if (params.id) {
            const filteritem = data.find((item) => item.id === params.id);
            setVal(filteritem)
        }

    }, [])


    return (
        <div>
            <Form style={{ width: "1000px", margin: "auto", textAlign: "start" }}>
                <Form.Group className="mb-3" controlId="formBasicId">
                    <Form.Label>ID</Form.Label>
                    <Form.Control name="id" value={val.id} type="text" placeholder=" ID" onChange={controlInput} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="stName" value={val.stName} type="text" placeholder=" Name" onChange={controlInput} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" value={val.email} type="email" placeholder="Enter email" onChange={controlInput} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control name="address" value={val.address} type="text" placeholder="Address" onChange={controlInput} />
                </Form.Group>

                <Button variant="primary" type="button" onClick={() => { updateInpData() }}>
                    update
                </Button>
            </Form>
            <Link to={"/"}>Go Back</Link>
        </div>
    );
}