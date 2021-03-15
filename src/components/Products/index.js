import React, { useState, useEffect } from "react";
import './styles.scss';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard';


const Products = ({ products }) => {
  
  // Pour la recherche des produits, utilisation de useState
  const [search, setSearch]  = useState("");
  const [categoryName, setCategoryName] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // mise en place d'un useEffect pour la recherche et les filtres
  useEffect(() => {
    // > 0 car on ne propose pas la category qui affiche tout
    if (categoryName > 0){
    setFilteredProducts(
      products.filter((product) =>
        // ici on filtre par rapport au name && par rapport à l'id de la category
        product.name.toLowerCase().includes(search.toLowerCase()) && product.category_id==categoryName
      )
    );}
    // si il n'y a pas de category on affiche seulement les resultats donnés par la recherche
    else {
      setFilteredProducts( 
        products.filter((product) =>
          product.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, products, categoryName]);


  if (!products) {
    return <p>chargement</p>;
  }
  return (
    <>
      <form className="input-form">
        <input className="input-form__search" type="text" placeholder="Rechercher..." onChange={(event) => setSearch(event.target.value)}></input>
        <div className="input-form__categories">
          <input type="radio" id="0" name="catégorie" onChange={(event) => setCategoryName(event.target.id)}></input>
          <label htmlFor="0">Toutes</label>
          <input type="radio" id="1" name="catégorie" onChange={(event) => setCategoryName(event.target.id)}></input>
          <label htmlFor="1">Mariage</label>
          <input type="radio" id="2" name="catégorie" onChange={(event) => setCategoryName(event.target.id)}></input>
          <label htmlFor="2">Funérailles</label>
          <input type="radio" id="3" name="catégorie" onChange={(event) => setCategoryName(event.target.id)}></input>
          <label htmlFor="3">Naissance</label>
          <input type="radio" id="4" name="catégorie" onChange={(event) => setCategoryName(event.target.id)}></input>
          <label htmlFor="4">Déclaration d'amour</label>
          <input type="radio" id="5" name="catégorie" onChange={(event) => setCategoryName(event.target.id)}></input>
          <label htmlFor="5">Anniversaire</label>
          <input type="radio" id="6" name="catégorie" onChange={(event) => setCategoryName(event.target.id)}></input>
          <label htmlFor="6">Félicitations</label>
      </div>
      </form>
      <div className="products">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} id={product.id} name={product.name} imgLink={product.images[0].url} price={product.price} />
        ))}
      </div>
    </>
  );
};

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
    }),
  ),
};

Products.defaultProps = {
  products: [],
};

export default Products;
