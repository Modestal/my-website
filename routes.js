const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
})
router.get('/big-data', (req,res) => {
    res.render('blogs/big-data')
})

router.get('/internet-of-things', (req,res) => {
    res.render('blogs/internet-of-things');
})

router.get('/cloud-computing', (req,res) => {
    res.render('blogs/cloud-computing');
})

router.get('/artificial-intelligence', (req,res) => {
    res.render('blogs/artificial-intelligence');
})

router.get('/blockchain-technology', (req, res) => {
    res.render('blogs/blockchain-technology')
})
router.get('/digital-marketing', (req, res) => {
    res.render('blogs/digital-marketing');
})

module.exports = router;