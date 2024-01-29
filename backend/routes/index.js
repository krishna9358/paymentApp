const express= require("express");
const userRouter = require("./user");
const router = express.Router();

router.use("/user", userRouter); // /api/v1/user/userRouter ke andar
// /api/v1/user/signin
// /api/v1/user/signup
// /api/v1/user/changePassword ...
// router.use("/account", accountRouter); // /api/v1/account/accountRouter ke andar
// /api/v1/account/transferMoney
// /api/v1/account/balance

module.exports = router;