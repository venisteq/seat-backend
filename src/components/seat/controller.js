import Seat from '../../schemas/seat.js';

export const get = () => {
	return Seat.find();
};

export const add = ({
	seatNumber,
	studentName,
	studentNumber,
	guardianName,
	guardianNumber,
	endDate,
	photo,
}) => {
	console.log('sat', seatNumber, studentName, studentNumber, guardianName);
	return Seat.create({
		seatNumber,
		studentName,
		studentNumber,
		guardianName,
		guardianNumber,
		endDate,
		photo,
	});
};

export const update = ({
	id,
	studentName,
	studentNumber,
	guardianName,
	guardianNumber,
	endDate,
	photo,
}) => {
	return Seat.findOneAndUpdate(
		{ _id: id },
		{
			studentName,
			studentNumber,
			guardianName,
			guardianNumber,
			endDate,
			photo,
			occupied: true,
		},
		{
			new: true,
		},
	);
};
