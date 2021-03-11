import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

const Cart = () => (
    <div className="card">
        {/* <div className="sub-card"> */}
            <div className="card__top">
                <h2 className='card__title'>Votre panier</h2>
                <Link to='/récapitulatif' className='card__next'>Passer la commande</Link>
            </div>
                <Link to='/nos-fleurs'>← Retourner à la boutique</Link>

            <div className="card__content">
                <div className="card__products">
                    <div className="card__product" id="1"> {/*un produit */}

                        <div className="card__product__img-container">
                            <Link to="/product/1" className="card__img-link"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Biedermeierstrau%C3%9F_aus_Seidenblumen_und_pr%C3%A4parierten_Rosen.JPG/1200px-Biedermeierstrau%C3%9F_aus_Seidenblumen_und_pr%C3%A4parierten_Rosen.JPG" alt='image'></img></Link>
                        </div>

                        <div className="card__product__info">
                            <div className="info__left">
                                <h3 className="info__left__title"><Link to='product/1'>Printemps des fleurs</Link></h3>
                                <p className="info__left__description">Les tulipes sont des plantes à bulbes appartenant à la grande famille des Liliacées. Le genre Tulipa comprend une centaine d’espèces distribuées en Europe, de l’Asie occidentale à l’Asie centrale et en Afrique du Nord. Ce genre est représenté aussi par des milliers de cultivars et hybrides, sélectionnés depuis qu’elles ont été introduites en Occident par Charles de l’Écluse au 16e siècle.</p>
                                <div className='see-more'></div>
                                <p className="quantity-container">
                                    <span className="info__left__quantity-text">Quantité :</span>
                                    <button className="info__left__quantity-less">-</button>
                                    <span className="info__left__quantity-number">1</span>
                                    <button className="info__left__quantity-more">+</button>
                                </p>
                                <p className="price-price"><span className='info__price-container'>Prix</span> : <span className="info__price-content"> 23.90€</span></p>
                            </div>
                            
                        </div>

                    </div>

                    <div className="card__product" id="2"> {/*un produit */}
                        <div className="card__product__img-container">
                            <Link to="/product/1" className="card__img-link"><img src="https://www.fleursmariage.com/3976-large_default/bouquet-decoratif-lausanne.jpg" alt='image'></img></Link>
                        </div>

                        <div className="card__product__info">
                            <div className="info__left">
                            <h3 className="info__left__title"><Link to='product/1'>Camélias de la Dame</Link></h3>
                                <p className="info__left__description">Fleur symbolique du 1er mai, le muguet séduit par ses délicates clochettes blanches. Cette fleur de la famille des Liliacées se trouve communément dans tout l'hémisphère nord. Plusieurs variétés ont été mises au point à partir de l'espèce : 'Albostriata', 'Flore Pleno', etc.</p>
                                <div className='see-more'></div>
                                <p className="quantity-container">
                                    <span className="info__left__quantity-text">Quantité :</span>
                                    <button className="info__left__quantity-less"> -</button>
                                    <span className="info__left__quantity-number">1</span>
                                    <button className="info__left__quantity-more">+</button>
                                </p>
                                <p className="price-price"><span className='info__price-container'>Prix</span> : <span className="info__price-content"> 25.90€</span></p>
                            </div>
                                
                        </div>
                    </div>
                </div>
                <div className="card__total-container">
                    <p className="card__total">Total TTC : <span>49.80</span></p>
                </div>
                
            </div>
        {/* </div> */}
  </div>
);

export default Cart;
