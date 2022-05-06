import {MemoryRouter} from "react-router-dom";


export default (component, initialRoute = '') => {
    return (
        <MemoryRouter initialEntries={[initialRoute]}>
            { component }
        </MemoryRouter>
    )
}
