# E-commerce Sales Chatbot

This project is an interactive sales chatbot for an e-commerce platform, aimed at enhancing the shopping experience by helping users search for products, explore categories, and make purchases. The chatbot is built with a React frontend (client) and a Node.js/Express backend (server).

## Features

- **Product Search**: Search for products by name, category, or description.
- **Product Exploration**: Explore different product categories with filtering options.
- **User Authentication**: Login functionality with session management for personalized interactions.
- **Chat History**: Store and display all previous chat interactions for reference.
- **Responsive Design**: Fully responsive chatbot interface compatible with desktop, tablet, and mobile devices.

## Technologies Used

### Frontend (Client)

- **React.js**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios**: HTTP client for making API requests to the backend.
- **Vite**: Fast and optimized build tool for React applications.

### Backend (Server)

- **Node.js**: JavaScript runtime for the server.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: NoSQL database for storing product data.
- **JWT Authentication**: For secure user login and session management.
- **Cors**: For enabling Cross-Origin Resource Sharing (CORS) between the client and server.

## Setup Instructions

### Prerequisites

- Node.js (v14 or later)
- MongoDB (for production use) or any mock database (for local setup)

### Clone the Repository

```bash
git clone https://github.com/Nilesh1901/chatbot-app.git
cd chatbot-app
```

### Client Setup

1. Navigate to the `client` directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the client development server:
   ```bash
   npm run dev
   ```

   The app will be running at `http://localhost:5173`.

### Server Setup

1. Navigate to the `server` directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file and configure your environment variables. Example:

   ```plaintext
     MONGODB_URI=your_mongodb_url
     JWT_SECRET=your_jwt_secret
   ```

4. Start the server:
   ```bash
   npm start
   ```

   The server will be running at `http://localhost:3000`.

### Database Setup

MongoDB is used for storing product data. Make sure MongoDB is running if you are using it locally. Alternatively, mock data can be used for testing.

### Testing the Application

1. Open the client application in your browser.
2. Log in with valid credentials.
3. Interact with the chatbot to search for products and explore categories.

## API Endpoints

### 1. `POST /api/user/login`

- **Description**: Authenticates the user and returns a JWT token.
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "yourpassword"
  }
  ```

- **Response**:
  ```json
  {
    "authToken": "your_generated_token"
  }
  ```

### 2. `GET /api/products/search`

- **Description**: Fetches products based on a search query.
- **Query Parameters**:
  - `searchTerm`: The term to search products by (name, category, description).
  - `startIndex`: The starting index for pagination (default is 0).
  - `limit`: The number of results to fetch (default is 9).
  - `order`: Sort direction, either "asc" or "desc" (default is "desc").

- **Response**:
  ```json
  [
    {
      "name": "Product 1",
      "category": "Electronics",
      "description": "Product 1 description",
      "price": 100
    },
    {
      "name": "Product 2",
      "category": "Electronics",
      "description": "Product 2 description",
      "price": 200
    }
  ]
  ```

## Contribution

Contributions are welcome! Please fork this repository, create a new branch, and submit a pull request with your changes.

## License

This project is licensed under the MIT License.

---

