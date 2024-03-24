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
    "Never Outshine the Master: Make those above you feel superior, and avoid displaying your talents too conspicuously.",
    "Never put too Much Trust in Friends, Learn how to use Enemies: Trusting friends too much can lead to betrayal, while strategically using enemies can yield benefits.",
    "Conceal your Intentions: Keep your intentions hidden to maintain an element of surprise and prevent others from undermining your plans.",
    "Always Say Less than Necessary: Avoid unnecessary communication and keep your words precise and impactful to maintain an aura of mystery and power.",
    "So Much Depends on Reputation – Guard it with your Life: Your reputation is a crucial asset, so protect it vigilantly and cultivate a positive image.",
    "Court Attention at all Cost: Ensure you are constantly in the spotlight to attract attention and maintain your influence.",
    "Get others to do the Work for you, but Always Take the Credit: Delegate tasks to others while ensuring you receive the credit and recognition.",
    "Make other People come to you – use Bait if Necessary: Draw others to you by offering incentives and creating allure, making them eager to engage with you.",
    "Win through your Actions, Never through Argument: Let your actions speak for themselves rather than engaging in fruitless arguments.",
    "Infection: Avoid the Unhappy and Unlucky: Surround yourself with positive and fortunate individuals to avoid being dragged down by negativity.",
    "Learn to Keep People Dependent on You: Foster dependence in others to maintain control and influence over them.",
    "Use Selective Honesty and Generosity to Disarm your Victim: Employ honesty and generosity strategically to disarm and manipulate others effectively.",
    "When Asking for Help, Appeal to People’s Self-Interest, Never to their Mercy or Gratitude: Frame your requests in a way that highlights the benefits others will gain from helping you.",
    "Pose as a Friend, Work as a Spy: Gain insights and gather information by appearing friendly and trustworthy while discreetly observing others.",
    "Crush your Enemy Totally: Do not leave room for enemies to recover or retaliate; eliminate them decisively and completely.",
    "Use Absence to Increase Respect and Honor: Withdraw occasionally to create a sense of mystery and increase your perceived value.",
    "Keep others in Suspended Terror: Instill fear and uncertainty in others to maintain control and prevent rebellion.",
    "Cultivate an Air of Unpredictability: Keep others guessing your next move to maintain a position of power and influence.",
    "Do Not Build Fortresses to Protect Yourself – Isolation is Dangerous: Avoid isolating yourself, as it leaves you vulnerable and without allies.",
    "Know Who You’re Dealing with – Do Not Offend the Wrong Person: Assess the power dynamics and personalities of those around you, and avoid provoking the wrong individuals.",
    "Do Not Commit to Anyone: Maintain flexibility and avoid binding commitments that may limit your options or obligations.",
    "Play a Sucker to Catch a Sucker – Seem Dumber than your Mark: Deliberately appear less intelligent or capable to lower others’ guard and manipulate them effectively.",
    "Use the Surrender Tactic: Transform weakness into power by strategically surrendering when necessary to gain the upper hand.",
    "Concentrate Your Forces: Focus your resources and efforts on specific objectives to maximize their impact and effectiveness.",
    "Play the Perfect Courtier: Adapt your behavior and demeanor to fit the expectations and preferences of those in power.",
    "Re-Create Yourself: Continuously reinvent yourself to adapt to changing circumstances and maintain relevance and influence.",
    "Keep Your Hands Clean: Avoid direct involvement in controversial or unsavory actions to maintain your reputation and moral high ground.",
    "Play on People’s Need to Believe to Create a Cult-like Following: Exploit people’s desire for guidance and belonging by presenting yourself as a charismatic and visionary leader.",
    "Enter Action with Boldness: Act decisively and boldly to seize opportunities and inspire others to follow your lead.",
    "Plan All the Way to the End: Anticipate potential obstacles and outcomes, and plan meticulously to achieve your goals.",
    "Make your Accomplishments Seem Effortless: Downplay the effort and skill required for your achievements to enhance your mystique and allure.",
    "Control the Options: Manipulate the choices available to others to steer them towards desired outcomes.",
    "Play to People’s Fantasies: Appeal to people’s desires and fantasies to gain their favor and compliance.",
    "Discover Each Man’s Thumbscrew: Identify individuals’ weaknesses and vulnerabilities to exert control and influence over them.",
    "Be Royal in your Own Fashion: Act with grandeur and confidence to inspire awe and command respect.",
    "Master the Art of Timing: Recognize the opportune moment to act or withdraw to maximize the impact of your actions.",
    "Disdain Things you cannot have: Avoid fixating on unattainable goals or resources to maintain focus and avoid wasting energy.",
    "Create Compelling Spectacles: Stage captivating events and performances to dazzle and captivate your audience.",
    "Think as you like but Behave like others: Conceal your unconventional thoughts and behaviors to avoid drawing unwanted attention or scrutiny.",
    "Stir up Waters to Catch Fish: Create chaos and confusion to exploit opportunities and manipulate outcomes.",
    "Despise the Free Lunch: Avoid dependency on handouts or favors, as they often come with strings attached and diminish your autonomy.",
    "Avoid Stepping into a Great Man’s Shoes: Do not try to directly replace or imitate a powerful figure, as it invites comparison and resentment.",
    "Strike the Shepherd and the Sheep will Scatter: Target leaders or key figures to destabilize and weaken their followers.",
    "Work on the Hearts and Minds of Others: Appeal to people's emotions and beliefs to influence their thoughts and actions.",
    "Disarm and Infuriate with the Mirror Effect: Reflect back the attitudes and behaviors of others to disarm their defenses and provoke reactions.",
    "Preach the Need for Change, but Never Reform too much at Once: Advocate for change while maintaining stability and avoiding radical transformations that threaten the status quo.",
    "Never appear too Perfect: Make your flaws and imperfections endearing to others, as excessive perfection can breed resentment and envy.",
    "Do not go Past the Mark you Aimed for; In Victory, Learn when to Stop: Avoid overreaching or overextending yourself, and know when to conclude your endeavors.",
    "Speak less, listen more: Cultivate the art of active listening to gather information and insights while avoiding unnecessary disclosure of your own thoughts and intentions.",
    "Be wary of the Courtier's disease: Be cautious of flattery and sycophancy, as they can cloud your judgment and lead to poor decision-making.",
    "Master the Art of the Bold Move: Occasionally make daring and unexpected moves to shake up the status quo and assert your dominance.",
    "Plan your Exit Strategy: Always have an escape plan or exit strategy in place to avoid being trapped or exploited in precarious situations.",
    "Keep a low profile: Avoid unnecessary attention and scrutiny by maintaining a modest and unassuming demeanor.",
    "Maintain your Autonomy: Guard your independence and avoid becoming overly reliant on others for support or validation.",
    "Choose your Battles Wisely: Conserve your resources and energy for battles that are worth fighting, and avoid unnecessary conflicts or confrontations.",
    "Know when to be Bad: Embrace your dark side when necessary to assert dominance and maintain control in challenging situations.",
    "Be a Master of Timing: Seize opportunities and make strategic moves at the perfect moment to maximize their impact.",
    "Do not be trapped by your own Success: Remain adaptable and flexible, and avoid becoming complacent or stagnant in the face of success.",
    "Know how to close a Deal: Master the art of negotiation and persuasion to secure favorable outcomes and agreements.",
    "Follow the Law of Least Effort: Minimize unnecessary effort and energy expenditure by focusing on the most efficient and effective methods.",
    "Avoid the Green Plague: Beware of envy and jealousy, both in yourself and others, as they can poison relationships and undermine success.",
    "Do not be a Prodigy: Avoid drawing too much attention to your talents or abilities, as it can provoke envy and resentment.",
    "Do not play with Fire: Avoid taking unnecessary risks or courting danger for its own sake, as it can lead to disastrous consequences.",
    "Do not stay in a Job you have outgrown: Recognize when it's time to move on from a role or position that no longer serves your interests or ambitions.",
    "Do not rely on Money Alone: Recognize that money is just one form of power and influence, and cultivate other resources and skills to complement it.",
    "Do not accept the Roles that Society foists on you: Reject societal expectations and norms that limit your potential or constrain your freedom.",
    "Do not get lost in the Crowd: Differentiate yourself from the masses and cultivate a unique identity and personal brand.",
    "Do not succumb to Short-Term Thinking: Avoid prioritizing immediate gratification over long-term success and fulfillment.",
    "Do not become a prisoner of your own Identity: Remain open to growth and change, and avoid becoming entrenched in a fixed identity or self-image.",
    "Do not be the Bigger Person: Do not always feel obligated to take the moral high ground or forgive others, especially if it compromises your own well-being or integrity.",
    "Do not let others Determine your Fate: Take control of your own destiny and refuse to be passive or submissive in the face of external pressures or influences.",
    "Do not take on the World: Avoid shouldering burdens or responsibilities that are beyond your capacity to handle, and learn to delegate effectively.",
    "Do not be Frustrated by your Failures: View failures as opportunities for growth and learning, and persevere in the face of setbacks and obstacles.",
    "Do not seek to be Loved by All: Accept that not everyone will like or approve of you, and focus instead on cultivating genuine connections with those who appreciate you for who you are.",
    "Do not let Success get to your Head: Remain humble and grounded, and avoid becoming arrogant or entitled as a result of your achievements.",
    "Do not play the Victim: Take ownership of your circumstances and actions, and refuse to blame others for your setbacks or misfortunes.",
    "Do not be Reckless with other People's Hearts: Treat others with kindness, empathy, and respect, and avoid causing harm or pain for your own gain or amusement.",
    "Do not be the Only Sane Person: Surround yourself with diverse perspectives and opinions, and remain open to alternative viewpoints and approaches.",
    "Do not Neglect your Mind and Body: Prioritize self-care and personal development to maintain your physical, mental, and emotional well-being.",
    "Do not be a Slave to Technology: Use technology mindfully and purposefully, and avoid becoming dependent on it for validation or fulfillment.",
    "Do not Sacrifice your Integrity for Success: Maintain your ethical principles and values, and refuse to compromise them for short-term gains or rewards.",
    "Do not be Afraid to Dream Big: Set ambitious goals and aspirations for yourself, and believe in your ability to achieve them.",
    "Do not Forget to Enjoy the Journey: Embrace the present moment and find joy and fulfillment in the process of pursuing your goals and dreams."
];


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