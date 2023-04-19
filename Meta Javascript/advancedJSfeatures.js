// Task 1
var dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];
function logDairy() {
  for (const element of dairy) {
    console.log(element);
  }
}
logDairy();
// Task 2
const animal = {
  canJump: true,
};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;
function birdCan() {
  for (const [k, v] of Object.entries(bird)) {
    console.log(`${k}: ${v}`);
  }
}
birdCan();
// Task 3
function animalCan() {
  for (const key in bird) {
    console.log(`${key}: ${bird[key]}`);
  }
}
animalCan();
