import './Item.css'

function Item({image, name, price}) {
    return (
        <>
            <div className="item">
                <div className="content">
                    <img src={image} />
                    <p>{name}</p>
                    <p>Giá: {price}</p>
                </div>
            </div>
        </>
    );
}

export default Item;