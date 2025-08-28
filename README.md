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
## 🖼️ Screenshots

### 🏠 Homepage
![Homepage](./public/images/homepage%20SS.png)


### 👥 Shoping Page
![Members](./public/images//shop%20SS.png)

### 👥 Owner admin page
![Members](./public/images/admin%20SS.png)

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

