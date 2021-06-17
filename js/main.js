let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');


let meet = ["Hello, what about you?"];
let intro = ["Hello, I am Zahid", "Hi, I am Zahid Hasan", "Hello, My name is Zahid"];
let help = ["How may i assist you?","How can i help you?","What i can do for you?"];
let greetings = ["i am good you little piece of love", "i am fine, what about you", "don't want to talk", "i am good,what about you"];
let hobbies = ["i love to talk with humans", "i like to make friends like you", "i like cooking"];
let pizzas = ["which type of pizza do you like?", "i can make a pizza for you", "i would love to make a pizza for you", "would you like cheese pizza?"];
let thank = ["Most welcome","Not an issue","Its my pleasure","Mention not"];
let closing = ['Ok bye-bye','As you wish, bye take-care','Bye-bye, see you soon..'];



let intr = ["It is specially suitable for patients who, for any reason, can not tolerate aspirin or other analgesics. Napa suppositories are used for rapid symptomatic management of pain and fever."];
let me = ["Medical service is important for healthcare and it is impotant for our life circle"];
let int = ["Mirboxtula,Beside Mount Adora Hospita,Sylhet"];
let nax = ["Maxpro®Hp is indicated for the eradication of H. pylori in active chronic gastric,duodenal and gastric ulcers. CONTRAINDICATION: Maxpro®Hp is contraindicated in patients with known hypersensitivity to any of its compo- nent."];
let seclo = ["Seclo® capsule and tablet is indicated for gastroesophageal reflux disease including reflux esophagitis, acid reflux disease, duodenal and benign gastric ulcers, Helicobacter pylori eradication regimens in peptic ulcer disease, prophylaxis of acid aspiration, Zollinger-Ellison Syndrome (ZES) and for the treatment of NSAID-associated gastric ulcers, duodenal ulcers or gastroduodenal erosions."];
let metro = ["Pirer bazar, Sylhet - Tamabil Hwy, Bateshwar,Sylhet"];














const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function showusermsg(usermsg){
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg){
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function chatbotvoice(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = "I don't understant";
     if(message.includes('Hello')){
        let finalresult = meet[Math.floor(Math.random() * meet.length)];
        speech.text = finalresult;
    }
    if(message.includes('who are you ' )){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    if(message.includes('what is Napa' )){
        let finalresult = intr[Math.floor(Math.random() * intr.length)];
        speech.text = finalresult;
    }
     
     if(message.includes('where is Ahmed' )){
        let finalresult = int[Math.floor(Math.random() * int.length)];
        speech.text = finalresult;
    }
     if(message.includes('what is Max Pro' )){
        let finalresult = nax[Math.floor(Math.random() * nax.length)];
        speech.text = finalresult;
    }
     if(message.includes('what is seclo 20 tablet' || 'what is sec 20' || 'how are' )){
        let finalresult = seclo[Math.floor(Math.random() * seclo.length)];
        speech.text = finalresult;
    }
      if(message.includes('where is Metropolitan' )){
        let finalresult = metro[Math.floor(Math.random() * metro.length)];
        speech.text = finalresult;
    }
     if(message.includes('why medical service' )){
        let finalresult = me[Math.floor(Math.random() * me.length)];
        speech.text = finalresult;
    }
    if(message.includes('fine')){
        let finalresult = help[Math.floor(Math.random() * help.length)];
        speech.text = finalresult;
    }
    if(message.includes('how are you' || 'how are you doing today' || 'how are')){
        let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalresult;
    }
    if(message.includes('tell me something about you' || 'tell me something about your hobbies')){
        let finalresult = hobbies[Math.floor(Math.random() * hobbies.length)];
        speech.text = finalresult;
    }
    if(message.includes('pizza')){
        let finalresult = pizzas[Math.floor(Math.random() * pizzas.length)];
        speech.text = finalresult;
    }
    if(message.includes('thank you' || 'thank you so much')){
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        speech.text = finalresult;
    }
    if(message.includes('talk to you' || 'talk')){
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
    }

     if(message.includes('what  is napa tablet' || 'ace' || 'what is Napa' ||'na per')){
        let finalresult = napa[Math.floor(Math.random() * napa.length)];
        speech.text = finalresult;
    }

       if(message.includes('whare is Ahmed Medicine center' || 'Ahmed' || 'ahmod' || 'ahmad' || 'ahmed medicine center' || 'green')){
        let finalresult = red[Math.floor(Math.random() * red.length)];
        speech.text = finalresult;
    }

    if(message.includes('when take seclo')){
        let finalresult = secu[Math.floor(Math.random() * secu.length)];
        speech.text = finalresult;
    }
    












    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
}

recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    chatbotvoice(transcript);
    console.log(transcript);
}
recognition.onend=function(){
    mic.style.background="#ff3b3b";
}
mic.addEventListener("click", function(){
    mic.style.background='#39c81f';
    recognition.start();
    console.log("Activated");
})
