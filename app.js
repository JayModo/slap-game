

let specials = {
  lightSaber: { name: 'lightSaber', modifier: 7, description: 'you brought a knife to a saber fight' },
  execution: { name: 'execution', modifier: 15, description: 'party is over' },
  dualWield: { name: 'dualWield', modifier: 10, description: '2 always beats 1' }
}



let palpatine = {
  health: 150,
  hits: 0,
  attacks: {
    spin: 25,
    lightning: 15,
    force: 10
  },
  specials: [specials.lightSaber, specials.dualWield],

}

let Windu = {
  health: 150,
  hits: 0,
  attacks: {
    saber: 20,
    strike: 10
  },
  specials: [specials.lightSaber, specials.execution],
}








//if windus health is equal or less than 50 then windu can add execution to his attacks

//function execution() {
//specials.execution == Windu.specials[1]
//palpatine.health -= 25
//sithUpdate()
//}
function setspecial() {

  palpatine.attacks.force = palpatine.specials[0].modifier++
  if (Windu.health >= 50)
    palpatine.specials[1]
  palpatine.health--
  sithUpdate()
  jediUpdate()
}




function force() {
  Windu.health -= 10
  palpatine.hits++
  jediUpdate()
}
function lightning() {
  Windu.health -= 15
  palpatine.hits++
  jediUpdate()
}
function spin() {
  Windu.health -= 25
  palpatine.hits++
  jediUpdate()
}




function saber() {

  palpatine.health -= 20
  Windu.hits++
  sithUpdate()

}
function strike() {
  palpatine.health -= 10
  Windu.hits++
  sithUpdate()
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


