import React from 'react';
import {describe, test, expect} from "vitest";
import Banner from '.';
import { render, screen} from '@testing-library/react';


describe ("Testando o Banner",() => {
     test("Meu primeiro teste",() => {
         expect(1 + 3).equal(4);
     });

     
     test('should render the image element', () => {
        render(<Banner />);

        expect(screen.getByRole('img')).toHaveAttribute('alt', 'O banner principal da minha aplicação');
     })
});