import {connectDB} from "./connectDB.js";
import Product from "./models/product_model.js";
import dotenv from "dotenv";

dotenv.config();

connectDB()
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

const mockProducts = [
  {
    name: "MacBook Pro",
    price: 1200,
    category: "Electronics",
    description: "Powerful laptop with M1 chip",
    image: "https://via.placeholder.com/150/0000FF/808080?text=MacBook+Pro",
  },
  {
    name: "Sony WH-1000XM4",
    price: 350,
    category: "Electronics",
    description: "Noise-cancelling wireless headphones",
    image: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Headphones",
  },
  {
    name: "Samsung Galaxy S21",
    price: 800,
    category: "Electronics",
    description: "Flagship smartphone with stunning display",
    image: "https://via.placeholder.com/150/008000/FFFFFF?text=Galaxy+S21",
  },
  {
    name: "Electric Kettle",
    price: 50,
    category: "Home Appliances",
    description: "Fast boiling electric kettle",
    image: "https://via.placeholder.com/150/FFA500/FFFFFF?text=Electric+Kettle",
  },
  {
    name: "Men's Running Shoes",
    price: 100,
    category: "Footwear",
    description: "Comfortable running shoes",
    image: "https://via.placeholder.com/150/800080/FFFFFF?text=Running+Shoes",
  },
  {
    name: "Women's Jacket",
    price: 120,
    category: "Apparel",
    description: "Warm and stylish jacket for women",
    image: "https://via.placeholder.com/150/FF69B4/FFFFFF?text=Women's+Jacket",
  },
  {
    name: "Office Chair",
    price: 200,
    category: "Furniture",
    description: "Ergonomic chair with lumbar support",
    image: "https://via.placeholder.com/150/000000/FFFFFF?text=Office+Chair",
  },
  {
    name: "Gaming Mouse",
    price: 60,
    category: "Electronics",
    description: "Precision gaming mouse with RGB lighting",
    image: "https://via.placeholder.com/150/4682B4/FFFFFF?text=Gaming+Mouse",
  },
  {
    name: "Digital Camera",
    price: 500,
    category: "Electronics",
    description: "Compact camera with 4K video recording",
    image: "https://via.placeholder.com/150/FFD700/FFFFFF?text=Digital+Camera",
  },
  {
    name: "Yoga Mat",
    price: 30,
    category: "Fitness",
    description: "Non-slip yoga mat with carrying strap",
    image: "https://via.placeholder.com/150/4B0082/FFFFFF?text=Yoga+Mat",
  },
  {
    name: "Bluetooth Speaker",
    price: 100,
    category: "Electronics",
    description: "Portable speaker with high-quality sound",
    image:
      "https://via.placeholder.com/150/0000FF/FFFFFF?text=Bluetooth+Speaker",
  },
  {
    name: "Air Purifier",
    price: 150,
    category: "Home Appliances",
    description: "Effective air purifier for clean breathing",
    image: "https://via.placeholder.com/150/228B22/FFFFFF?text=Air+Purifier",
  },
  {
    name: "Leather Wallet",
    price: 40,
    category: "Accessories",
    description: "Stylish leather wallet for men",
    image: "https://via.placeholder.com/150/8B4513/FFFFFF?text=Leather+Wallet",
  },
  {
    name: "LED Desk Lamp",
    price: 30,
    category: "Lighting",
    description: "Adjustable LED desk lamp with USB charging",
    image: "https://via.placeholder.com/150/696969/FFFFFF?text=Desk+Lamp",
  },
  {
    name: "Travel Backpack",
    price: 70,
    category: "Luggage",
    description: "Durable and spacious travel backpack",
    image: "https://via.placeholder.com/150/FFA07A/FFFFFF?text=Backpack",
  },
  {
    name: "Smart Thermostat",
    price: 250,
    category: "Home Automation",
    description: "Energy-efficient thermostat with remote control",
    image: "https://via.placeholder.com/150/4682B4/FFFFFF?text=Thermostat",
  },
  {
    name: "Electric Toothbrush",
    price: 90,
    category: "Personal Care",
    description: "Rechargeable toothbrush with multiple modes",
    image: "https://via.placeholder.com/150/FF69B4/FFFFFF?text=Toothbrush",
  },
  {
    name: "Kitchen Blender",
    price: 60,
    category: "Kitchen Appliances",
    description: "High-speed blender for smoothies and shakes",
    image: "https://via.placeholder.com/150/FF8C00/FFFFFF?text=Blender",
  },
  {
    name: "Graphic Tablet",
    price: 300,
    category: "Electronics",
    description: "Digital tablet for creative professionals",
    image: "https://via.placeholder.com/150/8A2BE2/FFFFFF?text=Graphic+Tablet",
  },
  {
    name: "Cordless Vacuum Cleaner",
    price: 200,
    category: "Home Appliances",
    description: "Lightweight and powerful vacuum cleaner",
    image: "https://via.placeholder.com/150/32CD32/FFFFFF?text=Vacuum+Cleaner",
  },
  {
    name: "Wireless Keyboard",
    price: 45,
    category: "Electronics",
    description: "Ergonomic wireless keyboard with quiet keys",
    image: "https://via.placeholder.com/150/ADD8E6/FFFFFF?text=Keyboard",
  },
  {
    name: "Men's Hoodie",
    price: 50,
    category: "Apparel",
    description: "Comfortable and stylish hoodie for men",
    image: "https://via.placeholder.com/150/FF4500/FFFFFF?text=Hoodie",
  },
  {
    name: "Running Watch",
    price: 200,
    category: "Fitness",
    description: "GPS running watch with heart rate monitoring",
    image: "https://via.placeholder.com/150/1E90FF/FFFFFF?text=Running+Watch",
  },
  {
    name: "Adjustable Dumbbells",
    price: 150,
    category: "Fitness",
    description: "Space-saving adjustable dumbbells",
    image: "https://via.placeholder.com/150/FF6347/FFFFFF?text=Dumbbells",
  },
  {
    name: "Noise Machine",
    price: 40,
    category: "Home Appliances",
    description: "Soothing white noise machine for better sleep",
    image: "https://via.placeholder.com/150/FFB6C1/FFFFFF?text=Noise+Machine",
  },
  {
    name: "Electric Scooter",
    price: 500,
    category: "Outdoor",
    description: "Foldable electric scooter with long battery life",
    image: "https://via.placeholder.com/150/4682B4/FFFFFF?text=Scooter",
  },
  {
    name: "Adjustable Desk",
    price: 300,
    category: "Furniture",
    description: "Height-adjustable desk for ergonomic comfort",
    image: "https://via.placeholder.com/150/228B22/FFFFFF?text=Adjustable+Desk",
  },
  {
    name: "Pet Feeder",
    price: 80,
    category: "Pet Supplies",
    description: "Automatic pet feeder with timer",
    image: "https://via.placeholder.com/150/8B0000/FFFFFF?text=Pet+Feeder",
  },
  {
    name: "Camping Tent",
    price: 120,
    category: "Outdoor",
    description: "Waterproof tent for 2-3 people",
    image: "https://via.placeholder.com/150/DAA520/FFFFFF?text=Camping+Tent",
  },
  {
    name: "Wireless Charger",
    price: 35,
    category: "Electronics",
    description: "Fast wireless charger compatible with all devices",
    image:
      "https://via.placeholder.com/150/40E0D0/FFFFFF?text=Wireless+Charger",
  },
  {
    name: "Bluetooth Earbuds",
    price: 90,
    category: "Electronics",
    description: "Compact and comfortable wireless earbuds",
    image:
      "https://via.placeholder.com/150/FF1493/FFFFFF?text=Bluetooth+Earbuds",
  },
  {
    name: "Smart Watch",
    price: 250,
    category: "Electronics",
    description: "Feature-packed smart watch for health tracking",
    image: "https://via.placeholder.com/150/00BFFF/FFFFFF?text=Smart+Watch",
  },
  {
    name: "Home Gym Set",
    price: 150,
    category: "Fitness",
    description: "Complete gym set for home workouts",
    image: "https://via.placeholder.com/150/8B4513/FFFFFF?text=Home+Gym",
  },
  {
    name: "Waffle Maker",
    price: 50,
    category: "Kitchen Appliances",
    description: "Non-stick waffle maker for perfect waffles",
    image: "https://via.placeholder.com/150/FFD700/FFFFFF?text=Waffle+Maker",
  },
  {
    name: "Electric Grill",
    price: 120,
    category: "Kitchen Appliances",
    description: "Compact electric grill for indoor grilling",
    image: "https://via.placeholder.com/150/FF6347/FFFFFF?text=Electric+Grill",
  },
  {
    name: "Cordless Drill",
    price: 80,
    category: "Tools",
    description: "Battery-powered cordless drill",
    image: "https://via.placeholder.com/150/8A2BE2/FFFFFF?text=Cordless+Drill",
  },
  {
    name: "Dehumidifier",
    price: 100,
    category: "Home Appliances",
    description: "Compact dehumidifier for small rooms",
    image: "https://via.placeholder.com/150/90EE90/FFFFFF?text=Dehumidifier",
  },
  {
    name: "Portable Air Conditioner",
    price: 400,
    category: "Home Appliances",
    description: "Portable air conditioner for cooling",
    image: "https://via.placeholder.com/150/0000FF/FFFFFF?text=Air+Conditioner",
  },
  {
    name: "Hair Dryer",
    price: 40,
    category: "Personal Care",
    description: "Powerful hair dryer with adjustable heat settings",
    image: "https://via.placeholder.com/150/F08080/FFFFFF?text=Hair+Dryer",
  },
  {
    name: "Ice Cream Maker",
    price: 100,
    category: "Kitchen Appliances",
    description: "Make your own ice cream at home",
    image: "https://via.placeholder.com/150/ADD8E6/FFFFFF?text=Ice+Cream+Maker",
  },
  {
    name: "Fitness Tracker",
    price: 70,
    category: "Fitness",
    description: "Track your daily fitness activity",
    image: "https://via.placeholder.com/150/F0E68C/FFFFFF?text=Fitness+Tracker",
  },
  {
    name: "Car Vacuum Cleaner",
    price: 60,
    category: "Automotive",
    description: "Compact car vacuum cleaner",
    image: "https://via.placeholder.com/150/2E8B57/FFFFFF?text=Car+Vacuum",
  },
  {
    name: "Coffee Grinder",
    price: 40,
    category: "Kitchen Appliances",
    description: "Electric coffee grinder for fresh ground coffee",
    image: "https://via.placeholder.com/150/D2691E/FFFFFF?text=Coffee+Grinder",
  },
  {
    name: "Laptop Cooling Pad",
    price: 30,
    category: "Electronics",
    description: "Keep your laptop cool during use",
    image: "https://via.placeholder.com/150/87CEEB/FFFFFF?text=Cooling+Pad",
  },
  {
    name: "Smart Door Lock",
    price: 200,
    category: "Home Automation",
    description: "Keyless smart door lock with app control",
    image: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Smart+Lock",
  },
  {
    name: "Personal Blender",
    price: 40,
    category: "Kitchen Appliances",
    description: "Compact blender for smoothies",
    image:
      "https://via.placeholder.com/150/4169E1/FFFFFF?text=Personal+Blender",
  },
  {
    name: "Desk Organizer",
    price: 20,
    category: "Office Supplies",
    description: "Keep your desk tidy with this organizer",
    image: "https://via.placeholder.com/150/98FB98/FFFFFF?text=Desk+Organizer",
  },
  {
    name: "Smart Security Camera",
    price: 120,
    category: "Home Automation",
    description: "Wireless smart security camera",
    image: "https://via.placeholder.com/150/4682B4/FFFFFF?text=Security+Camera",
  },
  {
    name: "Electric Grill",
    price: 90,
    category: "Kitchen Appliances",
    description: "Electric grill for fast and easy grilling",
    image: "https://via.placeholder.com/150/8B0000/FFFFFF?text=Electric+Grill",
  },
  {
    name: "Shoe Rack",
    price: 40,
    category: "Furniture",
    description: "Space-saving shoe rack",
    image: "https://via.placeholder.com/150/808000/FFFFFF?text=Shoe+Rack",
  },
];

async function mockProductsInit() {
  try {
    const products = await Product.insertMany(mockProducts);
    console.log(products, "products inserted");
  } catch (error) {
    console.log(`error inserting products error: ${error.message}`);
  }
}

mockProductsInit();
