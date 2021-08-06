import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss';
import ProductCard from '../ProductCard';

const SellerPage = ({
  fetchOneSeller, zipcode, phone_number, shop_presentation, shop_name, street_name, street_number, city, email, picture_url, id, products,
}) => {
  const { sellerId } = useParams();
  let loading = true;
  if (products.length > 0) {
    loading = false;
  }

  useEffect(() => {
    fetchOneSeller(sellerId);
  }, []);

  if (loading) {
    return <p>Chargement en cours</p>;
  }
  return (
    <div className="seller-page">
      <div className="seller-info">

        <img className="seller-info__picture" src={products[0].picture_url} />

        <div className="seller-info__pres__text">
          <h1>
            {products[0].shop_name}
          </h1>
          <div className="seller-info__pres__adress">

            <div className="adress__info">
              <div>
                <p>
                  {products[0].street_number} {products[0].street_name}
                </p>
                <p>
                  {products[0].zipcode} {products[0].city}
                </p>
              </div>
              <div className="contact">
                <p>
                  {products[0].phone_number}
                </p>
                <p>{products[0].email}</p>
              </div>
            </div>
          </div>

          <div className="seller-info__pres__description">
            <p>{products[0].shop_presentation}  </p>
          </div>
        </div>
      </div>
      <div className="seller-page__products">
        { products.length >= 1
          ? (
            <ul className="products">
              {products[1].map((product) => (
                <ProductCard key={product.id} id={product.id} name={product.name} imgLink={product.images[0].url} price={product.price} />
              ))}
            </ul>
          )

          : <p>Aucun produit à vendre</p>}

      </div>
    </div>
  );
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
