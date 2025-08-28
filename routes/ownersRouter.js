const express = require("express");
const ownerModel = require("../models/owner-model");

const router = express.Router();

if (process.env.NODE_ENV === "development") {
    router.post("/create", async (req, res) => {
           let owner = await ownerModel.find();
    if (owner.length > 0) {
        return res
            .status(503)
            .send("You don't have permission to create a new owner.");
    }

    let { fullname, email, password } = req.body;
   let createdOwner = await ownerModel.create({
        fullname, email, password,
    });
     res.status(201).json({
        message: "Owner created successfully ✅",
        owner: {
          id: createdOwner._id,
          fullname: createdOwner.fullname,
          email: createdOwner.email,
        },
      });

  });
}

router.get("/admin", function(req,res){
  let success = req.flash("success");
  res.render('createproducts', {success})
})

module.exports = router; 
