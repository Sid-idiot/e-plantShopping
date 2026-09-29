# Paradise Nursery Shopping Application

A responsive React + Redux Toolkit houseplant shopping application created for the Final Project: Paradise Nursery Shopping Application.

## Features

- Paradise Nursery landing page with background plant imagery and Get Started button
- About Us section
- 18 unique houseplants across 3 categories
- Product thumbnails, names, descriptions, and prices
- Add to Cart functionality with disabled state after adding
- Dynamic cart item count in the navbar
- Cart quantity increase/decrease controls
- Delete item functionality
- Total cost per item and overall cart total
- Checkout button with Coming Soon message
- Continue Shopping navigation
- Responsive layout for desktop, tablet, and mobile

## Tech Stack

- React
- React Router
- Redux Toolkit
- React Redux
- Vite
- CSS3

## Run Locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Project Structure

```text
src/
├── components/
│   ├── AboutUs.jsx
│   ├── CartItem.jsx
│   ├── Navbar.jsx
│   └── ProductList.jsx
├── data/
│   └── plants.js
├── redux/
│   ├── CartSlice.jsx
│   └── store.js
├── App.css
├── App.jsx
└── main.jsx
```
