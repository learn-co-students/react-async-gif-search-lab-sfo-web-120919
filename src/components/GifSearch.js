import React from 'react';


function GifSearch(props) {
    return <div>
        <input type="text" name="query" id="query" value={props.query} onChange={props.onQueryChange} />
        <button onClick={props.handleGifQuery}>Search</button>
    </div>


}

export default GifSearch