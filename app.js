// Enhanced Island data with better organization
const islandData = {
  maldives: {
    name: "Maldives",
    emoji: "🏝️",
    description:
      "The Maldives is a tropical paradise in the Indian Ocean, known for its crystal-clear waters, vibrant coral reefs, and luxurious overwater bungalows.",
    location: "Indian Ocean, southwest of Sri Lanka",
    area: "298 km²",
    population: "~540,000",
    language: "Dhivehi",
    currency: "Maldivian Rufiyaa",
    climate: "Tropical monsoon climate with warm temperatures year-round",
    bestTimeToVisit: "November to April",
    rating: 4.8,
    travelTips: [
      "Book water villas in advance during peak season",
      "Try local Maldivian cuisine like Mas Huni",
      "Respect local customs and dress modestly outside resorts",
    ],
    features: [
      "Overwater bungalows",
      "Vibrant coral reefs",
      "White sandy beaches",
      "Rich marine life",
      "Luxury resorts",
    ],
    activities: [
      "Snorkeling and diving",
      "Island hopping",
      "Sunset cruises",
      "Spa treatments",
      "Water sports",
    ],
    funFact:
      "The Maldives is the flattest country in the world, with an average ground level of just 1.5 meters above sea level.",
    imageUrl: "images.jpg",
  },
  easter: {
    name: "Easter Island",
    emoji: "🗿",
    description:
      "Easter Island, known locally as Rapa Nui, is a remote volcanic island in Polynesia, famous for its mysterious Moai statues created by the early Rapa Nui people.",
    location: "Southeastern Pacific Ocean",
    area: "163.6 km²",
    population: "~7,750",
    language: "Spanish, Rapa Nui",
    currency: "Chilean Peso",
    climate: "Subtropical climate with mild temperatures year-round",
    bestTimeToVisit: "December to March",
    rating: 4.6,
    travelTips: [
      "Hire a local guide to understand Moai cultural significance",
      "Book accommodations well in advance",
      "Respect sacred sites and don't climb on Moai",
    ],
    features: [
      "Moai statues",
      "Volcanic craters",
      "Ancient ceremonial sites",
      "Rocky coastline",
      "Unique Polynesian culture",
    ],
    activities: [
      "Exploring archaeological sites",
      "Hiking volcanic craters",
      "Learning about Rapa Nui culture",
      "Stargazing",
      "Bird watching",
    ],
    funFact:
      "The Moai statues were carved between 1250 and 1500 CE, with the largest standing over 10 meters tall and weighing 82 tons.",
    imageUrl: "images (1)w.jpg",
  },
  iceland: {
    name: "Iceland",
    emoji: "🏔️",
    description:
      "Iceland is a Nordic island country known as the 'Land of Fire and Ice' due to its numerous volcanoes and glaciers. It offers stunning natural landscapes including geysers, waterfalls, and the Northern Lights.",
    location: "North Atlantic Ocean",
    area: "103,000 km²",
    population: "~376,000",
    language: "Icelandic",
    currency: "Icelandic Króna",
    climate: "Temperate maritime climate with cool summers and mild winters",
    bestTimeToVisit:
      "June-August for midnight sun, Sept-March for Northern Lights",
    rating: 4.7,
    travelTips: [
      "Dress in layers for rapidly changing weather",
      "Check road conditions regularly, especially in winter",
      "Book Northern Lights tours in advance",
    ],
    features: [
      "Volcanoes and glaciers",
      "Geysers and hot springs",
      "Waterfalls",
      "Northern Lights",
      "Black sand beaches",
    ],
    activities: [
      "Glacier hiking",
      "Geothermal spa visits",
      "Northern Lights tours",
      "Whale watching",
      "Exploring volcanic landscapes",
    ],
    funFact:
      "Iceland is one of the most sparsely populated countries in Europe, with about 80% of the country uninhabited.",
    imageUrl:
      "1678434254_aurora_borealis_peninsula_snaefellsnes_iceland_march_2013.jpg",
  },
  andaman: {
    name: "Andaman & Nicobar Islands",
    emoji: "🏝️",
    description:
      "The Andaman and Nicobar Islands are a group of islands at the juncture of the Bay of Bengal and the Andaman Sea. Known for their pristine beaches, coral reefs, and rich biodiversity.",
    location: "Bay of Bengal",
    area: "8,249 km²",
    population: "~380,000",
    language: "Hindi, Bengali, Tamil, Telugu, Nicobarese",
    currency: "Indian Rupee",
    climate: "Tropical climate with warm temperatures and high humidity",
    bestTimeToVisit: "October to May",
    rating: 4.5,
    travelTips: [
      "Check permit requirements for restricted areas",
      "Book diving and snorkeling tours in advance",
      "Carry cash as ATMs are limited on smaller islands",
    ],
    features: [
      "Pristine beaches",
      "Coral reefs",
      "Tropical rainforests",
      "Indigenous tribes",
      "Historic Cellular Jail",
    ],
    activities: [
      "Scuba diving and snorkeling",
      "Beach relaxation",
      "Island hopping",
      "Visiting historical sites",
      "Nature walks",
    ],
    funFact:
      "The Sentinelese people of North Sentinel Island are one of the last uncontacted tribes in the world and vigorously reject all contact with outsiders.",
    imageUrl: "jolly-buoy-island-andaman.jpg",
  },
  lakshadweep: {
    name: "Lakshadweep Islands",
    emoji: "🏝️",
    description:
      "Lakshadweep is a group of coral atolls in the Arabian Sea, known for their turquoise lagoons, white sandy beaches, and rich marine life. It's India's smallest Union Territory.",
    location: "Arabian Sea",
    area: "32 km²",
    population: "~65,000",
    language: "Malayalam, Jeseri",
    currency: "Indian Rupee",
    climate: "Tropical climate with moderate temperatures",
    bestTimeToVisit: "October to mid-May",
    rating: 4.4,
    travelTips: [
      "All visitors require an entry permit through registered operators",
      "Internet and mobile connectivity may be limited",
      "Respect local Islamic customs and dress modestly",
    ],
    features: [
      "Coral atolls",
      "Turquoise lagoons",
      "White sandy beaches",
      "Coconut palms",
      "Rich marine biodiversity",
    ],
    activities: [
      "Water sports",
      "Coral reef exploration",
      "Island camping",
      "Fishing",
      "Cultural experiences",
    ],
    funFact:
      "Lakshadweep means 'a hundred thousand islands' in Malayalam, though the archipelago actually consists of just 36 islands.",
    imageUrl: "1715256368_minicoy_island_1.jpg.webp",
  },
  majuli: {
    name: "Majuli Island",
    emoji: "🏝️",
    description:
      "Majuli is a large river island in the Brahmaputra River in Assam, India. It's recognized as the world's largest river island and is known for its Vaishnavite culture and unique ecosystem.",
    location: "Brahmaputra River, Assam, India",
    area: "~880 km² (varies with seasons)",
    population: "~167,000",
    language: "Assamese",
    currency: "Indian Rupee",
    climate: "Humid subtropical climate with heavy monsoon rains",
    bestTimeToVisit: "October to March",
    rating: 4.3,
    travelTips: [
      "Avoid visiting during peak monsoon (June-September)",
      "Respect religious practices at Vaishnavite monasteries",
      "Try local Assamese cuisine and traditional crafts",
    ],
    features: [
      "River island ecosystem",
      "Vaishnavite monasteries (Satras)",
      "Wetlands and water bodies",
      "Migratory birds",
      "Traditional crafts",
    ],
    activities: [
      "Visiting Satras (monasteries)",
      "Bird watching",
      "Exploring local culture",
      "Boat rides",
      "Pottery and mask-making workshops",
    ],
    funFact:
      "Majuli has been nominated for inclusion in the UNESCO World Heritage List and is known for its efforts in preserving the neo-Vaishnavite culture.",
    imageUrl: "9b64ce_59621eda56164829911feae1cd83d516~mv2.avif",
  },
  diu: {
    name: "Diu Island",
    emoji: "🏝️",
    description:
      "Diu is a small island off the southern coast of Gujarat, India. It was a Portuguese colony until 1961 and retains much of its Portuguese architecture and cultural influences.",
    location: "Arabian Sea, off the coast of Gujarat, India",
    area: "38.8 km²",
    population: "~52,000",
    language: "Gujarati, Hindi, English",
    currency: "Indian Rupee",
    climate: "Tropical savanna climate with moderate temperatures",
    bestTimeToVisit: "October to March",
    rating: 4.2,
    travelTips: [
      "Rent a bicycle or scooter to explore Portuguese architecture",
      "Diu has more relaxed alcohol laws than neighboring Gujarat",
      "Visit during the Diu Festival for cultural experiences",
    ],
    features: [
      "Portuguese architecture",
      "Beautiful beaches",
      "Historic forts",
      "Churches",
      "Lighthouses",
    ],
    activities: [
      "Beach activities",
      "Exploring Portuguese heritage",
      "Visiting Diu Fort",
      "Water sports",
      "Trying local cuisine",
    ],
    funFact:
      "Diu was one of the last European colonies in India, with Portuguese rule lasting for over 400 years until it was incorporated into India in 1961.",
    imageUrl: "2-diu-fort-diu-attr-hero-1.jpg",
  },
  santorini: {
    name: "Santorini",
    emoji: "🏛️",
    description:
      "Santorini is a stunning Greek island in the Aegean Sea, famous for its whitewashed buildings with blue domes, dramatic cliffs, and breathtaking sunsets over the caldera.",
    location: "Aegean Sea, Greece",
    area: "76 km²",
    population: "~15,500",
    language: "Greek",
    currency: "Euro",
    climate: "Mediterranean climate with hot, dry summers and mild winters",
    bestTimeToVisit: "April to October",
    rating: 4.8,
    travelTips: [
      "Book accommodations with caldera views well in advance",
      "Visit Oia for the most famous sunset views",
      "Try local specialties like fava and white eggplants",
    ],
    features: [
      "Caldera views",
      "Whitewashed architecture",
      "Volcanic beaches",
      "Ancient ruins",
      "Vineyards",
    ],
    activities: [
      "Watching sunsets in Oia",
      "Wine tasting tours",
      "Exploring ancient Akrotiri",
      "Swimming at Red Beach",
      "Boat tours around the caldera",
    ],
    funFact:
      "Santorini is what remains after one of the largest volcanic eruptions in recorded history, which created the current caldera around 1600 BCE.",
    imageUrl: "santorini.jpg",
  },
  bali: {
    name: "Bali",
    emoji: "🛕",
    description:
      "Bali is an Indonesian island known for its volcanic mountains, iconic rice paddies, beaches, and coral reefs. It's famous for its vibrant Hindu culture, temples, and spiritual retreats.",
    location: "Lesser Sunda Islands, Indonesia",
    area: "5,780 km²",
    population: "~4.3 million",
    language: "Indonesian, Balinese",
    currency: "Indonesian Rupiah",
    climate: "Tropical climate with wet and dry seasons",
    bestTimeToVisit: "April to October",
    rating: 4.7,
    travelTips: [
      "Respect temple customs and dress modestly when visiting",
      "Learn basic Balinese phrases",
      "Try local warungs (small restaurants) for authentic food",
    ],
    features: [
      "Volcanic mountains",
      "Terraced rice fields",
      "Hindu temples",
      "Beautiful beaches",
      "Vibrant culture",
    ],
    activities: [
      "Temple visits",
      "Surfing in Kuta",
      "Rice terrace trekking",
      "Spa and wellness retreats",
      "Traditional dance performances",
    ],
    funFact:
      "Bali is the only Hindu-majority province in Muslim-majority Indonesia, with over 80% of the population practicing Balinese Hinduism.",
    imageUrl: "bali.jpg",
  },
};

// Enhanced Loading Screen with longer duration
let progress = 0;
const progressBar = document.getElementById("progressBar");
const loadingMessage = document.getElementById("loadingMessage");
const tipText = document.getElementById("tipText");

const loadingMessages = [
  "Loading island assets",
  "Preparing tropical beaches",
  "Setting up palm trees",
  "Warming up the ocean",
  "Finalizing adventure details",
];

const loadingTips = [
  "Did you know? The Maldives is the flattest country in the world.",
  "Easter Island is one of the most remote inhabited islands in the world.",
  "Iceland is often called the 'Land of Fire and Ice' due to its volcanoes and glaciers.",
  "The Andaman Islands are home to some of the last uncontacted tribes in the world.",
  "Majuli in Assam is the largest river island in the world.",
];

function simulateLoading() {
  const interval = setInterval(() => {
    progress += Math.random() * 10;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);

      // Add a little delay at 100% for better UX
      setTimeout(() => {
        document.getElementById("loadingScreen").style.display = "none";
      }, 800);
    }

    progressBar.style.width = `${progress}%`;

    // Change loading message at certain intervals
    if (progress < 20 && loadingMessage.textContent !== loadingMessages[0]) {
      loadingMessage.textContent = loadingMessages[0];
    } else if (
      progress >= 20 &&
      progress < 40 &&
      loadingMessage.textContent !== loadingMessages[1]
    ) {
      loadingMessage.textContent = loadingMessages[1];
    } else if (
      progress >= 40 &&
      progress < 60 &&
      loadingMessage.textContent !== loadingMessages[2]
    ) {
      loadingMessage.textContent = loadingMessages[2];
    } else if (
      progress >= 60 &&
      progress < 80 &&
      loadingMessage.textContent !== loadingMessages[3]
    ) {
      loadingMessage.textContent = loadingMessages[3];
    } else if (
      progress >= 80 &&
      loadingMessage.textContent !== loadingMessages[4]
    ) {
      loadingMessage.textContent = loadingMessages[4];
    }

    // Change tip text randomly
    if (Math.random() < 0.05) {
      // 5% chance to change tip each interval
      const randomTip =
        loadingTips[Math.floor(Math.random() * loadingTips.length)];
      tipText.textContent = randomTip;
    }
  }, 300); // Update every 300ms for a total loading time of ~10-15 seconds
}

