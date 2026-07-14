const validateUser = (req , res, next) => {
    const {username , email , password } = req.body;

    if (!username || !email || !password || String(username).trim().length ===0|| String(email).trim().length===0 || String( password).trim().length<8){
        return res.status(400).send("Invalid User Information");
    }
    next();
}

module.exports = validateUser;























