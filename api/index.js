const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const crypto = require('crypto')
const nodemailer = require('nodemailer')
const app = express()
const port = 8000
const cors = require('cors')
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const jwt = require('jsonwebtoken')
mongoose.connect("mongodb+srv://joy-mahmud:hUQZMCywj46HszhF@cluster0.7xouwts.mongodb.net/react-native-ecommerce", {
    useNewUrlParser: true, //not required for updated version of mongoose of v6.0.0
    useUnifiedTopology: true //not required for updated version of mongoose of v6.0.0

})
    .then(() => { console.log('connected to mongodb') })
    .catch((error => console.log('Error connecting to mongodb', error)))

app.listen(port, () => {
    console.log('server is running on port ', port)
})

const User = require('./models/user')
const Order = require('./models/order')

const sendVerificationEmail = async (email, verificationToken) => {
    //create a nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "joymahmud1265@gmail.com",
            pass: 'mumc sqth gmol xgwz'
        }
    })
    //compose the mail
    const mailOptions = {
        from: "E-com",
        to: email,
        subject: "Email verification",
        text: `Please click the following link to verify your email:http://192.168.2.143:8000/verify/${verificationToken}`
    }
    try {
        await transporter.sendMail(mailOptions)
    } catch (error) {
        console.log("Error sending the mail", error)
    }
}

const generateSecretKey = ()=>{
    const secretKey = crypto.randomBytes(32).toString('hex')
    return secretKey
}

const secretKey = generateSecretKey()

//api endpoints
app.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body
        console.log(name, email, password)
        //check the user is already registered
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' })
        }
        //create a new user
        const newUser = new User({ name, email, password })
        //generate  a verification token
        newUser.verificationToken = crypto.randomBytes(20).toString('hex')
        //save the user to database
        await newUser.save()
        //send verification mail to the user
        sendVerificationEmail(newUser.email, newUser.verificationToken);
        res.status(200).json({ message: "Registration successfull" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Registration failed' })
    }
})

//verify token
app.get('/verify/:token', async (req, res) => {
    try {
        const token = req.params.token
        const user = await User.findOne({ verificationToken: token })
        if (!user) {
            return res.status(404).json({ message: "Invalid verification token" })
        }

        user.verified = true
        user.verificationToken = undefined
        await user.save()
        res.status(200).json({ message: "Email verified successfully" })
    } catch (error) {
        res.status(500).json({ message: "Email verification failed" })
    }
})
//login api
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" })

        }
        if (user.password !== password) {
            return res.status(401).json({ message: "Invalid password" })
        }
        //generate token
        const token = jwt.sign({ userId: user._id }, secretKey)
        res.status(200).json({token})
    } catch (error) {
        res.status(500).json({ message: "Login failed" })
    }
})

app.post('/addresses',async(req,res)=>{
    try {
        const {userId,address}=req.body
        // console.log(userId,address)
        const user = await User.findById(userId)
        if(!user){
            return res.status(404).json({mesage:"user not found"})
        }
        user.addresses.push(address)
        await user.save()
        res.status(200).json({message:'address created successfully'})
    } catch (error) {
        res.status(500).json({message:"Error adding address"})
    }
})

app.get('/addresses/:userId',async(req,res)=>{
    try {
        const userId = req.params.userId
        const user = await User.findById(userId)
        if(!user){
            return res.status(404).json({message:'User not found'})
        }
        const addresses = user.addresses
        res.status(200).json({addresses})
    } catch (error) {
        res.status(500).json({message:'Error retrieving the address of this user'})
    }
})

//order endpoints
app.post('/orders',async(req,res)=>{
    try {
        const {userId,cartItem,totalPrice,shippingAddress,paymentMethod} = req.body
        const user = await User.findById(userId)
        if(!user){
            return res.status(404).json({message:'User not found'})
        }
        const products= cartItem.map((item)=>({
            name:item?.name,
            quantity:item?.quantity,
            price:item?.price,
            image:item?.price
        }))
        const order = new Order({
            user:userId,
            products:products,
            totalPrice:totalPrice,
            shippingAddress:shippingAddress,
            paymentMethod:paymentMethod
        })
        await order.save()
        res.status(200).json({message:'Order created successfully'})
    } catch (error) {
        console.log('errorr creating orders ',error)
        res.status(500).json({message:'Error creating orders'})
    }
})