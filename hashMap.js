export default class HashMap {
	constructor(size = 16) {
		// Initialize the hash map with a fixed number of buckets (default size is 16).
		// Each bucket is an empty array, which will store key-value pairs as objects.
		this.size = size;
		this.buckets = new Array(size).fill(null).map(() => []);
		this.entryCount = 0;
	}

	// Hash function to calculate an index for a given key.
	// Uses a prime number and character codes to create a numeric value.
	hash(key, bucketsLength) {
		let hashCode = 0;

		const primeNumber = 31;
		for (let i = 0; i < key.length; i++) {
			// Generate hash by multiplying previous hashCode with prime number
			// and adding the current character's Unicode value.
			hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % bucketsLength;
		}

		// Return the index (bucket position) for this key.
		return hashCode;
	}

	// Set method to add or update a key-value pair in the hash map.
	set(key, value) {
		// Find the bucket using the hash of the key.
		const hash = this.hash(key, this.buckets.length);
		const bucket = this.buckets[hash];

		// Check if the key already exists in the bucket.
		const indexOfExistingEntry = bucket.findIndex((element) => element.key === key);

		if (indexOfExistingEntry !== -1) {
			// If the key exists, update its value.
			bucket[indexOfExistingEntry].value = value;
		} else {
			// If the key does not exist, add it as a new entry in the bucket.
			bucket.push({ key: key, value: value });

			// Increase the total entry count.
			this.entryCount++;
		}
	}

	// Get method to retrieve the value associated with a key.
	get(key) {
		// Find the bucket where the key should be.
		const hash = this.hash(key, this.buckets.length);
		const bucket = this.buckets[hash];

		// Find the entry with the matching key.
		const indexOfExistingEntry = bucket.findIndex((element) => element.key === key);
		if (indexOfExistingEntry !== -1) {
			// Return the value if the key is found.
			return bucket[indexOfExistingEntry].value;
		} else {
			// Return null if the key is not found.
			return null;
		}
	}

	// Has method to check if a key exists in the hash map.
	has(key) {
		// Find the bucket where the key should be.
		const hash = this.hash(key, this.buckets.length);
		const bucket = this.buckets[hash];

		// If the bucket is empty, return false.
		if (bucket.length === 0) {
			return false;
		}
		// Check if the key exists in the bucket.
		const indexOfExistingEntry = bucket.findIndex((element) => element.key === key);

		// Return true if the key exists, otherwise false.
		return indexOfExistingEntry !== -1;
	}

	// Remove method to delete a key-value pair from the hash map.
	remove(key) {
		// Only remove if the key exists (checked with the has method).
		if (this.has(key)) {
			const hash = this.hash(key, this.buckets.length);
			const bucket = this.buckets[hash];
			const indexOfExistingEntry = bucket.findIndex((element) => element.key === key);

			// Remove the entry from the bucket using splice.
			bucket.splice(indexOfExistingEntry, 1);

			// Decrease the total entry count.
			this.entryCount--;
			return true;
		}
		return false; // Return false if the key was not found.
	}

	// Method to return the total number of key-value pairs in the hash map.
	length() {
		return this.entryCount;
	}

	// Clear method to remove all entries in the hash map.
	clear() {
		// Reset buckets to a new array of empty arrays and reset the entry count.
		this.buckets = new Array(this.size).fill(null).map(() => []);
		this.entryCount = 0;
	}

	// Keys method to return an array of all keys in the hash map.
	keys() {
		let allKeys = [];

		// Loop through each bucket and collect the keys from all entries.
		for (const bucket of this.buckets) {
			for (const entry of bucket) {
				allKeys.push(entry.key);
			}
		}
		return allKeys; // Return the array of keys.
	}

	// Values method to return an array of all values in the hash map.
	values() {
		let allValues = [];

		// Loop through each bucket and collect the values from all entries.
		for (const bucket of this.buckets) {
			for (const entry of bucket) {
				allValues.push(entry.value);
			}
		}
		return allValues; // Return the array of values.
	}

	// Entries method to return an array of [key, value] pairs.
	entries() {
		let entries = [];

		// Loop through each bucket and collect both the key and value for each entry.
		for (const bucket of this.buckets) {
			for (const entry of bucket) {
				entries.push([entry.key, entry.value]);
			}
		}
		return entries; // Return the array of key-value pairs.
	}
}
