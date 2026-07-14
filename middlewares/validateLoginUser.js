const validateUser = (req , res, next) => {
    const { email , password } = req.body;

    if ( !email || !password || String(email).trim().length===0 || String( password).trim().length<8){
        return res.status(400).send("Invalid User Information");
    }
    next();
}

module.exports = validateUser;


