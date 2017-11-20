const router = require('express').Router(),
	Sweetness = require('../models/sweetness');


	router.post('/', (req, res) => {
		console.log("Posting this: ", req.body)

		const { name, price, image, description } = req.body

		Sweetness.create( name, price, image, description )
			.then((data) => {
				res.json(data);
			})
			.catch( err => console.log("Controller Post Erros:", err ));
	});

	router.get('/', (req, res) => {
		Sweetness.findAll()
			.then((data) => {
				res.json(data);
			})
			.catch( err => console.log('Controller Get ERROS', err ));
	});

	router.delete('/:id', (req, res) => {
		const id = req.params.id;

		Sweetness.delete(id)
		.then((data) => {
			res.send('Deleted from DB.');
		})
		.catch( err => console.log("Controller Delete ERROR", err ));
	});


	module.exports = router;



