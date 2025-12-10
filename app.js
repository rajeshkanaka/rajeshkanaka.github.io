/**
 * Basics of AI - Interactive Educational Web App
 * Author: Rajesh Pandhare, Kanaka Software
 *
 * This JavaScript file handles all interactivity in the app including:
 * - Tab navigation
 * - Training simulation
 * - Output/inference demo
 * - Chatbot demo
 * - Application section tabs
 */

// =============================================
// TAB NAVIGATION
// =============================================

/**
 * Navigate to a specific tab
 * @param {string} tabId - The ID of the tab to show
 */
function navigateToTab(tabId) {
    // Update navigation items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.tab === tabId) {
            item.classList.add('active');
        }
    });

    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    const targetTab = document.getElementById(tabId);
    if (targetTab) {
        targetTab.classList.add('active');
        // Scroll to top of content
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Add click handlers to navigation items
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function() {
            const tabId = this.dataset.tab;
            navigateToTab(tabId);
        });
    });
});

// =============================================
// TRAINING SIMULATION (Internals Tab)
// =============================================

let currentTrainingStep = 1;
let trainingInterval = null;

/**
 * Start the training simulation
 */
function startTraining() {
    // Reset first
    resetTraining();

    const btn = document.getElementById('start-training-btn');
    btn.disabled = true;
    btn.textContent = 'Training...';

    // Show step 1 (already visible)
    updateProgressDots(1);

    // Move to step 2 after delay
    setTimeout(() => {
        showTrainingStep(2);
    }, 2000);

    // Move to step 3 after more delay
    setTimeout(() => {
        showTrainingStep(3);
        btn.disabled = false;
        btn.textContent = '✓ Training Complete!';
    }, 4500);
}

/**
 * Show a specific training step
 * @param {number} step - Step number (1, 2, or 3)
 */
function showTrainingStep(step) {
    currentTrainingStep = step;

    // Hide all steps
    for (let i = 1; i <= 3; i++) {
        const stepEl = document.getElementById(`sim-step-${i}`);
        if (stepEl) {
            stepEl.classList.add('hidden');
        }
    }

    // Show current step
    const currentStepEl = document.getElementById(`sim-step-${step}`);
    if (currentStepEl) {
        currentStepEl.classList.remove('hidden');
    }

    // Update progress dots
    updateProgressDots(step);
}

/**
 * Update progress dots to show current step
 * @param {number} step - Current step number
 */
