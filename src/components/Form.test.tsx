
import {afterEach, beforeEach, describe, expect, it, test} from 'vitest';
import {cleanup, render, screen} from '@testing-library/react';
import Form from './Form';

describe("Form", () => {
let errorId
let getByTestId
    beforeEach(()=> {
        const form = render(<Form/>)
        getByTestId = form.getByTestId
        errorId = getByTestId(`error`)

    })
    afterEach(()=>{
        cleanup()
    })
    it(`should not show error message initially`, () =>{
        expect(errorId).toBeNull
    })
    it("should show title all the time", () => {
        
       

        expect(screen.getByText(/Personal Information/i)).toBeDefined()
    })
})