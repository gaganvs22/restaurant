import React from 'react';

function MenuItem({image,name,price}) {
  return (
    <div className='menuItem'>
            <div style={{backgroundImage : `url(${image})`}}></div>
            <h1>{name}</h1>
            <p>{'\u20B9'}{price}</p>

    </div>
  )
}

export default MenuItem;