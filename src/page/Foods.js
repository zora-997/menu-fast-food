import React from 'react'
import { data } from "../data/data"

const Foods = () => {
    return (
        <div>

            <div>
                {data.map(data => {
                    return (
                        <div key={data.id} >
                            <p>{data.name}</p>
                            <img src={data.image} alt={data.name} />
                            <p>{data.price}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Foods