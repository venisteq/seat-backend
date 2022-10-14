/* eslint-disable prefer-template */
/* eslint-disable no-undef */
import express from 'express';
import multer from 'multer';
import * as controller from './controller.js';

const router = express.Router();

const storage = multer.diskStorage({
	destination: './uploads',
	// eslint-disable-next-line object-shorthand
	filename: function (req, file, cb) {
		console.log('i got file', file);
		cb(null, 'IMAGE-' + Date.now() + file.originalname);
	},
});

const upload = multer({ dest: './uploads', storage });

router.get('/', (req, res) => {
	controller
		.get()
		.then((result) => {
			res.status(200).json(result);
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({ msg: 'something went wrong' });
		});
});

router.post('/', (req, res) => {
	const {
		seatNumber,
		studentName,
		studentNumber,
		guardianName,
		guardianNumber,
		endDate,
		photo,
	} = req.body;

	controller
		.add({
			seatNumber,
			studentName,
			studentNumber,
			guardianName,
			guardianNumber,
			endDate,
			photo,
		})
		.then((result) => {
			res.status(200).json(result);
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({ msg: 'something went wrong' });
		});
});

router.put('/:id', upload.single('photo'), (req, res) => {
	const {
		studentName,
		studentNumber,
		guardianName,
		guardianNumber,
		endDate,
		photo,
	} = req.body;

	const { id } = req.params;

	controller
		.update({
			id,
			studentName,
			studentNumber,
			guardianName,
			guardianNumber,
			endDate,
			photo,
		})
		.then((result) => {
			res.status(200).json(result);
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({ msg: 'something went wrong' });
		});
});

router.post(
	'/upload',
	upload.single('photo', (req, res) => {
		res.status(200).json(result);
	}),
);

export default router;
