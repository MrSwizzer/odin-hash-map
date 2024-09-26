import HashMap from './hashMap.js';

function testHashMap() {
	console.log("Testing 'set' and 'get' methods");

	const hashMap = new HashMap(16);

	// Add test data
	hashMap.set('apple', 'red');
	hashMap.set('banana', 'yellow');
	hashMap.set('carrot', 'orange');

	// Check if the data was correctly added
	console.log('\nCheck if the data was correctly added');
	console.log('Expecting "apple" to be red:', hashMap.get('apple') === 'red'); // Expected: true
	console.log('Expecting "banana" to be yellow:', hashMap.get('banana') === 'yellow'); // Expected: true
	console.log('Expecting "carrot" to be orange:', hashMap.get('carrot') === 'orange'); // Expected: true

	// Test if overwrite works correctly
	console.log('\nTest if overwrite works correctly');
	hashMap.set('apple', 'green');
	console.log('Expecting "apple" to now be green:', hashMap.get('apple') === 'green'); // Expected: true

	// Test retrieving a non-existing key
	console.log('\nTest retrieving a non-existing key');
	console.log('Expecting a non-existent key "grape" to return null:', hashMap.get('grape') === null); // Expected: true

	console.log('------------------------------------------');
}

// Call the tests
testHashMap();

function testHashMapHasMethod() {
	console.log("\nTesting 'has' method");

	const hashMap = new HashMap(16);

	// Add test data
	hashMap.set('apple', 'red');
	hashMap.set('banana', 'yellow');
	hashMap.set('carrot', 'orange');

	// Test existing keys
	console.log('\nTest existing keys:');
	console.log('Expecting "apple" to be present:', hashMap.has('apple') === true); // Expected: true
	console.log('Expecting "banana" to be present:', hashMap.has('banana') === true); // Expected: true
	console.log('Expecting "carrot" to be present:', hashMap.has('carrot') === true); // Expected: true

	// Test non-existing keys
	console.log('\nTest non-existing keys:');
	console.log('Expecting "grape" to be absent:', hashMap.has('grape') === false); // Expected: true
	console.log('Expecting "orange" to be absent:', hashMap.has('orange') === false); // Expected: true

	// Test for a key that was overwritten
	hashMap.set('apple', 'green'); // Overwriting "apple"
	console.log('\nTest after overwriting:');
	console.log('Expecting "apple" to still be present:', hashMap.has('apple') === true); // Expected: true
	console.log('------------------------------------------');
}

// Call the tests
testHashMapHasMethod();

function testHashMapRemoveMethod() {
	console.log("\nTesting 'remove' method");

	const hashMap = new HashMap(16);

	// Add test data
	hashMap.set('apple', 'red');
	hashMap.set('banana', 'yellow');
	hashMap.set('carrot', 'orange');

	// Test removing an existing key
	console.log('\nTest removing an existing key');
	console.log('Removing "banana":', hashMap.remove('banana')); // Expected: true
	console.log('Expecting "banana" to return null now:', hashMap.get('banana') === null); // Expected: true

	// Test removing a non-existing key
	console.log('\nTest removing a non-existing key');
	console.log('Removing "grape":', hashMap.remove('grape')); // Expected: false

	// Check if the remaining data is still accessible
	console.log('\nCheck remaining keys');
	console.log('Expecting "apple" to be red:', hashMap.get('apple') === 'red'); // Expected: true
	console.log('Expecting "carrot" to be orange:', hashMap.get('carrot') === 'orange'); // Expected: true
	console.log('------------------------------------------');
}

// Call the tests
testHashMapRemoveMethod();
