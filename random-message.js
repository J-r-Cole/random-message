// random message generator

function randomMessage(num) {
    return Math.floor(Math.random() * num);
    // gets random number to index through statement options
    }
    // store of inspirational words
    const inspirationBank = {
        start: ['You are amazing', 'Courage in tough times', 'Be true to yourself'],
        middle: ['the light is bright', 'trust the process', 'gratitude is eternal'],
        end: ['never forget who you are', 'freedom is the greatest accomplishment', 'act with conviction']
    }

    let myQuote = [];
    // for loop to choose the section of phrase from each arrary
    for (let phrase in inspirationBank) {
        let optionIndex = randomMessage(inspirationBank[phrase].length);

        switch(phrase) {
            case 'start': 
                myQuote.push(`${inspirationBank[phrase][optionIndex]}`)
                break
            case 'middle':
                myQuote.push(`${inspirationBank[phrase][optionIndex]}`)
                break
            case 'end': 
                myQuote.push(`${inspirationBank[phrase][optionIndex]}`)
                break
            default:
                myQuote.push('Please try again')
            // chooses the components of the message based on the array index
        }

        function inspoResponse() {
            const response = myQuote.join(' ');
            console.log(response);
        }
    }

inspoResponse(myQuote);
