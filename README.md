# 🛒 Proyecto Final – E-commerce en React  
### Autor: Fama Victor

## 📖 Descripción
Este proyecto es una **Single Page Application (SPA)** desarrollada como Trabajo Final del curso de React.  
La aplicación permite navegar productos, ver sus detalles, agregar items al carrito y finalizar una compra, la cual se registra en **Firebase Firestore**.

Se utilizaron conceptos centrales del curso: componentes, hooks, React Router, Context API, separación contenedor/presentación y uso de Firebase Firestore como base de datos.

---

## 🚀 Funcionalidades principales
- **Listado de productos** desde Firestore.
- **Detalle del producto** con selector de cantidad (ItemCount).
- **Carrito global** implementado con Context API:
  - Agregar, eliminar, limpiar.
  - Cálculo automático de totales.
- **Checkout** con formulario y generación de orden en Firestore.
- **Pantalla de éxito** mostrando el ID de compra.
- **Loaders**, **toasts**, mensajes condicionales y manejo de errores.
- **Tema claro/oscuro**.
- Navegación sin recarga gracias a **React Router DOM**.

---

## 🔥 Integración con Firebase
Firestore se usa para:

### Colecciones:
- **productos** → consumida para el catálogo y detalle.  
- **ordenes** → se almacena cada compra con:
  - comprador  
  - items  
  - total  
  - timestamp  

Ejemplo de orden guardada:

```json
{
  "buyer": { "name": "Victor", "email": "Victor@test"},
  "items": [
    { "id": "4", "title": "Asus ROG Zephyrus G14", "unitPrice": 2499, "quantity": 5, "subtotal": 12495 }
  ],
  "total": 12495,
  "createdAt": "serverTimestamp()"
}
```

---

## 🧱 Tecnologías utilizadas
  - React + Vite  
  - React Router DOM  
  - Context API  
  - Firebase / Firestore 
  - CSS modularizado
  - Hooks personalizados (useCount)

  ---
  ## 📂 Estructura final del proyecto
  ```json
  react/
 ├── public/
 │   └── jsons/
 │       └── products.json        (archivo de referencia, no usado en la app)
 │
 ├── src/
 │   ├── assets/
 │   │   └── react.svg
 │   │
 │   ├── components/
 │   │   ├── hooks/
 │   │   │   └── useCount.jsx
 │   │   │
 │   │   ├── layout/
 │   │   │   ├── footer/
 │   │   │   │   ├── Footer.css
 │   │   │   │   └── Footer.jsx
 │   │   │   └── navbar/
 │   │   │       ├── Navbar.css
 │   │   │       └── Navbar.jsx
 │   │   │
 │   │   ├── pages/
 │   │   │   ├── cart/
 │   │   │   │   ├── Cart.css
 │   │   │   │   └── Cart.jsx
 │   │   │   ├── checkout/
 │   │   │   │   ├── Checkout.css
 │   │   │   │   └── Checkout.jsx
 │   │   │   ├── home/
 │   │   │   │   ├── Home.css
 │   │   │   │   └── Home.jsx
 │   │   │   ├── item-detail-container/
 │   │   │   │   ├── ItemDetailContainer.css
 │   │   │   │   └── ItemDetailContainer.jsx
 │   │   │   ├── item-list-container/
 │   │   │   │   ├── ItemListContainer.css
 │   │   │   │   └── ItemListContainer.jsx
 │   │   │   ├── notfound/
 │   │   │   │   └── NotFound.jsx
 │   │   │   └── success/
 │   │   │       ├── Success.css
 │   │   │       └── Success.jsx
 │   │   │
 │   │   ├── ui/
 │   │   │   ├── cart-widget/
 │   │   │   │   ├── CartWidget.css
 │   │   │   │   └── CartWidget.jsx
 │   │   │   ├── checkout-card/
 │   │   │   │   ├── CheckoutCard.css
 │   │   │   │   └── CheckoutCard.jsx
 │   │   │   ├── danger-button/
 │   │   │   │   ├── DangerButton.css
 │   │   │   │   └── DangerButton.jsx
 │   │   │   ├── item-count/
 │   │   │   │   ├── ItemCount.css
 │   │   │   │   └── ItemCount.jsx
 │   │   │   ├── loading/
 │   │   │   │   ├── Loading.css
 │   │   │   │   └── Loading.jsx
 │   │   │   ├── main-button/
 │   │   │   │   ├── MainButton.css
 │   │   │   │   └── MainButton.jsx
 │   │   │   ├── product-card/
 │   │   │   │   ├── ProductCard.css
 │   │   │   │   └── ProductCard.jsx
 │   │   │   ├── product-card-cart/
 │   │   │   │   ├── ProductCardCart.css
 │   │   │   │   └── ProductCardCart.jsx
 │   │   │   ├── product-card-detail/
 │   │   │   │   ├── ProductCardDetail.css
 │   │   │   │   └── ProductCardDetail.jsx
 │   │   │   ├── toast/
 │   │   │   │   ├── Toast.css
 │   │   │   │   └── Toast.jsx
 │   │   │   └── button-theme/
 │   │   │       ├── ButtonTheme.jsx
 │   │   │       └── ButtonTheme.jsx
 │   │   │
 │   ├── context/
 │   │   ├── CartContext.jsx
 |   |   ├── ThemeContext.jsx
 |   |   └── ToastContext.jsx
 │   │
 │   ├── App.jsx
 │   ├── App.css
 │   ├── firebase.js
 │   ├── index.css
 │   └── main.jsx
 │
 ├── package.json
 ├── vite.config.js
 └── README.md
  ```
---
## ⚙️ Instalación y ejecución
  ```json
  npm install
  npm run dev
  ```