import { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"


export const ContactForm = () => {
    const store = useSelector((state) => {
        return state
    })
    const [val, setVal] = useState(store.data)
    const params = useParams()


    const handleInput = (e) => {
        console.log(e.target.value);
        const inputValue = e.target.value
        const inputName = e.target.name
        const clonedData = { ...val }
        clonedData[inputName] = inputValue
        setVal(clonedData)
    }
    useEffect(() => {
        if (params.id) {
            const filteredData = store.data.find((item) => {
                return item.id === params.id
            })
            setVal(filteredData);
        }
    }, [params])
    if (val === undefined) {
        return
    }
    const handleUpdate = () => {

    }
    return (
        <div style={{ margin: "auto", width: 87 + "%", }}>
            <Form style={{ margin: "auto", width: 80 + "%", }}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Id</Form.Label>
                    <Form.Control value={val.id} name="id" type="text" placeholder="Enter Your ID" onChange={handleInput} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={val.stName} name="stName" type="text" placeholder="Enter Your Name" onChange={handleInput} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={val.email} name="email" type="email" placeholder="Enter email" onChange={handleInput} />
                </Form.Group>
                <Button variant="primary" type="button" onClick={handleUpdate}>
                    update
                </Button>
            </Form>
        </div>
    )
}