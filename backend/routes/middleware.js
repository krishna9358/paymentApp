const JWT_SECRET = require("../config");

const authMiddleware = (req, res,next) =>{
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startWith("Bearer ")){
        return res.status(403).json({
            message:"authheader is inncorrect",
        })
    }
//generate verify decode
    const token = authHeader.split(" ")[1];
    
    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        next();
    }
    catch (err) {
        return res.status(403).json({});
    }   

};

module.exports = {
        authMiddleware
}