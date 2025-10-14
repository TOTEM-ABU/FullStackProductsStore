# FullStack Products Store

A full-featured e-commerce application built with the MERN stack (MongoDB, Express.js, React, Node.js) that allows users to browse, purchase, and manage products.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features

### User Features

- User authentication (Sign up, Login, Logout)
- Browse products by categories
- View featured products
- Add products to shopping cart
- Adjust product quantities in cart
- Apply discount coupons
- Secure payment processing with Stripe
- View order history

### Admin Features

- Dashboard with analytics
- Create, read, update, delete products
- Toggle featured product status
- Manage product categories
- View sales data and metrics
- User management

## Tech Stack

### Frontend

- **React 18** - JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **TailwindCSS** - Utility-first CSS framework
- **Zustand** - Small, fast state management for React
- **React Router** - Declarative routing for React
- **Axios** - Promise based HTTP client
- **Stripe.js** - Payment processing

### Backend

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Cloudinary** - Image hosting service
- **Redis** - In-memory data structure store (caching)
- **Stripe** - Payment processing API

## Prerequisites

- Node.js (v14 or higher)
- MongoDB database (local or cloud instance)
- Cloudinary account
- Stripe account
- Redis server (optional but recommended)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/fullstack-products-store.git
cd fullstack-products-store
```

2. Install backend dependencies:

```bash
npm install
```

3. Install frontend dependencies:

```bash
cd frontend
npm install
cd ..
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Server configuration
PORT=5000
NODE_ENV=development

# MongoDB connection
MONGO_URI=your_mongodb_connection_string

# JWT secrets
ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret

# Cloudinary configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Stripe configuration
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key

# Redis configuration (optional)
REDIS_URL=your_redis_url
```

## Running the Application

### Development Mode

1. Start the backend server:

```bash
npm run dev
```

2. In a new terminal, start the frontend development server:

```bash
cd frontend
npm run dev
```

### Production Mode

1. Build the frontend:

```bash
cd frontend
npm run build
cd ..
```

2. Start the server:

```bash
npm start
```

The application will be available at `http://localhost:5000`.

## Project Structure

```
.
├── backend/
│   ├── controllers/     # Request handlers
│   ├── lib/            # Database and service configurations
│   ├── middleware/     # Custom middleware functions
│   ├── models/         # Mongoose models
│   ├── routes/         # API routes
│   └── server.js       # Entry point
├── frontend/
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── lib/        # Utility functions
│   │   ├── pages/      # Page components
│   │   ├── stores/     # Zustand stores
│   │   ├── App.jsx     # Main App component
│   │   └── main.jsx    # Entry point
│   └── vite.config.js  # Vite configuration
├── .env                # Environment variables
├── .gitignore          # Git ignore file
└── package.json        # Project dependencies
```

## API Endpoints

### Authentication

- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/profile` - Get user profile

### Products

- `GET /api/products` - Get all products (admin only)
- `POST /api/products` - Create a new product (admin only)
- `PATCH /api/products/:id` - Toggle featured status (admin only)
- `DELETE /api/products/:id` - Delete a product (admin only)
- `GET /api/products/featured` - Get featured products
- `GET /api/products/category/:category` - Get products by category
- `GET /api/products/recommendations` - Get recommended products

### Cart

- `GET /api/cart` - Get user's cart
- `POST /api/cart` - Add item to cart
- `PATCH /api/cart/:productId` - Update item quantity
- `DELETE /api/cart/:productId` - Remove item from cart
- `DELETE /api/cart` - Clear cart

### Coupons

- `GET /api/coupons` - Get all coupons (admin only)
- `POST /api/coupons` - Create a new coupon (admin only)
- `DELETE /api/coupons/:id` - Delete a coupon (admin only)
- `POST /api/coupons/validate` - Validate a coupon

### Payments

- `POST /api/payments/create-checkout-session` - Create Stripe checkout session
- `POST /api/payments/checkout-success` - Handle successful payment

### Analytics

- `GET /api/analytics/sales` - Get sales data (admin only)
- `GET /api/analytics/users` - Get user data (admin only)
- `GET /api/analytics/products` - Get product data (admin only)

## Screenshots

_(Add screenshots of your application here)_

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
