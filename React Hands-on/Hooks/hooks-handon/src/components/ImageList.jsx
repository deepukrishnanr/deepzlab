import React from 'react';

export const ImageList = (props) => {
    return(
        <div>
            {
                props.images.map(({urls, id, description}) => <img src={urls.regular} key={id} alt={description}/>)
            }
        </div>
    )
}