// Start loading simulation when page loads
window.addEventListener("load", function () {
  // Show loading screen for a minimum of 5 seconds
  setTimeout(simulateLoading, 5000);
});

// Simple JavaScript for screen management
function showScreen(screenId) {
  // Hide all screens
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.style.display = "none";
  });

  // Show the selected screen
  document.getElementById(screenId).style.display = "block";

  // Initialize games when their screens are shown
  if (screenId === "memoryScreen") {
    initMemoryGame();
  } else if (screenId === "explorerScreen") {
    initIslandMatch();
  } else if (screenId === "scrambleScreen") {
    initScrambleGame();
  } else if (screenId === "puzzleScreen") {
    initPuzzleGame();
  } else if (screenId === "treasureScreen") {
    initTreasureGame();
  } else if (screenId === "survivalScreen") {
    initSurvivalGame();
  } else if (screenId === "quizScreen") {
    loadQuestion();
  }
}

function hideScreens() {
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.style.display = "none";
  });
}

// Island detail modal functions
function showIslandDetails(islandId) {
  const island = islandData[islandId];
  if (!island) return;

  const modalContent = document.getElementById("islandModalContent");
  modalContent.innerHTML = `
            <div class="island-detail-container">
              <div class="island-image-container">
                <img src="${island.imageUrl}" alt="${
    island.name
  }" class="island-detail-image">
              </div>
              <div class="island-info-container">
                <h2 class="text-2xl font-bold mb-4">${island.emoji} ${
    island.name
  }</h2>
                <p class="mb-4">${island.description}</p>
                
                <div class="island-info-section">
                  <h3 class="font-semibold mb-2">Key Information</h3>
                  <div class="info-grid">
                    <div class="info-item">
                      <span class="info-label">Location</span>
                      <span class="info-value">${island.location}</span>
                    </div>
                    <div class="info-item">
                      <span class="info-label">Area</span>
                      <span class="info-value">${island.area}</span>
                    </div>
                    <div class="info-item">
                      <span class="info-label">Population</span>
                      <span class="info-value">${island.population}</span>
                    </div>
                    <div class="info-item">
                      <span class="info-label">Language</span>
                      <span class="info-value">${island.language}</span>
                    </div>
                    <div class="info-item">
                      <span class="info-label">Currency</span>
                      <span class="info-value">${island.currency}</span>
                    </div>
                    <div class="info-item">
                      <span class="info-label">Climate</span>
                      <span class="info-value">${island.climate}</span>
                    </div>
                  </div>
                </div>
                
                <div class="island-info-section">
                  <h3 class="font-semibold mb-2">Notable Features</h3>
                  <ul class="feature-list">
                    ${island.features
                      .map((feature) => `<li>${feature}</li>`)
                      .join("")}
                  </ul>
                </div>
                
                <div class="island-info-section">
                  <h3 class="font-semibold mb-2">Popular Activities</h3>
                  <div>
                    ${island.activities
                      .map(
                        (activity) =>
                          `<span class="activity-tag">${activity}</span>`
                      )
                      .join("")}
                  </div>
                </div>
                
                <div class="bg-yellow-50 p-4 rounded-lg">
                  <h3 class="font-semibold mb-2">Fun Fact</h3>
                  <p>${island.funFact}</p>
                </div>
              </div>
            </div>
          `;

  document.getElementById("islandModal").style.display = "flex";
}

function closeIslandModal() {
  document.getElementById("islandModal").style.display = "none";
}

// Close modal when clicking outside the content
window.onclick = function (event) {
  const modal = document.getElementById("islandModal");
  if (event.target === modal) {
    closeIslandModal();
  }
};

// Sound functions
function playCorrectSound() {
  const sound = document.getElementById("correctSound");
  if (sound) {
    sound.currentTime = 0; // Reset to start
    sound.play().catch((e) => console.log("Audio play failed:", e));
  }
}

function playWrongSound() {
  const sound = document.getElementById("wrongSound");
  if (sound) {
    sound.currentTime = 0; // Reset to start
    sound.play().catch((e) => console.log("Audio play failed:", e));
  }
}

// Quiz functionality
const quizQuestions = [
  {
    question: "Which island is famous for its mysterious Moai statues?",
    options: ["Maldives", "Easter Island", "Iceland", "Andaman Islands"],
    correct: 1,
  },
  {
    question: "Which Indian island group is located in the Bay of Bengal?",
    options: ["Lakshadweep", "Andaman & Nicobar", "Majuli", "Diu"],
    correct: 1,
  },
  {
    question: "What is the world's largest river island?",
    options: ["Majuli", "Diu", "Lakshadweep", "Maldives"],
    correct: 0,
  },
];

let currentQuestion = 0;
let quizScore = 0;

function loadQuestion() {
  const question = quizQuestions[currentQuestion];
  document.getElementById("quizQuestion").textContent = question.question;

  const optionsContainer = document.getElementById("quizOptions");
  optionsContainer.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.className =
      "w-full text-left p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors";
    button.onclick = () => checkAnswer(index);
    optionsContainer.appendChild(button);
  });

  document.getElementById("quizFeedback").classList.add("hidden");
  document.getElementById("quizNext").disabled = true;
}

function checkAnswer(selectedIndex) {
  const question = quizQuestions[currentQuestion];
  const feedback = document.getElementById("quizFeedback");

  if (selectedIndex === question.correct) {
    feedback.textContent = "Correct! Well done!";
    feedback.className = "my-4 p-3 rounded-lg bg-green-100 text-green-800";
    quizScore++;
    playCorrectSound(); // Play correct sound
  } else {
    feedback.textContent = `Incorrect. The correct answer is: ${
      question.options[question.correct]
    }`;
    feedback.className = "my-4 p-3 rounded-lg bg-red-100 text-red-800";
    playWrongSound(); // Play wrong sound
  }

  feedback.classList.remove("hidden");
  document.getElementById("quizNext").disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizQuestions.length) {
    loadQuestion();
  } else {
    // Quiz completed
    document.getElementById(
      "quizQuestion"
    ).textContent = `Quiz Complete! You scored ${quizScore} out of ${quizQuestions.length}`;
    document.getElementById("quizOptions").innerHTML = "";
    document.getElementById("quizFeedback").classList.add("hidden");
    document.getElementById("quizNext").textContent = "Restart Quiz";
    document.getElementById("quizNext").onclick = restartQuiz;
    document.getElementById("quizNext").disabled = false;
  }
}

function restartQuiz() {
  currentQuestion = 0;
  quizScore = 0;
  document.getElementById("quizNext").textContent = "Next Question";
  document.getElementById("quizNext").onclick = nextQuestion;
  loadQuestion();
}

// Enhanced Memory Match with Power-ups
let memoryCards = [];
let flippedCards = [];
let matchedPairs = 0;
let moves = 0;
let memoryGameActive = false;
let memoryCoins = 100;
let memoryTimer;
let timeLeft = 60;
let bestTime = localStorage.getItem("memoryBestTime") || 0;

// Power-up states
let activePowerup = null;
let peekingActive = false;
let freezeActive = false;
let magnetActive = false;

const memorySymbols = ["🏝️", "🗿", "🏔️", "🌊", "🐠", "🌴", "☀️", "⛵"];

// Enhanced Memory Match with competitive features
let memoryHighScores =
  JSON.parse(localStorage.getItem("memoryHighScores")) || [];
let comboMultiplier = 1;
let consecutiveMatches = 0;
let memoryGameMode = "classic"; // 'classic', 'timeAttack', 'survival'

function initMemoryGame() {
  console.log("Initializing Memory Game...");

  // Reset game state
  memoryCards = [];
  flippedCards = [];
  matchedPairs = 0;
  moves = 0;
  memoryGameActive = false;
  memoryCoins = 100;
  comboMultiplier = 1;
  consecutiveMatches = 0;

  document.getElementById("memoryStart").classList.remove("hidden");
  document.getElementById("memoryReset").classList.add("hidden");
  document.getElementById("memoryFeedback").classList.add("hidden");
  document.getElementById("activePowerup").classList.add("hidden");

  // Add game mode selection
  const memoryContent = document.getElementById("memoryContent");
  let modeSelector = memoryContent.querySelector(".game-mode-selector");

  if (!modeSelector) {
    modeSelector = document.createElement("div");
    modeSelector.className =
      "game-mode-selector mb-6 p-4 bg-gray-100 rounded-lg";
    modeSelector.innerHTML = `
      <h4 class="font-semibold mb-3 text-center">🎮 Select Game Mode</h4>
      <div class="flex flex-wrap gap-2 justify-center">
        <button onclick="setMemoryGameMode('classic')" class="mode-btn ${
          memoryGameMode === "classic" ? "active" : ""
        }" data-mode="classic">
          🏆 Classic
        </button>
        <button onclick="setMemoryGameMode('timeAttack')" class="mode-btn ${
          memoryGameMode === "timeAttack" ? "active" : ""
        }" data-mode="timeAttack">
          ⏰ Time Attack
        </button>
        <button onclick="setMemoryGameMode('survival')" class="mode-btn ${
          memoryGameMode === "survival" ? "active" : ""
        }" data-mode="survival">
          ❤️ Survival
        </button>
      </div>
    `;
    memoryContent.insertBefore(
      modeSelector,
      memoryContent.querySelector(".memory-header")
    );
  }

  updateMemoryStats();
  updateLeaderboard();
}

function setMemoryGameMode(mode) {
  memoryGameMode = mode;
  document.querySelectorAll("#memoryContent .mode-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.mode === mode);
  });

  // Update initial time based on mode
  switch (mode) {
    case "timeAttack":
      timeLeft = 90;
      break;
    case "survival":
      timeLeft = 60;
      memoryCoins = 50;
      break;
    default:
      timeLeft = 60;
      memoryCoins = 100;
  }

  updateMemoryStats();
}

function startMemoryGame() {
  console.log("Starting Memory Game in mode:", memoryGameMode);

  // Create pairs of symbols
  const gameSymbols = [...memorySymbols, ...memorySymbols];

  // Shuffle the symbols
  for (let i = gameSymbols.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [gameSymbols[i], gameSymbols[j]] = [gameSymbols[j], gameSymbols[i]];
  }

  memoryCards = gameSymbols;
  flippedCards = [];
  matchedPairs = 0;
  moves = 0;
  memoryGameActive = true;
  comboMultiplier = 1;
  consecutiveMatches = 0;

  // Set initial time based on mode
  switch (memoryGameMode) {
    case "timeAttack":
      timeLeft = 90;
      break;
    case "survival":
      timeLeft = 60;
      memoryCoins = 50;
      break;
    default:
      timeLeft = 60;
  }

  // Reset power-ups
  activePowerup = null;
  peekingActive = false;
  freezeActive = false;
  magnetActive = false;

  document.getElementById("memoryStart").classList.add("hidden");
  document.getElementById("memoryReset").classList.remove("hidden");
  document.getElementById("activePowerup").classList.add("hidden");

  updateMemoryStats();
  renderMemoryGrid();
  startMemoryTimer();
  updatePowerupButtons();
}

function renderMemoryGrid() {
  const grid = document.getElementById("memoryGrid");
  grid.innerHTML = "";

  memoryCards.forEach((symbol, index) => {
    const card = document.createElement("div");
    card.className = "memory-card";
    card.dataset.index = index;
    card.dataset.symbol = symbol;

    const front = document.createElement("div");
    front.className = "front";
    front.textContent = symbol;

    const back = document.createElement("div");
    back.className = "back";
    back.textContent = "?";

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener("click", () => flipCard(index));
    grid.appendChild(card);
  });
}

function flipCard(index) {
  if (
    !memoryGameActive ||
    flippedCards.length >= 2 ||
    flippedCards.includes(index) ||
    memoryCards[index] === null
  ) {
    return;
  }

  const card = document.querySelector(`.memory-card[data-index="${index}"]`);
  card.classList.add("flipped");
  flippedCards.push(index);

  // Handle magnet power-up
  if (magnetActive && flippedCards.length === 1) {
    const firstSymbol = memoryCards[flippedCards[0]];
    // Find matching card
    for (let i = 0; i < memoryCards.length; i++) {
      if (
        i !== flippedCards[0] &&
        memoryCards[i] === firstSymbol &&
        memoryCards[i] !== null
      ) {
        setTimeout(() => {
          flipCard(i);
        }, 500);
        break;
      }
    }
    magnetActive = false;
    updateActivePowerup(null);
  }

  if (flippedCards.length === 2) {
    moves++;
    updateMemoryStats();
    checkForMatch();
  }
}

