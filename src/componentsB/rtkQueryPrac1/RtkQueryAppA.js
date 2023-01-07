import { Provider } from "react-redux"
import { Navigate, Route, Routes } from "react-router-dom"
import { ContactsAllList } from "./contactComp/ContactsAllList"
import { EditStData } from "./contactComp/editComp/EditStData"
import { reduxStore } from "./contactComp/reduxStore"
import { FormUpdate } from "./contactComp/updateDataComp/FormUpdate"
import { View } from "./contactComp/viewData/Views"

export const RtkQueryAppA = () => {
    return (
        <div>
            <Provider store={reduxStore}>
                <Routes>
                    <Route path="/" element={<Navigate to="/contacts" />} />
                    <Route path="/contacts" element={<ContactsAllList />} />
                    <Route path="/contacts/adddata" element={<FormUpdate />} />
                    <Route path="/contacts/edit:id" element={< EditStData />} />
                    <Route path="/contacts/view:id" element={<View />} />
                </Routes>
            </Provider>
        </div>
    )
}