# Zerodha Clone (KiteDesk) 📈

A full-stack retail trading platform and trading dashboard inspired by Zerodha Kite. Built with the **MERN stack** (MongoDB, Express, React, Node.js), featuring real-time portfolio tracking, stock watchlists, interactive market charts, order placement flows, and JWT-based authentication.

---

## 🌟 Key Features

### 💻 Client Landing Page (`frontend`)
- **Modern Landing Experience:** Responsive presentation covering products, pricing, support, and company background.
- **User Authentication:** Sign up and login flows powered by secure password hashing and JWT token management.
- **Clean UI & Navigation:** Multi-page routing matching Zerodha’s minimalist aesthetic.

### 📊 Trading Dashboard (`dashboard`)
- **Market Watchlist:** Live stock price lists with percent changes, direct Buy/Sell actions, and quick chart views.
- **Order Execution Modal:** Place BUY/SELL market and limit orders with margin calculations.
- **Holdings & Positions:** Track unrealized P&L, day's change, net investment value, and stock quantities.
- **Interactive Visualizations:** Portfolio allocation donut charts and equity performance vertical graphs using **Chart.js** and **MUI**.
- **Funds & Margins:** Real-time visibility into available cash, used margin, and commodity balances.

### ⚙️ REST API Engine (`backend`)
- **Robust Endpoints:** APIs for fetching holdings, positions, placing orders, and handling user sessions.
- **MongoDB Atlas Integration:** Schemas for Users, Holdings, Positions, and executed Orders with Mongoose.
- **Security:** Protected routes using JWT authentication middleware and CORS support.

---

## 🏗️ Architecture & Tech Stack

```
ZERODHA CLONE/
├── backend/       # Express.js REST API & MongoDB models
├── dashboard/     # React.js Kite trading terminal & portfolio analytics
└── frontend/      # React.js Marketing landing page & authentication views
```

- **Frontend & Dashboard:** React.js, React Router, Material UI (MUI), Chart.js, Axios
- **Backend:** Node.js, Express.js, Mongoose, Passport / JWT, bcryptjs
- **Database:** MongoDB Atlas

---

## 🚀 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MongoDB Atlas](https://www.mongodb.com/atlas) account (or a local MongoDB instance)
- Git

---

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd "ZERODHA CLONE"
```

---

### 2. Backend Setup
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables:
   - Copy [.env.example](backend/.env.example) to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Open `.env` and fill in your values:
     ```env
     PORT=3002
     MONGODB_URI=your_mongodb_atlas_connection_string
     JWT_SECRET=your_jwt_secret_key
     ```
4. Start the server:
   ```bash
   npm start
   ```
   *The backend will run on `http://localhost:3002`.*

---

### 3. Dashboard Setup
1. Open a new terminal and navigate to `dashboard`:
   ```bash
   cd dashboard
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dashboard:
   ```bash
   npm start
   ```
   *The trading dashboard will run on `http://localhost:3001` (or next available port).*

---

### 4. Frontend Setup
1. Open a new terminal and navigate to `frontend`:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the landing page:
   ```bash
   npm start
   ```
   *The marketing landing page will launch on `http://localhost:3000`.*

---

## 📡 API Overview

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/allHoldings` | Fetch all user equity holdings |
| `POST` | `/addHolding` | Add a new stock holding |
| `GET` | `/allPositions` | Fetch open derivative/intraday positions |
| `POST` | `/newOrder` | Submit a new buy or sell order |
| `POST` | `/signup` | Register a new user |
| `POST` | `/login` | Authenticate and obtain JWT token |

---

## 🛡️ Security & Environment Files

- **Never commit `.env` files.** Real secrets and database credentials stay on your machine.
- **[backend/.env.example](backend/.env.example)** is provided in the repository to show all required environment variable keys with placeholder values.

---

## 📄 License
This project is for educational and portfolio demonstration purposes. All original trademarks and product designs belong to Zerodha Broking Ltd.
