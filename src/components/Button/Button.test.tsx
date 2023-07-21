import React from 'react'
import {render} from '@testing-library/react'

import Button from './Button'

describe('Button component', () => { 
    it('should render properly', () => {
        const {container} = render(<Button label='Hi' />)
        expect(container).toMatchSnapshot()
    })
 })