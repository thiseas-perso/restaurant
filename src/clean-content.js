function cleanContent() {
   console.log('checking for clean')
   if (document.querySelector('#content')) {
      let tempContainer = document.querySelector('#content')
      while (tempContainer.lastChild) {
         tempContainer.removeChild(tempContainer.lastChild)
      }
      console.log('cleanded')

   }
   if (document.querySelector('#footer')) {
      let tempContainer = document.querySelector('#footer')
      while (tempContainer.lastChild) {
         tempContainer.removeChild(tempContainer.lastChild)
      }
   }
}


export { cleanContent }