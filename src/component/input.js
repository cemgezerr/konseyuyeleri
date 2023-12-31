import React from 'react'
import '../App.css'

const Input = (props) => {
    return (
        <div>
            <input
                className='search'
                type='text'
                placeholder='Konsey üyesi adını giriniz'
                onChange={(e) => props.value(e.target.value)}
            /></div>
    )
}

export default Input