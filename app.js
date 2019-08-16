let palpatine = {
  name = "The Senate",
  health: 150,
  attacks: {
    special: 25,
    lightning: 15,
    force: 10
  },
  mobility: 30
}

let Windu = {
  name = Mace,
  health: 150,
  attacks: {
    saber: 20,
    strike: 10
  },
  mobility: 50
}



let health = 100;

let hits = 0


/**
 * slap, punch , kick need to be duplicated and changed to sith or jedi attacks
 */

function slap() {
  let slap = 1
  if (slap) {
    health--
    hits++
  } update()

}


function punch() {
  health -= 5
  hits++
  update()
}



function kick() {
  health -= 10
  hits++
  update()
}



function update() {
  let healthElem = document.querySelector("#health");
  healthElem.textContent = health.toString();

  let NameElem = document.querySelector("#Name");
  NameElem.textContent = name.toString();

  let hitsElem = document.querySelector("#hits");
  hitsElem.textContent = hits.toString();


  /**
   * need to set up for both players change Elems to sith or jedi
   */
  function update() {
    let healthElem = document.querySelector("#health");
    healthElem.textContent = health.toString();

    let NameElem = document.querySelector("#Name");
    NameElem.textContent = name.toString();

    let hitsElem = document.querySelector("#hits");
    hitsElem.textContent = hits.toString();

  }
  update()
