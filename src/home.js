import imgHeader from './header.jpg';
import { cleanContent } from './clean-content';


function createHomePage() {
   cleanContent();

   const body = document.querySelector('body');
   const contentContainer = document.createElement('div')
   contentContainer.setAttribute('id', 'content')

   const bannerImg = new Image();
   bannerImg.src = imgHeader

   const headContainer = document.createElement('div');
   headContainer.setAttribute('id', '#header')
   headContainer.appendChild(bannerImg)
   contentContainer.appendChild(headContainer)


   const title = document.createElement('h1')
   title.innerText = "Mama italia"
   contentContainer.appendChild(title)


   const mainParagraph = document.createElement('p')
   mainParagraph.innerText = 'Mama italia is a great restaurant that does not exist and there are no plans for it to ever exist.'
   contentContainer.appendChild(mainParagraph)

   body.appendChild(contentContainer)

}


export { createHomePage }