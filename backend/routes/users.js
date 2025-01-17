const router = require("express").Router()
const {User , validate} = require( "../models/user")
const bcrypt = require("bcrypt")

router.post('/' , async(req,res) =>{
    try {
        const {error} = req.validate(req.body)
        if(error)
            return res.status(400).send({message: error.details[0].message})

        const user = await User.findOne({email: req.body.email})
        if(user)
            return res.status(409).send({message: "User with given address is already exist"})

        const salt = await bcrypt.genSalt(Number(process.env.SALT))
        const hashPassword = await bcrypt.hash(req.body.password,salt)

        await new User({...req.body, password: hashPassword}).save()

        res.status(201).send({message: "user created successsfully"})
    } catch (err) {
        res.status(500).send({message: "internal server error"})
    }
})


module.exports = router