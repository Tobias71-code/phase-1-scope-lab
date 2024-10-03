// Declare customerName in the global scope
var customerName = 'bob';

// Function to change customerName to uppercase
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to set bestCustomer to 'not bob'
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Function to overwrite the bestCustomer value
function overwriteBestCustomer(newBestCustomer) {
  bestCustomer = newBestCustomer;
}

// Declare leastFavoriteCustomer as a constant
const leastFavoriteCustomer = 'someone else';

// Function that throws an error if trying to change leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
  throw new Error('Assignment to constant variable.');
}

