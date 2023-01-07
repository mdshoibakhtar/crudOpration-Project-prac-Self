import { Provider } from "react-redux"
import { CompA } from "./c-Rtk/compA"
import { CompB } from "./c-Rtk/CompB"
import { OtherComp } from "./c-Rtk/OtherComp"
import { rtkStore } from "./c-Rtk/st-scl/rtkStore"

export const Parents = () => {
    return (
        <div>
            <Provider store={rtkStore}>
                <div style={{ display: 'flex' }}>
                    <CompA />
                    <CompB />
                </div>
                <div>
                    <OtherComp />
                </div>
            </Provider>
        </div>
    )
}