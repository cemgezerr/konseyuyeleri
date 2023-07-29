import React from 'react'
import data from '../data.json'
import '../App.css'


const Filter = (props) => {

    return (
        <div>
            {data
                .filter((val) => {
                    if (props.value === '') {
                        return true; // Tüm verileri göster
                    } else {
                        return val.title.toLowerCase().includes((props.value).toLowerCase()); // Arama terimine göre filtrele
                    }
                })
                .map((val) => {
                    return (
                        <div className='data' key={val.id}>
                            <img src={val.image} alt={val.title} />
                            <h3>{val.title}</h3>
                            <p>{val.Description}</p>
                        </div>
                    );
                })}
        </div>
    )
}

export default Filter