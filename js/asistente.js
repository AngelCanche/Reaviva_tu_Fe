function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    const chatBox = document.getElementById('chatBox');

    if (userInput.trim() !== '') {
        // Crear el mensaje del usuario
        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'user-message');
        userMessage.innerHTML = `<p>${userInput}</p>`;
        chatBox.appendChild(userMessage);

        // Crear la respuesta dinámica de la IA
        const aiMessage = document.createElement('div');
        aiMessage.classList.add('message', 'ai-message');
        aiMessage.innerHTML = `<p>Lo siento, Por el momento estoy es desarrollo y no tengo información sobre tu pregunta.</p>`;
        chatBox.appendChild(aiMessage);

        // Limpiar el campo de entrada
        document.getElementById('userInput').value = '';

        // Hacer scroll al final
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
