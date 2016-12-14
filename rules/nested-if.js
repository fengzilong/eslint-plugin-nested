module.exports = function( context ) {
	return {
		IfStatement( node ) {
			const ifStatements = context.getAncestors().filter( isIfStatement );
			if ( ifStatements.length > 2 ) {
				context.report(
					node,
					`Don't nest if statement more than 2 times`
				);
			}
		}
	};
}

function isIfStatement( node ) {
	return node.type === 'IfStatement';
}
