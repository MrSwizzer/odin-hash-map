import HashMap from './hashMap.js';

function testHashMap() {
	console.log("Testing 'set' and 'get' methods");

	const hashMap = new HashMap(16);

	//Add test data
	hashMap.set('apple', 'red');
	hashMap.set('banana', 'yellow');
	hashMap.set('carrot', 'orange');

	//Check if the data was correctly added
	console.log('\nCheck if the data was correctly added');
	console.log('Expecting "apple" to be red:', hashMap.get('apple') === 'red');
	console.log('Expecting "banana" to be yellow:', hashMap.get('banana') === 'yellow');
	console.log('Expecting "carrot" to be orange:', hashMap.get('carrot') === 'orange');

	//Test if overwrite works correctly
	console.log('\nTest if overwrite works correctly');
	hashMap.set('apple', 'green');
	console.log('Expecting "apple" to now be green:', hashMap.get('apple') === 'green');

	// Test retrieving a non-existing key
	console.log('\nTest retrieving a non-existing key');
	console.log('Testing retrieval of a non-existent key:');
	console.log('Expecting a non-existent key to return null:', hashMap.get('grape') === null);

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
	console.log('Expecting "apple" to be present:', hashMap.has('apple') === true);
	console.log('Expecting "banana" to be present:', hashMap.has('banana') === true);
	console.log('Expecting "carrot" to be present:', hashMap.has('carrot') === true);

	// Test non-existing keys
	console.log('\nTest non-existing keys:');
	console.log('Expecting "grape" to be absent:', hashMap.has('grape') === false);
	console.log('Expecting "orange" to be absent:', hashMap.has('orange') === false);

	// Test for a key that was overwritten
	hashMap.set('apple', 'green'); // Overwriting "apple"
	console.log('\nTest after overwriting:');
	console.log('Expecting "apple" to still be present:', hashMap.has('apple') === true);
	console.log('------------------------------------------');
}

// Call the tests
testHashMapHasMethod();
