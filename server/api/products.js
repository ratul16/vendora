// server/api/generate-users.js
import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';

export default defineEventHandler((event) => {
  // Extract query parameters
  const query = getQuery(event);

  // Validate and parse the 'seed' and 'num' query parameters
  const seed = query.seed ? parseInt(query.seed, 10) : 12345;
  const numProducts = parseInt(query.num, 10);

  // Validate 'num' parameter
  if (isNaN(numProducts) || numProducts <= 0) {
    return {
      status: 400,
      message: 'Invalid or missing "num" query parameter. It must be a positive integer.',
    };
  }

  // Set Faker seed for reproducibility
  faker.seed(seed);

  const shippingOptions = [
    "Free Shipping",
    "Same-day Delivery",
    "Expedited Shipping",
    "Standard Shipping",
    "Two-Day Shipping",
    "Overnight Shipping",
    "International Shipping",
  ];

  // Function to generate a random shipping option
  function getRandomShippingOptions(numOptions = 3) {
    return faker.helpers.shuffle(shippingOptions).slice(0, numOptions);
  }

  // Generate user data
  const products = Array.from({ length: numProducts }, () => ({
    id: uuidv4(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price({ min: 100, max: 800, dec: 2, symbol: '£' }),
    lastUpdate: faker.date.recent({ days: 10, refDate: '2020-01-01T00:00:00.000Z' }),
    rating: parseFloat((faker.number.int({ min: 0, max: 5 }) + Math.random()).toFixed(1)),
    reviewCount: faker.number.int({ min: 0, max: 500 }),
    coverImage: faker.image.url({ width: 640, height: 480, category: 'business' }),
    type: faker.helpers.arrayElement(['laptop', 'ram', 'headphone', 'storage', 'phone']),
    stock: faker.number.int({ min: 0, max: 100 }),
    shipping: getRandomShippingOptions(),
  }));

  // Return the generated users
  return {
    status: 200,
    message: 'Product list fetched successfully.',
    data: products,
  };
});
