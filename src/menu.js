import { cleanConent } from './clean-content';

function createMenuPage() {
   cleanConent();
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

   const pastaContainer = document.createElement('div')
   const pastaTitle = document.createElement('h2')
   pastaTitle.innerText = 'Pasta'

   const dolciContainer = document.createElement('div')
   const dolciTitle = document.createElement('h2')
   dolciTitle.innerText = 'Dolci'


}

export { createMenuPage }