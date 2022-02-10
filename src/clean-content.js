function cleanContent() {
   console.log('checking for clean')
   const body = document.querySelector('body');
   if (document.querySelector('#content')) {
      let tempContainer = document.querySelector('#content')
      body.removeChild(tempContainer)
      console.log(tempContainer)

   }
   if (document.querySelector('#footer')) {
      let tempContainer = document.querySelector('#footer')
      body.removeChild(tempContainer)
   }
}


export { cleanContent }