// A form validation function that returns an object of possible errors
export default (values) => {
  const errors = {};
  if (!values.lastname) {
    errors.lastname = "Vous n'avez pas rempli votre nom.";
  }
  else if (values.lastname.length > 20) {
    errors.lastname = 'Le nom ne doit pas excéder 20 caractères.';
  }
  if (!values.firstname) {
    errors.firstname = "Vous n'avez pas rempli votre prénom.";
  }
  else if (values.firstname.length > 20) {
    errors.firstname = 'Le prénom ne doit pas excéder 20 caractères.';
  }
  if (!values.email) {
    errors.email = "Vous n'avez pas rempli votre email.";
  }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Adresse email invalide.';
  }
  if (!values.password) {
    errors.password = "Vous n'avez pas rempli votre mot de passe.";
  }
  else if (values.password.length < 8) {
    errors.password = 'Le mot de passe doit faire au moins 8 caractères.';
  }
  if (!values.passwordConfirm) {
    errors.passwordConfirm = 'Vous devez confirmer le mot de passe.';
  }
  if (values.password !== values.passwordConfirm) {
    errors.passwordConfirm = 'Les deux mots de passe ne correspondent pas.';
  }
  if (!values.street_number) {
    errors.street_number = "Vous n'avez pas rempli le n° de rue.";
  }
  if (!values.zipcode) {
    errors.zipcode = "Vous n'avez pas rempli le code postal.";
  }
  else if (values.zipcode.length !== 5 || (Number.isNaN(values.zipcode))) {
    errors.zipcode = 'Le code postal doit comprendre 5 chiffres.';
  }
  if (!values.city) {
    errors.city = "Vous n'avez pas rempli votre ville.";
  }
  else if (values.city.length > 20) {
    errors.city = 'La ville ne doit pas excéder 20 caractères.';
  }
  if (!values.phone_number) {
    errors.phone_number = "Vous n'avez pas rempli votre n° de téléphone.";
  }
  else if (values.phone_number.length !== 10 || (Number.isNaN(values.phone_number))) {
    errors.phone_number = 'Le numéro de téléphone doit comprendre 10 chiffres.';
  }
  if (!values.siret) {
    errors.siret = "Vous n'avez pas rempli votre n° SIRET.";
  }
  else if (values.siret.length !== 14 || (Number.isNaN(values.siret))) {
    errors.siret = 'Le numéro SIRET doit comprendre 14 chiffres.';
  }
  if (!values.shop_name) {
    errors.shop_name = "Comment s'appellera votre boutique?";
  }
  else if (values.shop_name.length > 30) {
    errors.shop_name = 'Le nom ne doit pas excéder 30 caractères.';
  }
  else if (values.shop_name.length > 150) {
    errors.shop_name = 'La présentation ne doit pas excéder 150 caractères.';
  }
  if (!values.gsc) {
    errors.gsc = 'Veuillez acceptez les conditions générales de vente.';
  }
  return errors;
};
