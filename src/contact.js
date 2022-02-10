function createContactPage() {
   const body = document.querySelector('body');
   const contentContainer = document.createElement('div')
   contentContainer.setAttribute('id', 'content')

   const contactContainer = document.createElement('div')
   contactContainer.setAttribute('id', 'contact-container')
   const contactTitle = document.createElement('h1')
   contactTitle.innerText = 'Contact us'

   const contactCard = document.createElement('div')
   contactCard.setAttribute('id', 'contact-card')
   const contactPar = document.createElement('p')
   contactPar.innerText = "Find us at : \n this address \n tel: 555-555-5555"


   contactContainer.appendChild(contactTitle)
   contactCard.appendChild(contactPar)
   contactContainer.appendChild(contactCard)
   contentContainer.appendChild(contactContainer)
   body.appendChild(contentContainer)
}

export { createContactPage }