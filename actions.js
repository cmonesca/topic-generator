const getTopicButton = document.querySelector('.submit-button');
const allTopics = [
    "With creativity, where does the tech fit in?",
    "NFTs, we just sold this panel",
    "AR vs VR in the battle beyond reality",
    "What will experiences post COVID look like?",
    "Does the internet really break?",
    "Blockchain = Web 3.0",
    "Options on options, what technology is right?",
    "Are we really talking right now or are we deep fakes?",
    "Gaming FTW",
    "AI and Humans: underrated or overrated"
];
let topic = document.querySelector('.topic-answer');

getTopicButton.addEventListener('click', getTopic);

function getTopic() {    
    let randomTopic = allTopics[Math.floor(Math.random() * allTopics.length)];

    topic.innerHTML = randomTopic;
}
