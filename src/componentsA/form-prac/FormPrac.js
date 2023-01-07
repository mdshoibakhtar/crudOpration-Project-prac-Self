import { useState } from "react"

// const obj = { name: "Amaal", pass: 123 }
// export const FormPrac = () => {
//     const [data, setDta] = useState(obj)
//     const handleInput = (e) => {
//         const clone = { ...data }
//         const updateVal = e.target.value
//         const name = e.target.name

//         clone[name] = updateVal
//         setDta(clone)


//     }
//     return (
//         <div>
//             <form>
//                 <label>Name:</label>
//                 <br />
//                 <input name="name" text={'text'} value={data.name} onChange={handleInput} />
//                 <br />
//                 {/* <label>password:</label>
//                 <br />
//                 <input value={obj.pass} /> */}
//             </form>
//             <div>Name:</div>
//             <div>Pass:</div>
//         </div>
//     )
// }


// const val = e.target.value // ab
// const inputName = e.target.name// username
// const clonedForm = { ...formData }
// clonedForm[inputName] = val;
// console.log(formData)
// setFormData(clonedForm)

const obj1 = {
    name: "", pass: ""
}
export const FormPrac = (e) => {
    const [data, setData] = useState(obj1)
    const handelChange = (e) => {
        const updateVal = e.target.value;
        const inputName = e.target.name;
        const clone = { ...data };
        clone[inputName] = updateVal
        setData(clone)

    }
    return (
        <div>
            <form>
                <label>Name:</label>
                <br />
                <input type={"text"} name="name" value={data.name} onChange={handelChange} />
                <br />
                <label>Password:</label>
                <br />
                <input type={"password"} name="pass" value={data.pass} onChange={handelChange} />
                <div>Name:{data.name}</div>
                <div>Password:{data.pass}</div>

            </form>
        </div>
    )
}