# Verdant Shop

Welcome to Verdant Shop, a modern and minimalist e-commerce platform built with Next.js and Firebase Studio. This project serves as a comprehensive starter for building sophisticated online stores with a focus on clean design, performance, and cutting-edge features, including AI-powered product recommendations.

## ✨ Features

- **Modern E-commerce UI**: A clean, responsive, and intuitive user interface built with Tailwind CSS and ShadCN UI.
- **Product Catalog**:
  - A beautiful home page with a hero section and featured products.
  - A dedicated products page with category filtering.
  - Detailed product pages with descriptions, images, and an "Add to Cart" button.
- **Shopping Cart**: A slide-out cart sheet for a seamless shopping experience.
- **Checkout Flow**: A multi-step checkout process to collect shipping information and summarize the order.
- **User Accounts**: A dedicated account section for users to manage their profile and view order history.
- **Wishlist**: Functionality for users to save their favorite products for later.
- **AI-Powered Recommendations**: An integrated Genkit flow that provides personalized product suggestions based on user input.
- **Legal Pages**: Standard legal documents including Terms of Service, Privacy Policy, and Refund Policy.
- **Responsive Design**: Fully optimized for both desktop and mobile devices.

## 🛠️ Tech Stack

This project is built with a modern, production-ready tech stack:

- **Framework**: [Next.js](https://nextjs.org/) (using the App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Generative AI**: [Genkit](https://firebase.google.com/docs/genkit)
- **Icons**: [Lucide React](https://lucide.dev/guide/packages/lucide-react)
- **State Management**: React Context API and Hooks for cart management.
- **Linting & Formatting**: ESLint and Prettier (configured through Next.js)

## 🚀 Getting Started

To get this project up and running on your local machine, follow these simple steps.

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository**:
    ```bash
    git clone <your-repository-url>
    cd <your-repository-name>
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

### Running the Development Server

To start the development server, run the following command:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) in your browser to see the application in action. The app will automatically reload as you make changes to the code.

## 📂 Project Structure

The project follows a standard Next.js App Router structure:

```
.
├── src
│   ├── app                 # Next.js pages and layouts
│   ├── components          # Reusable UI components (including ShadCN)
│   ├── hooks               # Custom React hooks (e.g., useCart)
│   ├── lib                 # Utility functions, product data, types
│   ├── ai                  # Genkit flows for AI features
│   └── styles              # Global CSS styles
├── public                  # Static assets (images, fonts, etc.)
├── tailwind.config.ts      # Tailwind CSS configuration
└── next.config.mjs         # Next.js configuration
```

- **`src/app`**: Contains all routes, pages, and layouts. Each folder represents a URL segment.
- **`src/components`**: Houses all reusable components. ShadCN UI components are located in `src/components/ui`.
- **`src/hooks`**: Custom hooks like `useCart.tsx` for managing global state.
- **`src/lib`**: Includes product data (`products.ts`), type definitions (`types.ts`), and utility functions (`utils.ts`).
- **`src/ai`**: Contains server-side Genkit flows that connect to generative AI models.

## 🎨 Customization

### Theming

The application's color scheme and styling can be easily customized.
- **Colors & Theme**: Modify the CSS variables in `src/app/globals.css` to change the primary colors, background, text, etc.
- **Tailwind CSS**: Adjust the theme and add custom styles in `tailwind.config.ts`.
- **Fonts**: The app uses Google Fonts (`Playfair Display` and `PT Sans`), which can be changed in `src/app/layout.tsx`.

### Product Data

Product information is currently mocked in `src/lib/products.ts`. You can replace this with a real database or a CMS like Firebase Firestore.
