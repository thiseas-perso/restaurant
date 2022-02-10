import { createHomePage } from './home';
import { createMenuPage } from './menu';
import { createFooter } from './footer';
import { createContactPage } from './contact';
import { cleanContent } from './clean-content';

function createNavbar() {
   const body = document.querySelector('body');
   const navbar = document.createElement('nav');
   const ul = document.createElement('ul');
   const liArray = [];
   for (let i = 1; i < 4; i++) {
      const li = document.createElement('li')
      li.setAttribute('id', `item-${i}`)
      liArray.push(li)
   }

   const itemOne = liArray[0]
   itemOne.innerText = 'Home'
   itemOne.addEventListener('click', (e) => {
      cleanContent()
      createHomePage()
      createFooter()
   })

   const itemTwo = liArray[1]
   itemTwo.innerText = 'Menu'
   itemTwo.addEventListener('click', (e) => {
      cleanContent()
      createMenuPage()
      createFooter()
   })

   const itemThree = liArray[2]
   itemThree.innerText = 'Contact'
   itemThree.addEventListener('click', (e) => {
      cleanContent()
      createContactPage()
      createFooter()
   })

   liArray.forEach(li => ul.appendChild(li))
   navbar.appendChild(ul)
   body.appendChild(navbar)
}

export { createNavbar }