import React from 'react';
import preloader from './../../../images/preloader.gif';

let Preloader = (props) => {
    return(
        <img style={{height: 200, width: 200, objectFit: 'contain', display: 'inline'}} src={preloader} />
    )
}

export default Preloader;