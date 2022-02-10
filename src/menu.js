import imgSalad from './salad.jpg';
import imgPomodoro from './pomodoro.jpg';
import imgTiramisu from './tiramisu.jpg';

function createMenuPage() {





   const body = document.querySelector('body');
   const contentContainer = document.createElement('div')
   contentContainer.setAttribute('id', 'content')

   const menuContainer = document.createElement('div')

   const menuTitle = document.createElement('h1')
   menuTitle.innerText = "Menu"
   menuContainer.appendChild(menuTitle)

   const antiPastiContainer = document.createElement('div')
   antiPastiContainer.setAttribute('class', 'menu-card')
   const antiPastiTitle = document.createElement('h2')
   antiPastiTitle.innerText = 'Antipasti'
   const saladTitle = document.createElement('h3')
   saladTitle.innerText = "Insalata"
   const saladPar = document.createElement('p')
   saladPar.innerText = 'An amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing green salad'
   const saladImg = new Image();
   saladImg.src = imgSalad
   antiPastiContainer.appendChild(antiPastiTitle)
   antiPastiContainer.appendChild(saladTitle)
   antiPastiContainer.appendChild(saladPar)
   antiPastiContainer.appendChild(saladImg)




   const pastaContainer = document.createElement('div')
   pastaContainer.setAttribute('class', 'menu-card')
   const pastaTitle = document.createElement('h2')
   pastaTitle.innerText = 'Pasta'
   const pomodoroTitle = document.createElement('h3')
   pomodoroTitle.innerText = 'Pasta con i pomodorini'
   const pomodoroPar = document.createElement('p')
   pomodoroPar.innerText = 'Pasta with chery tomatoes Pasta with chery tomatoes Pasta with chery tomatoes Pasta with chery tomatoes Pasta with chery tomatoes Pasta with chery tomatoes Pasta with chery tomatoes Pasta with chery tomatoes Pasta with chery tomatoes'
   const pomodoroImg = new Image();
   pomodoroImg.src = imgPomodoro
   pastaContainer.appendChild(pastaTitle)
   pastaContainer.appendChild(pomodoroTitle)
   pastaContainer.appendChild(pomodoroPar)
   pastaContainer.appendChild(pomodoroImg)







   const dolciContainer = document.createElement('div')
   dolciContainer.setAttribute('class', 'menu-card')
   const dolciTitle = document.createElement('h2')
   dolciTitle.innerText = 'Dolci'
   const tiramisuTitle = document.createElement('h3')
   tiramisuTitle.innerText = "Tiramisu"
   const tiramisuPar = document.createElement('p')
   tiramisuPar.innerText = "A classic tiramisu classic tiramisu classic tiramisu classic tiramisu classic tiramisu classic tiramisu classic tiramisu classic tiramisu classic tiramisu classic tiramisu classic tiramisu classic tiramisu classic tiramisu classic tiramisu"
   const tiramisuImg = new Image();
   tiramisuImg.src = imgTiramisu
   dolciContainer.appendChild(dolciTitle)
   dolciContainer.appendChild(tiramisuTitle)
   dolciContainer.appendChild(tiramisuPar)
   dolciContainer.appendChild(tiramisuImg)


   contentContainer.appendChild(menuContainer)
   contentContainer.appendChild(antiPastiContainer)
   contentContainer.appendChild(pastaContainer)
   contentContainer.appendChild(dolciContainer)
   body.appendChild(contentContainer)
}

export { createMenuPage }