import React from 'react'

function Show(props) {
    const imgLink = props.pokemon.img 
    const imageLinkpart1 = imgLink.slice(0, imgLink.length -1) 
    const imageLinkpart2 = imgLink.slice(imgLink.length - 1) + '.jpg'
    const image = imageLinkpart1 + imageLinkpart2

    return (
            <div>
                <h1>Gotta Catch 'Em All</h1>
                    <h2>
                        <strong>{props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1)}</strong>
                    </h2>
                    <img src={image}/> <br />
                    <a href="/pokemon">Back</a>
            </div>
    )
}

export default Show