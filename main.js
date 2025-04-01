const mocks1 = [
    "Is that all you've got? Try again.",
    "You're not even trying, are you? One more time!",
    "Is that all? Try again. 🤨",
    "That was... special. Do it again.",
    "Grandma's better. Retry? 👵",
    "Error 404: Skill? Retry. 🤷‍♂️",
    "Not trying? One more time! 🙄",
    "That was... special. Do it again. ✨",
    "Error 404: Skill not found. Retry?",
    "Eyes closed? Try again. 🙈",
    "Snails faster. Another try? 🐌",
    "My grandma could do better. Another attempt?",
    "Call that an attempt? Again. 🤨",
    "Don't give up... yet. Retry. 😅",
    "Progress? Backwards? Retry. ⏪",
    "Disappointed. Try again. 😔",
    "Not your thing? Just kidding. Retry. 😂",
    "Almost not terrible. One more. 🤏",
    "Used your feet? Try again. 🦶",
    "That was unique. Do it again. 🎨",
    "Goldfish better. Retry? 🐟",
    "Warmer... to ice. Try again. 🥶",
    "Everyone fails. Again! 🥳",
    "Fine wine needs time. Retry. 🍷",
    "Best? Unimpressed. One more. 😒",
    "Not even close. Try again. 🎯",
    "Forgot how? Retry. 🧠",
    "On purpose? Again? 😈",
    "Persistent... you are. Retry. 💪",
    "That was something. Do it again. 🤷‍♀️",
    "Rocks better? Retry. 🪨",
    "Almost there... almost. Retry. 🤏",
    "Get it right. Again! 🏆",
    "Broken record. Try again. 💿",
    "Questioning all. One more. 🤔",
    "Try with feeling. Again! ❤️",
    "Blindfold? Retry. 🙈",
    "Allergic to success? Again? 🤧",
    "Devoted to failure. Retry. 🤦‍♂️",
    "Learning experience? Retry faster. 📚",
    "Toddlers better. Retry. 👶",
    "Almost not embarrassing. Retry. 😅",
    "Lower expectations. Again! 📉",
    "Rusty spoon. Try again. 🥄",
    "Need coffee. One more. ☕",
    "Try harder. Again! 😤",
    "Eyes open. Retry. 👀",
    "Testing my patience? Again? ⏱️",
    "Champion of errors. Retry. 👑",
    "Standard version. Retry. 📝",
    "Plants move more. Retry. 🪴",
    "Not a disaster? Retry. 🚧",
    "Lower the bar. Again! 📉",
    "Sharp knife needed. Retry. 🔪",
    "Strong coffee. One more. ☕",
    "Hide your skill lack. Retry. 🎭",
    "Hands, not potato. Retry. 🥔",
    "Secret troll? Again? 🧌",
    "Expert errors? Retry. 🎓",
    "Less bold. Retry. 😬",
    "Statues alive? Retry. 🗿",
    "Not a failure? Retry. 🥳",
    "Admit defeat. Again! 🏳️",
    "Pointless pencil. Retry. ✏️",
    "Find words. One more. 🗣️",
    "Pretend harder. Retry. 🎭",
    "Right side up. Retry. ⬆️",
    "Mocking me? Again? 🤨",
    "Collect less errors. Retry. 🗑️",
    "Less theatrical. Retry. 🎬",
    "Rocks have more life. Retry. 🪨",
    "Not laughable? Retry. 😂",
    "Just give in. Again! 🤷",
    "Inflated tires? Retry. 🚗",
    "Reality check. One more. 🤯",
    "Fake it. Retry. 🎭",
    "Hands only. Retry. 🤲",
    "Enjoying my pain? Again? 😈",
    "Title contender? Retry. 🏆",
    "Concrete, not abstract. Retry. 🧱",
    "Dust bunnies move more. Retry. 🐰",
    "Not a mess? Retry. 🧹",
    "Accept fate. Again! 💀",
    "Find your way. Retry. 🧭",
    "Words needed. One more. 🗣️",
    "Make me proud. Retry. 🤩",
    "Forward and open. Retry. 👀",
    "Robot failure? Again? 🤖",
    "Create a masterpiece. Retry. 🎨",
    "Less art. Retry. 🖼️",
    "Shadows better? Retry. 👤",
    "Not embarrassing? Retry. 😅",
    "Lower bar again. Again! 📉",
    "Skip the track. Retry. ⏭️",
    "Restore faith. One more. 🙏"
];

const exitBtn = document.getElementById("exitBtn");
const revealBtn = document.getElementById("revealBtn");
const fbg = document.getElementById("fbg");
const msg = document.getElementById("randmsg");
const pic = document.getElementById("pic");
let count =0;
let quote = document.getElementById("para");
exitBtn.addEventListener('click',(e)=>{
    count =0;
})


let px;
let py;
revealBtn.addEventListener('click',(e)=>{
    px=Math.floor(Math.random()*281)+10;
    py=Math.floor(Math.random()*561)+40;
    revealBtn.style.left=`${px}px`;
    revealBtn.style.top=`${py}px`;
    quote.textContent = `${mocks1[count]}`;
    count = count+1;
    fbg.style.opacity=`${100-count}%`
    if(count===50){
        msg.textContent = "Hurry Up It's Getting Dark.. 🌑"
    }
    if(count===53){
        msg.textContent = ""
    }
    if(count===80){
        quote.textContent = ""
        msg.textContent = "Alomost There... 😁";
        
    }
    if(count===82){
        msg.textContent = "";
    }
    if(count===2){
        quote.textContent = "April Fool !!!"
        pic.src= "./images/hpfd.webp"
        setTimeout(()=>{exitBtn.click()},2300);
    }
})