let scores = {
  home: 0,
  guest: 0
}

let fouls = {
  home: 0,
  guest: 0
}

let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let homeFoulBtn = document.getElementById("fouls-home")
let guestFoulBtn = document.getElementById("fouls-guest")


function addPoints(team, points) {
  scores[team] += points
  renderScores()
  updateLead()
}

function addFoul(team) {
  if (fouls[team] < 5) {
    fouls[team] += 1
  }

  renderFouls()
}

function newGame() {
  scores.home = 0
  scores.guest = 0
  fouls.home = 0
  fouls.guest = 0

  renderScores()
  renderFouls()
  updateLead()
}

function renderScores() {
  homeScoreEl.textContent = scores.home
  guestScoreEl.textContent = scores.guest
}

function renderFouls() {
  homeFoulBtn.textContent = `Foul: ${fouls.home}`
  guestFoulBtn.textContent = `Foul: ${fouls.guest}`

  homeFoulBtn.classList.toggle("foul-max", fouls.home === 5)
  guestFoulBtn.classList.toggle("foul-max", fouls.guest === 5)
}

function updateLead() {
  homeScoreEl.classList.remove("leading")
    guestScoreEl.classList.remove("leading")

  if (scores.home > scores.guest) {
    homeScoreEl.classList.add("leading")
  } else if (scores.guest > scores.home) {
    guestScoreEl.classList.add("leading")
  }
}