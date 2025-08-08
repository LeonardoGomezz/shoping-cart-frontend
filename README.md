# API y Carrito de Compras

## Descripción

Proyecto que consiste en una API básica para gestionar productos y un carrito de compras, junto con un frontend que consume esta API. Permite agregar productos al carrito, visualizarlo y calcular la mejor combinación de productos dentro de un presupuesto.

---

## Tecnologías usadas

- Backend: Spring Boot (Java)
- Frontend: Next.js con TypeScript
- Estado global: Zustand
- Estilos: Tailwind CSS
- Notificaciones: Sonner
- API Requests: Axios

---

## Funcionalidades

### Backend

- Endpoint `/products` para obtener una lista estática de productos.
- Endpoint `/cart` (GET) para obtener productos agregados al carrito.
- Endpoint `/cart/{productId}` (POST) para agregar productos al carrito.
- Endpoint `/cart/{productId}` (DELETE) para eliminar productos del carrito (funcionalidad añadida opcional).
- Carrito en memoria (sin base de datos).

### Frontend

- Mostrar lista de productos.
- Agregar productos al carrito.
- Mostrar carrito con productos agregados.
- Eliminar productos del carrito.
- Calcular la mejor combinación de productos según presupuesto dado.

---

## Instalación y ejecución

### Requisitos previos

- Java 17+ y Maven (para backend)
- Node.js 18+ y npm/yarn (para frontend)

### Recomendaciones

- Para correr el backend tener instalado netbeans o intellij IDEA.

### Ejecutar el frontend

- abrir el proyecto
- instalar dependencias:

```
npm install
```

- crear un archivo .env, y agregar la variable de entorno:

```
NEXT_PUBLIC_API_URL=http://localhost:8080
```

- Correr el proyecto

```
npm run dev
```

- Link para clonar el respositorio con el backend [(https://github.com/LeonardoGomezz/shoping-cart-api)]
