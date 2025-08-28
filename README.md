# 👜 BagBuddy

BagBuddy is a **full-stack e-commerce web application** designed for showcasing and managing stylish bags.  
It provides a seamless shopping experience with user authentication, product management, and an intuitive admin dashboard.

---

## 🚀 Features

- 👤 **User Authentication** (Register, Login, Logout) with JWT & bcrypt  
- 🛍️ **Product Management** (Create, Read, Update, Delete)  
- 📦 **Admin Panel** to add & manage products  
- 📸 **Image Uploads** using Multer  
- 🎨 **Responsive UI** with Tailwind CSS + EJS templates  
- 🔑 Flash messages for error/success notifications  
- 💾 MongoDB Database integration  

---

## 🛠️ Tech Stack

**Frontend:**  
- EJS (Templating)  
- Tailwind CSS  

**Backend:**  
- Node.js  
- Express.js  

**Database:**  
- MongoDB (Mongoose ODM)  

**Others:**  
- Multer (Image uploads)  
- JWT & bcrypt (Authentication)  
- connect-flash (Flash messaging)  

---
# 👜 BagBuddy

BagBuddy is a **Full Stack E-Commerce Project** built with **Node.js, Express.js, MongoDB, and EJS**.  
It provides features for product management, user authentication, cart, and admin controls.

---

## 📁 Project Structure

```bash
├── config/
│   ├── development.json
│   ├── keys.js
│   ├── mongoose-connection.js
│   └── multer-config.js
├── controllers/
│   └── authController.js
├── middleware/
│   └── isLoggedIn.js
├── models/
│   ├── owner-model.js
│   ├── product-model.js
│   └── user-model.js
├── public/
│   ├── Images
│   ├── Stylesheets
│   └── javascripts
├── routes/
│   ├── index.js
│   ├── ownersRouter.js
│   ├── productsRouter.js
│   └── usersRouter.js
├── utils/
│   └── generateToken.js
├── views/
│   ├── partials/
│   ├── admin.ejs
│   ├── cart.ejs
│   ├── createproducts.ejs
│   ├── owner-login.ejs
│   └── shop.ejs
├── .env
├── .gitignore
├── app.js
├── package.json
└── README.md


# clone the repository
git clone https://github.com/your-username/BagBuddy.git

# move into folder
cd BagBuddy

# install dependencies
npm install

# run development server
npm start

