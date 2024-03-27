// Array of motivational quotes
const motivationalQuotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Everything you've ever wanted is on the other side of fear. - George Addair",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Keep your face always toward the sunshine - and shadows will fall behind you. - Walt Whitman",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "Good, better, best. Never let it rest. 'Til your good is better and your better is best. - St. Jerome",
    "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
    "With the new day comes new strength and new thoughts. - Eleanor Roosevelt",
    "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence. - Helen Keller",
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination. - Jimmy Dean",
    "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh (Alice in Wonderland)",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson"
];

const lawsOfPower = [
    "Never Outshine the Master: Always let those above you feel superior, don't show off too much, make them feel smarter.",
    "Never put too much trust in Friends; Learn how to use Enemies: Don't trust your friends blindly, enemies can sometimes be more reliable.",
    "Conceal your Intentions: Keep your plans and goals secret until you are ready to execute them.",
    "Always Say Less than Necessary: Don't talk more than needed, keep your words precise and meaningful.",
    "Guard your Reputation with your Life: Your reputation is everything, protect it fiercely.",
    "Court Attention at all Costs: Be noticed, make a splash, stand out from the crowd.",
    "Get others to do the Work for you, but Always Take the Credit: Delegate tasks but make sure you get the credit for the results.",
    "Make other People come to you – use Bait if Necessary: Make people come to you, lure them with incentives if needed.",
    "Win through your Actions, Never through Argument: Let your actions speak louder than words, avoid unnecessary arguments.",
    "Infection: Avoid the Unhappy and Unlucky: Stay away from negative people who can bring you down.",
    "Learn to Keep People Dependent on You: Make others dependent on you, be indispensable.",
    "Use Selective Honesty and Generosity to Disarm your Victim: Use honesty and generosity strategically to disarm people's defenses.",
    "When Asking for Help, Appeal to People’s Self-Interest, Never to their Mercy or Gratitude: Frame your requests in a way that appeals to people's self-interest.",
    "Pose as a Friend, Work as a Spy: Gather information by pretending to be a friend while keeping your true intentions hidden.",
    "Crush your Enemy Totally: When you strike, make sure to eliminate all resistance and leave no chance for retaliation.",
    "Use Absence to Increase Respect and Honor: Occasionally withdraw yourself to increase your value in others' eyes.",
    "Keep Others in Suspended Terror: Instill fear and uncertainty in others by keeping them on their toes.",
    "Cultivate an Air of Unpredictability: Keep others guessing about your next move to maintain an advantage.",
    "Do Not Commit to Anyone: Avoid committing to one person or group, maintain your freedom of action.",
    "Play on People’s Need to Believe to Create a Cult-like Following: Exploit people's need for belonging and belief to build a loyal following.",
    "Enter Action with Boldness: Act decisively and boldly to intimidate and impress others.",
    "Plan All the Way to the End: Plan meticulously and consider all possible outcomes before taking action.",
    "Make your Accomplishments Seem Effortless: Don't reveal the effort behind your accomplishments, make them seem effortless.",
    "Control the Options: Get others to play by your rules by limiting their options.",
    "Play the Perfect Courtier: Master the art of social maneuvering to gain favor and influence.",
    "Get others to Play with the Cards you Deal: Manipulate situations to your advantage and make others follow your lead.",
    "Ask for More than you Expect to get: Aim high when making requests to increase your chances of getting what you want.",
    "Create Compelling Spectacles: Stage dramatic events to capture people's attention and leave a lasting impression.",
    "Think as you like, but Behave like others: Keep your unconventional thoughts to yourself and conform outwardly to social norms.",
    "Stir up Waters to Catch Fish: Create chaos and confusion to exploit opportunities that arise in the turmoil.",
    "Despise the Free Lunch: Beware of gifts and favors, as they often come with strings attached.",
    "Avoid Stepping into a Great Man’s Shoes: Avoid following in the footsteps of a great predecessor, as it's difficult to fill their shoes.",
    "Strike the Shepherd and the Sheep will Scatter: Attack the leader to destabilize the group.",
    "Work on the Hearts and Minds of Others: Use persuasion and emotional appeals to win people over to your side.",
    "Disdain Things you cannot have: Don't covet what is beyond your reach, focus on what you can attain.",
    "Create compelling Spectacles: Stage dramatic events to capture people's attention and leave a lasting impression.",
    "Think as you like, but Behave like others: Keep your unconventional thoughts to yourself and conform outwardly to social norms.",
    "Stir up Waters to Catch Fish: Create chaos and confusion to exploit opportunities that arise in the turmoil.",
    "Despise the Free Lunch: Beware of gifts and favors, as they often come with strings attached.",
    "Avoid Stepping into a Great Man’s Shoes: Avoid following in the footsteps of a great predecessor, as it's difficult to fill their shoes.",
    "Strike the Shepherd and the Sheep will Scatter: Attack the leader to destabilize the group.",
    "Work on the Hearts and Minds of Others: Use persuasion and emotional appeals to win people over to your side.",
    "Disdain Things you cannot have: Don't covet what is beyond your reach, focus on what you can attain.",
    "Think as you like, but Behave like others: Keep your unconventional thoughts to yourself and conform outwardly to social norms.",
    "Stir up Waters to Catch Fish: Create chaos and confusion to exploit opportunities that arise in the turmoil.",
    "Despise the Free Lunch: Beware of gifts and favors, as they often come with strings attached.",
    "Avoid Stepping into a Great Man’s Shoes: Avoid following in the footsteps of a great predecessor, as it's difficult to fill their shoes.",
    "Strike the Shepherd and the Sheep will Scatter: Attack the leader to destabilize the group.",
    "Work on the Hearts and Minds of Others: Use persuasion and emotional appeals to win people over to your side.",
    "Disdain Things you cannot have: Don't covet what is beyond your reach, focus on what you can attain."
]
;


const displayContainer = document.querySelector('#left-side-container');

// Function to render a random motivational quote onto the webpage
function renderRandomQuote() {

    // Get a random quote from the lawsOfPower array
    const randomIndex = Math.floor(Math.random() * lawsOfPower.length);
    const randomQuote = lawsOfPower[randomIndex];
    const quotesContainer = document.createElement('div');
    quotesContainer.classList.add('quotes-container');

    const p = document.createElement('p');
    p.textContent = randomQuote;
    quotesContainer.appendChild(p);

    displayContainer.appendChild(quotesContainer);
}