function updateProgressDots(step) {
    document.querySelectorAll('.progress-dot').forEach((dot, index) => {
        if (index < step) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

/**
 * Reset the training simulation
 */
function resetTraining() {
    currentTrainingStep = 1;

    // Show only step 1
    showTrainingStep(1);

    // Reset button
    const btn = document.getElementById('start-training-btn');
    btn.disabled = false;
    btn.textContent = '▶ Start Training';

    // Reset progress dots
    updateProgressDots(1);
}

// =============================================
// OUTPUT/INFERENCE DEMO
// =============================================

// Pre-defined responses for demo (simple, educational responses)
const demoResponses = {
    'gravity': 'Gravity is a force that pulls objects toward each other. On Earth, it pulls everything toward the ground. This is why when you drop something, it falls down instead of floating away!',
    'water': 'Water is a clear liquid made of tiny molecules. Each molecule has two hydrogen atoms and one oxygen atom (H2O). Water is essential for all life on Earth and covers about 71% of our planet.',
    'photosynthesis': 'Photosynthesis is how plants make their food! Plants use sunlight, water, and carbon dioxide from the air to create sugar (their food) and release oxygen. This is why plants are so important - they give us oxygen to breathe!',
    'atom': 'An atom is the smallest piece of matter. Everything around you is made of atoms! Each atom has a center called the nucleus, with tiny particles called electrons moving around it.',
    'energy': 'Energy is the ability to do work or make things happen. It comes in many forms like light, heat, and movement. Energy cannot be created or destroyed - it can only change from one form to another!',
    'dna': 'DNA is like a recipe book inside every living cell. It contains instructions for how to build and run a living thing. DNA looks like a twisted ladder (called a double helix) and is passed from parents to children.',
    'default': 'That is a great question! AI systems like me work by looking at patterns from training data. When you ask something, I try to find the most helpful response based on what I have learned. The answer is built word by word!'
};

/**
 * Generate a response for the output demo
 */
function generateResponse() {
    const input = document.getElementById('user-input').value.trim();

    if (!input) {
        alert('Please type something first!');
        return;
    }

    // Update input stage
    document.getElementById('stage-input').textContent = input;

    // Show thinking
    document.getElementById('stage-thinking').textContent = 'Looking at learned patterns...';

    // Find matching response
    let response = demoResponses.default;
    const inputLower = input.toLowerCase();

    for (const [keyword, resp] of Object.entries(demoResponses)) {
        if (keyword !== 'default' && inputLower.includes(keyword)) {
            response = resp;
            break;
        }
    }

    // Clear previous output
    const typingOutput = document.getElementById('typing-output');
    typingOutput.textContent = '';

    // Show word-by-word demo
    const wordDemo = document.getElementById('word-demo');
    const wordSequence = document.getElementById('word-sequence');
    wordDemo.classList.remove('hidden');
    wordSequence.innerHTML = '';

    // Update thinking stage
    setTimeout(() => {
        document.getElementById('stage-thinking').textContent = 'Found patterns! Generating response...';
    }, 500);

    // Type out response with word-by-word visualization
    const words = response.split(' ');
    let currentWord = 0;

    const typeInterval = setInterval(() => {
        if (currentWord < words.length) {
            // Add to main output
            typingOutput.textContent += (currentWord > 0 ? ' ' : '') + words[currentWord];

            // Add to word sequence visualization
            const wordSpan = document.createElement('span');
            wordSpan.className = 'word';
            wordSpan.textContent = words[currentWord];
            wordSequence.appendChild(wordSpan);

            currentWord++;
        } else {
            clearInterval(typeInterval);
            document.getElementById('stage-thinking').textContent = 'Done! Response generated.';
        }
    }, 100); // 100ms per word for visual effect
}

// =============================================
// APPLICATIONS TAB - SUB-SECTIONS
// =============================================

/**
 * Show a specific application section (Physics, Math, or Biology)
 * @param {string} section - Section name
 */
function showAppSection(section) {
    // Update buttons
    document.querySelectorAll('.app-tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase().includes(section)) {
            btn.classList.add('active');
        }
    });

    // Update sections
    document.querySelectorAll('.app-section').forEach(sec => {
        sec.classList.remove('active');
    });

    const targetSection = document.getElementById(`app-${section}`);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

// =============================================
// CHATBOT DEMO
// =============================================

// Pre-defined chatbot responses for demo
const chatbotResponses = {
    'what is ai': 'AI (Artificial Intelligence) is when computers are programmed to do tasks that normally need human intelligence - like understanding language, recognizing images, or making decisions. Think of it like teaching a computer to think in some ways like a human!',
    'what is artificial intelligence': 'AI (Artificial Intelligence) is when computers are programmed to do tasks that normally need human intelligence - like understanding language, recognizing images, or making decisions. Think of it like teaching a computer to think in some ways like a human!',
    'hello': 'Hello! Nice to meet you! I am a demo chatbot. Ask me questions like "What is AI?" or "Tell me about gravity".',
    'hi': 'Hi there! Great to see you! Feel free to ask me simple questions about science or AI.',
    'gravity': 'Gravity is a force of attraction between objects. The Earth\'s gravity pulls everything toward its center, which is why things fall down when you drop them. The Moon\'s gravity is weaker, which is why astronauts can bounce around on the Moon!',
    'tell me about gravity': 'Gravity is a force of attraction between objects. The Earth\'s gravity pulls everything toward its center, which is why things fall down when you drop them. The Moon\'s gravity is weaker, which is why astronauts can bounce around on the Moon!',
    'machine learning': 'Machine Learning is a type of AI where computers learn from examples instead of being given exact rules. Imagine teaching a child to recognize cats by showing them many pictures of cats - the child learns the pattern. Machine Learning works similarly!',
    'what is ml': 'Machine Learning (ML) is a type of AI where computers learn from examples instead of being given exact rules. Imagine teaching a child to recognize cats by showing them many pictures of cats - the child learns the pattern. Machine Learning works similarly!',
    'how do you work': 'I work by matching your question with patterns I was trained to recognize. When you type something, I look for keywords and return a relevant response. Real AI chatbots like ChatGPT are much more advanced - they can generate unique responses to any question!',
    'chatgpt': 'ChatGPT is a famous AI chatbot made by OpenAI. It uses a large language model that was trained on huge amounts of text from the internet. It can answer questions, write stories, help with coding, and much more!',
    'thank you': 'You are welcome! I hope this demo helped you understand how chatbots work. Feel free to ask more questions!',
    'thanks': 'You are welcome! Happy learning!',
    'physics': 'Physics is the science of matter, energy, and how they interact. AI is helping physicists analyze data from experiments, run simulations, and even discover new particles! For example, AI helped find patterns in data from the Large Hadron Collider.',
    'math': 'Mathematics is the study of numbers, shapes, and patterns. AI can help solve math problems step by step, create visualizations of functions, and even generate practice problems. Tools like Wolfram Alpha use AI to solve complex equations!',
    'biology': 'Biology is the study of living things. AI is revolutionizing biology by predicting protein structures (AlphaFold), analyzing DNA sequences, and helping discover new medicines. AI can also identify diseases from medical images!',
    'protein': 'Proteins are large molecules that do most of the work in our cells. AlphaFold, an AI by Google DeepMind, can predict how proteins fold into their 3D shapes - something that used to take years of lab work. This helps scientists understand diseases better!',
    'alphafold': 'AlphaFold is an AI system made by Google DeepMind that predicts the 3D shape of proteins from their amino acid sequence. This was a huge breakthrough in biology! AlphaFold has predicted structures for over 200 million proteins, helping scientists worldwide.',
};

/**
 * Send a message in the chatbot demo
 */
function sendChatMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();

    if (!message) return;

    // Add user message to chat
    addChatMessage(message, 'user');

    // Clear input
    input.value = '';

    // Find response
    let response = 'I am a simple demo chatbot, so I can only answer basic questions. Try asking "What is AI?" or "Tell me about gravity". Real AI chatbots can understand and respond to almost anything!';

    const messageLower = message.toLowerCase();

    for (const [keyword, resp] of Object.entries(chatbotResponses)) {
        if (messageLower.includes(keyword) || messageLower === keyword) {
            response = resp;
            break;
        }
    }

    // Add bot response after small delay (simulates thinking)
    setTimeout(() => {
        addChatMessage(response, 'bot');
    }, 800);
}

/**
 * Add a message to the chat display
 * @param {string} text - Message text
 * @param {string} sender - 'user' or 'bot'
 */
function addChatMessage(text, sender) {
    const messagesContainer = document.getElementById('chat-messages');

    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}`;

    const icon = sender === 'user' ? '👤' : '🤖';

    messageDiv.innerHTML = `
        <span class="message-icon">${icon}</span>
        <div class="message-content">${text}</div>
    `;

    messagesContainer.appendChild(messageDiv);

    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

/**
 * Handle enter key in chat input
 * @param {KeyboardEvent} event
 */
function handleChatKeypress(event) {
    if (event.key === 'Enter') {
        sendChatMessage();
    }
}

// =============================================
// UTILITY FUNCTIONS
// =============================================

/**
 * Animate element into view
 * @param {HTMLElement} element - Element to animate
 */
function animateIn(element) {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';

    requestAnimationFrame(() => {
        element.style.transition = 'all 0.4s ease-out';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    });
}

/**
 * Check if element is in viewport
 * @param {HTMLElement} element
 * @returns {boolean}
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// =============================================
// KEYBOARD SHORTCUTS
// =============================================

document.addEventListener('keydown', function(event) {
    // Number keys 1-6 to switch tabs (when not in input)
    if (document.activeElement.tagName !== 'INPUT') {
        const tabMap = {
            '1': 'home',
            '2': 'basics',
            '3': 'internals',
            '4': 'output',
            '5': 'applications',
            '6': 'chatbot'
        };

        if (tabMap[event.key]) {
            navigateToTab(tabMap[event.key]);
        }
    }
});

// =============================================
// INITIALIZATION
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('Basics of AI app loaded successfully!');
    console.log('Keyboard shortcuts: Press 1-6 to switch between tabs');

    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Initialize any animations
    const cards = document.querySelectorAll('.concept-card, .start-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// =============================================
// TEACHER CUSTOMIZATION HELPERS
// =============================================

/**
 * Teachers can use these functions to customize content easily:
 *
 * 1. To add new demo responses for the output tab:
 *    demoResponses['newKeyword'] = 'Your response here';
 *
 * 2. To add new chatbot responses:
 *    chatbotResponses['newQuestion'] = 'Your answer here';
 *
 * Example:
 *    demoResponses['newton'] = 'Sir Isaac Newton discovered the laws of motion and gravity!';
 *    chatbotResponses['who is newton'] = 'Sir Isaac Newton was a famous scientist who discovered many physics laws!';
 */

// Allow easy access for customization
window.customizeApp = {
    addOutputResponse: function(keyword, response) {
        demoResponses[keyword.toLowerCase()] = response;
        console.log(`Added output response for: ${keyword}`);
    },
    addChatResponse: function(keyword, response) {
        chatbotResponses[keyword.toLowerCase()] = response;
        console.log(`Added chat response for: ${keyword}`);
    },
    listResponses: function() {
        console.log('Output Responses:', Object.keys(demoResponses));
        console.log('Chat Responses:', Object.keys(chatbotResponses));
    }
};
