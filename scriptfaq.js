document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', event => {
        const answer = item.nextElementSibling;
        const symbol = item.querySelector('.toggle-symbol');
        
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            symbol.textContent = '+';
        } else {
            answer.style.display = 'block';
            symbol.textContent = '-';
        }
    });
});
