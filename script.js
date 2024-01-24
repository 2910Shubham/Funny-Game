function getRandomReply() {
  const nameInput = document.getElementById('nameInput').value.toLowerCase();
  const replyElement = document.getElementById('replyBox');
  const replies = [
    'Akhand Chutiya',
    'Prachand Chutiya',
    'Chhota Chutiya',
    'Bada Chutiya',
    'Sabse Bada Chutiya',
    'Ye to Harami hai',
    'Iske liye Chutiya sabd Chhota hai'
  ];

  if (nameInput.includes('shubham') || nameInput === 'shubham kumar mishra') {
    replyElement.textContent = 'Ye Achchha Aadmi hai.';
  } else {
    const randomIndex = Math.floor(Math.random() * replies.length);
    const randomReply = replies[randomIndex];
    replyElement.textContent = randomReply;
  }
}
