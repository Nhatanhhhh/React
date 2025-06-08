import React from 'react'

function ProductItem(props) {
    return (
        <>
            <div className="item">
                <div className="content">
                    <img src={props.image} />
                    <p>ID: {props.id}</p>
                    <p>{props.name}</p>
                    <p>Giá: {props.price}</p>
                </div>
            </div>
        </>
    )
}

export default ProductItem