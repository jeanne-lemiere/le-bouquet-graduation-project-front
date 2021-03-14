import React, { useEffect } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import CartProduct from '../../containers/CartProduct';

const Cart = ({fetchCartProducts, cartProducts}) => {
    useEffect(() => {  
        fetchCartProducts()
    }, []);
      
    let totalPrice=0;
    let cartDisplay;

    if (cartProducts.length < 1) {
        cartDisplay = <h2 className="empty-cart">Votre panier est vide, n'hésitez pas à visitez la page  <Link to='/nos-fleurs'>nos fleurs </Link> pour ajouter des articles</h2>
    }
     else {
        console.log('nouveaux ',cartProducts)
        cartProducts.map((product) => (
        totalPrice = totalPrice + parseFloat(product.data.price)))
        cartDisplay = cartProducts.map((product) => (
            <CartProduct key={product.data.id} id={product.data.id} name={product.data.name} image={product.data.images[0].url} price={product.data.price} description={product.data.description} quantity={product.data.quantity}/>
        ))
} 


    return (
        <div className="card">
            {/* <div className="sub-card"> */}
                <div className="card__top">
                    <h2 className='card__title'>Votre panier</h2>
                    <Link to='/récapitulatif' className='card__next'>Passer la commande</Link>
                </div>
                    <Link to='/nos-fleurs'>← Retourner à la boutique</Link>

                <div className="card__content">
                    <div className="card__products">
                        {/* {cartProducts} */}
                        {cartDisplay}
                        
                        
                    </div>
                    <div className="card__total-container">
                        <p className="card__total">Total TTC : <span>{totalPrice}€</span></p>
                    </div>
                    
                </div>
            {/* </div> */}
    </div>
    )
};

export default Cart;
