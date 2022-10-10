const express = require('express')
const Product = require('../models/product')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/product', auth, async(req, res) => {
    const product = new Product({
        ...req.body,
        owner: req.user._id
    })
    try {
        await product.save()
        res.status(201).send(product)
    } catch (e) {
        res.status(400).send(e);
    }
})

// GET /products?completed=false
//Get /product limit skip
//get /products?sortby=createdat:desc ass 1 desc -1
router.get('/product', auth, async(req, res) => {
    const match = {}
    const sort = {}
    if (req.query.completed) {
        match.completed = req.query.completed === 'true'
    }
    if (req.query.sortBy) {
        const parts = req.query.sortBy.split(':')
        sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
    }
    try {
        await req.user.populate({
            path: 'products',
            match,
            options: {
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.skip),
                sort
            }
        })
        res.send(req.user.products)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/product/:id', auth, async(req, res) => {
    const _id = req.params.id
    try {
        const product = await Product.findOne({ _id, owner: req.user._id })
        if (!product)
            return res.status(404).send()
        res.send(product)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/product/:id', auth, async(req, res) => {
    const updates = Object.keys(req.body)
    const allowed = ['description', 'completed']
    const isValid = updates.every((update) => allowed.includes(update))
    if (!isValid)
        return (res.status(404).send("Error finding your product"))
    try {
        const product = await Product.findOne({ _id: req.params.id, owner: req.user.id })

        if (!product)
            return res.status(404).send()
        updates.forEach((update) => product[update] = req.body[update])
        await product.save()
        res.send(product)
    } catch (e) {
        return (res.status(404).send)
    }
})

router.delete('/product/:id', auth, async(req, res) => {
    try {
        const product = await Product.findOneAndDelete({ _id: req.params.id, owner: req.user.id })
        if (!product)
            return res.status(404).send()
        res.send(product)
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router