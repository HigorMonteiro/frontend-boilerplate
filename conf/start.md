
# Next.js with TypeScript and Tailwind CSS Project Setup

Follow these steps to create your Next.js project with TypeScript and Tailwind CSS, and set up the initial structure including the homepage based on the provided image.

## 1. Project Creation and Initial Setup

### 1.1 - Creating the Next.js Project with TypeScript

Open your terminal and run the following command to create a new Next.js project with TypeScript support:

```bash
npx create-next-app@latest --typescript frontend
cd frontend
```

### 1.2 - Making the First Commit

Initialize a new git repository and make your first commit:

```bash
git init
git add .
git commit -m "Initial commit with Next.js and TypeScript setup"
```

### 1.3 - Creating the `src/` Folder

Reorganize your project by creating a `src/` folder and moving the `pages/`, `public/`, and `styles/` directories into it.

```bash
mkdir src
mv pages public styles src/
```

### 1.4 - Configuring Routes

Create the following files inside the `src/pages/` directory to configure your routes:

- `login.tsx` for the login page
- `register.tsx` for the registration page
- `index.tsx` for the home page (already exists)
- `profile.tsx` for the profile page

## 2. Configuring Tailwind CSS

### 2.1 - Installing Tailwind CSS

Install `tailwindcss` and its peer dependencies with npm, then run the init command to generate `tailwind.config.js` and `postcss.config.js`:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 2.2 - Setting Up Tailwind CSS

Configure your `tailwind.config.js` for path scanning by adding the following content:

```js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Include Tailwind in your CSS by adding the following lines to your `./src/styles/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 3. Home Page Structure

### 3.1 - Separating into Components

Based on the image provided for the homepage, create individual components for each distinct section of the UI. For example, create components for 'Memberships', 'Manager', 'Trial Sessions', etc. Place these components in the `src/components/` directory.

### 3.2 - Assets Folder

Create an `assets/` folder inside the `src/` directory to store all your static assets such as images, icons, etc.

```bash
mkdir src/assets
```

Move all your UI assets to this folder and reference them in your components using relative paths.

## 4. Running the Development Server

Finally, run the development server to see your project:

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser to see your homepage.

---

Remember to commit your changes often and document your progress. Happy coding!