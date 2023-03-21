import React from 'react'

function New() {
    return ( 
        <div>
            <h1>New Pokemon</h1>
            <form action="/pokemon" method="POST">
                <label htmlFor="nme">Name:</label><br />
                <input type="text" id="nme" name="name" /><br /><br />

                <label htmlFor="img">Link:</label><br />
                <input type="text" id="img" name="img" /><br /><br />

                <button>Submit</button>
            </form>
        </div>
    );
}

export default New;