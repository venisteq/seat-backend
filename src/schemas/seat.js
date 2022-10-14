import Mongoose from 'mongoose';

const { Schema } = Mongoose;

const Seat = new Schema({
	lab: { type: Number, required: true },
	seatNumber: { type: Number, required: true },
	studentName: { type: String },
	studentNumber: { type: String },
	guardianName: { type: String },
	guardianNumber: { type: String },
	endDate: { type: Date },
	photo: { type: String },
	occupied: { type: Boolean, default: false },
});

export default Mongoose.model('Seat', Seat);
