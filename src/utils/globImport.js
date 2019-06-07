/**
 * @param {String} dir - Directory to serch though
 * @param {regex} regex - Regular Expresion to match files
 * @returns {Array}
 */
const globImport = (dir, regex) => {
	const context = require.context(dir, true, regex)
	return context.keys().map(key => context(key))
}

export default globImport
