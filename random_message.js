const template = {
    noun: [
        "dear","dearest","dear one","love","lover","sweetheart","beloved","sweet","querida",
        "honey","angel","pet","sweetie","sugar","honey pie","sweetie pie","cutie pie","babe","baby","bae",
        "doll","poppet","treasure","sweeting",
    ],
    content: ["May every step you make be filled with happiness, love, and peace.",
              "May this morning offer you new hope for life! May you be happy and enjoy every moment of it",
              "May your day be filled with positive things and full of blessings. Believe in yourself.",
              " I hope my good morning text will bring a smile on your face at the very beginning of the day. I love you so much",
              "Every morning is a new blessing, a second chance that life gives you because you’re so worth it. Have a great day ahead.",
              "Get up early in the morning and don’t forget to say thank you to God for giving you another day!",
              "Life gives us new opportunities every day, so hoping today will be full of good luck and prosperity for you!",
              "May everything you dreamed about last night comes true!",
              "I hope you have a wonderful day",
              "Life never gives you a second chance. So, enjoy every bit of it. Why not start with this beautiful morning. ",
              "Life is full of uncertainties. But there will always be a sunrise after every sunset. ",
              "Having you by my side makes me very happy.",
              "Each day is an opportunity to grow. I hope we make the most of it.",
              "If you want to gain health and beauty, you should wake up early.",
              "Every morning brings you new hopes and new opportunities. Don’t miss any one of them while you’re sleeping.",
              "Every sunrise marks the rise of life over death, hope over despair, and happiness over suffering. ",
              "Wake up and make yourself a part of this beautiful morning. A beautiful world is waiting outside your door. Have an enjoyable time!",
              "The best way to start a day is waking up early in the morning and enjoying nature with a cup of coffee. I hope you’re doing this right now. ",
              "There is no way you can miss the beauty of today’s morning. Wake up, my dear. I wish this message be your alarm for today.",
              "It’s time to wake up, take a deep breath, and enjoy the sweetness of nature with all your heart.",
              "Mornings define our day. It’s all about how we start every morning. So, get up and make a good start of yet another beautiful day.",
              "Breathing in the fresh morning air makes you healthier and wiser. Don’t ignore the blessings that every morning offers to us. ",
              "I know you slept tight all night. Now wake up and welcome a new sun so bright, here to make your day right.",
     ],
     signature:[
        "partner","lover","significant other","young man", "man","escort", "suitor", "wooer","admirer",
        "follower","beau","loved one","love","beloved","darling","dearest","sweetheart","live-in lover",
        "cohabitee", "common-law husband","fiancé","inamorato","jong","other half","better half","baby",
        "bf","bae","lover boy","date","steady", "fella","flame","sugar daddy", "toy boy", "intended", "fancy man",
        "squeeze","swain","gallant","paramour","leman",
        ]
};

const getRandomItem  = array => {
    return array[Math.floor(Math.random()*array.length)];
};

const mixMessage = ()=>{
    const noun = getRandomItem(template.noun);
    const content = getRandomItem(template.content);
    const signature = getRandomItem(template.signature);
    const mixedMessage = `Good Morning ${noun}! ${content} Your ${signature} ;*`
    document.getElementById("quote").innerHTML = mixedMessage;
};
console.log(mixMessage())