// Enhanced match checking with combos
function checkForMatch() {
  const [index1, index2] = flippedCards;

  if (memoryCards[index1] === memoryCards[index2]) {
    // Match found - enhanced with combos
    matchedPairs++;
    consecutiveMatches++;

    // Combo system
    if (consecutiveMatches >= 2) {
      comboMultiplier = Math.min(consecutiveMatches, 5);
      const comboBonus = 5 * comboMultiplier;
      memoryCoins += comboBonus;
      showComboEffect(comboMultiplier, comboBonus);
    } else {
      memoryCoins += 5;
      comboMultiplier = 1;
    }

    memoryCards[index1] = null;
    memoryCards[index2] = null;
    flippedCards = [];

    updateMemoryFeedback(
      `Great match! ${comboMultiplier > 1 ? `Combo x${comboMultiplier}!` : ""}`,
      "success"
    );
    playCorrectSound();

    if (matchedPairs === memorySymbols.length) {
      endMemoryGame();
    }
  } else {
    // No match - reset combo
    consecutiveMatches = 0;
    comboMultiplier = 1;
    memoryGameActive = false;
    updateMemoryFeedback("No match! Combo broken.", "warning");
    playWrongSound();

    // Survival mode penalty
    if (memoryGameMode === "survival") {
      timeLeft = Math.max(5, timeLeft - 5);
      updateTimerDisplay();
    }

    setTimeout(
      () => {
        const card1 = document.querySelector(
          `.memory-card[data-index="${index1}"]`
        );
        const card2 = document.querySelector(
          `.memory-card[data-index="${index2}"]`
        );

        if (card1) card1.classList.remove("flipped");
        if (card2) card2.classList.remove("flipped");

        flippedCards = [];
        memoryGameActive = true;
      },
      freezeActive ? 2000 : 1000
    );
  }

  updateMemoryStats();
  updatePowerupButtons();
}

function showComboEffect(multiplier, bonus) {
  const comboDiv = document.createElement("div");
  comboDiv.className = "combo-effect";
  comboDiv.innerHTML = `
    <div class="combo-text">COMBO x${multiplier}!</div>
    <div class="combo-bonus">+${bonus} coins</div>
  `;
  document.getElementById("memoryGrid").appendChild(comboDiv);

  setTimeout(() => {
    comboDiv.remove();
  }, 2000);
}

// Power-up Functions for Memory Match
function usePeekPowerup() {
  if (memoryCoins >= 15 && !peekingActive) {
    memoryCoins -= 15;
    peekingActive = true;
    updateMemoryFeedback(
      "Quick Peek activated! All cards revealed for 2 seconds.",
      "info"
    );

    // Show all cards
    const allCards = document.querySelectorAll(".memory-card");
    allCards.forEach((card) => {
      if (
        !card.classList.contains("flipped") &&
        memoryCards[card.dataset.index] !== null
      ) {
        card.classList.add("flipped", "peeking");
      }
    });

    // Hide cards after 2 seconds
    setTimeout(() => {
      const unmatchedCards = document.querySelectorAll(
        '.memory-card:not([style*="display: none"])'
      );
      unmatchedCards.forEach((card) => {
        card.classList.remove("flipped", "peeking");
      });
      peekingActive = false;
      updateActivePowerup(null);
    }, 2000);

    updateMemoryStats();
    updatePowerupButtons();
  }
}

function useFreezePowerup() {
  if (memoryCoins >= 20 && !freezeActive) {
    memoryCoins -= 20;
    freezeActive = true;
    updateMemoryFeedback(
      "Time Freeze activated! Timer stopped for 10 seconds.",
      "info"
    );
    updateActivePowerup("❄️ Time Freeze Active - Timer Frozen!");

    // Visual effect on cards
    const allCards = document.querySelectorAll(".memory-card");
    allCards.forEach((card) => {
      card.classList.add("frozen");
    });

    // Stop timer
    clearInterval(memoryTimer);

    // Resume timer after 10 seconds
    setTimeout(() => {
      freezeActive = false;
      updateActivePowerup(null);
      allCards.forEach((card) => {
        card.classList.remove("frozen");
      });
      startMemoryTimer();
    }, 10000);

    updateMemoryStats();
    updatePowerupButtons();
  }
}

function useShufflePowerup() {
  if (memoryCoins >= 25) {
    memoryCoins -= 25;
    updateMemoryFeedback(
      "Smart Shuffle activated! Unmatched cards rearranged.",
      "info"
    );

    // Get unmatched card indices and symbols
    const unmatchedIndices = [];
    const unmatchedSymbols = [];

    memoryCards.forEach((symbol, index) => {
      if (symbol !== null) {
        unmatchedIndices.push(index);
        unmatchedSymbols.push(symbol);
      }
    });

    // Shuffle the symbols
    for (let i = unmatchedSymbols.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [unmatchedSymbols[i], unmatchedSymbols[j]] = [
        unmatchedSymbols[j],
        unmatchedSymbols[i],
      ];
    }

    // Assign shuffled symbols back
    unmatchedIndices.forEach((index, i) => {
      memoryCards[index] = unmatchedSymbols[i];
    });

    // Re-render grid
    renderMemoryGrid();
    updateMemoryStats();
    updatePowerupButtons();
  }
}

function useMagnetPowerup() {
  if (memoryCoins >= 30 && !magnetActive) {
    memoryCoins -= 30;
    magnetActive = true;
    updateMemoryFeedback(
      "Card Magnet activated! Next pair will auto-match.",
      "info"
    );
    updateActivePowerup("🧲 Card Magnet Active - Next Pair Auto-Matches!");

    // Visual effect
    const unmatchedCards = document.querySelectorAll(
      ".memory-card:not(.flipped)"
    );
    unmatchedCards.forEach((card) => {
      if (memoryCards[card.dataset.index] !== null) {
        card.classList.add("magnet");
      }
    });

    updateMemoryStats();
    updatePowerupButtons();
  }
}

function updateActivePowerup(message) {
  const indicator = document.getElementById("activePowerup");
  const text = document.getElementById("activePowerupText");

  if (message) {
    text.textContent = message;
    indicator.classList.remove("hidden");
  } else {
    indicator.classList.add("hidden");
  }
}

// Timer Functions for Memory Match
function startMemoryTimer() {
  clearInterval(memoryTimer);
  updateTimerDisplay();

  memoryTimer = setInterval(() => {
    if (memoryGameActive && !freezeActive) {
      timeLeft--;
      updateTimerDisplay();

      if (timeLeft <= 0) {
        clearInterval(memoryTimer);
        memoryGameActive = false;
        updateMemoryFeedback("⏰ Time's up! Game over.", "danger");
      }
    }
  }, 1000);
}

function updateTimerDisplay() {
  document.getElementById("memoryTimer").textContent = timeLeft;
  const progress = (timeLeft / 60) * 100;
  document.getElementById("memoryTimeProgress").style.width = `${progress}%`;

  // Visual warnings
  const progressBar = document.getElementById("memoryTimeProgress");
  progressBar.classList.remove("timer-warning", "timer-critical");

  if (timeLeft <= 20) {
    progressBar.classList.add("timer-critical");
  } else if (timeLeft <= 30) {
    progressBar.classList.add("timer-warning");
  }
}

// Utility Functions for Memory Match
function updateMemoryStats() {
  document.getElementById("memoryScore").textContent = moves;
  document.getElementById(
    "memoryMatches"
  ).textContent = `${matchedPairs}/${memorySymbols.length}`;
  document.getElementById("memoryCoins").textContent = memoryCoins;
  document.getElementById(
    "comboMultiplier"
  ).textContent = `x${comboMultiplier}`;
}

function updatePowerupButtons() {
  const peekBtn = document.getElementById("peekBtn");
  const freezeBtn = document.getElementById("freezeBtn");
  const shuffleBtn = document.getElementById("shuffleBtn");
  const magnetBtn = document.getElementById("magnetBtn");

  peekBtn.disabled = memoryCoins < 15 || peekingActive || !memoryGameActive;
  freezeBtn.disabled = memoryCoins < 20 || freezeActive || !memoryGameActive;
  shuffleBtn.disabled = memoryCoins < 25 || !memoryGameActive;
  magnetBtn.disabled = memoryCoins < 30 || magnetActive || !memoryGameActive;
}

function updateMemoryFeedback(message, type) {
  const feedback = document.getElementById("memoryFeedback");
  feedback.textContent = message;
  feedback.className = `memory-feedback ${type} my-4 p-3 rounded-lg`;
  feedback.classList.remove("hidden");
}

function resetMemoryGame() {
  startMemoryGame();
}

function endMemoryGame() {
  memoryGameActive = false;
  if (memoryTimer) clearInterval(memoryTimer);

  let finalScore;
  switch (memoryGameMode) {
    case "timeAttack":
      finalScore = timeLeft * 10 + memoryCoins * 2 - moves;
      break;
    case "survival":
      finalScore = timeLeft * 15 + memoryCoins * 3;
      break;
    default:
      finalScore = Math.max(0, timeLeft * 2 + memoryCoins * 3 - moves);
  }

  const coinsEarned = Math.floor(finalScore / 10);
  memoryCoins += coinsEarned;

  // Update best time for classic mode
  if (memoryGameMode === "classic" && timeLeft > bestTime) {
    bestTime = timeLeft;
    localStorage.setItem("memoryBestTime", bestTime);
    document.getElementById("memoryBestTime").textContent = bestTime;
  }

  // Save high score
  saveHighScore(finalScore, memoryGameMode);

  setTimeout(() => {
    updateMemoryFeedback(
      `🎉 ${getModeCompletionMessage()} Final Score: ${finalScore}. Coins earned: ${coinsEarned}`,
      "success"
    );
    showGameSummary(finalScore, coinsEarned);
  }, 500);
}

function getModeCompletionMessage() {
  switch (memoryGameMode) {
    case "timeAttack":
      return "Time Attack Complete!";
    case "survival":
      return "Survival Victory!";
    default:
      return "Game Complete!";
  }
}

function saveHighScore(score, mode) {
  memoryHighScores.push({
    score: score,
    mode: mode,
    date: new Date().toLocaleDateString(),
    moves: moves,
    time: timeLeft,
  });

  // Keep top 5 scores
  memoryHighScores.sort((a, b) => b.score - a.score);
  memoryHighScores = memoryHighScores.slice(0, 5);

  localStorage.setItem("memoryHighScores", JSON.stringify(memoryHighScores));
  updateLeaderboard();
}

function updateLeaderboard() {
  let leaderboard = document.getElementById("memoryLeaderboard");
  if (!leaderboard) {
    leaderboard = document.createElement("div");
    leaderboard.id = "memoryLeaderboard";
    leaderboard.className = "leaderboard mt-4 p-3 bg-gray-100 rounded-lg";
    document.getElementById("memoryContent").appendChild(leaderboard);
  }

  leaderboard.innerHTML = `
    <h4 class="font-semibold mb-2">🏆 High Scores</h4>
    ${
      memoryHighScores.length > 0
        ? memoryHighScores
            .map(
              (score, index) => `
      <div class="score-item flex justify-between text-sm py-1 border-b border-gray-200">
        <span>${index + 1}. ${score.mode}</span>
        <span class="font-bold">${score.score}</span>
      </div>
    `
            )
            .join("")
        : '<div class="text-sm text-gray-600 text-center">No scores yet!</div>'
    }
  `;
}

function showGameSummary(finalScore, coinsEarned) {
  const summaryHTML = `
    <div class="game-summary mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
      <h4 class="font-bold mb-2 text-blue-800">Game Summary</h4>
      <div class="grid grid-cols-2 gap-2 text-sm">
        <div>Mode:</div><div class="font-semibold">${memoryGameMode}</div>
        <div>Moves:</div><div class="font-semibold">${moves}</div>
        <div>Time Left:</div><div class="font-semibold">${timeLeft}s</div>
        <div>Final Score:</div><div class="font-semibold text-green-600">${finalScore}</div>
        <div>Coins Earned:</div><div class="font-semibold text-yellow-600">+${coinsEarned}</div>
      </div>
    </div>
  `;

  const existingSummary = document.querySelector(".game-summary");
  if (existingSummary) existingSummary.remove();

  document
    .getElementById("memoryFeedback")
    .insertAdjacentHTML("afterend", summaryHTML);
}

// Island Match Game (Enhanced Educational Version)
let islandMatchCards = [];
let matchedIslandPairs = 0;
let matchMoves = 0;
let matchGameActive = false;
let firstCard = null;
let secondCard = null;
let canFlip = true;

const islandPairs = [
  {
    id: "maldives",
    name: "Maldives",
    emoji: "🏝️",
    color: "from-blue-400 to-cyan-400",
  },
  {
    id: "easter",
    name: "Easter Island",
    emoji: "🗿",
    color: "from-orange-400 to-red-400",
  },
  {
    id: "iceland",
    name: "Iceland",
    emoji: "🏔️",
    color: "from-blue-300 to-purple-400",
  },
  {
    id: "andaman",
    name: "Andaman",
    emoji: "🌴",
    color: "from-green-400 to-emerald-500",
  },
  {
    id: "lakshadweep",
    name: "Lakshadweep",
    emoji: "🏝️",
    color: "from-teal-400 to-blue-400",
  },
  {
    id: "majuli",
    name: "Majuli",
    emoji: "🛶",
    color: "from-amber-400 to-orange-400",
  },
];

// Enhanced Island Match with educational features
let islandPassport = {
  stamps: [],
  factsLearned: 0,
  islandsDiscovered: 0,
  completionTime: 0,
  startTime: 0,
};

let discoveredIslands = new Set();
let educationalMode = "easy";

function initIslandMatch() {
  console.log("Initializing Island Match...");

  // Reset game state
  islandMatchCards = [];
  matchedIslandPairs = 0;
  matchMoves = 0;
  matchGameActive = false;
  firstCard = null;
  secondCard = null;
  canFlip = true;

  // Initialize passport
  islandPassport = {
    stamps: [],
    factsLearned: 0,
    islandsDiscovered: 0,
    completionTime: 0,
    startTime: 0,
  };

  discoveredIslands.clear();

  document.getElementById("islandMatchStart").classList.remove("hidden");
  document.getElementById("islandMatchReset").classList.add("hidden");
  document.getElementById("islandMatchGrid").classList.add("hidden");
  document.getElementById("matchFeedback").classList.add("hidden");

  // Add educational mode selector
  addEducationalModeSelector();

  updateMatchStats();
  showPassportPreview();
}

