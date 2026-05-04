# 🛍️ FakeStore App

## 📌 Author

**Erin**
GitHub: [MiraGen0219](https://github.com/MiraGen0219)

---

## 📖 Table of Contents

* [Introduction](#introduction)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Project Structure](#project-structure)
* [Key Components](#key-components)
* [Installation](#installation)
* [Usage](#usage)
* [Future Improvements](#future-improvements)

---

## 📘 Introduction

The **FakeStore App** is a React-based e-commerce interface that interacts with the Fake Store API.
It allows users to browse products, view details, add new products, edit existing ones, and delete items.

This project demonstrates:

* API integration using both **fetch** and **axios**
* Component-based architecture in React
* Routing with React Router
* UI design using React Bootstrap
* Full CRUD-style functionality

---

## ✨ Features

* 🏠 Landing page with navigation
* 📦 Product listing (API-driven)
* 🔍 Product details view
* ➕ Add new product
* ✏️ Edit existing product
* ❌ Delete product with confirmation modal
* ⏳ Loading states and error handling
* 🧭 Client-side routing
* 🎨 Responsive UI with Bootstrap

---

## 🛠️ Tech Stack

* **React**
* **React Router DOM**
* **Axios**
* **Fetch API**
* **React Bootstrap**
* **Fake Store API**

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── NavBar.jsx
│   ├── HomePage.jsx
│   ├── ProductListing.jsx
│   ├── ProductDetails.jsx
│   ├── AddProduct.jsx
│   ├── EditProduct.jsx
│   ├── ConfirmationModal.jsx
│
├── App.jsx
├── main.jsx
```

---

## 🧩 Key Components

### 🔹 Home Page

* Simple landing page with CTA button
* Navigates users to product listings 

---

### 🔹 Navigation Bar

* Built with React Bootstrap Navbar
* Uses `NavLink` for routing between pages 

---

### 🔹 Product Listing

* Fetches product data using **axios**
* Displays products in responsive card layout
* Includes loading spinner and error handling 

---

### 🔹 Product Details

* Fetches individual product via dynamic route (`id`)
* Displays product image, price, category, and description
* Includes:

  * Add to cart (UI only)
  * Edit navigation
  * Delete functionality with confirmation modal 

---

### 🔹 Add Product

* Form-controlled component using React state
* Sends POST request using **fetch**
* Displays success/error feedback
* Includes loading spinner on submit 

---

### 🔹 Edit Product

* Pre-fills form with API data using `useEffect`
* Updates product via PUT request
* Handles loading, success, and error states 

---

### 🔹 Confirmation Modal

* Reusable modal component for delete confirmation
* Improves UX by preventing accidental deletions 

---

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/your-username/fakestore-app.git

# Navigate into the project folder
cd fakestore-app

# Install dependencies
npm install

# Run development server
npm run dev
```

---

## 🚀 Usage

* Open the app in your browser
* Browse products on the **Products page**
* Click **View Details** to inspect an item
* Use:

  * ➕ Add Product
  * ✏️ Edit Product
  * ❌ Delete Product (with confirmation)
* Observe loading states and API interactions in action

---

## 🔮 Future Improvements

* 🛒 Implement real cart functionality (state or context)
* 🔐 Add authentication (login/register)
* 📊 Admin dashboard for product management
* 🌐 Replace Fake Store API with custom backend
* 🎨 Improve UI styling and branding
* 🔎 Add search and filtering

---

## 💡 Developer Notes

This project highlights:

* Managing asynchronous data in React (`useEffect`)
* Handling loading and error states cleanly
* Mixing **axios** and **fetch** appropriately
* Structuring reusable UI components
* Implementing CRUD operations in a front-end app

---

## 📄 License

This project is for educational and portfolio purposes.
