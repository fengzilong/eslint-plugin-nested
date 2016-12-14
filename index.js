module.exports = {
	rules: {
		'max-nested-if': require( './rules/max-nested-if' ),
	},
	rulesConfig: {
		'max-nested-if': [ 'warning', 2 ],
	}
};
