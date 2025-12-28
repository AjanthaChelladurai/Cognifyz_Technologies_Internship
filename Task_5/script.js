
const quoteData = [
    { author: "Albert Einstein", text: "The only source of knowledge is experience." },
    { author: "Marie Curie", text: "Nothing in life is to be feared, it is only to be understood." },
    { author: "Leonardo da Vinci", text: "Learning never exhausts the mind." },
    { author: "Isaac Newton", text: "If I have seen further, it is by standing on the shoulders of Giants." },
    { author: "Galileo Galilei", text: "We cannot teach people anything; we can only help them discover it within themselves." },
    { author: "Mark Twain", text: "The secret of getting ahead is getting started." }
];

const dataDisplay = document.getElementById('data-display');
const fetchButton = document.getElementById('fetch-button');


function fetchRandomQuote() {
    
    
    const randomIndex = Math.floor(Math.random() * quoteData.length);
    const data = quoteData[randomIndex]; 
    
   
    dataDisplay.innerHTML = `
        <p>"${data.text}"</p>
        <p style="text-align:right; margin-top:10px;">– <strong>${data.author}</strong></p>
    `;
}


fetchButton.addEventListener('click', fetchRandomQuote);


fetchRandomQuote();