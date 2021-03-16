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
          
          
            <div className="seller-info">

                <h2>Bienvenue dans la boutique {products[0].shop_name}</h2>
                <div className = "seller-info__pres">
                <img className = "seller-info__pres__picture" src={products[0].picture_url}></img>
               
                <div className = "seller-info__pres__adress">
                  <p className = "adress__title"> 
                    {products[0].shop_name}
                  </p>
                  <p className = "adress__info">
                    {products[0].street_number} {products[0].street_name}
                  </p>
                  <p className = "adress__info">
                    {products[0].zipcode} {products[0].city}
                  </p>
                  <p className = "adress__info">
                    {products[0].phone_number} {products[0].email}</p>
                </div>
                <div className="seller-info__pres__description">
                   <p>{products[0].shop_presentation} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis, massa nec cursus feugiat, elit ex eleifend orci, viverra dapibus lorem massa at erat. Morbi volutpat nec diam quis hendrerit. Cras dictum suscipit tortor, vel blandit massa rutrum ac. In at erat luctus, euismod massa vel, hendrerit nisi. Aliquam erat volutpat. Mauris iaculis, felis quis commodo eleifend, leo massa viverra mi, sit amet semper arcu purus at lectus. Mauris ex metus, cursus sit amet lacinia interdum, dapibus eu est. Nam fringilla consectetur ipsum, vitae dignissim augue congue eu. Nunc feugiat, dolor at commodo efficitur, mauris odio euismod ex, non fermentum dui risus vel ligula. Donec feugiat viverra quam, ut hendrerit arcu rutrum sodales. In non quam lacus. Vestibulum eget dui ante.

Aenean eleifend nisi nec neque scelerisque, et elementum augue dignissim. Nullam in leo in dolor eleifend iaculis. </p>
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