function addEducationalModeSelector() {
  const islandMatchContent = document.getElementById("islandMatchContent");
  let modeSelector = islandMatchContent.querySelector(".educational-mode");

  if (!modeSelector) {
    modeSelector = document.createElement("div");
    modeSelector.className =
      "educational-mode mb-6 p-4 bg-amber-50 rounded-lg border border-amber-200";
    modeSelector.innerHTML = `
      <h4 class="font-semibold mb-3 text-center text-amber-800">🎓 Select Learning Mode</h4>
      <div class="flex flex-wrap gap-2 justify-center">
        <button onclick="setEducationalMode('easy')" class="mode-btn educational ${
          educationalMode === "easy" ? "active" : ""
        }" data-mode="easy">
          🌱 Beginner
        </button>
        <button onclick="setEducationalMode('medium')" class="mode-btn educational ${
          educationalMode === "medium" ? "active" : ""
        }" data-mode="medium">
          🌊 Explorer
        </button>
        <button onclick="setEducationalMode('hard')" class="mode-btn educational ${
          educationalMode === "hard" ? "active" : ""
        }" data-mode="hard">
          🗺️ Expert
        </button>
      </div>
    `;
    islandMatchContent.insertBefore(
      modeSelector,
      islandMatchContent.querySelector("#passportPreview")
    );
  }
}

function setEducationalMode(mode) {
  educationalMode = mode;
  document
    .querySelectorAll("#islandMatchContent .mode-btn.educational")
    .forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.mode === mode);
    });
  showPassportPreview();
}

function startIslandMatch() {
  console.log("Starting Island Match in mode:", educationalMode);

  // Create pairs based on difficulty
  let cards = [];
  const selectedIslands = getIslandsByDifficulty();

  selectedIslands.forEach((island) => {
    cards.push({ ...island, matched: false });
    cards.push({ ...island, matched: false });
  });

  // Shuffle cards
  islandMatchCards = shuffleArray(cards);
  matchedIslandPairs = 0;
  matchMoves = 0;
  matchGameActive = true;
  firstCard = null;
  secondCard = null;
  canFlip = true;

  // Reset passport for new game
  islandPassport.stamps = [];
  islandPassport.factsLearned = 0;
  islandPassport.islandsDiscovered = 0;
  discoveredIslands.clear();

  // Start timer for completion tracking
  islandPassport.startTime = Date.now();

  document.getElementById("islandMatchStart").classList.add("hidden");
  document.getElementById("islandMatchReset").classList.remove("hidden");
  document.getElementById("islandMatchGrid").classList.remove("hidden");

  updateMatchStats();
  renderIslandMatchGrid();
  showPassportPreview();
}

function getIslandsByDifficulty() {
  const totalIslands = islandPairs.length;
  switch (educationalMode) {
    case "easy":
      return islandPairs.slice(0, 4); // 4 islands
    case "medium":
      return islandPairs.slice(0, 6); // 6 islands
    case "hard":
      return islandPairs; // All islands
    default:
      return islandPairs.slice(0, 4);
  }
}

