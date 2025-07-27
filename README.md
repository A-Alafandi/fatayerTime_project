# 🥙 Fatayer Time

Welcome to **Fatayer Time** — a modern, responsive, and SEO-friendly website for a Middle Eastern restaurant, built with **React**, **Bootstrap**, and **AOS animations**.

![Fatayer Time](public/favicon/logo.svg)

---

## 🚀 Features

- 📱 Responsive layout for mobile, tablet, and desktop
- 🎨 Modern design using Bootstrap and custom styles
- 🍽️ Interactive menu with detailed item modals
- 🖼️ Gallery with Lightbox for viewing images
- 📍 Embedded Google Maps location
- 📬 Contact form (can be integrated with Web3Forms or Formspree)
- 🌐 Scroll-to-top button, smooth scroll, and animations
- 🔧 Admin panel (under development for content management)

---

## 🧪 Tech Stack

- **Frontend:** React 18, React Router DOM, Bootstrap 5, AOS, Swiper.js
- **Animations:** AOS (Animate on Scroll)
- **Icons:** Bootstrap Icons
- **Image Optimization:** `.webp` format for fast loading

---

## 📂 Project Structure

```plaintext
FatayerTime/
├── public/
│   ├── favicon/          # Favicon & logo assets
│   └── index.html        # Main HTML template
├── src/
│   ├── assets/           # Images and background files
│   ├── components/       # All React components
│   │   ├── Menu/         # MenuPage, MenuCard, ItemDetailsModal
│   │   └── spinner/      # Loading spinner
│   ├── App.js            # Main app logic and routing
│   ├── index.js          # Entry point
│   └── main.css          # Global styles
├── .gitignore
├── eslint.config.js
├── package.json
├── README.md
```

---

## 🛠️ Installation & Development

1. **Clone the repo**
   ```bash
   git clone https://github.com/A-Alafandi/project1.git
   cd project1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the app**
   ```bash
   npm start
   ```

4. **Lint & Format**
   ```bash
   npm run lint        # Check for code issues
   npm run lint:fix    # Auto-fix common problems
   npm run format      # Prettier formatting
   ```

---

## 🌐 Environment Variables (Optional)

You can add a `.env` file for environment-specific settings like a contact form endpoint, API keys, etc.

```env
REACT_APP_API_URL=https://your-api-url.com
REACT_APP_CONTACT_FORM_ENDPOINT=https://formspree.io/f/example
```

---

## 🧼 Linting & Code Quality

- ESLint configured with:
    - `eslint-plugin-react`
    - `eslint-config-prettier`
    - `eslint-plugin-jsx-a11y`
- Prettier ensures consistent formatting
- Run checks manually with `npm run lint` or auto-fix using `npm run lint:fix`

---

## 📦 Deployment

You can deploy the project easily on platforms like:

- **Vercel** 🔥
- **Netlify**
- **GitHub Pages**
- Or your own VPS (e.g., using Nginx)

---

## 📷 Image Optimization Tip

Use `.webp` format for images in `src/assets/img/` for faster loading. Tools like [Squoosh](https://squoosh.app/) or TinyPNG can help convert JPEG/PNG to WebP.

---

## 🙋 Contact

Have suggestions or want to contribute?

📧 **Abdulrazak Alafandi**  
GitHub: [@A-Alafandi](https://github.com/A-Alafandi)

---

## 📄 License

This project is licensed under the **MIT License**.

---

> Made with ❤️ for Fatayer lovers!
