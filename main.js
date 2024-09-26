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

function testHashMapLengthMethod() {
	console.log("\nTesting 'length' method");

	const hashMap = new HashMap(16);

	// Initial length should be 0
	console.log('Expecting initial length to be 0:', hashMap.length() === 0);

	// Add test data
	hashMap.set('apple', 'red');
	hashMap.set('banana', 'yellow');
	hashMap.set('carrot', 'orange');

	// Length after adding entries
	console.log('Expecting length to be 3 after adding three entries:', hashMap.length() === 3);

	// Overwrite an existing entry
	hashMap.set('apple', 'green');
	console.log('Expecting length to still be 3 after overwriting an entry:', hashMap.length() === 3);

	// Remove an entry
	hashMap.remove('banana');
	console.log('Expecting length to be 2 after removing one entry:', hashMap.length() === 2);

	// Remove another entry
	hashMap.remove('apple');
	console.log('Expecting length to be 1 after removing another entry:', hashMap.length() === 1);

	// Remove the last entry
	hashMap.remove('carrot');
	console.log('Expecting length to be 0 after removing all entries:', hashMap.length() === 0);
	console.log('------------------------------------------');
}

// Call the tests
testHashMapLengthMethod();

function testHashMapClearMethod() {
	console.log("\nTesting 'clear' method");

	const hashMap = new HashMap(16);

	//Add test data
	hashMap.set('apple', 'red');
	hashMap.set('banana', 'yellow');
	hashMap.set('carrot', 'orange');

	//Check length before
	console.log('Expecting length 3 before clear: ', hashMap.length() === 3);

	hashMap.clear();

	//Check length after
	console.log('Expecting length 0 after clear: ', hashMap.length() === 0);

	//Check if entries are removed
	console.log('Expecting apple to be removed after: ', hashMap.has('apple') === false);
	console.log('Expecting banana to be removed after: ', hashMap.has('banana') === false);
	console.log('Expecting orange to be removed after: ', hashMap.has('carrot') === false);
	console.log('------------------------------------------');
}

// Call the tests
testHashMapClearMethod();
