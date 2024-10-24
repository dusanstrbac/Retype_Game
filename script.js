const nextLvl = document.getElementById('completeButton');
let inputValue = document.getElementById('playerInput');
let infoText = document.getElementById('infoText');
let word = document.getElementById('selectedWord');
let startGame = document.getElementById('startGame');
let levelInfo = document.getElementById('currentLevel');

// ARRAYS 

const words = [
    "Apple", "Banana", "Chair", "Elephant", "Window", "Guitar", "Mountain", "Sunflower", "Ocean", "Laptop",
    "Candle", "Pillow", "Telescope", "Clock", "Paper", "Zebra", "Galaxy", "Chocolate", "Raindrop", "Soccer",
    "Elephant", "Jellyfish", "Bridge", "Jacket", "Piano", "Cloud", "Unicorn", "River", "Basketball", "Lion",
    "Camera", "Moon", "Tree", "Desk", "Book", "Dolphin", "Backpack", "Starfish", "Hat", "Snowflake", "Bicycle",
    "Cactus", "Butterfly", "Hammer", "Feather", "Sandwich", "Keyboard", "Surfboard", "Volcano", "Bracelet", "Guitar",
    "Lighthouse", "Penguin", "Cherry", "Tiger", "Waterfall", "Eagle", "Maple", "Helicopter", "Whale", "Toothbrush",
    "Rose", "Train", "Bee", "Mango", "Comet", "Violin", "Robot", "Cookie", "Sailboat", "Dragon", "Shark",
    "Ballet", "Turtle", "Snowman", "Castle", "Suitcase", "Cloud", "Fireworks", "Parrot", "Frog", "Diamond",
    "Dinosaur", "Mermaid", "Wizard", "Planet", "Globe", "Submarine", "Sword", "Tornado", "Cherry", "Kangaroo",
    "elephant", "guitar", "sunshine", "pancake", "telescope",
    "balloon", "sapphire", "whisper", "chocolate", "mountain",
    "unicorn", "puzzle", "galaxy", "dragon", "breeze",
    "lantern", "harmony", "espresso", "waterfall", "meadow",
    "tornado", "bubble", "velvet", "captain", "oasis",
    "rainbow", "phoenix", "jazz", "cinnamon", "avalanche",
    "orchid", "symphony", "lighthouse", "mocha", "adventure",
    "kaleidoscope", "bonfire", "blizzard", "moonlight", "whisper",
    "carousel", "cascade", "frost", "firefly", "wanderlust",
    "serendipity", "flamingo", "silhouette", "crimson", "cascade",
    "gondola", "horizon", "marvel", "mystic", "novel",
    "opal", "paprika", "quasar", "serenade", "treasure",
    "violet", "zenith", "illusion", "cosmos", "festival",
    "cascade", "azure", "enchantment", "horizon", "jasmine",
    "lyric", "marigold", "mystic", "nebula", "opal",
    "panorama", "quartz", "serenade", "tulip", "veranda",
    "wanderlust", "zephyr", "ambrosia", "emerald", "harmony"
];

// Event listener kada igrac klikne "Start Game" da mu zapocen igricu
startGame.addEventListener("click", function(){

    let game = document.getElementById('gameSegment');

    game.style.display = 'flex'; // pokazuje igricu
    startGame.style.display = 'none'; // Uklanja START GAME dugme

    StartGame();
});

// FUNKCIJE

function StartGame() {
    loadNewWord(); // Ucitava reci iz array-a
    levelInfo.innerHTML = '1';

    // Kada igrac na inputu pritisne enter da ne mora da klikce dugme ispod
    inputValue.addEventListener("keypress", function(event){
        if ( event.key === "Enter" ) {
            event.preventDefault();
            nextLvl.click();
        }
    });

    // Kada igrac klikne na dugme aktvira komandu
    nextLvl.addEventListener("click", function(){ // Kada igrac pritisne Complete dugme poziva funkciju ispod
        PressedButton();
    });
}


function loadNewWord() {

    let choosenWord = words[Math.floor(Math.random()*words.length)]
    word.innerHTML = choosenWord;
}

function LevelUp() {

    levelInfo.innerHTML++;
    infoText.style.display = 'none';
    loadNewWord();
    ClearInput();
}

function PressedButton() {
    if (inputValue.value == '') {
        infoText.innerHTML = 'Please fill up the input segment in order to complete level';
        infoText.style.display = 'block';
    }
    else if (inputValue.value != word.innerHTML ) {
        infoText.innerHTML = 'Word that You typed is different then selected word';
        infoText.style.display = 'block';
    }
    else if (inputValue.value == word.innerHTML ) {
        LevelUp();
    }
}

function ClearInput() {
    inputValue.value = '';
}