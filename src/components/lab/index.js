import express from 'express';

import Seat from '../../schemas/seat.js';

const router = express.Router();

router.post('/', (req, res) => {
	const { seatCount, labNumber } = req.body;

	let count = 1;
	const p = [];
	while (count <= seatCount) {
		p.push(Seat.create({ seatNumber: count, lab: labNumber }));
		count += 1;
	}
	Promise.all(p)
		.then(() => {
			res.status(200).json({ msg: 'success' });
		})
		.catch(() => {
			res.status(500).json({ msg: 'something went wrong' });
		});
});

export default router;
