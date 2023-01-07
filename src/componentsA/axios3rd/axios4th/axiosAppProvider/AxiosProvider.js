import { Provider } from "react-redux"
import { AxiosComp } from "./AxiosComp"
import { todosStore } from "../todosStore"
export const AxiosProvider = () => {
    return (
        <div>
            <Provider store={todosStore}>
                <AxiosComp />
            </Provider>
        </div>
    )
}