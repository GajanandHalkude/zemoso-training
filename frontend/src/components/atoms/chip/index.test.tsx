import ChipItem from '.';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import theme from '../../../theme';
import React from 'react';

describe('Atoms/ChipItem', () => {
    test('Renders rounded light chip', () => {
        render(<ChipItem chipVariant='light' label='24 h' chipType='rounded'/>)
        expect(screen.getByTestId('chip')).toBeInTheDocument();
    });

    test('Renders rounded dark chip', () => {
        render(<ChipItem chipVariant='dark' label='Purchased' chipType='rounded'/>)
        expect(screen.getByTestId('chip')).toBeInTheDocument();
    })

    test('Renders square chip unselected', () => {
        render(<ChipItem chipType='squared' selected={false} label={'Bitcoin'} chipColor={theme.palette.chipColors.main}/>)
        expect(screen.getByTestId("chip")).toBeInTheDocument();
    })

    test('Renders square chip selected', () => {
        render(<ChipItem chipType='squared' selected={true} label={'Bitcoin'} chipColor={theme.palette.chipColors.main}/>)
        expect(screen.getByTestId('chip')).toBeInTheDocument();
    })
})