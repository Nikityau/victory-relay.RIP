import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";

import MemRouter from "../../utils/TestUtils/MemRouter";

import Auth from "./Auth";

describe('AUTH TEST', () => {
    test('auth route', () => {
        render(MemRouter(<Auth/>));

        expect(screen.getByTestId('input-login')).toBeInTheDocument();
        expect(screen.getByTestId('password-input')).toBeInTheDocument();
        expect(screen.getByTestId('button-login')).toBeInTheDocument();
    })
    test('input login test', () => {
        render(MemRouter(<Auth/>))

        expect(screen.getByTestId('input-login')).toContainHTML('');
        userEvent.type(screen.getByTestId('input-login'), 'Xx__XyL1G@n__xX');
        expect(screen.getByTestId('input-login')).toContainHTML('Xx__XyL1G@n__xX');
    })
    test('focus login test', () => {
        render(MemRouter(<Auth/>))

        expect(screen.getByTestId('login-focus-img')).toBeInTheDocument();
        userEvent.click(screen.getByTestId('login-focus-img'));
        expect(screen.getByTestId('input-login')).toHaveFocus()
    })
    test('input password test', () => {
        render(MemRouter(<Auth/>))

        expect(screen.getByTestId('password-input')).toContainHTML('');
        userEvent.type(screen.getByTestId('password-input'), '12345678');
        expect(screen.getByTestId('password-input')).toContainHTML('12345678');
    })
    test('focus password test', () => {
        render(MemRouter(<Auth/>))

        expect(screen.getByTestId('password-focus-img')).toBeInTheDocument();
        userEvent.click(screen.getByTestId('password-focus-img'))
        expect(screen.getByTestId('password-input')).toHaveFocus()
    })
})