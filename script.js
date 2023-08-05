function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    const chatBody = document.getElementById("chat-body");
    
    // Add user message to the chat area
    const userMessageDiv = document.createElement("div");
    userMessageDiv.classList.add("user-message");
    userMessageDiv.textContent = userInput;
    chatBody.appendChild(userMessageDiv);
    
    // Add bot response (static for this example)
    const botMessageDiv = document.createElement("div");
    botMessageDiv.classList.add("bot-message");
    botMessageDiv.textContent = "I'm just a static chatbot. Add backend functionality to make me interactive!";
    chatBody.appendChild(botMessageDiv);
    
    // Clear input field
    document.getElementById("user-input").value = "";
  }