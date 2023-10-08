function myFunction() {
    let text;
    let favDrink = prompt("Diga aí qual sua bebida favorita:", "Coca-Cola");
    switch(favDrink) {
        case "Coca-Cola":
        case "coca-cola":
            text = "Você é uma pessoa que se acha diferente e importante, mas no fundo é igualzinha às outras.";
        break;
        case "Pepsi":
            case "pepsi":
                text = "Uma pessoa deprimida que não vê mais graça em nada que a vida oferece.";
            break;
        case "Leite com chocolate":
        case "Leite com chocolate":
            text = "Sai daqui! Mimadim do carai!";
        break;
        case "Suco de laranja":
        case "suco de laranja":
                text = "PSICOPATA! Engana as pessoas tomando suco de laranja enquanto planeja acabar com elas.";
            break;
        case "Cerveja":
        case "cerveja":
            text = "Uma pessoa que sente os prazeres da vida no sofrimento. A vida é tão amarga que uma cerveja é apenas um docinho pra você.";
        break;
        case "Sprite":
        case "sprite":
            text = "Você é um perdedor nato, e sempre prefere as coisas que ninguém gosta. Pessoa chata demais!";
        break;
        case "Vodka":
        case "vodka":
            text = "Vixe!Renata Sorrah, é você?! Procure um AA mais próximo";
        break;
        case "Caipirinha":
        case "caipirinha":
            text = "Dá mais valor ao que os gringos gostam do que ao que você realmente gosta. Você gosta de suquinho e não de bebida alcoólica!";
        break;
        case "Fanta":
        case "fanta":
        text = "Você é adolescente?";
        break;
        case "Cafe":
        case "cafe":
        case "Café":
        case "café":
        text = "Pseudointelectual: alguém que aparenta ter uma grande atividade intelectual sem a possuir; quem expressa falsos interesses ou conhecimentos sobre arte, cultura, música, literatura.";
        break;
        case "Agua":
        case "agua":
        case "Água":
        case "água":
                text = "Você se acha saudável, mas no fundo é apenas careta e moralista porque você põe pra dentro de você coisas extremamente podres e tóxicas.";
            break;
        default:
            text = "QUE PORRA É ESSA??! Tá me tirando, digitando qualquer merda?!";
    }


    

    document.getElementById("demo").innerHTML = text;
    const resposta = document.querySelector('.resposta');
    document.getElementById("demo").innerHTML =  favDrink + "?! "  + text;
    resposta.style.display= 'block';
}

class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        //index of the the current string being typedout
        this.wordIndex = 0;
        //this.wait must be a base 10 interger
        this.wait = parseInt(wait, 10);
        //method type()
        this.type();
        // Boolean if the word is currently deleting
        this.isDeleting = false;
    }

    
    type() {
        //current index of words
        const current = this.wordIndex % this.words.length;
        //get full text of current word
        const fullTxt = this.words[current];

        // check if deleting
        if (this.isDeleting){
        //remove character
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        //add a charaacter
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }            

    


        // insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        //type speed for when it is typing, deleting and pausing after deletion

        let typeSpeed = 300;

        //select pencil icon for writting animation
        const typingElement = document.querySelector('.fas');

        if (this.isDeleting){
            typeSpeed /= 4;        
        }

        if(this.isDeleting){
            typingElement.className = "fas fa-pencil-alt erasing-animation";
        }else{
            typingElement.className = "fas fa-pencil-alt writing-animation";
        }

        // if word is complete
        if(!this.isDeleting && this.txt === fullTxt){
            // make pause at end
            typeSpeed = this.wait;
            //set delete to true
            this.isDeleting = true;
            //will stop the pencil animation after word completion
            typingElement.className = "fas fa-pencil-alt";


        } else if (this.isDeleting && this.txt === ''){
            this.isDeleting = false;
            //move to the next word in the HTML property
            this.wordIndex++;
            // pause time before the word start typing
            typeSpeed = 1000;

        }

        setTimeout(() => this.type(), typeSpeed)
    }
}


//Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

//Init App
function init() {
const txtElement = document.querySelector('.txt-type');
// const words = JSON.parse(txtElement.getAttribute('data-words'));
const words = ['Qual é a sua bebida favorita?'];


// const wait = txtElement.getAttribute('data-wait');
const wait = 2500;

new TypeWriter(txtElement, words, wait);
}



