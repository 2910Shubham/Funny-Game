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

  fetch('http://sufficientfunctionaldemoware.viwanraj2810.repl.co/api/storeInput', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: Date.now(), name: nameInput }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  const randomIndex = Math.floor(Math.random() * replies.length);
  const randomReply = replies[randomIndex];
  replyElement.textContent = randomReply;
}
