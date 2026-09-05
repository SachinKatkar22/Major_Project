const express=require("express")
const usercontroller=require("../controllers/user.controller")
const router=express.Router();

router.post("/register",usercontroller.register)
router.get("/alldata",usercontroller.data)

module.exports=router