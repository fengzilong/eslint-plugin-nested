module.exports = function( context ) {
	const MAX_IFSTATEMENT_TIMES = context.options[ 0 ] || 2;

	return {
		IfStatement( node ) {
			const ifStatements = context.getAncestors().filter( isIfStatement );
			if ( ifStatements.length >= MAX_IFSTATEMENT_TIMES ) {
				context.report(
					node,
					`Don't nest if statement more than ${ MAX_IFSTATEMENT_TIMES } times`
				);
			}
		}
	};
}

function isIfStatement( node ) {
	return node.type === 'IfStatement';
}
