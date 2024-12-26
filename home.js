document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.createElement('button');
    themeToggleButton.textContent = 'Toggle Theme';
    themeToggleButton.classList.add('theme-toggle-button');
    document.body.prepend(themeToggleButton);

    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });
});

// Additional CSS for the theme toggle button
const style = document.createElement('style');
style.textContent = `
    .theme-toggle-button {
        margin: 20px auto;
        display: block;
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    
    .theme-toggle-button:hover {
        background-color:green;
    }
`;
document.head.append(style);
