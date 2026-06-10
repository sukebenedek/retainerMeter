const startDate = new Date(2026, 5, 9); // known “wear night”
const now = new Date(); //2026, 5, 10, 11, 0
let adjusted = new Date(now);

const cutoffHour = 9;

if (now.getHours() < cutoffHour) {
  adjusted.setDate(adjusted.getDate() - 1);
}
const diffDays = Math.floor((adjusted - startDate) / (1000 * 60 * 60 * 24));

console.log(now);
console.log(adjusted);
console.log(`Todays night is on the day of: ${adjusted.toDateString().split(' ')[1]} ${adjusted.toDateString().split(' ')[2]}`);

document.getElementById("date").innerHTML = `Todays night is on the day of: ${adjusted.toDateString().split(' ')[1]} ${adjusted.toDateString().split(' ')[2]}`
document.getElementById("now").innerHTML = `Refreshed: ${now.toDateString().split(' ')[1]} ${now.toDateString().split(' ')[2]} - ${adjusted.toLocaleTimeString()}`
let needed = document.getElementById("needed")
if (diffDays % 2 === 0) {
  console.log("Wear retainers tonight");
  needed.innerHTML = "Wear retainers tonight"
  needed.classList.add("green")

} else {
  console.log("No retainers tonight");
  needed.innerHTML = "No retainers tonight"
  needed.classList.add("purple")

}