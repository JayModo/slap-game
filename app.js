
let players = []
let attacks = 0




let items1 = {
  lightSaber: { name: 'lightSaber', modifier: 7, description: 'you brought a knife to a saber fight' },
  execution: { name: 'execution', modifier: 15, description: 'party is over' },
  dualWield: { name: 'dualWield', modifier: 10, description: '2 always beats 1' }
}

let modifiers = items1.dualWield.modifier +
  items1.execution.modifier +
  items1.lightSaber.modifier;








let palpatine = {
  players: players,
  //  name: "the senate",
  health: 150,
  hits: 0,
  attacks: {
    spin: 25,
    lightning: 15,
    force: 10
  },
  items: items1

}

let Windu = {
  //  name: "mace",
  health: 150,
  hits: 0,
  attacks: {
    saber: 20,
    strike: 10
  },
  items: items1
}

function giveSpecial() {

}



debugger
function addMods(index) {
  let players = modifiers
  let total = 0
  for (let i = 0; i < modifiers; i++) {
    total += modifiers
  }
  return total
}







//if windus health is equal or less than 50 then windu can add execution to his attacks

//function execution() {
//specials.execution == Windu.specials[1]
//palpatine.health -= 25
//sithUpdate()
//}


function execution() {
  if (Windu.health <= 50) {
    Windu.items
  }
  function sithAttacks() {
    let total = new Number(palpatine.attacks)
    Windu.health--
    palpatine.hits++
    jediUpdate()
    sithUpdate()
  }


  //function force() {
  //palpatine.attacks.force % Windu.health
  //palpatine.hits++
  //jediUpdate()
  //sithUpdate()

  function lightning() {
    Windu.health -= 15
    palpatine.hits++
    jediUpdate()
    sithUpdate()
  }
  function spin() {
    Windu.health -= 25
    palpatine.hits++
    jediUpdate()
    sithUpdate()
  }




  function saber() {

    palpatine.health -= 20
    Windu.hits++
    sithUpdate()
    jediUpdate()
  }
  function strike() {
    palpatine.health -= 10
    Windu.hits++
    sithUpdate()
    jediUpdate()
  }
  //function lightning() {
  //palpatine.health -= 5
  //Windu.hits++
  //jediUpdate()
  //}



  function sithUpdate() {

    let palpatineHealthElem = document.querySelector("#palpatine-health")
    palpatineHealthElem.textContent = palpatine.health.toString();

    let palpatineHitsElem = document.querySelector("#Palpatine-hits")
    palpatineHitsElem.textContent = palpatine.hits.toString();



  }




  /**
   * need to set up for both players change Elems to sith or jedi
   */
  function jediUpdate() {
    let winduHealthElem = document.querySelector("#windu-health");
    winduHealthElem.textContent = Windu.health.toString();

    let winduHitsElem = document.querySelector("#windu-hits");
    winduHitsElem.textContent = Windu.hits.toString();

  }
}
