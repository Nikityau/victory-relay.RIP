import {MemoryRouter} from "react-router-dom";


export default (component) => {
    return (
        <MemoryRouter>
            { component }
        </MemoryRouter>
    )
}
