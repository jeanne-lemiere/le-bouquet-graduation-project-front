import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import './styles.scss';
import OrderProduct from './OrderProduct';


const OrderProducts = ({fetchOrderProducts, orderProducts}) => {
    const { orderId } = useParams();
    console.log("orderId vaut:", orderId)
    useEffect(() => {
        fetchOrderProducts(orderId);
        // console.log("orderProducts: ",orderProducts)
      }, []);

      if (Object.entries(orderProducts).length === 0) {
        console.log("vide orderProducts: ",orderProducts)
        //   return <p>Chargement</p>
      } else {
        console.log(" oui orderProducts: ",orderProducts, orderProducts.length)
      }
    return (
        <div className="order-content">
            {
            Object.entries(orderProducts).length === 0 && <p>Chargement</p>
            }
            
            {Object.entries(orderProducts).length > 0 && ( 
                <> 
                    <h1>Détails d'une commande</h1>
                    <h2>Référence de la commande: {orderProducts.reference}</h2>
                    <div className="order-destinataire">
                        <h2>Destinataire</h2>
                        <p>Nom: {`${orderProducts.customer.firstname} ${orderProducts.customer.lastname}`}</p>
                        <p>Adresse: {`${orderProducts.customer.street_number} ${orderProducts.customer.street_name}`}</p>
                        <p>Ville: {`${orderProducts.customer.zipcode} ${orderProducts.customer.city}`}</p>
                        <p>Email: {orderProducts.customer.email}</p>
                        <p>Tél: {orderProducts.customer.phone_number}</p>
                    </div>
                    <div className="order-products">
                        <h2>Contenu de la commande</h2>
                        {orderProducts.products.map((product) => {
                            console.log("product: ",product)
                            return (
                            <OrderProduct
                                key={product.id}
                                product={product}
                            />

                        )})}
                    </div>
                </>
                )
            }

        </div>
)};

OrderProducts.propTypes = {
    orderProducts: PropTypes.object,
//   zipcode: PropTypes.string.isRequired,
//   street_number: PropTypes.string.isRequired,
//   shop_name: PropTypes.string.isRequired,
//   street_name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   city: PropTypes.string.isRequired,
};

OrderProducts.defaultProps = {
    orderProducts: {},
};
export default OrderProducts;
