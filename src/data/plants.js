const images = [
  'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=700&q=80'
];

const make = (id, name, price, category, imageIndex, description) => ({
  id, name, price, category, image: images[imageIndex % images.length], description
});

export const plants = [
  // Indoor Plants
  make(1, 'Monstera Deliciosa', 799, 'Indoor Plants', 0, 'A tropical statement plant with iconic split leaves.'),
  make(2, 'Snake Plant', 549, 'Indoor Plants', 1, 'A hardy, low-maintenance plant for modern spaces.'),
  make(3, 'Peace Lily', 649, 'Indoor Plants', 2, 'Elegant green foliage with beautiful white blooms.'),
  make(4, 'ZZ Plant', 699, 'Indoor Plants', 3, 'Glossy leaves and excellent tolerance for low light.'),
  make(5, 'Rubber Plant', 899, 'Indoor Plants', 4, 'Bold burgundy-green foliage for a dramatic corner.'),
  make(6, 'Spider Plant', 449, 'Indoor Plants', 5, 'Fast-growing arching foliage that looks great in baskets.'),

  // Succulents & Cacti
  make(7, 'Aloe Vera', 399, 'Succulents & Cacti', 1, 'A sun-loving succulent with fleshy, upright leaves.'),
  make(8, 'Jade Plant', 499, 'Succulents & Cacti', 2, 'A compact succulent with thick rounded leaves.'),
  make(9, 'Echeveria', 349, 'Succulents & Cacti', 3, 'A rosette-shaped succulent with a sculptural look.'),
  make(10, 'Haworthia', 329, 'Succulents & Cacti', 4, 'A small striped succulent suited to bright indoor spots.'),
  make(11, 'String of Pearls', 599, 'Succulents & Cacti', 5, 'Trailing pearl-like leaves perfect for shelves.'),
  make(12, 'Golden Barrel Cactus', 699, 'Succulents & Cacti', 0, 'A rounded architectural cactus for sunny windows.'),

  // Air-Purifying Plants
  make(13, 'Boston Fern', 599, 'Air-Purifying Plants', 2, 'Lush, feathery fronds that add softness to interiors.'),
  make(14, 'Areca Palm', 999, 'Air-Purifying Plants', 3, 'A graceful tropical palm that brightens living spaces.'),
  make(15, 'Bamboo Palm', 899, 'Air-Purifying Plants', 4, 'An elegant palm with slender stems and dense leaves.'),
  make(16, 'Dracaena Marginata', 849, 'Air-Purifying Plants', 5, 'A tall, architectural plant with striped foliage.'),
  make(17, 'English Ivy', 499, 'Air-Purifying Plants', 0, 'A trailing classic that works well on shelves and stands.'),
  make(18, 'Chinese Evergreen', 749, 'Air-Purifying Plants', 1, 'Easy-care patterned foliage for lower-light rooms.')
];

export const categories = [...new Set(plants.map(p => p.category))];
