import React from 'react'

function Index(props) {
    return(
        <div>
            <h1>See All Pokemon</h1>
            <ul>
                {props.pokemons.map((poke, index) =>
                <li key={index}>
                    <a href={`/pokemon/${poke._id}`}> {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)} </a>
                </li>

                )}
            </ul>
        </div>
    )
}

export default Index