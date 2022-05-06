import {render, screen} from '@testing-library/react'
import {MemoryRouter} from "react-router-dom";

import MemRouter from "../../utils/TestUtils/MemRouter";

import App from "../App/App";
import Auth from "./Auth";

describe('AUTH TEST', () => {
    test('input login test', () => {
        render(MemRouter(<Auth/>))

        expect(1 + 1).toBe(2);
    })
})