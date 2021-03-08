const initialState = {
  products: [
    {
      id: 1,
      title: 'Sopha',
      price: '22.60',
      description: 'Voici le bouquet de Sopha',
      image: 'https://cdn.florajet.com/produits/600/946.jpg'
    },
    {
      id: 2,
      title: 'Ropha',
      price: '32.00',
      description: 'Voici le bouquet de Sopha',
      image: 'https://cdn.florajet.com/produits/600/946.jpg'
    },
    {
      id: 3,
      title: 'Kiza',
      price: '43.00',
      description: 'Voici le bouquet de Sopha',
      image: 'https://cdn.florajet.com/produits/600/946.jpg'
    },
    {
      id: 4,
      title: 'Nouga',
      price: '43.00',
      description: 'Voici le bouquet de Sopha',
      image: 'https://cdn.florajet.com/produits/600/946.jpg'
    },
    {
      id: 5,
      title: 'Sopha',
      price: '43.00',
      description: 'Voici le bouquet de Sopha',
      image: 'https://cdn.florajet.com/produits/600/946.jpg'
    },
    {
      id: 6,
      title: 'Jika',
      price: '13.00',
      description: 'Voici le bouquet de Sopha',
      image: 'https://cdn.florajet.com/produits/600/946.jpg'
    },
    {
      id: 7,
      title: 'Ab',
      price: '43.00',
      description: 'Voici le bouquet de Sopha',
      image: 'https://cdn.florajet.com/produits/600/946.jpg'
    },
    {
      id: 8,
      title: 'Fiza',
      price: '37.00',
      description: 'Voici le bouquet de Sopha',
      image: 'https://cdn.florajet.com/produits/600/946.jpg'
    },
    {
      id: 9,
      title: 'Kira',
      price: '98.00',
      description: 'Voici le bouquet de Sopha',
      image: 'https://cdn.florajet.com/produits/600/946.jpg'
    },

  ]
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};