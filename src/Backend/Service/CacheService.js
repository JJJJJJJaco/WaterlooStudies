const set = (key, value) => {
	sessionStorage.setItem(key, value);
};

const get = (key) => {
	return sessionStorage.getItem(key);
};

module.exports = {
	set,
	get
};