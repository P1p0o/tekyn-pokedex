// Generate a random number between 2 and 10, including both 2 and 10
function generateRandomIntegerInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
export { generateRandomIntegerInRange }
