class HashMap {
	constructor(size = 16) {
		this.size = size;
		this.buckets = new Array(size).fill(null).map(() => []);
	}

	hash(key, bucketsLength) {
		let hashCode = 0;

		const primeNumber = 31;
		for (let i = 0; i < key.length; i++) {
			hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % bucketsLength;
		}

		return hashCode;
	}
}
