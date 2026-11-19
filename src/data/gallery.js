/** Genuine EL NORAN photographs extracted from the company profile. */
const g = (n, w, h, caption, tag) => ({
  src: `images/gallery/gallery-${String(n).padStart(2, '0')}.webp`,
  width: w,
  height: h,
  caption,
  tag,
});

export const galleryTags = ['All', 'Citrus', 'Strawberries', 'Fruits', 'Vegetables', 'Packing & Storage'];

export const gallery = [
  g(1, 959, 1281, 'Citrus cartons prepared by count', 'Citrus'),
  g(4, 959, 1281, 'Wrapped and labelled oranges', 'Citrus'),
  g(6, 864, 1152, 'Strawberries in retail punnets', 'Strawberries'),
  g(2, 519, 694, 'Orange cartons ready for packing', 'Citrus'),
  g(10, 547, 729, 'Fresh pomegranates', 'Fruits'),
  g(18, 1025, 771, 'Sweet potatoes', 'Vegetables'),
  g(5, 1024, 768, 'Oranges with protective netting', 'Citrus'),
  g(7, 521, 692, 'Packed strawberry punnets', 'Strawberries'),
  g(11, 1024, 768, 'Lemons, wrapped and boxed', 'Citrus'),
  g(16, 521, 1155, 'Bundled green onions', 'Vegetables'),
  g(23, 960, 1280, 'Packed citrus cartons', 'Packing & Storage'),
  g(13, 519, 692, 'Citrus with protective netting', 'Citrus'),
  g(3, 692, 519, 'Citrus in field crates', 'Citrus'),
  g(9, 778, 1037, 'Individually wrapped guava', 'Fruits'),
  g(19, 720, 960, 'Palletised produce crates', 'Packing & Storage'),
  g(8, 1024, 768, 'Branded strawberry cartons', 'Strawberries'),
  g(15, 519, 1037, 'Capsicum', 'Vegetables'),
  g(20, 519, 692, 'Cartons strapped on a pallet', 'Packing & Storage'),
  g(12, 1024, 768, 'Mixed citrus presentation', 'Citrus'),
  g(14, 768, 1024, 'Crates of sweet potatoes', 'Vegetables'),
  g(21, 519, 692, 'Bagged produce in crates', 'Packing & Storage'),
  g(17, 1042, 782, 'Green onions packed in film', 'Vegetables'),
  g(22, 720, 960, 'Stacked crates in storage', 'Packing & Storage'),
];
