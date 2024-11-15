const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    date: {
        type: String, // Format: 'YYYY-MM-DD'
        required: true,
        index: true
    },
    time: {
        type: String, // Format: 'HH:mm'
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['Available', 'Booked'],
        default: 'Available'
    },
    dentist: {
        type: Schema.Types.ObjectId,
        ref: 'Dentist',
        required: true
    },
	clinic: {
		type: Schema.Types.ObjectId,
        ref: 'Clinic',
        required: true
	},
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'Patient',
        default: null
    }
}, { timestamps: true });

const Appointment = mongoose.model("Appointment", appointmentSchema);
module.exports = Appointment;
