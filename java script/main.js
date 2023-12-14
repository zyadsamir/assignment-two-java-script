

var qoutes=[' Be yourself everyone else is already taken Oscar Wilde',
            'A room without books is like a body without a soul. Marcus Tullius Cicero',
            'I just want to be wonderful.Marilyn Monroe',
            'Two things are infinite: the universe and human stupidity; and Im not sure about the universe.Albert Einstein',
            'It is better to be hated for what you are than to be loved for what you are not.',
            'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment Ralph Waldo Emerson',
            'If we have no peace, it is because we have forgotten that we belong to each other. Mother Teresa',
            'None of us knows what might happen even the next minute, yet still we go forward. Because we trust. Because we have faith. Paulo Coelho',
            'Thats what fiction is for. Its for getting at the truth when the truth isnt sufficient for the truth. Tim OBrien',
            'I have accepted fear as part of life  specifically the fear of change... I have gone ahead despite the pounding in the heart that says: turn back....Erica Jong',
            'Each night, when I go to sleep, I die. And the next morning, when I wake up, I am reborn Mahatma Gandh'
         ];








function getRandomQoute(){


    
        var randomIdx = Math.floor(Math.random() * qoutes.length);
        return qoutes[randomIdx];
        // return randomIdx;
    
    
}


function displayRandomQuote() {
   
    var quoteText = document.getElementById("qoute");
    var randomQuote = getRandomQoute();
    quoteText.textContent = randomQuote; 
}





























// document.getElementById("qoute").innerHTML="hello zyad";