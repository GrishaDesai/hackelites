// import eventSchema from '../models/eventSchema.js'
const Event = require('../models/eventSchema.js')

const createEvent = async (req, res) => {
    try {
        const eventdata = new Event({
            eventName: req.body.eventName,
            eventDescription: req.body.eventDescription,
            // const {leaderName, leaderEmail} = eventLeader,
            eventLeader: req.body.eventLeader,
            // eventLeader.name : req.body.eventLeader.name
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            eventImage: req.body.eventImage
        })
        if (!eventdata && eventdata == '') {
            return res.status(400).json({ msg: "Event not added!" })
        }
        await eventdata.save()
        res.status(200).json({ msg: "Event created successfully!" })
    } catch (error) {
        return res.status(500).send("Event is not created")
    }
}

const getAllEvent = async (req, res) => {
    try {
        const eventData = await Event.find();

        if (!eventData) {
            return res.status(404).json({ msg: "Event data not found" });
        }
        // console.log(compData)
        res.status(200).json(eventData)

    } catch (error) {
        res.status(500).json({ error: error });
    }
}

const getOneEvent = async (req, res) => {
    try {
        const name = req.params.name;
        console.log(id)
        const EventExist = await Event.findOne(name);
        console.log(EventExist)
        if (!EventExist) {
            return res.status(404).json({ msg: "Event not found" });
        }
        res.status(200).json(EventExist);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
}

const updateEvent = async (req, res) => {
    try {
        const name = req.params.name;
        const eventExist = await Event.findOne(name)

        if (!eventExist) {
            return res.status(404).json({ msg: "Event not found" });
        }

        await Event.findOneAndUpdate(name, req.body, { new: true })
        res.status(200).json({ msg: "Event updated successfully" });

    } catch (error) {
        res.status(500).json({ error: error });
    }
}

const deleteEvent = async (req, res) => {
    try {
        e = await Event.deleteOne({ eventName: req.params.name });

        c = await Competition.deleteMany({ event: req.params.name });

        console.log(e);
        console.log(c);
        res.status(200).json({ message: "Event delete successfully" });
    }
    catch (err) {
        res.status(500).json({ err });
    }
}

module.exports = { createEvent, getAllEvent, getOneEvent, updateEvent, deleteEvent }