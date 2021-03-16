import { connect } from 'react-redux';

// ici nous chargeons la vue html du component
import OurProducers from 'src/components/OurProducers';

// cela sert de lien entre les composants et les reducers qui modifient le state
// C'est donc ici que l'ont note toutes les props
const mapState = (state) => ({
  // producers ici peut s'appeler de n'importe quelle facons t'en que la props
  // est recupérée dans les props du component
  // cette donnée ci est envoyé au reducer/index.js pour y etre traitée
  producers: state.producer.producers,
});

// On cree le container qui recupere l'action + payload qui va "dispatch(toto)" au reducer (en passant par middleware)

const mapDispatchToProps = {};

export default connect(mapState, mapDispatchToProps)(OurProducers);
