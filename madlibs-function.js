var adjectives = ['funny', 'red', 'dark', 'brightly coloured', 'rotten'];
var nouns = ['badger', 'book', 'house', 'laptop', 'salami'];
var verbs = ['read', 'write', 'sleep', 'work', 'drink', 'eat'];
var places = ['london', 'paris', 'school', 'the royal albert hall', 'somewhere fancy'];
var people = ['your mum', 'jesus', 'santa clause', 'an old gypsy woman', 'steve'];
var vehicles = ['car', 'bike', 'pedalo', 'steam engine', 'plane'];

// create a function that generates a random number between 2 bounds

var randomAdjective = Math.floor( Math.random() * adjectives.length );
var randomNoun      = Math.floor( Math.random() * nouns.length  );
var randomVerb      = Math.floor( Math.random() * verbs.length );
var randomPlace     = Math.floor( Math.random() * places.length );
var randomPerson    = Math.floor( Math.random() * people.length );
var randomVehicle   = Math.floor( Math.random() * vehicles.length );

// create a function that returns a random adjective
// create a function that returns a random anything based on args

var adjective = adjectives[ randomAdjective ];
var noun = nouns[ randomNoun ];
var verb = verbs[ randomVerb ];
var place = places[ randomPlace ];
var person = people[ randomPerson ];
var vehicle = vehicles[ randomVehicle ];

// use functions within story
var story = 'Once upon a time there was a ' + adjective + ' ' + noun + '.\n';
    story += ' It was really ' + adjective + '. It liked to ' + verb + ' all day.\n';
	story += ' One day, it went to ' + place + ' to meet ' + person + '.\n';
	story += ' To get there, it rode in a ' + vehicle + ', but on the way there, the ' + vehicle + ' crashed.\n';
	story += ' It had to walk the rest of the way.';

console.log( story );














