const getUniqueId = () => `${new Date().getTime()}${Math.random()}`;
function call(context, fn, ...args) {
	let id = getUniqueId();
	while (Object.prototype.hasOwnProperty.call(context, id)) {
		id = getUniqueId();
	}

	context[id] = fn;
	return context[id](...args);
}

module.exports = call;
