


function update() {
  let targetHealthElem = document.querySelector("#health")
  targetHealthElem.textContent = target.health.toString();

  let targetHitsElem = document.querySelector('#hits');
  targetHitsElem.textContent = target.hits.toString();

  let modifierElem = document.querySelector('#modifier')
  //let gameOverElem = document.querySelector('#gameOver')
  // gameOverElem.textContent = 

  let pushPowerElem = document.getElementById('pushPower')

}


// object that will hold our items
let storage = {
  lightsaber: { name: 'lightsaber', modifier: 4, description: 'its so bright' },
  force: { name: 'force', modifier: 5, description: 'what was that' },
  dualwield: { name: 'dual-wield', modifier: 10, description: 'double the fun' }
}
alert("start game")
let target = {
  health: 100,
  hits: 0,
  items: []
}



//this will push the array from items to the object items
function pushPower(itemName) {
  target.items.push(storage[itemName])
  console.log(target.items)
}
//function that will take a variable at 0 using a for add up each storage item to 0 to get value to modifiers totals
//target items
function givepower() {
  let modTot = 0;
  for (let i = 0; i < target.items.length; i++) {
    //let item = target.items[i]
    modTot = target.items[i].modifier
    if (target.items[i] < 0)
      target.items[i] = 0;


  }
  return modTot

}


//so now givepower is returning our mod total add that to original attack if applied
function slap() {
  target.health = target.health - (1 + givepower())

  target.hits++
  update()

}
function punch() {
  target.health = target.health - (5 + givepower())
  target.hits++
  update()
}
function kick() {
  target.health = target.health - (10 + givepower())
  target.hits++
  update()
}
//items that will be added to attacks

let lightsaber = {
  name: 'Lightsaber',
  modifier: 4,
  description: 'its so bright!'
}
let force = {
  name: 'force',
  modifier: 5,
  description: 'What was that?'
}
let dualWield = {
  name: 'dual-wield',
  modifier: 10,
  description: 'double the fun'
}

