# 💎 ShopModern — Minimal React eCommerce Experience

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

ShopModern is a high-end, minimal eCommerce web application built with a focus on clean aesthetics and premium user experience. Inspired by Apple-style simplicity, it features smooth animations, glassmorphism elements, and a seamless checkout flow.

## ✨ Key Features

### 🛍️ Product Experience
- **Dynamic Catalog**: Fetches real-time products from the [FakeStore API](https://fakestoreapi.com/).
- **Advanced Filtering**: Categorize products by type (Electronics, Jewelry, etc.) and sort by Price or Rating.
- **Smart Search**: Instant search bar to find products by title as you type.
- **Premium UX**: Professional **Loading Skeletons** and high-contrast typography.

### 🛒 Cart & State Management
- **Context API Core**: Global state management for cart synchronization across all pages.
- **Quantity Control**: Add, remove, or adjust item quantities directly from the cart.
- **Persistence**: Your shopping cart survives page refreshes using `localStorage`.
- **Duplicate Prevention**: Intelligently handles multiple additions of the same item.

### 💳 Checkout & Success
- **Multi-method Checkout**: Supports **Online Payment (QR Code)** and **Cash on Delivery**.
- **Interactive UI**: Animated checkout modal with a simulated payment processing state.
- **Celebration Popup**: A festive "Congratulations" success screen with **confetti effects** after every order.

### 📱 Design System
- **Responsive-First**: Fully optimized for mobile, tablet, and desktop views.
- **Micro-animations**: Powered by **Framer Motion** for hover scales, fade-ins, and layout transitions.
- **Indigo Theme**: A professional indigo-based color palette (#4F46E5) for a modern startup feel.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) (Functional Components + Hooks)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Build Tool**: [Vite](https://vitejs.dev/)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jalpatel2646/fakeapistore.git
   cd fakeapistore
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📂 Project Structure

```bash
src/
├── components/         # Reusable UI elements (Navbar, Hero, Modals)
├── context/            # Global state (CartContext)
├── pages/              # Main route views (Products, Cart, About)
├── index.css           # Tailwind v4 directives & design tokens
└── App.jsx             # Main router & provider setup
```

## 📝 License
Built with ❤️ for Modern Web Development. Inspired by minimalist design principles.
