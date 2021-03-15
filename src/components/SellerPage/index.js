import React, {useEffect} from 'react';
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.scss';
import ProductCard from '../ProductCard';


const SellerPage = ({ fetchOneSeller, zipcode, phone_number, shop_name, street_name, street_number, city, email, picture_url, id, products}) => {

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
            <div className="seller-info">
                <h2>Bienvenue dans la boutique {products[0].shop_name}</h2>
                <img src={products[0].picture_url}></img>
            </div>
            <div className="seller-page__products">
                <h2>Ce que je vends</h2>
                { products.length>1 
                ? (<div className="products">
                        {products[1].map((product) => (
                            <ProductCard key={product.id} id={product.id} name={product.name} imgLink={product.images[0].url} price={product.price} />
                        ))}
                    </div>)
                
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
