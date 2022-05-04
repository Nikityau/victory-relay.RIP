import { render, screen } from '@testing-library/react'
import {MemoryRouter} from "react-router-dom";

import Auth from "./Auth";
import App from "../App/App";

describe('AUTH TEST', () => {
    test('input login test', () => {
        render(<MemoryRouter>
            <App/>
        </MemoryRouter>)

        expect(1 + 1).toBe(2);
    })
})