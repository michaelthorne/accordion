const accordion = document.querySelector('.accordion')

const accordionItems = Array.from(document.querySelectorAll('.accordion-item'))

const toggleAccordionItem = (event) => {
  const activeAccordionItem = event.target.parentElement

  activeAccordionItem.classList.toggle('is-active')

  // console.log(accordionItems.filter(accordionItem => accordionItem !== activeAccordionItem))
}

accordion.addEventListener('click', toggleAccordionItem)