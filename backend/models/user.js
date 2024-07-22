const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const joi = requrie('joi')
const passwordComplexity = require('joi-password-complexity')


const userSchema = new mongoose.Schema({
    firstName: {type: String , required: true},
    lastName: {type: String , required: true},
    email: {type: String , required: true},
    password: {type: String , required: true},
})

userSchema.methods.generateAuthToken = function (){
    const token = jwt.sign({id: this.id},process.env.JWTPRIVATEKEY, {expiresIn: "7d"})
    return token
}

const User = mongoose.model( 'user', userSchema )


const validate = (data) =>{
    const schema = joi.object({
        firstName : joi.String().required().label("First Name"),
        lastName : joi.String().required().label("Last Name"),
        email : joi.String().required().label("Email"),
        password : passwordComplexity().required().label("First Name")
    })

    return schema.validate(data)
}


module.exports = {User,  validate}; 