function renderIslandMatchGrid() {
  const grid = document.getElementById("islandMatchGrid");
  grid.innerHTML = "";

  islandMatchCards.forEach((island, index) => {
    const card = document.createElement("div");
    card.className = `island-match-card ${island.matched ? "matched" : ""}`;
    card.dataset.index = index;
    card.dataset.id = island.id;

    card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <div class="card-content">
                        <span class="text-4xl">?</span>
                    </div>
                </div>
                <div class="card-back">
                    <div class="card-content bg-gradient-to-br ${island.color}">
                        <span class="text-4xl mb-2">${island.emoji}</span>
                        <span class="text-sm font-semibold text-white">${island.name}</span>
                    </div>
                </div>
            </div>
        `;

    if (!island.matched) {
      card.addEventListener("click", () => flipMatchCard(index));
    }

    grid.appendChild(card);
  });
}

function flipMatchCard(index) {
  if (!matchGameActive || !canFlip || islandMatchCards[index].matched) {
    return;
  }

  const card = document.querySelector(
    `.island-match-card[data-index="${index}"]`
  );
  card.classList.add("flipped");

  if (!firstCard) {
    firstCard = { index, id: islandMatchCards[index].id };
  } else {
    secondCard = { index, id: islandMatchCards[index].id };
    canFlip = false;
    matchMoves++;
    updateMatchStats();
    checkMatch();
  }
}

// Enhanced match checking with educational features
function checkMatch() {
  if (firstCard && secondCard) {
    if (firstCard.id === secondCard.id) {
      // Match found - enhanced educational features
      islandMatchCards[firstCard.index].matched = true;
      islandMatchCards[secondCard.index].matched = true;
      matchedIslandPairs++;

      // Track discovery
      if (!discoveredIslands.has(firstCard.id)) {
        discoveredIslands.add(firstCard.id);
        islandPassport.islandsDiscovered++;
        addIslandStamp(firstCard.id);
      }

      islandPassport.factsLearned++;

      updateMatchFeedback(
        `🎉 Match! You discovered ${islandMatchCards[firstCard.index].name}`,
        "success"
      );
      playCorrectSound();

      // Show enhanced island info
      showEnhancedIslandInfo(firstCard.id);

      if (matchedIslandPairs === getIslandsByDifficulty().length) {
        setTimeout(() => {
          endMatchGame();
        }, 1000);
      }
    } else {
      // No match - educational feedback
      updateMatchFeedback(
        "Not quite! Try to remember the island locations.",
        "warning"
      );
      playWrongSound();

      setTimeout(() => {
        const card1 = document.querySelector(
          `.island-match-card[data-index="${firstCard.index}"]`
        );
        const card2 = document.querySelector(
          `.island-match-card[data-index="${secondCard.index}"]`
        );

        if (card1) card1.classList.remove("flipped");
        if (card2) card2.classList.remove("flipped");
      }, 1000);
    }

    setTimeout(() => {
      firstCard = null;
      secondCard = null;
      canFlip = true;
    }, 1000);

    updateMatchStats();
  }
}

function showEnhancedIslandInfo(islandId) {
  const island = islandData[islandId];
  if (!island) return;

  const fact = document.createElement("div");
  fact.className = "island-fact-popup enhanced";

  const additionalInfo = getAdditionalIslandInfo(islandId);

  fact.innerHTML = `
    <div class="bg-white rounded-lg p-4 shadow-lg max-w-sm mx-auto border-2 border-blue-200">
      <div class="flex items-center mb-3">
        <span class="text-3xl mr-3">${island.emoji}</span>
        <div>
          <h3 class="font-bold text-lg">${island.name}</h3>
          <p class="text-xs text-gray-500">New Discovery! ✨</p>
        </div>
      </div>
      
      <div class="educational-content mb-3">
        <p class="text-sm text-gray-700 mb-2"><strong>Fun Fact:</strong> ${island.funFact}</p>
        ${additionalInfo}
      </div>
      
      <div class="passport-stamp mb-3 p-2 bg-yellow-50 rounded border border-yellow-200">
        <span class="text-xs font-semibold text-yellow-800">📍 Passport Stamped!</span>
      </div>
      
      <button onclick="this.parentElement.parentElement.remove()" 
              class="w-full bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded text-sm transition-colors">
        Continue Exploring
      </button>
    </div>
  `;

  document.getElementById("matchFeedback").appendChild(fact);

  // Auto-remove after 8 seconds
  setTimeout(() => {
    if (fact.parentElement) {
      fact.remove();
    }
  }, 8000);
}

function getAdditionalIslandInfo(islandId) {
  const island = islandData[islandId];
  switch (educationalMode) {
    case "medium":
      return `<p class="text-xs text-gray-600 mt-2"><strong>📍 Location:</strong> ${island.location}</p>`;
    case "hard":
      return `
        <p class="text-xs text-gray-600 mt-2"><strong>📍 Location:</strong> ${island.location}</p>
        <p class="text-xs text-gray-600"><strong>📏 Area:</strong> ${island.area}</p>
        <p class="text-xs text-gray-600"><strong>🕒 Best Time:</strong> ${island.bestTimeToVisit}</p>
      `;
    default:
      return "";
  }
}

function addIslandStamp(islandId) {
  if (!islandPassport.stamps.includes(islandId)) {
    islandPassport.stamps.push(islandId);

    // Show stamp animation
    showStampAnimation(islandId);
  }
}

function showStampAnimation(islandId) {
  const stamp = document.createElement("div");
  stamp.className = "passport-stamp-animation";
  stamp.innerHTML = `
    <div class="stamp-content">
      <div class="text-4xl mb-2">${islandData[islandId].emoji}</div>
      <div class="text-sm font-semibold text-amber-800">Discovered!</div>
    </div>
  `;

  document.body.appendChild(stamp);

  setTimeout(() => {
    stamp.remove();
  }, 2000);
}

function showPassportPreview() {
  const passportDiv = document.getElementById("passportPreview");
  const selectedIslands = getIslandsByDifficulty();
  const progress =
    selectedIslands.length > 0
      ? (islandPassport.islandsDiscovered / selectedIslands.length) * 100
      : 0;

  const passportHTML = `
    <div class="passport-preview bg-amber-50 p-4 rounded-lg border-2 border-amber-300">
      <h4 class="font-bold text-amber-800 mb-3 flex items-center justify-between">
        <span class="flex items-center gap-2">
          🛂 Island Explorer Passport
        </span>
        <span class="text-xs bg-amber-500 text-white px-2 py-1 rounded-full">${educationalMode.toUpperCase()}</span>
      </h4>
      
      <div class="passport-stats grid grid-cols-2 gap-2 text-sm mb-3">
        <div class="text-gray-600">Islands Discovered:</div>
        <div class="font-semibold text-right">${
          islandPassport.islandsDiscovered
        }/${selectedIslands.length}</div>
        <div class="text-gray-600">Facts Learned:</div>
        <div class="font-semibold text-right">${
          islandPassport.factsLearned
        }</div>
      </div>
      
      <div class="progress-container mb-3">
        <div class="flex justify-between text-xs text-gray-600 mb-1">
          <span>Exploration Progress</span>
          <span>${Math.round(progress)}%</span>
        </div>
        <div class="progress-bar bg-gray-200 rounded-full h-2">
          <div class="bg-green-500 h-2 rounded-full transition-all duration-500" style="width: ${progress}%"></div>
        </div>
      </div>
      
      <div class="stamps-grid flex gap-2 flex-wrap justify-center">
        ${selectedIslands
          .map(
            (island) => `
          <div class="stamp ${
            islandPassport.stamps.includes(island.id)
              ? "bg-white border-2 border-green-500"
              : "bg-gray-100 border border-gray-300"
          } 
                w-10 h-10 rounded-lg flex items-center justify-center text-lg transition-all duration-300">
            ${islandPassport.stamps.includes(island.id) ? island.emoji : "?"}
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `;

  passportDiv.innerHTML = passportHTML;
}

function updateMatchStats() {
  document.getElementById("matchMoves").textContent = matchMoves;
  const selectedIslands = getIslandsByDifficulty();
  document.getElementById(
    "matchPairs"
  ).textContent = `${matchedIslandPairs}/${selectedIslands.length}`;
  document.getElementById("islandsDiscovered").textContent =
    islandPassport.islandsDiscovered;

  // Update progress
  const progress =
    selectedIslands.length > 0
      ? (matchedIslandPairs / selectedIslands.length) * 100
      : 0;
  document.getElementById("matchProgress").style.width = `${progress}%`;
}

function updateMatchFeedback(message, type) {
  const feedback = document.getElementById("matchFeedback");

  // Clear previous feedback (keep island facts)
  const oldFeedback = feedback.querySelector(".match-status-feedback");
  if (oldFeedback) {
    oldFeedback.remove();
  }

  const statusFeedback = document.createElement("div");
  statusFeedback.className = `match-status-feedback ${type} text-center p-3 rounded-lg mb-2`;
  statusFeedback.innerHTML = message;

  feedback.insertBefore(statusFeedback, feedback.firstChild);
  feedback.classList.remove("hidden");
}

function endMatchGame() {
  matchGameActive = false;
  islandPassport.completionTime = Math.floor(
    (Date.now() - islandPassport.startTime) / 1000
  );

  const selectedIslands = getIslandsByDifficulty();
  const efficiency =
    selectedIslands.length > 0
      ? Math.round((selectedIslands.length / matchMoves) * 100)
      : 0;
  const explorationScore = calculateExplorationScore();

  updateMatchFeedback(
    `🎊 Exploration Complete!<br>
     ⏱️ Time: ${islandPassport.completionTime}s<br>
     🧭 Efficiency: ${efficiency}%<br>
     🏆 Exploration Score: ${explorationScore}`,
    "success"
  );

  // Add celebration effect
  document.getElementById("islandMatchGrid").classList.add("celebrate");

  // Show final certificate
  showCompletionCertificate(explorationScore);
}

function calculateExplorationScore() {
  const selectedIslands = getIslandsByDifficulty();
  const baseScore = islandPassport.islandsDiscovered * 100;
  const timeBonus = Math.max(0, 300 - islandPassport.completionTime);
  const efficiencyBonus =
    selectedIslands.length > 0
      ? Math.round((selectedIslands.length / matchMoves) * 50)
      : 0;
  const difficultyMultiplier = { easy: 1, medium: 1.5, hard: 2 }[
    educationalMode
  ];

  return Math.round(
    (baseScore + timeBonus + efficiencyBonus) * difficultyMultiplier
  );
}

function showCompletionCertificate(score) {
  const certificate = document.createElement("div");
  certificate.className =
    "completion-certificate fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50";
  certificate.innerHTML = `
    <div class="bg-white p-6 rounded-lg max-w-md w-full mx-4 border-4 border-yellow-400 shadow-2xl">
      <div class="text-4xl mb-4 text-center">🏆</div>
      <h3 class="text-2xl font-bold mb-4 text-center text-gray-800">Exploration Complete!</h3>
      <div class="certificate-details space-y-2 mb-6 text-center">
        <div class="text-sm text-gray-600">Difficulty: <span class="font-semibold text-gray-800">${educationalMode.toUpperCase()}</span></div>
        <div class="text-sm text-gray-600">Islands Discovered: <span class="font-semibold text-gray-800">${
          islandPassport.islandsDiscovered
        }/${getIslandsByDifficulty().length}</span></div>
        <div class="text-sm text-gray-600">Facts Learned: <span class="font-semibold text-gray-800">${
          islandPassport.factsLearned
        }</span></div>
        <div class="text-lg font-bold text-green-600 mt-2">Final Score: ${score}</div>
      </div>
      <button onclick="this.parentElement.parentElement.remove()" 
              class="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
        Continue Exploring
      </button>
    </div>
  `;

  document.body.appendChild(certificate);
}

function resetIslandMatch() {
  startIslandMatch();
}

// Word Scramble functionality
const scrambleWords = [
  {
    word: "MALDIVES",
    hint: "Tropical paradise with overwater bungalows",
  },
  { word: "ICELAND", hint: "Land of fire and ice" },
  { word: "ANDAMAN", hint: "Indian islands in the Bay of Bengal" },
  { word: "LAKSHADWEEP", hint: "Coral atolls in the Arabian Sea" },
  { word: "MAJULI", hint: "World's largest river island" },
  { word: "EASTER", hint: "Famous for Moai statues" },
  { word: "BEACH", hint: "Sandy shore by the ocean" },
  { word: "CORAL", hint: "Marine organisms that form reefs" },
];

let currentScrambleWord = "";
let scrambledWord = "";
let scrambleScore = 0;
let currentHint = "";

function initScrambleGame() {
  nextScrambleWord();
  scrambleScore = 0;
  updateScrambleScore();
  document.getElementById("scrambleFeedback").classList.add("hidden");
  document.getElementById("hintText").classList.add("hidden");
}

function nextScrambleWord() {
  // Select a random word
  const randomIndex = Math.floor(Math.random() * scrambleWords.length);
  const wordObj = scrambleWords[randomIndex];
  currentScrambleWord = wordObj.word;
  currentHint = wordObj.hint;

  // Scramble the word
  scrambledWord = scrambleWord(currentScrambleWord);

  // Update the display
  document.getElementById("scrambledWord").textContent = scrambledWord;
  document.getElementById("scrambleInput").value = "";
  document.getElementById("scrambleFeedback").classList.add("hidden");
  document.getElementById("hintText").classList.add("hidden");
}

function scrambleWord(word) {
  const arr = word.split("");
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join("");
}

function checkScrambleAnswer() {
  const userAnswer = document
    .getElementById("scrambleInput")
    .value.toUpperCase();
  const feedback = document.getElementById("scrambleFeedback");

  if (userAnswer === currentScrambleWord) {
    feedback.textContent = "Correct! Well done!";
    feedback.className = "my-4 p-3 rounded-lg bg-green-100 text-green-800";
    scrambleScore++;
    updateScrambleScore();
    playCorrectSound(); // Play correct sound
  } else {
    feedback.textContent = "Incorrect. Try again!";
    feedback.className = "my-4 p-3 rounded-lg bg-red-100 text-red-800";
    playWrongSound(); // Play wrong sound
  }

  feedback.classList.remove("hidden");
}

function showHint() {
  document.getElementById("hintText").textContent = `Hint: ${currentHint}`;
  document.getElementById("hintText").classList.remove("hidden");
}

function updateScrambleScore() {
  document.getElementById(
    "scrambleScore"
  ).textContent = `Score: ${scrambleScore}`;
}

// Island Puzzle Game
const puzzleFacts = [
  {
    sentence:
      "The Maldives is the flattest country in the world with an average elevation of 1.5 meters above sea level.",
    words: ["flattest", "1.5", "meters", "sea", "level"],
  },
  {
    sentence:
      "Easter Island is famous for its mysterious Moai statues carved by the Rapa Nui people.",
    words: ["Moai", "statues", "Rapa", "Nui", "carved"],
  },
  {
    sentence:
      "Iceland is called the Land of Fire and Ice due to its volcanoes and glaciers.",
    words: ["Fire", "Ice", "volcanoes", "glaciers", "Land"],
  },
  {
    sentence:
      "Majuli in Assam is recognized as the world's largest river island.",
    words: ["largest", "river", "island", "Majuli", "Assam"],
  },
];

let currentPuzzle = null;
let puzzleScore = 0;

function initPuzzleGame() {
  resetPuzzle();
}

function resetPuzzle() {
  // Select random puzzle
  currentPuzzle = puzzleFacts[Math.floor(Math.random() * puzzleFacts.length)];

  const sentenceContainer = document.getElementById("puzzleSentence");
  const wordsContainer = document.getElementById("puzzleWords");

  // Create sentence with blank slots
  let displaySentence = currentPuzzle.sentence;
  currentPuzzle.words.forEach((word) => {
    const regex = new RegExp(`\\b${word}\\b`, "gi");
    displaySentence = displaySentence.replace(
      regex,
      '<span class="puzzle-word-slot" data-word="' +
        word.toLowerCase() +
        '"></span>'
    );
  });

  sentenceContainer.innerHTML = displaySentence;

  // Create draggable words (shuffled)
  const shuffledWords = [...currentPuzzle.words].sort(
    () => Math.random() - 0.5
  );
  wordsContainer.innerHTML = "";

  shuffledWords.forEach((word) => {
    const wordElement = document.createElement("div");
    wordElement.className = "puzzle-word";
    wordElement.textContent = word;
    wordElement.draggable = true;
    wordElement.dataset.word = word.toLowerCase();

    wordElement.addEventListener("dragstart", handleDragStart);
    wordElement.addEventListener("dragend", handleDragEnd);

    wordsContainer.appendChild(wordElement);
  });

  document.getElementById("puzzleFeedback").classList.add("hidden");
  setupDropZones();
}

function handleDragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.dataset.word);
  e.target.classList.add("dragging");
}

function handleDragEnd(e) {
  e.target.classList.remove("dragging");
}

function setupDropZones() {
  const slots = document.querySelectorAll(".puzzle-word-slot");
  slots.forEach((slot) => {
    slot.addEventListener("dragover", handleDragOver);
    slot.addEventListener("drop", handleDrop);
  });
}

function handleDragOver(e) {
  e.preventDefault();
}

function handleDrop(e) {
  e.preventDefault();
  const draggedWord = e.dataTransfer.getData("text/plain");
  const targetSlot = e.target;

  if (targetSlot.classList.contains("puzzle-word-slot")) {
    targetSlot.textContent = draggedWord;
    targetSlot.dataset.filled = draggedWord;
  }
}

function checkPuzzle() {
  const slots = document.querySelectorAll(".puzzle-word-slot");
  let allCorrect = true;

  slots.forEach((slot) => {
    const correctWord = slot.dataset.word;
    const filledWord = slot.dataset.filled;

    if (filledWord === correctWord) {
      slot.style.borderColor = "#10b981";
      slot.style.backgroundColor = "#d1fae5";
    } else {
      slot.style.borderColor = "#ef4444";
      slot.style.backgroundColor = "#fee2e2";
      allCorrect = false;
    }
  });

  const feedback = document.getElementById("puzzleFeedback");
  if (allCorrect) {
    feedback.textContent = "Congratulations! You solved the puzzle correctly!";
    feedback.className = "puzzle-feedback correct";
    puzzleScore++;
    updatePuzzleScore();
    playCorrectSound();
  } else {
    feedback.textContent = "Some words are incorrect. Try again!";
    feedback.className = "puzzle-feedback incorrect";
    playWrongSound();
  }

  feedback.classList.remove("hidden");
}

function updatePuzzleScore() {
  document.getElementById(
    "puzzleScore"
  ).textContent = `Puzzles Solved: ${puzzleScore}`;
}

// Upgraded Educational Treasure Hunt Game
let treasureMap = [];
let treasuresFound = 0;
let totalTreasures = 3;
let movesLeft = 20;
let treasureGameActive = false;
let goldCoins = 0;
let activeTreasurePowerup = null;

// Educational content for Treasure Hunt
const islandFacts = [
  "Coral reefs protect islands from erosion and support 25% of all marine life!",
  "Many island plants have evolved unique adaptations to survive in salty, windy conditions.",
  "Islands make up only 5% of Earth's land area but are home to 20% of all bird, plant, and reptile species.",
  "The isolation of islands often leads to unique species found nowhere else in the world.",
  "Mangrove forests on islands act as natural water filters and protect coastlines from storms.",
  "Island ecosystems are particularly vulnerable to invasive species brought by humans.",
  "Many islands were formed by volcanic activity or coral growth over thousands of years.",
  "Island freshwater sources are often limited, making conservation crucial for survival.",
  "Sea turtles return to the same islands where they were born to lay their eggs.",
  "Island cultures often develop unique traditions based on their specific environment and resources.",
];

const artifacts = [
  {
    name: "Ancient Polynesian Navigation Tool",
    description:
      "This artifact shows how early Polynesian explorers used stars, waves, and bird movements to navigate vast oceans between islands thousands of years ago.",
    emoji: "🧭",
  },
  {
    name: "Traditional Fishing Implements",
    description:
      "These tools demonstrate sustainable fishing practices developed by island communities over generations to maintain marine ecosystem balance.",
    emoji: "🎣",
  },
  {
    name: "Ceremonial Carvings",
    description:
      "Intricate carvings that tell stories of island mythology, family lineages, and respect for nature in traditional island cultures.",
    emoji: "🗿",
  },
];

const fossils = [
  {
    name: "Giant Moa Bird Bones",
    description:
      "The moa was a flightless bird that evolved on islands without predators, growing up to 12 feet tall before human arrival.",
    emoji: "🦴",
  },
  {
    name: "Ancient Coral Fossils",
    description:
      "These fossils show how coral reefs have grown and changed over thousands of years, recording climate history in their structures.",
    emoji: "🐚",
  },
];

function initTreasureGame() {
  document.getElementById("treasureStart").classList.remove("hidden");
  document.getElementById("treasureReset").classList.add("hidden");
  document.getElementById("treasureFeedback").classList.add("hidden");
  document.getElementById("educationalFact").classList.add("hidden");
  document.getElementById("artifactInfo").classList.add("hidden");
  document.getElementById("fossilInfo").classList.add("hidden");
  updateTreasureStats();
}

function startTreasureHunt() {
  treasuresFound = 0;
  movesLeft = 20;
  goldCoins = 0;
  treasureGameActive = true;
  activeTreasurePowerup = null;

  document.getElementById("treasureStart").classList.add("hidden");
  document.getElementById("treasureReset").classList.remove("hidden");

  generateTreasureMap();
  updateTreasureStats();
  updateTreasurePowerupButtons();
  updateTreasureClue(
    "Explore the island! Click squares to search for treasures. Learn about island ecology as you explore!"
  );
}

function generateTreasureMap() {
  const map = document.getElementById("treasureMap");
  map.innerHTML = "";
  treasureMap = [];

  // Create 5x5 grid
  for (let i = 0; i < 25; i++) {
    const cell = document.createElement("div");
    cell.className = "treasure-cell";
    cell.dataset.index = i;
    cell.textContent = "?";

    cell.addEventListener("click", function () {
      exploreCell(i);
    });

    // Initialize map data
    treasureMap[i] = {
      hasTreasure: false,
      hasDanger: false,
      hasArtifact: false,
      hasFossil: false,
      revealed: false,
    };

    map.appendChild(cell);
  }

  // Place treasures (3 treasures)
  let treasuresPlaced = 0;
  while (treasuresPlaced < 3) {
    const randomIndex = Math.floor(Math.random() * 25);
    if (
      !treasureMap[randomIndex].hasTreasure &&
      !treasureMap[randomIndex].hasDanger &&
      !treasureMap[randomIndex].hasArtifact &&
      !treasureMap[randomIndex].hasFossil
    ) {
      treasureMap[randomIndex].hasTreasure = true;
      treasuresPlaced++;
    }
  }

  // Place dangers (2 dangers)
  let dangersPlaced = 0;
  while (dangersPlaced < 2) {
    const randomIndex = Math.floor(Math.random() * 25);
    if (
      !treasureMap[randomIndex].hasTreasure &&
      !treasureMap[randomIndex].hasDanger &&
      !treasureMap[randomIndex].hasArtifact &&
      !treasureMap[randomIndex].hasFossil
    ) {
      treasureMap[randomIndex].hasDanger = true;
      dangersPlaced++;
    }
  }

  // Place artifacts (2 artifacts)
  let artifactsPlaced = 0;
  while (artifactsPlaced < 2) {
    const randomIndex = Math.floor(Math.random() * 25);
    if (
      !treasureMap[randomIndex].hasTreasure &&
      !treasureMap[randomIndex].hasDanger &&
      !treasureMap[randomIndex].hasArtifact &&
      !treasureMap[randomIndex].hasFossil
    ) {
      treasureMap[randomIndex].hasArtifact = true;
      artifactsPlaced++;
    }
  }

  // Place fossils (2 fossils)
  let fossilsPlaced = 0;
  while (fossilsPlaced < 2) {
    const randomIndex = Math.floor(Math.random() * 25);
    if (
      !treasureMap[randomIndex].hasTreasure &&
      !treasureMap[randomIndex].hasDanger &&
      !treasureMap[randomIndex].hasArtifact &&
      !treasureMap[randomIndex].hasFossil
    ) {
      treasureMap[randomIndex].hasFossil = true;
      fossilsPlaced++;
    }
  }
}

function exploreCell(index) {
  if (!treasureGameActive || treasureMap[index].revealed || movesLeft <= 0) {
    return;
  }

  const cell = document.querySelector(`.treasure-cell[data-index="${index}"]`);
  treasureMap[index].revealed = true;
  movesLeft--;

  revealCellContent(cell, index);
  updateTreasureStats();

  // Show educational fact randomly (25% chance)
  if (Math.random() < 0.25) {
    showEducationalFact();
  }

  // Check game end conditions
  if (treasuresFound >= 3) {
    endTreasureHunt(
      "🎉 Congratulations! You found all the treasures and learned about island ecology! Final Score: " +
        (goldCoins + movesLeft * 5)
    );
  } else if (movesLeft <= 0) {
    endTreasureHunt(
      "💀 Game Over! You ran out of moves. Found " +
        treasuresFound +
        "/3 treasures. Final Coins: " +
        goldCoins
    );
  } else {
    updateTreasureClue(getTreasureClue(index));
  }
}

function revealCellContent(cell, index) {
  if (treasureMap[index].hasTreasure) {
    cell.className = "treasure-cell treasure revealed";
    cell.textContent = "💰";
    treasuresFound++;
    goldCoins += 15;
    updateTreasureFeedback(
      "🎊 You found treasure! +15 gold coins! " +
        (3 - treasuresFound) +
        " more to go!",
      "found"
    );
  } else if (treasureMap[index].hasDanger) {
    cell.className = "treasure-cell danger revealed";
    cell.textContent = "💀";
    movesLeft -= 2;
    goldCoins = Math.max(0, goldCoins - 10);
    updateTreasureFeedback(
      "⚠️ Oh no! You triggered a trap! Lost 10 coins and 2 extra moves.",
      "danger"
    );
  } else if (treasureMap[index].hasArtifact) {
    cell.className = "treasure-cell artifact revealed";
    const artifact = artifacts[Math.floor(Math.random() * artifacts.length)];
    cell.textContent = artifact.emoji;
    goldCoins += 10;
    showArtifactInfo(artifact);
    updateTreasureFeedback(
      "🏺 You discovered an ancient artifact! +10 gold coins!",
      "artifact"
    );
  } else if (treasureMap[index].hasFossil) {
    cell.className = "treasure-cell fossil revealed";
    const fossil = fossils[Math.floor(Math.random() * fossils.length)];
    cell.textContent = fossil.emoji;
    goldCoins += 8;
    showFossilInfo(fossil);
    updateTreasureFeedback(
      "🦴 You uncovered a fossil! +8 gold coins!",
      "fossil"
    );
  } else {
    cell.className = "treasure-cell revealed";
    cell.textContent = "🌴";
    goldCoins += 3;
    updateTreasureFeedback(
      "🌿 Found some island flora! +3 gold coins. Keep exploring!",
      "info"
    );
  }
}

function getTreasureClue(lastIndex) {
  const clues = [
    "Look near the coastal areas for treasures...",
    "Ancient artifacts are often found near historical sites...",
    "Check elevated areas for better visibility...",
    "Fossils might be buried in sedimentary layers...",
    "The island's geography can reveal hidden patterns...",
  ];

  return clues[Math.floor(Math.random() * clues.length)];
}

function showEducationalFact() {
  const fact = islandFacts[Math.floor(Math.random() * islandFacts.length)];
  document.getElementById("factText").textContent = fact;
  document.getElementById("educationalFact").classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("educationalFact").classList.add("hidden");
  }, 8000);
}

