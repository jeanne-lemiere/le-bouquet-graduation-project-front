import React, {useEffect} from 'react';
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.scss';
import ProductCard from '../ProductCard';


const SellerPage = ({ fetchOneSeller, zipcode, phone_number, shop_presentation, shop_name, street_name, street_number, city, email, picture_url, id, products}) => {

    let { sellerId } = useParams();
    let loading=true;
    if (products.length>0) {
        loading= false;
        console.log("id selelr vaut " + sellerId)
        console.log("ici sellerpage, products :", products)
        console.log("ici sellerpage, name :", products[0].firstname)
    }
    
    useEffect(() => {
        fetchOneSeller(sellerId);
      }, []);

    
      if (loading) {
          return <p>Chargement en cours</p>
      }
    return (
        <div className="seller-page">
          
          <h2>Bienvenue dans la boutique {products[0].shop_name}</h2>
            <div className="seller-info">
                
                <img className = "seller-info__picture" src={products[0].picture_url}></img>
                
                <div className = "seller-info__pres__text">
                <p className = "adress__title"> 
                    {products[0].shop_name}
                  </p>
               <div className = "seller-info__pres__adress">
                  
                  <div className = "adress__info">
                  <b>Adresse :</b> 
                  <p >
                    {products[0].street_number} {products[0].street_name}
                  </p>
                  <p >
                    {products[0].zipcode} {products[0].city}
                  </p>
                  <b>Numéro de téléphone:</b>
                  <p >
                    {products[0].phone_number} 
                  </p>
                    <b>Email:</b>
                    <p>{products[0].email}</p>
                </div>
                </div>

                <div className="seller-info__pres__description">
                   <b>Qui sommes nous?</b>
                   <p>{products[0].shop_presentation}  </p>
                </div>
                </div>
            </div>
            <div className="seller-page__products">
                <h2>Notre Boutique
                </h2>
                { products.length>=1 
                ? (<ul className="products">
                        {products[1].map((product) => (
                            <ProductCard key={product.id} id={product.id} name={product.name} imgLink={product.images[0].url} price={product.price} />
                        ))}
                    </ul>)
                
                : <p>Aucun produit à vendre</p>
                }
                
            </div>
        </div>
    )


};

SellerPage.propTypes = {

  products: PropTypes.array,
//   street_number: PropTypes.string.isRequired,
//   shop_name: PropTypes.string.isRequired,
//   street_name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   city: PropTypes.string.isRequired,
};

SellerPage.defaultProps = {
    products: [],
  };

export default SellerPage;
