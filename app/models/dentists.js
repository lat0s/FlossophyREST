const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dentistSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    clinic: [{
        type: Schema.Types.ObjectId,
        ref: 'Clinic' 
    }],
    
    appointments: [{
        type: Schema.Types.ObjectId,
        ref: 'Appointment' 
    }]
});

const Dentist = mongoose.model('Dentist', dentistSchema); 
module.exports = Dentist;
