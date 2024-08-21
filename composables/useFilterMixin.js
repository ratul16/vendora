// composables/useFilterMixin.js
export const useFilterMixin = () => {
  const brands = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Samsung" },
    { id: 3, name: "Microsoft" },
    { id: 4, name: "Sony" },
    { id: 5, name: "Dell" },
    { id: 6, name: "HP" },
    { id: 7, name: "Lenovo" },
    { id: 8, name: "Asus" },
    { id: 9, name: "Acer" },
    { id: 10, name: "Intel" },
    { id: 11, name: "AMD" },
    { id: 12, name: "Nvidia" },
    { id: 13, name: "Google" },
    { id: 14, name: "LG" },
    { id: 15, name: "Huawei" },
    { id: 16, name: "OnePlus" },
    { id: 17, name: "Xiaomi" },
    { id: 18, name: "Amazon" },
    { id: 19, name: "Razer" },
    { id: 20, name: "Logitech" },
    { id: 21, name: "Canon" },
    { id: 22, name: "Nikon" },
    { id: 23, name: "Panasonic" },
    { id: 24, name: "Toshiba" },
    { id: 25, name: "Seagate" },
    { id: 26, name: "Western Digital" },
    { id: 27, name: "Sandisk" },
    { id: 28, name: "Fitbit" },
    { id: 29, name: "Garmin" },
    { id: 30, name: "GoPro" },
    { id: 31, name: "Bose" },
    { id: 32, name: "JBL" },
    { id: 33, name: "Beats by Dre" },
    { id: 34, name: "Anker" },
    { id: 35, name: "Corsair" },
    { id: 36, name: "Kingston" },
    { id: 37, name: "Crucial" },
    { id: 38, name: "Netgear" },
    { id: 39, name: "TP-Link" },
    { id: 40, name: "Synology" },
    { id: 41, name: "Cisco" },
    { id: 42, name: "Brother" },
    { id: 43, name: "Epson" },
    { id: 44, name: "Philips" },
    { id: 45, name: "Vizio" },
    { id: 46, name: "Sharp" },
    { id: 47, name: "Zebra" },
    { id: 48, name: "Thermaltake" },
    { id: 49, name: "Alienware" },
    { id: 50, name: "MSI" }
  ];

  const availability = ["In Stock", "Pre-order", "Out of Stock"]
  const shippingOptions = ["Free Shipping", "Same-day Delivery", "Expedited Shipping"]

  const specifications = {
    shipping: [
      { id: 1, name: "Free Shipping" },
      { id: 2, name: "Same-day Delivery" },
      { id: 3, name: "Expedited Shipping" },
    ],
    ram: [
      { id: 1, name: "4GB" },
      { id: 2, name: "8GB" },
      { id: 3, name: "16GB" },
      { id: 4, name: "32GB+" },
    ],
    storage: [
      { id: 1, name: "64GB" },
      { id: 2, name: "128GB" },
      { id: 3, name: "256GB" },
      { id: 4, name: "512GB" },
      { id: 5, name: "1TB+" }
    ]
  }

  // You can add more filters as needed, similar to the above structure

  return {
    brands,
    specifications
  };
};
