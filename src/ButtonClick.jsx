import React from 'react'

function ButtonClick({colorBtn, titleBtn, hrefBtn}) {
    return (
        <>
            <a style={{color:colorBtn}} href={hrefBtn}>{titleBtn}</a>
        </>
    )
}

export default ButtonClick