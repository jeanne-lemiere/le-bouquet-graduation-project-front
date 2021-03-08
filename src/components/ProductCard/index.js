import React from 'react';
// import PropTypes from 'prop-types';
// import { useParams } from 'react-router-dom';
// import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.scss';
// import Erreur404 from '../Erreur404';


const ProductCard = ({
  imgLink,
  name,
  id,
  price
}) => (
  <article className="product">
    <Link to={`/product/${id}`}>
      {/* <div className="product-image-container"> */}
      <img className="product-img" src={imgLink} alt="femme"/>
      {/* </div> */}
      <div className="product-caption">
        <h2 className="product-title">{name}</h2>
        <p className="product-price">{price}€</p>
      </div>
    </Link>
  </article>

);

ProductCard.propTypes = {
  imgLink: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default ProductCard;


// const SinglePost = ({ posts }) => {
//   // On extrait l'id des paramètres de la route
//   const { id } = useParams();
//   // Puis on cherche l'article demandé parmi la liste des articles
//   // On oublie pas les parseInt pour le === car il faut que les id aient le même type sinon ça passe pas
//   const articleFound = posts.find(
//     (post) => parseInt(post.id, 10) === parseInt(id, 10),
//   );

//   // On teste si on a trouvé l'article
//   // Si on l'a pas trouvé on renvoie le composant 404
//   if (!articleFound) {
//     return <Erreur404 />;
//   }
//   // Si on a trouvé l'article, on extrait les variables depuis cet article
//   // Attention de renommer l'id puisqu'il est déclaré plus haut
//   const {
//     id: postId, title, category, content,
//   } = articleFound;

//   return (
//     <article className="single_post" id={`single_post-${postId}`}>
//       <h2 className="single_post__title">{title}</h2>
//       {category ? (
//         <div className="single_post__category">{category}</div>
//       ) : null}
//       <p
//         className="single_post__detail"
//         dangerouslySetInnerHTML={{
//           __html: DOMPurify.sanitize(content),
//         }}
//       />
//     </article>
//   );
// };

// SinglePost.propTypes = {
//   posts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       content: PropTypes.string.isRequired,
//       category: PropTypes.string,
//     }),
//   ),
// };

// SinglePost.defaultProps = {
//   posts: [],
// };

// export default SinglePost;