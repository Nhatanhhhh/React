import Item from "./Item";
import './Product.css'
import styles from './Product.module.css'
import './Item.css'
import ProductItem from "./ProductItem";

function Product() {
    const products = [
        {
            id: 1,
            name: 'sp1',
            price: 300,
            image: 'https://anhnail.com/wp-content/uploads/2024/11/Hinh-gai-xinh-2k4.jpg'
        },
        {
            id: 2,
            name: 'sp2',
            price: 700,
            image: 'https://anhnail.com/wp-content/uploads/2024/11/Hinh-gai-xinh-2k4.jpg'
        },
        {
            id: 3,
            name: 'sp3',
            price: 500,
            image: 'https://anhnail.com/wp-content/uploads/2024/11/Hinh-gai-xinh-2k4.jpg'
        }
    ]
    return (
        <>
            <h2 className="product">Danh sách sản phẩm</h2>
            <p className={styles.textHeader} >Danh sách</p>
            <div className="_product_list">
                {/* {products.map((item) => <li>{item.name}</li>)} */}
                {products.map((item) =>
                    // <div className="item">
                    //     <div className="content">
                    //         <img src={item.image} />
                    //         <p>{item.name}</p>
                    //         <p>Giá: {item.price}</p>
                    //     </div>
                    // </div>
                    // <Item image={item.image} name={item.name} price={item.price} />
                    <ProductItem id={item.id} image={item.image} name={item.name} price={item.price} />
                )}
            </div>
        </>
    );
}

export default Product;