const pool = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const result = await pool.query(
      "select * from users where username = $1 or email = $2",
      [username, email],
    );
    if (result.rows.length > 0) {
      return res.status(409).send("User already exists");
    }
    const hashedPass = await bcrypt.hash(password, 10);
    const InsertedUser = await pool.query(
      "INSERT INTO users (username , email , password) values ($1, $2 , $3) returning id ,username , email ",
      [username, email, hashedPass],
    );
    return res.status(201).send(InsertedUser.rows[0]);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
};

const loginUser  = async (req, res) => {
    try{
        const {email , password } = req.body;
        const userByMail = await pool.query("select * from users where email = $1", [email]);
        if (userByMail.rows.length===0){
            return res.status(401).send("Invalid Credentials");
        }
        if(!await bcrypt.compare(password,userByMail.rows[0].password)){
            return res.status(401).send("Invalid Credentials");
        }
        const {id , username, role} = userByMail.rows[0];
        const token = jwt.sign({id , username , email , role} ,process.env.JWT_SECRET);
        return res.status(200).send({"token" : token });
    }catch(error){
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }

}

module.exports = {registerUser,loginUser}
