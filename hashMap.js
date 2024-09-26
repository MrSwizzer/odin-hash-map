export default class HashMap {
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

	set(key, value) {
		const hash = this.hash(key, this.buckets.length);
		const bucket = this.buckets[hash];

		const indexOfExistingEntry = bucket.findIndex((element) => element.key === key);

		if (indexOfExistingEntry !== -1) {
			bucket[indexOfExistingEntry].value = value;
		} else {
			bucket.push({ key: key, value: value });
		}
	}

	get(key) {
		const hash = this.hash(key, this.buckets.length);
		const bucket = this.buckets[hash];

		const indexOfExistingEntry = bucket.findIndex((element) => element.key === key);
		if (indexOfExistingEntry !== -1) {
			return bucket[indexOfExistingEntry].value;
		} else {
			return null;
		}
	}
}
