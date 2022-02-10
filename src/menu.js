
function createMenuPage() {

   const body = document.querySelector('body');
   const contentContainer = document.createElement('div')
   contentContainer.setAttribute('id', 'content')

   const menuContainer = document.createElement('div')

   const menuTitle = document.createElement('h1')
   menuTitle.innerText = "Menu"
   menuContainer.appendChild(menuTitle)

   const antiPastiContainer = document.createElement('div')
   const antiPastiTitle = document.createElement('h2')
   antiPastiTitle.innerText = 'Antipasti'
   const saladTitle = document.createElement('h3')

   const pastaContainer = document.createElement('div')
   const pastaTitle = document.createElement('h2')
   pastaTitle.innerText = 'Pasta'
   const pomodoroTitle = document.createElement('h3')

   const dolciContainer = document.createElement('div')
   const dolciTitle = document.createElement('h2')
   dolciTitle.innerText = 'Dolci'
   const tiramissuTitle = document.createElement('h3')


   contentContainer.appendChild(menuContainer)
   body.appendChild(contentContainer)
}

export { createMenuPage }