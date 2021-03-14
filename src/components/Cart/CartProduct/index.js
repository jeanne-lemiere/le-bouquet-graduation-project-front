import React, { useState, useEffect } from 'react';
import '../styles.scss';
import { Link } from 'react-router-dom';

const CartProduct = ({id, image, name, description, price, quantity}) => {
    // const [quantity, setQuantity] = useState(0);
    // // setQuantity(foundProduct.quantity)
   
    
    // // let foundProduct;
    // // let cartProducts;

    // useEffect(() => {  
        
    // }, [foundProduct]);
    
    const moreQuantity = () => {
        
    }
    

    const lessQuantity = () => {
        
    }

    
    // let cartProducts = JSON.parse(localStorage.getItem('cart'));    

    // let foundProduct;
    // if (cartProducts && id) {
    //     foundProduct = cartProducts.find(product => parseInt(product.id) === parseInt(id));

    //     // setQuantity(foundProduct.quantity)
    // } 


    // let newCart;
    // const moreQuantity = () => {
    //     if (!foundProduct) {
    //         return console.log("foundProduct vaut : ", foundProduct)
    //     }
    //     console.log("Avant ajout : ", JSON.parse(localStorage.getItem('cart')))
    //     cartProducts = JSON.parse(localStorage.getItem('cart'));
    //     foundProduct = cartProducts.find(product => parseInt(product.id) === parseInt(id));
    //     // foundProduct = cartProducts.find(product => parseInt(product.id) === parseInt(id));
    //     // console.log("fontion lessquantity")
    //     // console.log("avant",foundProduct)
    //     foundProduct.quantity++
    //     // console.log("après",foundProduct)
    //     localStorage.setItem("cart", JSON.stringify(cartProducts));

    //     setQuantity(foundProduct.quantity)
    //     console.log("Après ajout : ", JSON.parse(localStorage.getItem('cart')))
    // };

    // const lessQuantity = () => {
    //     if (!foundProduct) {
    //         return console.log("foundProduct vaut : ", foundProduct)
    //     }
    //     // foundProduct = cartProducts.find(product => parseInt(product.id) === parseInt(id));
    //     // console.log("fontion lessquantity")
    //     // console.log("avant",foundProduct)
    //     console.log("Avant delete : ", JSON.parse(localStorage.getItem('cart')))
    //     cartProducts = JSON.parse(localStorage.getItem('cart'));
    //     foundProduct = cartProducts.find(product => parseInt(product.id) === parseInt(id));
    //     foundProduct.quantity--

    //     // console.log("après",foundProduct)
    //     localStorage.setItem("cart", JSON.stringify(cartProducts));

    //     setQuantity(foundProduct.quantity)
    //     console.log("Après delete : ", JSON.parse(localStorage.getItem('cart')))
    //     console.log("arpès delete foundProduct.quantity : ", foundProduct.quantity)
    //     if (foundProduct.quantity <= 0) {
    //         deleteProduct()
    //     }

    // };

    // const deleteProduct = () => {
    //     setQuantity(0)
    //     console.log('fonction delete ')
    //     const oldCart = JSON.parse(localStorage.getItem('cart'));
    //     newCart = oldCart.filter (product => parseInt(product.id) !== parseInt(id))
    //     localStorage.setItem("cart", JSON.stringify(newCart));
    //     foundProduct=0;
    // }

    // if (!foundProduct) {
    //     console.log("foundProduct vaut nul :", foundProduct)
    //     return null;
    // }
    return (     
        <div className="card__product" id={id}> {/*un produit */}

            <div className="card__product__img-container">
                <Link to={`/product/${id}`} className="card__img-link"><img src={image} alt='image'></img></Link>
            </div>

            <div className="card__product__info">
                <div className="info__left">
                    <h3 className="info__left__title"><Link to='product/1'>{name}</Link></h3>
                    <p className="info__left__description">{description}</p>
                    <div className='see-more'></div>
                    <p className="quantity-container">
                        <span className="info__left__quantity-text">Quantité :</span>
                         <button className="info__left__quantity-less">-</button> 
                        <span className="info__left__quantity-number">{quantity}</span>
                        <button  className="info__left__quantity-more">+</button>
                    </p>
                    <p className="price-price"><span className='info__price-container'>Prix</span> : <span className="info__price-content"> {price}€</span></p>
                </div>
                
            </div>

        </div>

                        
    )
};

export default CartProduct;


// https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Biedermeierstrau%C3%9F_aus_Seidenblumen_und_pr%C3%A4parierten_Rosen.JPG/1200px-Biedermeierstrau%C3%9F_aus_Seidenblumen_und_pr%C3%A4parierten_Rosen.JPG