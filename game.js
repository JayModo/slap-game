


function update() {
  let targetHealthElem = document.querySelector("#health")
  targetHealthElem.textContent = target.health.toString();

  let targetHitsElem = document.querySelector('#hits');
  targetHitsElem.textContent = target.hits.toString();

  let modifierElem = document.querySelector('#modifier')
  //let gameOverElem = document.querySelector('#gameOver')
  // gameOverElem.textContent = 




}


// object that will hold our items
let storage = {
  lightsaber: { name: 'lightsaber', modifier: 5, description: 'its so bright' },
  force: { name: 'force', modifier: 5, description: 'what was that' },
  dualwield: { name: 'dual-wield', modifier: 5, description: 'double the fun' }
}
alert("start game")
let target = {
  health: 100,
  hits: 0,
  items: []
}





function givepower() {
  let modTot = 0;
  for (let i = 0; i < storage.length; i++) {
    let item = target.items[i]
    modTot += item.modifier
  }
  return modTot

}
debugger
//this will push the array from items to the object items
function pushPower(index) {
  target.items.push(storage[index])
  console.log(target.items)
  update()
}



function slap() {
  if (givepower() > 0)
    target.health = target.health - (5 + lightsaber.modifier)
  else {
    target.health--
  }
  target.hits++
  update()

}
function punch() {
  if (givepower() > 0)
    target.health = target.health - (5 + givepower())
  else {
    target.health -= 5
  }
  target.hits++
  update()
}
function kick() {
  if (givepower() > 0)
    target.health = target.health - (10 + givepower())
  else {
    target.health -= 10
  }
  target.hits++
  update()
}
//items that will be added to attacks

let lightsaber = {
  name: 'Lightsaber',
  modifier: 5,
  description: 'its so bright!'
}
let force = {
  name: 'force',
  modifier: 5,
  description: 'What was that?'
}
let dualWield = {
  name: 'dual-wield',
  modifier: 5,
  description: 'double the fun'
}

