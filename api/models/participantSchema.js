const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    course: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    event: {
        type: String,
        required: true,
        trim: true
    },
    competition: {
        type: String,
        required: true,
        trim: true
    }
})


module.exports = new mongoose.model("participant", participantSchema);