function showArtifactInfo(artifact) {
  document.getElementById(
    "artifactText"
  ).textContent = `${artifact.name}: ${artifact.description}`;
  document.getElementById("artifactInfo").classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("artifactInfo").classList.add("hidden");
  }, 10000);
}

function showFossilInfo(fossil) {
  document.getElementById(
    "fossilText"
  ).textContent = `${fossil.name}: ${fossil.description}`;
  document.getElementById("fossilInfo").classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("fossilInfo").classList.add("hidden");
  }, 10000);
}

// Power-up functions for Treasure Hunt
function useCompass() {
  if (goldCoins >= 15 && !activeTreasurePowerup) {
    goldCoins -= 15;
    activeTreasurePowerup = "compass";
    updateTreasureFeedback(
      "🧭 Compass activated! The next 3 clues will be extra accurate.",
      "found"
    );
    updateTreasureStats();
  }
}

function useShovel() {
  if (goldCoins >= 20 && !activeTreasurePowerup) {
    goldCoins -= 20;
    activeTreasurePowerup = "shovel";
    updateTreasureFeedback(
      "⛏️ Shovel activated! Your next dig will uncover 3 adjacent squares.",
      "found"
    );
    updateTreasureStats();
  }
}

function useMap() {
  if (goldCoins >= 25) {
    goldCoins -= 25;

    // Reveal one random treasure location
    const unrevealedTreasures = [];
    for (let i = 0; i < 25; i++) {
      if (
        (treasureMap[i].hasTreasure ||
          treasureMap[i].hasArtifact ||
          treasureMap[i].hasFossil) &&
        !treasureMap[i].revealed
      ) {
        unrevealedTreasures.push(i);
      }
    }

    if (unrevealedTreasures.length > 0) {
      const revealIndex =
        unrevealedTreasures[
          Math.floor(Math.random() * unrevealedTreasures.length)
        ];
      const cell = document.querySelector(
        `.treasure-cell[data-index="${revealIndex}"]`
      );
      cell.style.border = "3px solid #ff0000";
      cell.style.animation = "pulse 1s infinite";

      updateTreasureFeedback(
        "🗺️ Treasure Map used! One valuable location is highlighted in red!",
        "found"
      );

      setTimeout(() => {
        cell.style.border = "";
        cell.style.animation = "";
      }, 5000);
    }
    updateTreasureStats();
  }
}

function updateTreasurePowerupButtons() {
  const compassBtn = document.getElementById("compassBtn");
  const shovelBtn = document.getElementById("shovelBtn");
  const mapBtn = document.getElementById("mapBtn");

  compassBtn.disabled = goldCoins < 15 || activeTreasurePowerup !== null;
  shovelBtn.disabled = goldCoins < 20 || activeTreasurePowerup !== null;
  mapBtn.disabled = goldCoins < 25;
}

function updateTreasureStats() {
  document.getElementById("treasureScore").textContent = goldCoins;
  document.getElementById("treasureMoves").textContent = movesLeft;
  document.getElementById("treasuresFound").textContent = `${treasuresFound}/3`;

  // Update progress
  const totalCells = 25;
  const revealedCells = treasureMap.filter((cell) => cell.revealed).length;
  const progress = (revealedCells / totalCells) * 100;
  document.getElementById("treasureProgress").style.width = `${progress}%`;
  document.getElementById("progressPercent").textContent = `${Math.round(
    progress
  )}%`;

  updateTreasurePowerupButtons();
}

function updateTreasureFeedback(message, type) {
  const feedback = document.getElementById("treasureFeedback");
  feedback.textContent = message;
  feedback.className = `treasure-feedback ${type} my-4 p-4 rounded-lg`;
  feedback.classList.remove("hidden");
}

function updateTreasureClue(clue) {
  document.getElementById(
    "treasureClue"
  ).innerHTML = `<p class="text-sm font-medium">${clue} | Moves left: ${movesLeft} | Coins: ${goldCoins}</p>`;
}

function endTreasureHunt(message) {
  treasureGameActive = false;
  updateTreasureFeedback(message, "found");

  // Reveal all remaining treasures
  treasureMap.forEach((cell, index) => {
    if (
      (cell.hasTreasure || cell.hasArtifact || cell.hasFossil) &&
      !cell.revealed
    ) {
      const treasureCell = document.querySelector(
        `.treasure-cell[data-index="${index}"]`
      );
      if (cell.hasTreasure) {
        treasureCell.className = "treasure-cell treasure revealed";
        treasureCell.textContent = "💰";
      } else if (cell.hasArtifact) {
        treasureCell.className = "treasure-cell artifact revealed";
        treasureCell.textContent = "🏺";
      } else if (cell.hasFossil) {
        treasureCell.className = "treasure-cell fossil revealed";
        treasureCell.textContent = "🦴";
      }
    }
  });
}

function resetTreasureHunt() {
  startTreasureHunt();
}

// Island Survival Game
let survivalStats = {
  health: 100,
  hunger: 100,
  thirst: 100,
  day: 1,
};

let inventory = [];
let survivalGameActive = false;

const survivalScenarios = [
  {
    title: "Fresh Water Source",
    description: "You found a small stream with fresh water. What do you do?",
    options: [
      {
        text: "Drink directly from the stream",
        effect: { thirst: +30, health: -10 },
        cost: null,
      },
      {
        text: "Boil water before drinking",
        effect: { thirst: +20, health: 0 },
        cost: { item: "Fire Starter", quantity: 1 },
      },
      {
        text: "Collect water in containers",
        effect: { thirst: +15 },
        cost: null,
        gain: "Water Container",
      },
      {
        text: "Ignore and continue exploring",
        effect: { thirst: -10 },
        cost: null,
      },
    ],
  },
  {
    title: "Food Gathering",
    description: "You're getting hungry. How will you find food?",
    options: [
      {
        text: "Search for fruits in the trees",
        effect: { hunger: +20, health: 0 },
        cost: null,
      },
      {
        text: "Try fishing in the ocean",
        effect: { hunger: +25, health: 0 },
        cost: null,
        gain: "Fish",
      },
      {
        text: "Set up traps for small animals",
        effect: { hunger: +30 },
        cost: { item: "Rope", quantity: 1 },
        gain: "Animal Meat",
      },
      {
        text: "Rest to conserve energy",
        effect: { hunger: -5, health: +5 },
        cost: null,
      },
    ],
  },
  {
    title: "Shelter Building",
    description: "Night is approaching. You need shelter.",
    options: [
      {
        text: "Build a basic lean-to",
        effect: { health: +10 },
        cost: null,
        gain: "Basic Shelter",
      },
      { text: "Find a natural cave", effect: { health: +15 }, cost: null },
      {
        text: "Construct a proper hut",
        effect: { health: +25 },
        cost: { item: "Tools", quantity: 1 },
        gain: "Sturdy Shelter",
      },
      { text: "Sleep under the stars", effect: { health: -15 }, cost: null },
    ],
  },
  {
    title: "Unexpected Danger",
    description: "A sudden storm hits the island!",
    options: [
      {
        text: "Take cover in your shelter",
        effect: { health: -5 },
        cost: { item: "Sturdy Shelter", quantity: 1 },
      },
      {
        text: "Try to reinforce shelter",
        effect: { health: -10 },
        cost: { item: "Tools", quantity: 1 },
      },
      { text: "Seek higher ground", effect: { health: -20 }, cost: null },
      { text: "Wait it out in the open", effect: { health: -30 }, cost: null },
    ],
  },
  {
    title: "Resource Discovery",
    description: "You found some useful items washed ashore.",
    options: [
      {
        text: "Take the fishing net",
        effect: {},
        cost: null,
        gain: "Fishing Net",
      },
      {
        text: "Grab the first aid kit",
        effect: { health: +20 },
        cost: null,
        gain: "First Aid Kit",
      },
      {
        text: "Collect the water containers",
        effect: { thirst: +10 },
        cost: null,
        gain: "Water Container",
      },
      {
        text: "Take everything you can carry",
        effect: {},
        cost: null,
        gain: "Various Supplies",
      },
    ],
  },
];

function initSurvivalGame() {
  document.getElementById("survivalStart").classList.remove("hidden");
  document.getElementById("survivalNext").classList.add("hidden");
  document.getElementById("survivalInventory").classList.add("hidden");
  document.getElementById("survivalFeedback").classList.add("hidden");
}

function startSurvivalGame() {
  survivalStats = { health: 100, hunger: 100, thirst: 100, day: 1 };
  inventory = ["Knife", "Fire Starter"];
  survivalGameActive = true;

  document.getElementById("survivalStart").classList.add("hidden");
  document.getElementById("survivalNext").classList.remove("hidden");
  document.getElementById("survivalInventory").classList.remove("hidden");

  updateSurvivalStats();
  showRandomScenario();
  updateInventory();
}

function showRandomScenario() {
  const randomScenario =
    survivalScenarios[Math.floor(Math.random() * survivalScenarios.length)];
  const scenarioDiv = document.getElementById("survivalScenario");

  document.getElementById(
    "scenarioTitle"
  ).textContent = `Day ${survivalStats.day}: ${randomScenario.title}`;
  document.getElementById("scenarioDescription").textContent =
    randomScenario.description;

  const optionsDiv = document.getElementById("scenarioOptions");
  optionsDiv.innerHTML = "";

  randomScenario.options.forEach((option, index) => {
    const button = document.createElement("div");
    button.className =
      "scenario-option p-3 bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer mb-2 text-center";

    // Check if player can afford the cost
    if (option.cost && !hasItem(option.cost.item, option.cost.quantity)) {
      button.classList.add("disabled", "opacity-50");
      button.title = `Need ${option.cost.quantity} ${option.cost.item}`;
    } else {
      button.onclick = () => chooseSurvivalOption(option);
    }

    button.textContent = option.text;
    optionsDiv.appendChild(button);
  });
}

