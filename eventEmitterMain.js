const customEmitter = require('./eventEmitterModule');

function simulateUserLogin(userId) {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: USER_${userId} logged in`);
}

// Listen for "userLoggedIn" event
customEmitter.on('userLoggedIn', userId => {
  simulateUserLogin(userId);
});

// Simulate users logging in every random number of seconds
function simulateUserLogins() {
  setInterval(() => {
    const userId = Math.floor(Math.random() * 1000) + 1;
    customEmitter.emit('userLoggedIn', userId);
  }, Math.random() * (2000 - 100) + 100);
}

// Start simulating user logins
simulateUserLogins();
