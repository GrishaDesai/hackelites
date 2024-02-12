const express = require('express')
const router = express.Router()
const {createEvent, getAllEvent, getOneEvent, updateEvent, deleteEvent} = require('../controllers/event.controller.js')
const { createCompetition, getAllCompetition, getOneCompetition, updateCompetition, deleteComp } = require('../controllers/compitition.controller.js')
const {getAllAdmin, getOneAdmin} = require('../controllers/admin.controller.js')
const {createParticipant, getAllParticipants, deleteParticipant} = require('../controllers/participant.controller.js')

router.post('/createEvent',async (req,res)=>{
    createEvent(req,res)
})
router.get('/getAllEvent', async(req,res)=>{
    getAllEvent(req,res)
})
router.get('/getOneEvent/:_id', async (req, res) => {
    getOneEvent(req, res)
})
router.patch('/updateEvent/:_id',async(req,res)=>{
    updateEvent(req,res)
})
router.delete('/deleteEvent/:_id', async (req, res) => {
    deleteEvent(req, res)
})


router.post('/createCompetition',async(req,res)=>{
    createCompetition(req,res)
})
router.get('/getAllCompetitions',async(req,res)=>{
    getAllCompetition(req,res)
})
router.get('/getOneCompetiton/:_id',async(req,res)=>{
    getOneCompetition(req,res)
})
router.patch('/updateComp/:_id',async(req,res)=>{
    updateCompetition(req,res)
})
router.delete('/deleteComp/:_id', async (req, res) => {
    deleteComp(req, res)
})


router.get('/getAllAdmin', async (req,res)=>{
    getAllAdmin(req,res)
});
router.post('/adminLogin',async(req,res)=>{
    getOneAdmin(req,res)
});


router.post('/createParticipant', async (req, res) => {
    createParticipant(req, res)
})
router.get('/getAllParticipants', async (req, res) => {
    getAllParticipants(req, res)
})
router.delete('/deleteParticipant/:id',async(req,res)=>{
    deleteParticipant(req,res)
})

module.exports = router