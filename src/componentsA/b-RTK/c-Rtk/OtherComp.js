import { CompC } from "../CompC"
import { CompA } from "./compA"

export const OtherComp = () => {
    return (<div style={{ width: "500px", border: "solid 1px red", display: 'flex', padding: '20px', margin: "10px" }}>
        <CompA />
        <CompC />
    </div>)
}