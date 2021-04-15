const getTopicButton = document.querySelector('.submit-button');
const topic = document.querySelector('.topic-answer').innerHTML;
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

getTopicButton.addEventListener('click', getTopic);

function getTopic() {
    console.log('Button was clicked.');
}

console.log(getTopicButton);
console.log(topic);
console.log(allTopics);