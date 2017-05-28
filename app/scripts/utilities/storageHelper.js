export function setStorageItem(name, value) {
	localStorage.setItem(name, value);
}

export function getStorageItem(name) {
	return localStorage.getItem(name);
}

export function clearStorage() {
	localStorage.clear();
}


