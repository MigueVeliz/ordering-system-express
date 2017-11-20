const db = require('../db/config');

const Sweetness = {
	findAll: () => db.manyOrNone('SELECT * FROM sweetness'),

	create: ( name, price, image, description ) => {
		return db.one(
			`INSERT INTO sweetness ( name, price, image, description) VALUES ($1, $2, $3, $4) returning id`,
			[ name, price, image, description ]
			);
	},

	delete: (id) => db.none('DELETE FROM sweetness WHERE id = $1', [id])

};

module.exports = Sweetness;