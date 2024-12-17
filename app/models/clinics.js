const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dayHoursSchema = {
    openingTime: {
        type: String, // Format: 'HH:mm' (e.g., '09:00' for 9 AM)
        required: true
    },
    closingTime: {
        type: String, // Format: 'HH:mm' (e.g., '18:00' for 6 PM)
        required: true
    }
};

const clinicSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    lng: {
        type: Number,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    openinghours: {
        monday: dayHoursSchema, 
        tuesday: dayHoursSchema,
        wednesday: dayHoursSchema,
        thursday: dayHoursSchema,
        friday: dayHoursSchema,
    },
    dentists: [{
        type: Schema.Types.ObjectId,
        ref: 'Dentist' 
    }]
});

const Clinic = mongoose.model('Clinic', clinicSchema);
module.exports = Clinic;