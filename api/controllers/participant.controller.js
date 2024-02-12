const Participant = require("../models/participantSchema.js")

const createParticipant = async (req, res) => {
    try {
        const participantdata = new Participant({
            name: req.body.name,
            email: req.body.email,
            course: req.body.course,
            phone: req.body.phone,
            event: req.body.event,
            competition: req.body.competition

        })
        if (!participantdata && participantdata == '') {
            return res.status(400).json({ msg: "Paticipant not added!" })
        }
        await participantdata.save()
        res.status(200).json({ msg: "Paticipant created successfully!" })
    } catch (error) {
        return res.status(500).send("Paticipant is not created")
    }
}

const getAllParticipants = async (req, res) => {
    try {
        const participantdata = await Participant.find();

        if (!participantdata) {
            return res.status(404).json({ msg: "Participant data not found" });
        }
        // console.log(compData)
        res.status(200).json(participantdata)

    } catch (error) {
        res.status(500).json({ error: error });
    }
}

const deleteParticipant = async (req, res) => {
    try {
        console.log(req.params.email);
        const participantExist = await Participant.deleteOne({ email: req.params.email });

        if (!participantExist) {
            return res.status(404).json({ msg: "Participant not found" });
        }

        // await participantExist.findByIdAndDelete(phone);
        res.status(200).json({ msg: "Participant deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
}

module.exports = {createParticipant, getAllParticipants, deleteParticipant}