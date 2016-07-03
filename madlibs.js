var nouns=['aardvark', 'beetle', 'coyote', 'dormouse', 'elephant', 'frog'];
var noun = nouns[Math.floor(Math.random() * nouns.length)];

var verbs=['jump', 'fly', 'run', 'dance', 'hop', 'sing'];
var verb= verbs[Math.floor(Math.random() * verbs.length)];

var adjectives=['bashful', 'sneezy', 'sleepy', 'happy', 'sad', 'dopey'];
var adjective = adjectives[Math.floor(Math.random() * adjectives.length)];

var places=['The Moon', 'Panama', 'Bognor Regis', 'General Assembly', 'Canada', 'The Local Wetherspoons'];
var place = places[Math.floor(Math.random() * places.length)];

var persons=['The Incredible Hulk', 'Black Widow', 'Captain America', 'Thor', 'Iron Man', 'Loki'];
var person = persons[Math.floor(Math.random() * persons.length)];

var vehicles=['truck', 'sidecar', 'pedalo', 'caravan', 'taxi', 'bus'];
var vehicle = vehicles[Math.floor(Math.random() * vehicles.length)];

{
console.log("Once upon a time there was a "+adjective+" "+noun+". It was really "+adjective+". It liked to "+verb+" all day. One day, it went to "+place+" to meet "+person+". To get there, it rode in a "+vehicle+", but on the way there, the "+vehicle+" crashed. It had to walk the rest of the way.");
};
// var story = 'Once upon a time there was a [adjective] [noun]. It was really [adjective]. It liked to [verb] all day. One day, it went to [place] to meet [person]. To get there, it rode in a [vehicle], but on the way there, the [vehicle] crashed.  It had to walk the rest of the way.'