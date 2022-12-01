const navCharacterContainer = document.getElementById('nav_character')
const mainCharacterImg = document.getElementById('main_character_img_container')
const mainCharacterInfo = document.getElementById('main_character_info')
const deployP = document.getElementById('deployP')
const personajesP = document.getElementById('personajesP')

const baseUrl = 'https://dragon-ball-super-api.herokuapp.com'
let url = ''
const aleatoryNumber = random(1, 9)
switch (aleatoryNumber) {
  case 1:
    url = `${baseUrl}/api/characters/role/Angel`
    break
  case 2:
    url = `${baseUrl}/api/characters/role/Dios%20de%20la%20destruccion`
    break
  case 3:
    url = `${baseUrl}/api/characters/role/Guerrero%20universo%202`
    break
  case 4:
    url = `${baseUrl}/api/characters/role/Guerrero%20universo%203`
    break
  case 5:
    url = `${baseUrl}/api/characters/role/Guerrero%20universo%204`
    break
  case 6:
    url = `${baseUrl}/api/characters/role/Guerrero%20universo%206`
    break
  case 7:
    url = `${baseUrl}/api/characters/role/Guerrero%20universo%209`
    break
  case 8:
    url = `${baseUrl}/api/characters/role/Guerrero%20universo%2010`
    break
  case 9:
    url = `${baseUrl}/api/characters/role/Guerrero%20universo%2011`
    break
}

console.log(url)

function random (min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min)
}

async function getNavCharacters () {
  await fetch(url)
    .then(res => res.json())
    .then(res => {
      res.map(character => {
        const characterItemContainer = document.createElement('div')
        characterItemContainer.className = 'character_item'
        characterItemContainer.setAttribute('id', character.name)
        navCharacterContainer.appendChild(characterItemContainer)

        const imgitem = document.createElement('img')
        imgitem.setAttribute('src', character.imageUrl)
        imgitem.setAttribute('alt', character.name)
        imgitem.onclick = function () { setMainCharacter(character) }
        characterItemContainer.appendChild(imgitem)
      })
    })
}

function setMainCharacter (character) {
  const { imageUrl, name, originplanet, role, specie, status, universe } = character
  mainCharacterImg.setAttribute('src', imageUrl)

  const itemActive = document.getElementById(`${name}`)

  if (itemActive.classList.contains('active')) {
    // nothing
  } else {
    navCharacterContainer.childNodes.forEach(element => {
      element.className = 'character_item'
    })

    itemActive.classList += ' active'
  }

  const tittle = document.getElementById('tittle')
  const roleP = document.getElementById('roleP')
  const specieP = document.getElementById('specieP')
  const statusP = document.getElementById('statusP')
  const universeP = document.getElementById('universeP')
  const originplanetP = document.getElementById('originplanetP')

  tittle.innerText = `${name}`
  roleP.innerHTML = `&nbsp${role}`
  specieP.innerHTML = `&nbsp${specie}`
  statusP.innerHTML = `&nbsp${status}`
  personajesP.innerHTML = 'Universo:'
  universeP.innerHTML = `&nbsp${universe}`
  deployP.innerHTML = 'Planeta de origen:'
  originplanetP.innerHTML = `&nbsp${originplanet}`
}

getNavCharacters()
