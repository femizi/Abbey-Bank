
import {describe, expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import Form from './Form';

describe("Form test", () => {
    test("should show title all the time", () => {
        
        render(<Form />);

        expect(screen.getByText(/Personal Information/i)).toBeDefined()
    })
})