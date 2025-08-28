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
# 📂 BagBuddy - Project Structure

📦 BagBuddy
┣ 📂 config
┃ ┣ 📜 development.json
┃ ┣ 📜 keys.js
┃ ┣ 📜 mongoose-connection.js
┃ ┗ 📜 multer-config.js
┣ 📂 controllers
┃ ┗ 📜 authController.js
┣ 📂 middleware
┃ ┗ 📜 isloggedIn.js
┣ 📂 models
┃ ┣ 📜 owner-model.js
┃ ┣ 📜 product-model.js
┃ ┗ 📜 user-model.js
┣ 📂 node_modules
┣ 📂 public
┣ 📂 routes
┃ ┣ 📜 index.js
┃ ┣ 📜 ownersRouter.js
┃ ┣ 📜 productsRouter.js
┃ ┗ 📜 usersRouter.js
┣ 📂 utils
┃ ┗ 📜 generateToken.js
┣ 📂 views
┃ ┣ 📂 partials
┃ ┣ 📜 admin.ejs
┃ ┣ 📜 cart.ejs
┃ ┣ 📜 createproducts.ejs
┃ ┣ 📜 owner-login.ejs
┃ ┗ 📜 shop.ejs
┣ 📜 .env
┣ 📜 .gitignore
┣ 📜 app.js
┣ 📜 package-lock.json
┗ 📜 package.json

yaml
Copy code


---

## ⚙️ Installation & Setup

Clone the repository:
```bash
git clone https://github.com/your-username/BagBuddy.git
cd BagBuddy



