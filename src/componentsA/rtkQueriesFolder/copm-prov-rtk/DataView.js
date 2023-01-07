import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

export const DataView = () => {
    const store = useSelector((state) => {
        return state
    })
    const params = useParams()
    const viewDAta = store.data.filter((item) => {
        return item.id === params.id
    })
    return (
        <div style={{ margin: "auto", width: 70 + "%", }}>
            {viewDAta.map(item => {
                return (
                    <div key={item.id}><h5>{"Id=" + item.id}</h5>
                        <h5>{"Name=" + item.stName}</h5>
                        <h5>{"Email=" + item.email}</h5>
                        <h5>{"Address=" + item.address}</h5>
                    </div>
                )
            })}
        </div>
    )
}