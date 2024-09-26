export default class HashMap {
	constructor(size = 16) {
		this.size = size;
		this.buckets = new Array(size).fill(null).map(() => []);
		this.entryCount = 0;
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
			this.entryCount++;
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

	has(key) {
		const hash = this.hash(key, this.buckets.length);
		const bucket = this.buckets[hash];

		if (bucket.length === 0) {
			return false;
		}

		const indexOfExistingEntry = bucket.findIndex((element) => element.key === key);
		return indexOfExistingEntry !== -1;
	}

	remove(key) {
		if (this.has(key)) {
			const hash = this.hash(key, this.buckets.length);
			const bucket = this.buckets[hash];
			const indexOfExistingEntry = bucket.findIndex((element) => element.key === key);

			bucket.splice(indexOfExistingEntry, 1);
			this.entryCount--;
			return true;
		}
		return false;
	}

	length() {
		return this.entryCount;
	}

	clear() {
		this.buckets = new Array(this.size).fill(null).map(() => []);
		this.entryCount = 0;
	}

	keys() {
		let allKeys = [];
		for (const bucket of this.buckets) {
			for (const entry of bucket) {
				allKeys.push(entry.key);
			}
		}

		return allKeys;
	}
}
