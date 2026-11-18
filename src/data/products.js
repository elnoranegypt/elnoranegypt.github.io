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
  },
  {
    id: 'oranges', name: 'Oranges', category: 'fruits', image: img('fruits', 'oranges'), source: 'company', accent: '#F5A623',
    description: 'Navel Orange, Valencia Orange',
  },
  {
    id: 'pomegranates', name: 'Pomegranates', category: 'fruits', image: img('fruits', 'pomegranates'), source: 'company', accent: '#C9303A',
  },
  {
    id: 'strawberry', name: 'Strawberry', category: 'fruits', image: img('fruits', 'strawberries'), source: 'company', accent: '#E84B45',
  },
  {
    id: 'mango', name: 'Mango', category: 'fruits', image: img('fruits', 'mangoes'), source: 'library', accent: '#F2A20C',
    description: 'Rich, aromatic mangoes with smooth golden flesh — a much-loved tropical fruit for fresh markets and desserts.',
  },
  {
    id: 'grapes', name: 'Grapes', category: 'fruits', image: img('fruits', 'grapes'), source: 'library', accent: '#9BB830',
    description: 'Crisp, juicy table grapes with a refreshing sweetness, ideal for retail shelves and snacking.',
  },
  {
    id: 'mandarin', name: 'Mandarin', category: 'fruits', image: img('fruits', 'mandarins'), source: 'library', accent: '#F28A1A',
    description: 'Easy-to-peel mandarins with a sweet, aromatic flavour — a convenient citrus favourite for consumers.',
  },

  // ---------- Fresh Vegetables ----------
  {
    id: 'iceberg-lettuce', name: 'Iceberg Lettuce', category: 'vegetables', image: img('vegetables', 'iceberg-lettuce'), source: 'library', accent: '#7CB518',
    description: 'Crisp, refreshing iceberg lettuce with tightly packed leaves, a staple for salads, sandwiches and food service.',
  },
  {
    id: 'cabbage', name: 'Cabbage', category: 'vegetables', image: img('vegetables', 'cabbage'), source: 'library', accent: '#8DB83A',
    description: 'Firm, fresh cabbage heads — a versatile vegetable for cooking, salads, pickling and processing.',
  },
  {
    id: 'onion', name: 'Onion', category: 'vegetables', image: img('vegetables', 'onions'), source: 'library', accent: '#A2385A',
    description: 'Red and golden onions with a full flavour, an everyday essential for kitchens, wholesalers and the food industry.',
  },
  {
    id: 'peas', name: 'Peas', category: 'vegetables', image: img('vegetables', 'peas'), source: 'library', accent: '#5E9E1E',
    description: 'Fresh green pea pods with sweet, tender peas inside, popular for retail and culinary use.',
  },
  {
    id: 'sweet-potatoes', name: 'Sweet Potatoes', category: 'vegetables', image: img('vegetables', 'sweet-potatoes'), source: 'company', accent: '#C4614A',
    description: 'Naturally sweet potatoes with vibrant flesh, a nutritious and versatile root vegetable for many cuisines.',
  },
  {
    id: 'garlic', name: 'Garlic', category: 'vegetables', image: img('vegetables', 'garlic'), source: 'library', accent: '#B9A27A',
    description: 'Aromatic red and white garlic bulbs with a bold flavour — an indispensable ingredient for kitchens worldwide.',
  },
  {
    id: 'tomatoes', name: 'Tomatoes', category: 'vegetables', image: img('vegetables', 'tomatoes'), source: 'library', accent: '#E0382E',
    description: 'Ripe, red tomatoes with a balanced, fresh taste, suited to retail, food service and processing.',
  },

  // ---------- Frozen Fruits & Vegetables ----------
  {
    id: 'frozen-figs', name: 'Frozen Figs', category: 'frozen', image: img('frozen', 'frozen-figs'), source: 'library', accent: '#7A4A7E',
    description: 'Frozen figs that keep their sweet, honeyed character — convenient for bakeries, desserts and food manufacturing.',
  },
  {
    id: 'frozen-mango', name: 'Frozen Mango', category: 'frozen', image: img('frozen', 'frozen-mango'), source: 'library', accent: '#F2A20C',
    description: 'Frozen mango pieces for smoothies, desserts and food-processing applications, ready to use when needed.',
  },
  {
    id: 'frozen-strawberry', name: 'Frozen Strawberry', category: 'frozen', image: img('frozen', 'frozen-strawberries'), source: 'library', accent: '#E84B45',
    description: 'Frozen strawberries, a practical choice for juices, jams, smoothies, bakery and dairy products.',
  },
  {
    id: 'frozen-carrots', name: 'Frozen Carrots', category: 'frozen', image: img('frozen', 'frozen-carrots'), source: 'library', accent: '#F07A1A',
    description: 'Frozen carrots for ready meals, soups, mixed vegetables and catering kitchens.',
  },
  {
    id: 'frozen-green-beans', name: 'Frozen Green Beans', category: 'frozen', image: img('frozen', 'frozen-green-beans'), source: 'library', accent: '#4E9A2B',
    description: 'Frozen green beans — a convenient, versatile vegetable for retail packs, food service and processing.',
  },
  {
    id: 'frozen-peaches', name: 'Frozen Peaches', category: 'frozen', image: img('frozen', 'frozen-peaches'), source: 'library', accent: '#F28C5A',
    description: 'Frozen peaches with a sweet, juicy profile for desserts, yoghurts, smoothies and bakery fillings.',
  },
  {
    id: 'frozen-apricots', name: 'Frozen Apricots', category: 'frozen', image: img('frozen', 'frozen-apricots'), source: 'library', accent: '#F2A33A',
    description: 'Frozen apricots for jams, pastries, desserts and food-manufacturing applications.',
  },
  {
    id: 'frozen-okra', name: 'Frozen Okra', category: 'frozen', image: img('frozen', 'frozen-okra'), source: 'library', accent: '#5C8F2E',
    description: 'Frozen okra, a staple of Middle Eastern, African and Asian cooking, convenient for retail and food service.',
  },
];

export const categoryById = Object.fromEntries(categories.map((c) => [c.id, c]));
