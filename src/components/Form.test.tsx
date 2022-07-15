
import {afterEach, beforeEach, describe, expect, it, test} from 'vitest';
import {cleanup, render, screen} from '@testing-library/react';
import Form from './Form';

describe("Form", () => {

    it(`should not show error message initially`, () =>{
        render(<Form/>)
        const ErrorId = screen.getByTestId(`error`)
        expect(ErrorId).toBeNull
    })
    it("should show title all the time", () => {
        
       render(<Form/>)

        expect(screen.getByText(/Personal Information/i)).toBeDefined()
    })
})