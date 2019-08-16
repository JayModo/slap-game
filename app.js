let health = 100;

function slap() {
  let slap = 1
  if (slap) {
    health--
  } update()

}


function punch() {
  let punch = 5
  if (punch) {
    health--
  } update()
}

function kick() {
  let kick = 10
  if (kick) {
    health--
  } update()

}



function update() {
  let healthElem = document.querySelector("#health");
  healthElem.textContent = health.toString()


}
update()
