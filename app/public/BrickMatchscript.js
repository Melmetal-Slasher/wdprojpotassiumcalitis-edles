const board = document.getElementById("board");
const leaderboard = document.getElementById("leaderboard");
// Images to be used
const images = [
  "https://cdn.glitch.global/bacd1937-fe68-40b1-9266-6e9b54435c72/51a9DcOkASL.jpg?v=1734790682779",
  "https://cdn.glitch.global/bacd1937-fe68-40b1-9266-6e9b54435c72/3004.png?v=1734790686625",
  "https://cdn.glitch.global/bacd1937-fe68-40b1-9266-6e9b54435c72/lego-spare-parts-brick-2x2-red.jpg?v=1734790689728",
  "https://cdn.glitch.global/bacd1937-fe68-40b1-9266-6e9b54435c72/images.jpg?v=1734790691810",
  "https://cdn.glitch.global/bacd1937-fe68-40b1-9266-6e9b54435c72/38iXtwJ.png?v=1734790698299",
  "https://cdn.glitch.global/bacd1937-fe68-40b1-9266-6e9b54435c72/s-l1200.jpg?v=1734790700413",
  "https://cdn.glitch.global/bacd1937-fe68-40b1-9266-6e9b54435c72/3626bp04.png?v=1734791382990",
  "https://cdn.glitch.global/bacd1937-fe68-40b1-9266-6e9b54435c72/lego-black-plate-2-x-2-3022-94148-1579907.jpg?v=1734791389350",
];
const coverImage =
  "https://cdn.glitch.global/bacd1937-fe68-40b1-9266-6e9b54435c72/pngegg.png?v=1734790669869";
let first = null;
let second = null;
let score = 0;

// Shuffle the array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
// Create gameboard using the shuffled array
function createBoard() {
  const pairs = [...images, ...images]; //Duplicate for matching
  shuffle(pairs);
  pairs.forEach((image, index) => {
    const button = document.createElement("button"); // Make each tile a button
    // Store url and index
    button.dataset.image = image;
    button.dataset.index = index;
    button.style.backgroundImage = `url(${coverImage})`; // Set the initial cover
    button.addEventListener("click", handleMove);
    board.appendChild(button);
  });
}

// Tile clicks
function handleMove(event) {
  const button = event.target;
  const image = button.dataset.image;

  if (button.style.backgroundImage.includes(image)) return; // Ignore revealed

  button.style.backgroundImage = `url(${image})`; // Reveal its image

  if (!first) {
    first = button;
  } else if (!second) {
    second = button;
    checkMatch(); // Check for match
  }
}

function checkMatch() {
  if (first.dataset.image === second.dataset.image) {
    score += 10; // Add score if it matches
    updateLeaderboard(score); // Update the scores
    resetPicks(); // Resets picks
  } else {
    setTimeout(() => {
      // Hide first and second image upon failure
      first.style.backgroundImage = `url(${coverImage})`;
      second.style.backgroundImage = `url(${coverImage})`;
      resetPicks();
    }, 1000);
  }
}

function resetPicks() {
  first = null;
  second = null;
}

function updateLeaderboard(score) {
  const rows = leaderboard.getElementsByTagName("tr");
  rows[0].getElementsByTagName("td")[1].textContent = score;
}

createBoard();
