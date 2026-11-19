/**
 * EL NORAN product catalogue — all 22 products from the company profile.
 * source: 'company' = photograph from EL NORAN's own profile; 'library' = representative
 * freely-licensed photograph (credits in imageCredits.json).
 */

export const categories = [
  {
    id: 'fruits',
    label: 'Fresh Fruits',
    short: 'Fruits',
    tagline: 'Sun-ripened citrus, berries and tropical favourites.',
    color: '#F08A1C',
    gradient: 'linear-gradient(135deg, #F5A623 0%, #E84B45 100%)',
    tint: '#FFF1DC',
  },
  {
    id: 'vegetables',
    label: 'Fresh Vegetables',
    short: 'Vegetables',
    tagline: 'Crisp greens, bulbs and roots, carefully selected.',
    color: '#4F8A00',
    gradient: 'linear-gradient(135deg, #A5C900 0%, #285900 100%)',
    tint: '#EEF6D8',
  },
  {
    id: 'frozen',
    label: 'Frozen Fruits & Vegetables',
    short: 'Frozen',
    tagline: 'Frozen fruits and vegetables for retail and food processing.',
    color: '#2F8FBF',
    gradient: 'linear-gradient(135deg, #8FD3F0 0%, #2F7FB0 100%)',
    tint: '#E4F4FB',
  },
];

const img = (folder, file) => `images/${folder}/${file}.webp`;

export const products = [
  // ---------- Fresh Fruits ----------
  {
    id: 'lemon', name: 'Lemon', category: 'fruits', image: img('fruits', 'lemons'), source: 'company', accent: '#E2C21B',
    description: 'Available from December through the first half of January.',
  },
  {
    id: 'oranges', name: 'Orange', category: 'fruits', image: img('fruits', 'oranges'), source: 'company', accent: '#F5A623',
    description: 'Navel and Valencia Orange. Available from December through the first half of May.',
  },
  {
    id: 'pomegranates', name: 'Pomegranates', category: 'fruits', image: img('fruits', 'pomegranates'), source: 'company', accent: '#C9303A',
  },
  {
    id: 'strawberry', name: 'Strawberry', category: 'fruits', image: img('fruits', 'strawberries'), source: 'company', accent: '#E84B45',
    description: 'Available from May to December .',
  },
  {
    id: 'mango', name: 'Mango', category: 'fruits', image: img('fruits', 'mangoes'), source: 'library', accent: '#F2A20C',
  },
  {
    id: 'grapes', name: 'Grapes', category: 'fruits', image: img('fruits', 'grapes'), source: 'library', accent: '#9BB830',
    description: 'Green Grapes: Available from the second half of May through June.\nRed Grapes: Available from June through the first half of August.\nBlack Grapes: Available from June through the first half of July.',
  },
  {
    id: 'mandarin', name: 'Mandarin', category: 'fruits', image: img('fruits', 'mandarins'), source: 'library', accent: '#F28A1A',
    description: 'Available from December through the first half of March .',
  },

  // ---------- Fresh Vegetables ----------
  {
    id: 'iceberg-lettuce', name: 'Iceberg Lettuce', category: 'vegetables', image: img('vegetables', 'iceberg-lettuce'), source: 'library', accent: '#7CB518',
  },
  {
    id: 'cabbage', name: 'Cabbage', category: 'vegetables', image: img('vegetables', 'cabbage'), source: 'library', accent: '#8DB83A',
  },
  {
    id: 'onion', name: 'Onion', category: 'vegetables', image: img('vegetables', 'onions'), source: 'library', accent: '#A2385A',
  },
  {
    id: 'peas', name: 'Potatoes', category: 'vegetables', image: img('vegetables', 'peas'), source: 'library', accent: '#5E9E1E',
  },
  {
    id: 'sweet-potatoes', name: 'Sweet Potatoes', category: 'vegetables', image: img('vegetables', 'sweet-potatoes'), source: 'company', accent: '#C4614A',
  },
  {
    id: 'garlic', name: 'Garlic', category: 'vegetables', image: img('vegetables', 'garlic'), source: 'library', accent: '#B9A27A',
  },
  {
    id: 'tomatoes', name: 'Tomatoes', category: 'vegetables', image: img('vegetables', 'tomatoes'), source: 'library', accent: '#E0382E',
  },

  // ---------- Frozen Fruits & Vegetables ----------
  {
    id: 'frozen-figs', name: 'Frozen Figs', category: 'frozen', image: img('frozen', 'frozen-figs'), source: 'library', accent: '#7A4A7E',
  },
  {
    id: 'frozen-mango', name: 'Frozen Mango', category: 'frozen', image: img('frozen', 'frozen-mango'), source: 'library', accent: '#F2A20C',
  },
  {
    id: 'frozen-strawberry', name: 'Frozen Strawberry', category: 'frozen', image: img('frozen', 'frozen-strawberries'), source: 'library', accent: '#E84B45',
  },
  {
    id: 'frozen-carrots', name: 'Frozen Carrots', category: 'frozen', image: img('frozen', 'frozen-carrots'), source: 'library', accent: '#F07A1A',
  },
  {
    id: 'frozen-green-beans', name: 'Frozen Green Beans', category: 'frozen', image: img('frozen', 'frozen-green-beans'), source: 'library', accent: '#4E9A2B',
  },
  {
    id: 'frozen-peaches', name: 'Frozen Peaches', category: 'frozen', image: img('frozen', 'frozen-peaches'), source: 'library', accent: '#F28C5A',
  },
  {
    id: 'frozen-apricots', name: 'Frozen Apricots', category: 'frozen', image: img('frozen', 'frozen-apricots'), source: 'library', accent: '#F2A33A',
  },
  {
    id: 'frozen-okra', name: 'Frozen Okra', category: 'frozen', image: img('frozen', 'frozen-okra'), source: 'library', accent: '#5C8F2E',
  },
];

export const categoryById = Object.fromEntries(categories.map((c) => [c.id, c]));
