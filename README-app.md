# Basics of AI - Interactive Educational Web App

**Author:** Rajesh Pandhare, Kanaka Software

An interactive web application designed to teach the basics of Artificial Intelligence to non-technical students (B.Sc. Physics, Mathematics, and related courses) from Savitribai Phule Pune University (SPPU).

---

## Quick Start (How to Run the App)

### Method 1: Simply Open in Browser (Easiest)

1. **Find the files** on your computer:
   - Locate the folder containing `index.html`, `styles.css`, and `app.js`

2. **Double-click on `index.html`**
   - The app will open in your default web browser
   - That's it! No installation needed.

### Method 2: Using a Local Server (For Advanced Users)

If you have Python installed:

```bash
# Navigate to the app folder
cd /path/to/BasicsofAI_app

# For Python 3:
python -m http.server 8000

# Or for Python 2:
python -m SimpleHTTPServer 8000
```

Then open your browser and go to: `http://localhost:8000`

### Method 3: Using VS Code Live Server

1. Open the folder in VS Code
2. Install the "Live Server" extension
3. Right-click on `index.html` and select "Open with Live Server"

---

## What's Included

| File | Description |
|------|-------------|
| `index.html` | Main HTML file with all content |
| `styles.css` | All visual styling |
| `app.js` | JavaScript for interactivity |
| `README.md` | This documentation file |

---

## App Features

### 1. Home Tab
- Welcome message
- Quick navigation cards to main sections

### 2. Basics Tab
- Simple explanations of: AI, Machine Learning, Generative AI, AI Agents, RAG
- Real-life examples for each concept
- Visual flow diagram showing how AI works

### 3. Internals Tab
- Explains how AI learns (training)
- Interactive step-by-step simulation
- Visual representation of neural network concepts

### 4. Output Tab
- Explains how AI generates answers (inference)
- Next-word prediction visualization
- Interactive demo where students can type and see AI response simulation

### 5. Applications Tab
- AI use cases in Physics
- AI use cases in Mathematics
- AI use cases in Biology
- Student stories and famous AI examples (like AlphaFold)

### 6. Chatbot Tab
- Flow diagram explaining how chatbots work
- Interactive demo chatbot to try out

---

## For Teachers: How to Customize the App

You can easily change the content without knowing programming. Here's how:

### Changing Text Content

1. Open `index.html` in any text editor (Notepad, VS Code, etc.)
2. Find the text you want to change
3. Edit the text between the `<p>`, `<li>`, or `<h2>` tags
4. Save the file

**Example:**
```html
<!-- Change this -->
<p>AI means making computers do tasks that normally need human thinking.</p>

<!-- To this -->
<p>AI means teaching computers to do smart things like humans do.</p>
```

### Changing Colors and Styles

1. Open `styles.css` in a text editor
2. Look at the top of the file for CSS variables:

```css
:root {
    --primary-color: #4f46e5;    /* Main purple color */
    --secondary-color: #06b6d4;  /* Cyan accent */
    --accent-color: #f59e0b;     /* Orange accent */
}
```

3. Change the color codes to your preferred colors
4. Save the file

### Adding New Demo Responses

To add new responses for the interactive demos:

1. Open `app.js` in a text editor
2. Find the `demoResponses` object (around line 85)
3. Add your new keyword and response:

```javascript
const demoResponses = {
    // ... existing responses ...
    'newton': 'Sir Isaac Newton discovered the laws of motion and gravity!',
    'einstein': 'Albert Einstein developed the theory of relativity!',
};
```

4. Similarly, add chatbot responses in the `chatbotResponses` object (around line 170)
5. Save the file

### Using Browser Console (Advanced)

You can also add responses without editing files:

1. Open the app in Chrome/Firefox
2. Press F12 to open Developer Tools
3. Go to Console tab
4. Type:

```javascript
// Add output demo response
customizeApp.addOutputResponse('relativity', 'Relativity is a theory by Einstein about space and time!');

// Add chatbot response
customizeApp.addChatResponse('who is einstein', 'Einstein was a famous physicist who changed how we understand space and time!');

// See all available responses
customizeApp.listResponses();
```

---

## Tips for Teachers

### Before the Workshop

1. Test the app on the same computers students will use
2. Try all interactive features
3. Customize responses relevant to your specific course
4. Prepare example questions for students to try

### During the Workshop

1. Start with the **Home** tab to introduce the app
2. Go through **Basics** tab systematically
3. Use **Internals** simulation to show training visually
4. Let students try the **Output** demo with their own questions
5. Discuss **Applications** relevant to their subject
6. End with **Chatbot** tab for Q&A

### Suggested Activities

1. **Concept Quiz:** After Basics tab, ask students to explain AI in their own words
2. **Pattern Hunt:** Have students identify patterns in the training simulation
3. **Prediction Game:** Let students guess the next word before the demo shows it
4. **Subject Connection:** Ask students to think of AI applications in their field
5. **Chatbot Conversation:** Have students try to "confuse" the demo chatbot

---

## Technical Notes

### Browser Compatibility

The app works best on:
- Google Chrome (recommended)
- Mozilla Firefox
- Microsoft Edge
- Safari

### Mobile Support

The app is responsive and works on tablets and phones, though desktop/laptop is recommended for workshops.

### No Internet Required

Once you download the files, the app works completely offline. No internet connection needed!

### No Installation Required

- No Node.js needed
- No npm packages needed
- No build process
- Just open in browser

---

## Troubleshooting

### App doesn't load / shows blank page

1. Make sure all 3 files are in the same folder
2. Try a different browser
3. Check that JavaScript is enabled in your browser

### Styles look wrong

1. Clear browser cache (Ctrl+Shift+Delete)
2. Make sure `styles.css` is in the same folder as `index.html`

### Interactive features don't work

1. Make sure `app.js` is in the same folder as `index.html`
2. Check browser console (F12) for errors
3. Try a different browser

### Text is too small on projector

1. Use browser zoom (Ctrl + Plus key)
2. Or adjust font sizes in `styles.css`

---

## License

This educational app is free to use, modify, and distribute for educational purposes.

---

## Contact

For questions or suggestions, please contact:
- **Author:** Rajesh Pandhare
- **Organization:** Kanaka Software

---

**Happy Teaching!** 🎓
