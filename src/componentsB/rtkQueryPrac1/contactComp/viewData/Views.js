import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetContactsQuery } from "../contactsApi"

export const View = () => {
    const { data } = useGetContactsQuery()
    const [filData, setFilData] = useState('')
    const params = useParams()


    useEffect(() => {
        if (data === undefined) {
            return data
        }
        const filterViewData = data.find((item) => {

            return params.id === item.id
        })
        // console.log(filterViewData);
        setFilData(filterViewData)
    }, [])


    return (
        <>

            <div style={{ textAlign: "start", backgroundColor: 'aqua', border: "1px solid #eee2e2", width: '600px', marginTop: '12px', marginLeft: 'auto', marginRight: 'auto', padding: '8px', borderRadius: "5px" }}>
                <h3 style={
                    { backgroundColor: 'black', color: 'white' }
                }>USER CONTACT DETAILS</h3>
                <h4>ID: {filData.id}</h4>
                <h5>Name: {filData.stName}</h5>
                <h6>Email: {filData.email}</h6>
                <h6>Address: {filData.address}</h6>
            </div>
            <Link to={"/"}>Go Back</Link>
        </>
    )

}