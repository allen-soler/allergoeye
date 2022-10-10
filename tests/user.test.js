const request = require('supertest')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const app = require('../src/app')
const User = require('../src/models/user')

const userOneId = new mongoose.Types.ObjectId()

const userOne = {
    _id: userOneId,
    name: "Allen",
    email: "dotabot@hotmail.com",
    password: "Jmas199300-20",
    age: 18,
    tokens: [{
        token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
    }]
}

beforeEach(async() => {
    await User.deleteMany()
    await new User(userOne).save()
})

test('Should signup a new user', async() => {
    const response = await request(app)
        .post('/users/')
        .send({
            name: "Marlon",
            email: "test@hotmail.com",
            password: "Jmas199300-20",
            age: 18
        }).expect(201)

    //Assert that database was change
    const user = await User.findById(response.body.user._id)
    expect(user).not.toBeNull()
})

test('Should login existing user', async() => {
    await request(app)
        .post('/users/login')
        .send({
            email: userOne.email,
            password: userOne.password,
        }).expect(200)
})

test('Should not login nonexisting user', async() => {
    await request(app)
        .post('/users/login')
        .send({
            email: "test@gmail.com",
            password: userOne.password,
        }).expect(400)
})

test('Should get profile for user', async() => {
    const token = userOne.tokens[0].token
    await request(app)
        .get('/users/me')
        .set('Authorization', 'Bearer ' + token)
        .send()
        .expect(200)
})