function chooseSurvivalOption(option) {
  // Apply effects
  Object.keys(option.effect).forEach((stat) => {
    survivalStats[stat] = Math.max(
      0,
      Math.min(100, survivalStats[stat] + option.effect[stat])
    );
  });

  // Handle costs
  if (option.cost) {
    removeItem(option.cost.item, option.cost.quantity);
  }

  // Handle gains
  if (option.gain) {
    addToInventory(option.gain);
  }

  // Show feedback
  let feedbackMessage = "Choice made! ";
  if (option.effect.health > 0) feedbackMessage += "Health improved. ";
  if (option.effect.health < 0) feedbackMessage += "Health decreased. ";
  if (option.effect.hunger > 0) feedbackMessage += "Hunger satisfied. ";
  if (option.effect.hunger < 0) feedbackMessage += "Hunger increased. ";
  if (option.effect.thirst > 0) feedbackMessage += "Thirst quenched. ";
  if (option.effect.thirst < 0) feedbackMessage += "Thirst increased. ";

  const feedback = document.getElementById("survivalFeedback");
  feedback.textContent = feedbackMessage;

  if (
    survivalStats.health < 30 ||
    survivalStats.hunger < 20 ||
    survivalStats.thirst < 20
  ) {
    feedback.className =
      "survival-feedback danger my-4 p-3 rounded-lg bg-red-100 text-red-800";
  } else if (
    survivalStats.health < 60 ||
    survivalStats.hunger < 50 ||
    survivalStats.thirst < 50
  ) {
    feedback.className =
      "survival-feedback warning my-4 p-3 rounded-lg bg-yellow-100 text-yellow-800";
  } else {
    feedback.className =
      "survival-feedback success my-4 p-3 rounded-lg bg-green-100 text-green-800";
  }

  feedback.classList.remove("hidden");

  updateSurvivalStats();
  updateInventory();

  // Check survival status
  if (
    survivalStats.health <= 0 ||
    survivalStats.hunger <= 0 ||
    survivalStats.thirst <= 0
  ) {
    endSurvivalGame("You didn't survive! Made it to day " + survivalStats.day);
  }
}

function nextSurvivalDay() {
  survivalStats.day++;

  // Daily decay
  survivalStats.hunger = Math.max(0, survivalStats.hunger - 15);
  survivalStats.thirst = Math.max(0, survivalStats.thirst - 20);
  survivalStats.health = Math.max(0, survivalStats.health - 5);

  updateSurvivalStats();
  document.getElementById("survivalFeedback").classList.add("hidden");

  if (
    survivalStats.health <= 0 ||
    survivalStats.hunger <= 0 ||
    survivalStats.thirst <= 0
  ) {
    endSurvivalGame(
      "You didn't survive the night! Made it to day " + (survivalStats.day - 1)
    );
  } else {
    showRandomScenario();
  }
}

function updateSurvivalStats() {
  document.getElementById("healthStat").textContent = survivalStats.health;
  document.getElementById("hungerStat").textContent = survivalStats.hunger;
  document.getElementById("thirstStat").textContent = survivalStats.thirst;
  document.getElementById("dayStat").textContent = survivalStats.day;
}

function addToInventory(item) {
  if (!inventory.includes(item)) {
    inventory.push(item);
  }
  updateInventory();
}

function removeItem(item, quantity) {
  const index = inventory.indexOf(item);
  if (index > -1) {
    inventory.splice(index, 1);
  }
}

function hasItem(item, quantity = 1) {
  return inventory.includes(item);
}

function updateInventory() {
  const inventoryDiv = document.getElementById("inventoryItems");
  inventoryDiv.innerHTML = "";

  inventory.forEach((item) => {
    const itemElement = document.createElement("span");
    itemElement.className =
      "inventory-item bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mr-2 mb-2";
    itemElement.textContent = item;
    inventoryDiv.appendChild(itemElement);
  });
}

function endSurvivalGame(message) {
  survivalGameActive = false;
  document.getElementById("survivalNext").classList.add("hidden");

  const feedback = document.getElementById("survivalFeedback");
  feedback.textContent = message;
  feedback.className =
    "survival-feedback danger my-4 p-3 rounded-lg bg-red-100 text-red-800";
  feedback.classList.remove("hidden");

  // Show restart option
  const scenarioDiv = document.getElementById("survivalScenario");
  scenarioDiv.innerHTML = `
        <div class="text-center">
            <h3 class="text-xl font-bold mb-4">Game Over</h3>
            <p class="mb-4">${message}</p>
            <button onclick="startSurvivalGame()" class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg">
                Play Again
            </button>
        </div>
    `;
}

// Utility function to shuffle arrays
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Navigation and UI enhancements
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("hidden");
}

// Initialize main screen when page loads
window.addEventListener("load", function () {
  // Main screen is shown by default after loading
});

// Export functions for global access
window.showScreen = showScreen;
window.hideScreens = hideScreens;
window.showIslandDetails = showIslandDetails;
window.closeIslandModal = closeIslandModal;
window.playCorrectSound = playCorrectSound;
window.playWrongSound = playWrongSound;

// Game-specific function exports
// Quiz
window.checkAnswer = checkAnswer;
window.nextQuestion = nextQuestion;
window.restartQuiz = restartQuiz;

// Memory Match
window.startMemoryGame = startMemoryGame;
window.resetMemoryGame = resetMemoryGame;
window.usePeekPowerup = usePeekPowerup;
window.useFreezePowerup = useFreezePowerup;
window.useShufflePowerup = useShufflePowerup;
window.useMagnetPowerup = useMagnetPowerup;
window.setMemoryGameMode = setMemoryGameMode;

// Island Match
window.initIslandMatch = initIslandMatch;
window.startIslandMatch = startIslandMatch;
window.resetIslandMatch = resetIslandMatch;
window.flipMatchCard = flipMatchCard;
window.setEducationalMode = setEducationalMode;

// Word Scramble
window.checkScrambleAnswer = checkScrambleAnswer;
window.nextScrambleWord = nextScrambleWord;
window.showHint = showHint;

// Island Puzzle
window.checkPuzzle = checkPuzzle;
window.resetPuzzle = resetPuzzle;

// Treasure Hunt
window.startTreasureHunt = startTreasureHunt;
window.resetTreasureHunt = resetTreasureHunt;
window.useCompass = useCompass;
window.useShovel = useShovel;
window.useMap = useMap;
window.exploreCell = exploreCell;

// Survival Game
window.startSurvivalGame = startSurvivalGame;
window.chooseSurvivalOption = chooseSurvivalOption;
window.nextSurvivalDay = nextSurvivalDay;

// Utility
window.toggleMobileMenu = toggleMobileMenu;

console.log("Island Adventure Game initialized successfully!");

