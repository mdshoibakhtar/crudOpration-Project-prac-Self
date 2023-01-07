import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import "./LoginAll.css"
export const LoginForm = ({ login, details, setDetails }) => {
    const handelInput = (e) => {
        const inputVal = e.target.value
        const inputName = e.target.name
        const cloneddata = { ...details }
        cloneddata[inputName] = inputVal
        setDetails(cloneddata)
    }

    return (
        <div>
            <div className='loginContainer'>
                <h4>login</h4>
                <Form>
                    <Form.Group className="mb-3 fG" controlId="formBasicEmail">
                        <Form.Label>ENTER YOUR USER ID</Form.Label>
                        <Form.Control name='userName' value={details.userName} type="text" placeholder="userId" onChange={handelInput} />
                    </Form.Group>
                    <Form.Group className="mb-3 fG" controlId="formBasicPassword">
                        <Form.Label>ENTER YOUR PASSWORD</Form.Label>
                        <Form.Control name='password' value={details.password} type="password" placeholder="Password" onChange={handelInput} />
                    </Form.Group>

                    <div className='loginBtn'><Button variant="primary" type="button" onClick={login}>
                        Login
                    </Button></div>
                </Form>
            </div>
        </div>
    )
}