const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Predefined set of questions and answers
const qaPairs = {
  'How are you?': 'I am fine, thank you!',
  'What is your name?': 'I am a chatbot.',
  'Exit': 'Goodbye! Exiting chatbot.'
};

// Function to get the response for a given question
function getResponse(question) {
  return qaPairs[question] || 'I do not understand that question.';
}

// Function to continuously prompt the user for input
function chat() {
  rl.question('You: ', userInput => {
    if (userInput.toLowerCase() === 'exit' || userInput.toLowerCase() === 'quit') {
      console.log(getResponse('Exit'));
      rl.close();
    } else {
      const response = getResponse(userInput);
      console.log(`Chatbot: ${response}`);
      chat();
    }
  });
}

// Start the chat
console.log('Chatbot: Hello! Type "exit" or "quit" to end the conversation.');
chat();

// Close the readline interface when the user exits
rl.on('close', () => {
  process.exit(0);
});
