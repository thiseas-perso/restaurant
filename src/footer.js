function createFooter() {

   const body = document.querySelector('body');
   const footer = document.createElement('footer')
   footer.setAttribute('id', 'footer')
   const footerParagraph = document.createElement('p')
   footerParagraph.innerText = 'This is the footer'
   footer.appendChild(footerParagraph)
   body.appendChild(footer)
}

export { createFooter }