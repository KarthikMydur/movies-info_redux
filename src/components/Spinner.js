import React from 'react'
import spinner from './spinner.gif'
import { Simulate } from 'react-dom/test-utils'

function Spinner() {
    return (
        <div>
            <img src = {spinner}
            style ={{width: '200px', margin:'auto', display: 'block'}}
            alt='Loading...!!'
            />
        </div>

    )
}
export default Spinner