import React from 'react'

function GifList(props) {
    
    const createImageJSX = (image) => {
        console.log(image)
        return (
            <li key={Math.random()}>
                <img src={`${image.images.fixed_height.url}`} alt="alt" /> 
            </li>
        )
    }
    console.log(props.images)
    return (
        <ul>

    {props.images.map(image => createImageJSX(image) )}

        </ul>
    )
}

export default GifList