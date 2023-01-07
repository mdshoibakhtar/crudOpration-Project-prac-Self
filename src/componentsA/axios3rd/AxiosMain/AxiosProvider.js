import { Provider } from "react-redux"
import { AxiosComp } from "./AxiosComp"
import { store } from "../store"

export const AxiosProvider = () => {
    return (
        <div>
            <Provider store={store}>
                <AxiosComp />
            </Provider>
        </div>
    )
}