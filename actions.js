const getTopicButton = document.querySelector('.submit-button');
const topic = document.querySelector('.topic-answer').innerHTML;

getTopicButton.addEventListener('click', getTopic);

function getTopic() {
    console.log('Button was clicked.');
}

console.log(getTopicButton);
console.log(topic);