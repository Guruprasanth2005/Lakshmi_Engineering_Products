# Lakshmi Engineering Products — Website

A responsive React + Vite landing page for Lakshmi Engineering Products.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Replacing placeholder content

- **Company details** (GST number, phone, email, address, business type) —
  search for `[Enter ...]` across `src/components/` and replace with real
  values.
- **Company description** — edit the two paragraphs in
  `src/components/About.jsx`.
- **Logo** — `src/components/Logo.jsx` currently renders a drawn SVG mark.
  Swap it for `<img src="/logo.png" alt="Lakshmi Engineering Products" />`
  once you have an official logo file (place the file in `public/`).
- **Products** — edit `src/data/products.js`. Each product is a plain object:

  ```js
  {
    id: 1,
    name: "Product Name",
    image: "/products/product1.jpg",
    description: "Short product description.",
    price: "₹0.00",
    category: "Category Label",
  }
  ```

  Add product photos to `public/products/` using the same filenames
  referenced in `image`. If a photo is missing, the card automatically shows
  a labelled placeholder instead of a broken image — the site never breaks
  while you're sourcing photography.
- **Google Map** — replace the placeholder block in
  `src/components/Contact.jsx` with an `<iframe>` embed once the address is
  finalised.

## Project structure

```
src/
├── components/        Reusable UI components (Navbar, Hero, About, ...)
├── data/products.js   Product catalogue (edit this to update products)
├── App.jsx            Page composition
└── main.jsx           Entry point
public/
└── products/          Product photos go here (see data/products.js)
```