// Add CSS for enhanced features
const enhancedStyles = `
/* Enhanced Memory Match Styles */
.mode-btn {
  padding: 8px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: white;
  font-size: 0.9rem;
  flex: 1;
  min-width: 100px;
}

.mode-btn.active {
  border-color: #3b82f6;
  background: #3b82f6;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(59, 130, 246, 0.3);
}

.mode-btn:hover:not(.active) {
  border-color: #3b82f6;
  background: #f0f4ff;
}

.mode-btn.educational.active {
  border-color: #f59e0b;
  background: #f59e0b;
  color: white;
}

.mode-btn.educational:hover:not(.active) {
  border-color: #f59e0b;
  background: #fef3c7;
}

.combo-effect {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(135deg, #ffd700, #ffed4a);
  padding: 15px 25px;
  border-radius: 25px;
  color: #7c2d12;
  font-weight: bold;
  text-align: center;
  animation: comboPop 0.5s ease-out;
  z-index: 100;
  border: 3px solid #f59e0b;
  box-shadow: 0 8px 16px rgba(245, 158, 11, 0.4);
}

.combo-text {
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 5px;
}

.combo-bonus {
  font-size: 1rem;
  opacity: 0.9;
}

@keyframes comboPop {
  0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
  100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
}

.leaderboard {
  border-left: 4px solid #f59e0b;
  background: #fffbeb;
}

.score-item {
  padding: 6px 0;
  border-bottom: 1px solid #fef3c7;
}

.score-item:last-child {
  border-bottom: none;
}

.game-summary {
  background: linear-gradient(135deg, #dbeafe, #e0f2fe);
  border: 2px solid #3b82f6;
}

/* Enhanced Island Match Styles */
.passport-stamp-animation {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.95);
  padding: 30px;
  border-radius: 50%;
  border: 4px solid #f59e0b;
  animation: stampAppear 2s ease-in-out;
  z-index: 1000;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}

.stamp-content {
  text-align: center;
  animation: stampSpin 1s ease-in-out;
}

@keyframes stampAppear {
  0% { transform: translate(-50%, -50%) scale(0) rotate(-180deg); opacity: 0; }
  50% { transform: translate(-50%, -50%) scale(1.2) rotate(0deg); opacity: 1; }
  100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); opacity: 1; }
}

@keyframes stampSpin {
  0% { transform: rotate(0deg) scale(0.8); }
  50% { transform: rotate(180deg) scale(1.2); }
  100% { transform: rotate(360deg) scale(1); }
}

.island-fact-popup.enhanced {
  animation: slideInUp 0.5s ease-out;
  margin-bottom: 15px;
}

@keyframes slideInUp {
  from { 
    transform: translateY(20px); 
    opacity: 0; 
  }
  to { 
    transform: translateY(0); 
    opacity: 1; 
  }
}

.educational-content {
  border-left: 3px solid #3b82f6;
  padding-left: 12px;
  background: #f8fafc;
  border-radius: 0 8px 8px 0;
}

.stamps-grid {
  min-height: 50px;
}

.stamp {
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.stamp:hover {
  transform: scale(1.1);
}

.completion-certificate {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Game mode selectors */
.game-mode-selector, .educational-mode {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

// Enhanced Island data with better organization
const islandData = {
  // Existing islands...
  maldives: {
    name: "Maldives",
    emoji: "🏝️",
    description:
      "The Maldives is a tropical paradise in the Indian Ocean, known for its crystal-clear waters, vibrant coral reefs, and luxurious overwater bungalows.",
    location: "Indian Ocean, southwest of Sri Lanka",
    area: "298 km²",
    population: "~540,000",
    language: "Dhivehi",
    currency: "Maldivian Rufiyaa",
    climate: "Tropical monsoon climate with warm temperatures year-round",
    bestTimeToVisit: "November to April",
    rating: 4.8,
    travelTips: [
      "Book water villas in advance during peak season",
      "Try local Maldivian cuisine like Mas Huni",
      "Respect local customs and dress modestly outside resorts",
    ],
    features: [
      "Overwater bungalows",
      "Vibrant coral reefs",
      "White sandy beaches",
      "Rich marine life",
      "Luxury resorts",
    ],
    activities: [
      "Snorkeling and diving",
      "Island hopping",
      "Sunset cruises",
      "Spa treatments",
      "Water sports",
    ],
    funFact:
      "The Maldives is the flattest country in the world, with an average ground level of just 1.5 meters above sea level.",
    imageUrl: "images.jpg",
  },
  easter: {
    name: "Easter Island",
    emoji: "🗿",
    description:
      "Easter Island, known locally as Rapa Nui, is a remote volcanic island in Polynesia, famous for its mysterious Moai statues created by the early Rapa Nui people.",
    location: "Southeastern Pacific Ocean",
    area: "163.6 km²",
    population: "~7,750",
    language: "Spanish, Rapa Nui",
    currency: "Chilean Peso",
    climate: "Subtropical climate with mild temperatures year-round",
    bestTimeToVisit: "December to March",
    rating: 4.6,
    travelTips: [
      "Hire a local guide to understand Moai cultural significance",
      "Book accommodations well in advance",
      "Respect sacred sites and don't climb on Moai",
    ],
    features: [
      "Moai statues",
      "Volcanic craters",
      "Ancient ceremonial sites",
      "Rocky coastline",
      "Unique Polynesian culture",
    ],
    activities: [
      "Exploring archaeological sites",
      "Hiking volcanic craters",
      "Learning about Rapa Nui culture",
      "Stargazing",
      "Bird watching",
    ],
    funFact:
      "The Moai statues were carved between 1250 and 1500 CE, with the largest standing over 10 meters tall and weighing 82 tons.",
    imageUrl: "images (1)w.jpg",
  },
  iceland: {
    name: "Iceland",
    emoji: "🏔️",
    description:
      "Iceland is a Nordic island country known as the 'Land of Fire and Ice' due to its numerous volcanoes and glaciers. It offers stunning natural landscapes including geysers, waterfalls, and the Northern Lights.",
    location: "North Atlantic Ocean",
    area: "103,000 km²",
    population: "~376,000",
    language: "Icelandic",
    currency: "Icelandic Króna",
    climate: "Temperate maritime climate with cool summers and mild winters",
    bestTimeToVisit:
      "June-August for midnight sun, Sept-March for Northern Lights",
    rating: 4.7,
    travelTips: [
      "Dress in layers for rapidly changing weather",
      "Check road conditions regularly, especially in winter",
      "Book Northern Lights tours in advance",
    ],
    features: [
      "Volcanoes and glaciers",
      "Geysers and hot springs",
      "Waterfalls",
      "Northern Lights",
      "Black sand beaches",
    ],
    activities: [
      "Glacier hiking",
      "Geothermal spa visits",
      "Northern Lights tours",
      "Whale watching",
      "Exploring volcanic landscapes",
    ],
    funFact:
      "Iceland is one of the most sparsely populated countries in Europe, with about 80% of the country uninhabited.",
    imageUrl:
      "1678434254_aurora_borealis_peninsula_snaefellsnes_iceland_march_2013.jpg",
  },
  andaman: {
    name: "Andaman & Nicobar Islands",
    emoji: "🏝️",
    description:
      "The Andaman and Nicobar Islands are a group of islands at the juncture of the Bay of Bengal and the Andaman Sea. Known for their pristine beaches, coral reefs, and rich biodiversity.",
    location: "Bay of Bengal",
    area: "8,249 km²",
    population: "~380,000",
    language: "Hindi, Bengali, Tamil, Telugu, Nicobarese",
    currency: "Indian Rupee",
    climate: "Tropical climate with warm temperatures and high humidity",
    bestTimeToVisit: "October to May",
    rating: 4.5,
    travelTips: [
      "Check permit requirements for restricted areas",
      "Book diving and snorkeling tours in advance",
      "Carry cash as ATMs are limited on smaller islands",
    ],
    features: [
      "Pristine beaches",
      "Coral reefs",
      "Tropical rainforests",
      "Indigenous tribes",
      "Historic Cellular Jail",
    ],
    activities: [
      "Scuba diving and snorkeling",
      "Beach relaxation",
      "Island hopping",
      "Visiting historical sites",
      "Nature walks",
    ],
    funFact:
      "The Sentinelese people of North Sentinel Island are one of the last uncontacted tribes in the world and vigorously reject all contact with outsiders.",
    imageUrl: "jolly-buoy-island-andaman.jpg",
  },
  lakshadweep: {
    name: "Lakshadweep Islands",
    emoji: "🏝️",
    description:
      "Lakshadweep is a group of coral atolls in the Arabian Sea, known for their turquoise lagoons, white sandy beaches, and rich marine life. It's India's smallest Union Territory.",
    location: "Arabian Sea",
    area: "32 km²",
    population: "~65,000",
    language: "Malayalam, Jeseri",
    currency: "Indian Rupee",
    climate: "Tropical climate with moderate temperatures",
    bestTimeToVisit: "October to mid-May",
    rating: 4.4,
    travelTips: [
      "All visitors require an entry permit through registered operators",
      "Internet and mobile connectivity may be limited",
      "Respect local Islamic customs and dress modestly",
    ],
    features: [
      "Coral atolls",
      "Turquoise lagoons",
      "White sandy beaches",
      "Coconut palms",
      "Rich marine biodiversity",
    ],
    activities: [
      "Water sports",
      "Coral reef exploration",
      "Island camping",
      "Fishing",
      "Cultural experiences",
    ],
    funFact:
      "Lakshadweep means 'a hundred thousand islands' in Malayalam, though the archipelago actually consists of just 36 islands.",
    imageUrl: "1715256368_minicoy_island_1.jpg.webp",
  },
  majuli: {
    name: "Majuli Island",
    emoji: "🏝️",
    description:
      "Majuli is a large river island in the Brahmaputra River in Assam, India. It's recognized as the world's largest river island and is known for its Vaishnavite culture and unique ecosystem.",
    location: "Brahmaputra River, Assam, India",
    area: "~880 km² (varies with seasons)",
    population: "~167,000",
    language: "Assamese",
    currency: "Indian Rupee",
    climate: "Humid subtropical climate with heavy monsoon rains",
    bestTimeToVisit: "October to March",
    rating: 4.3,
    travelTips: [
      "Avoid visiting during peak monsoon (June-September)",
      "Respect religious practices at Vaishnavite monasteries",
      "Try local Assamese cuisine and traditional crafts",
    ],
    features: [
      "River island ecosystem",
      "Vaishnavite monasteries (Satras)",
      "Wetlands and water bodies",
      "Migratory birds",
      "Traditional crafts",
    ],
    activities: [
      "Visiting Satras (monasteries)",
      "Bird watching",
      "Exploring local culture",
      "Boat rides",
      "Pottery and mask-making workshops",
    ],
    funFact:
      "Majuli has been nominated for inclusion in the UNESCO World Heritage List and is known for its efforts in preserving the neo-Vaishnavite culture.",
    imageUrl: "9b64ce_59621eda56164829911feae1cd83d516~mv2.avif",
  },
  diu: {
    name: "Diu Island",
    emoji: "🏝️",
    description:
      "Diu is a small island off the southern coast of Gujarat, India. It was a Portuguese colony until 1961 and retains much of its Portuguese architecture and cultural influences.",
    location: "Arabian Sea, off the coast of Gujarat, India",
    area: "38.8 km²",
    population: "~52,000",
    language: "Gujarati, Hindi, English",
    currency: "Indian Rupee",
    climate: "Tropical savanna climate with moderate temperatures",
    bestTimeToVisit: "October to March",
    rating: 4.2,
    travelTips: [
      "Rent a bicycle or scooter to explore Portuguese architecture",
      "Diu has more relaxed alcohol laws than neighboring Gujarat",
      "Visit during the Diu Festival for cultural experiences",
    ],
    features: [
      "Portuguese architecture",
      "Beautiful beaches",
      "Historic forts",
      "Churches",
      "Lighthouses",
    ],
    activities: [
      "Beach activities",
      "Exploring Portuguese heritage",
      "Visiting Diu Fort",
      "Water sports",
      "Trying local cuisine",
    ],
    funFact:
      "Diu was one of the last European colonies in India, with Portuguese rule lasting for over 400 years until it was incorporated into India in 1961.",
    imageUrl: "2-diu-fort-diu-attr-hero-1.jpg",
  },
  
  // New International Islands
  
  galapagos: {
    name: "Galapagos Islands",
    emoji: "🐢",
    description:
      "The Galapagos Islands are a volcanic archipelago in the Pacific Ocean, renowned for their unique and fearless wildlife that inspired Charles Darwin's theory of evolution.",
    location: "Pacific Ocean, Ecuador",
    area: "8,010 km²",
    population: "~33,000",
    language: "Spanish",
    currency: "US Dollar",
    climate: "Subtropical with two main seasons: warm/wet and cool/dry",
    bestTimeToVisit: "December to May",
    rating: 4.9,
    travelTips: [
      "Book tours well in advance, especially during peak season",
      "Follow strict conservation rules to protect wildlife",
      "Pack motion sickness medication for boat trips",
    ],
    features: [
      "Unique wildlife",
      "Volcanic landscapes",
      "Marine reserves",
      "Endemic species",
      "Scientific importance",
    ],
    activities: [
      "Wildlife watching",
      "Snorkeling with sea lions",
      "Hiking volcanic formations",
      "Visiting Charles Darwin Research Station",
      "Bird watching",
    ],
    funFact:
      "The Galapagos Islands are home to species found nowhere else on Earth, including the marine iguana - the only seagoing lizard in the world.",
    imageUrl: "galapagos.jpg",
  },
  hawaii: {
    name: "Hawaii",
    emoji: "🌺",
    description:
      "Hawaii is a volcanic archipelago in the central Pacific Ocean, known for its diverse natural scenery, warm climate, abundant public beaches, oceanic surroundings, and active volcanoes.",
    location: "Pacific Ocean, USA",
    area: "28,311 km²",
    population: "~1.4 million",
    language: "English, Hawaiian",
    currency: "US Dollar",
    climate: "Tropical climate with mild temperatures year-round",
    bestTimeToVisit: "April to October",
    rating: 4.7,
    travelTips: [
      "Respect the 'aloha spirit' and local customs",
      "Learn about volcanic safety if visiting active areas",
      "Try traditional Hawaiian food like poke and kalua pig",
    ],
    features: [
      "Active volcanoes",
      "Diverse ecosystems",
      "World-class beaches",
      "Waterfalls",
      "Polynesian culture",
    ],
    activities: [
      "Volcano viewing",
      "Surfing",
      "Luau experiences",
      "Hiking to waterfalls",
      "Snorkeling and diving",
    ],
    funFact:
      "Hawaii is the most geographically isolated population center on Earth, located about 2,400 miles from the nearest continent.",
    imageUrl: "hawaii.jpg",
  },
  seychelles: {
    name: "Seychelles",
    emoji: "🏝️",
    description:
      "Seychelles is an archipelago of 115 islands in the Indian Ocean, known for its pristine beaches, coral reefs, nature reserves, and unique wildlife including giant Aldabra tortoises.",
    location: "Indian Ocean, off East Africa",
    area: "459 km²",
    population: "~98,000",
    language: "Seychellois Creole, English, French",
    currency: "Seychellois Rupee",
    climate: "Tropical marine climate with little temperature variation",
    bestTimeToVisit: "April to May, October to November",
    rating: 4.6,
    travelTips: [
      "Respect marine conservation areas",
      "Book inter-island flights in advance",
      "Try Creole cuisine featuring fresh seafood",
    ],
    features: [
      "Granite islands",
      "Pristine beaches",
      "Coral atolls",
      "Unique flora and fauna",
      "Marine parks",
    ],
    activities: [
      "Beach relaxation",
      "Snorkeling and diving",
      "Island hopping",
      "Bird watching",
      "Hiking in nature reserves",
    ],
    funFact:
      "Seychelles is home to the world's largest population of Aldabra giant tortoises and the Coco de Mer, which produces the largest seed in the plant kingdom.",
    imageUrl: "seychelles.jpg",
  },
  phuket: {
    name: "Phuket",
    emoji: "🏖️",
    description:
      "Phuket is Thailand's largest island, known for its beautiful beaches, vibrant nightlife, luxury resorts, and cultural attractions including ornate Buddhist temples.",
    location: "Andaman Sea, Thailand",
    area: "576 km²",
    population: "~416,000",
    language: "Thai",
    currency: "Thai Baht",
    climate: "Tropical monsoon climate with three seasons",
    bestTimeToVisit: "November to February",
    rating: 4.5,
    travelTips: [
      "Be cautious of jet ski and timeshare scams",
      "Respect Thai culture and monarchy",
      "Try street food but be mindful of hygiene",
    ],
    features: [
      "Beautiful beaches",
      "Buddhist temples",
      "Vibrant nightlife",
      "Luxury resorts",
      "Cultural shows",
    ],
    activities: [
      "Beach activities",
      "Island hopping",
      "Temple visits",
      "Thai cooking classes",
      "Elephant sanctuary visits",
    ],
    funFact:
      "Phuket was an important tin mining center for centuries, and its wealth from tin trading financed the construction of many beautiful Sino-Portuguese style buildings in Phuket Town.",
    imageUrl: "phuket.jpg",
  },
  madagascar: {
    name: "Madagascar",
    emoji: "🦎",
    description:
      "Madagascar is a biodiversity hotspot off the coast of East Africa, known for its unique wildlife including lemurs, chameleons, and baobab trees, with 90% of its wildlife found nowhere else on Earth.",
    location: "Indian Ocean, off East Africa",
    area: "587,041 km²",
    population: "~28 million",
    language: "Malagasy, French",
    currency: "Malagasy Ariary",
    climate: "Tropical along coast, temperate inland, arid in south",
    bestTimeToVisit: "April to October",
    rating: 4.4,
    travelTips: [
      "Hire local guides for wildlife viewing",
      "Be prepared for basic infrastructure outside cities",
      "Respect local fady (taboos) in different regions",
    ],
    features: [
      "Unique biodiversity",
      "Baobab trees",
      "Rainforests",
      "Desert landscapes",
      "Coral reefs",
    ],
    activities: [
      "Lemur watching",
      "National park visits",
      "Baobab avenue at sunset",
      "Whale watching (seasonal)",
      "Cultural experiences",
    ],
    funFact:
      "Madagascar split from the Indian subcontinent around 88 million years ago, allowing plants and animals to evolve in isolation and creating incredibly unique ecosystems.",
    imageUrl: "madagascar.jpg",
  },
  sri_lanka: {
    name: "Sri Lanka",
    emoji: "☸️",
    description:
      "Sri Lanka is a teardrop-shaped island nation in the Indian Ocean, known for its ancient Buddhist ruins, beautiful beaches, tea plantations, and diverse wildlife including elephants and leopards.",
    location: "Indian Ocean, south of India",
    area: "65,610 km²",
    population: "~22 million",
    language: "Sinhala, Tamil",
    currency: "Sri Lankan Rupee",
    climate: "Tropical monsoon climate with regional variations",
    bestTimeToVisit: "December to March (west/south), April to September (east)",
    rating: 4.6,
    travelTips: [
      "Visit cultural sites in the morning to avoid heat and crowds",
      "Dress modestly when visiting temples",
      "Try the famous Ceylon tea",
    ],
    features: [
      "Ancient ruins",
      "Tea plantations",
      "Beautiful beaches",
      "National parks",
      "Buddhist temples",
    ],
    activities: [
      "Visiting ancient cities",
      "Tea plantation tours",
      "Wildlife safaris",
      "Beach relaxation",
      "Train journeys through hills",
    ],
    funFact:
      "Sri Lanka has the highest density of leopard sightings in the world in Yala National Park, and it's also home to the oldest documented tree planted by humans - a sacred fig tree dating back to 288 BCE.",
    imageUrl: "sri_lanka.jpg",
  },
};

// Rest of the JavaScript code remains the same...
`;

// Add the CSS to the page
const styleSheet = document.createElement("style");
styleSheet.textContent = enhancedStyles;
document.head.appendChild(styleSheet);

// Select all cards and toggle the "active" class on click
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.add("active");

    // Remove the active class after 0.5 seconds
    setTimeout(() => {
      card.classList.remove("active");
    }, 500);
  });
});

function showScreen(id) {
  hideScreens();
  const screen = document.getElementById(id);
  screen.style.display = "flex"; // important for centering
}
