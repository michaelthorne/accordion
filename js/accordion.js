const accordion = document.querySelector('.accordion')
const accordionItems = document.querySelectorAll('.accordion .accordion-item__header')

const toggleAccordionItem = (event) => {
  const accordionItemHeader = event.target.parentElement

  accordionItemHeader.classList.toggle('is-active')
  accordionItemHeader.classList.remove('is-inactive')

  activateAccordion()
  deactivateAccordionItems(accordionItemHeader)

  // Cater for click of the same item
  if (!accordionItemHeader.classList.contains('is-active')) {
    resetAccordion()
  }
}

Array.from(accordionItems).forEach((accordionItem) => {
  accordionItem.addEventListener('click', toggleAccordionItem, false)
})

const activateAccordion = () => {
  accordion.classList.add('is-active')
}

const resetAccordion = () => {
  accordion.classList.remove('is-active')

  Array.from(accordionItems).forEach((accordionItem) => {
    accordionItem.classList.remove('is-inactive')
  })
}

const deactivateAccordionItems = (activeAccordionItemHeader) => {
  Array.from(accordionItems).forEach((accordionItemHeader) => {
    if (activeAccordionItemHeader !== accordionItemHeader) {
      accordionItemHeader.classList.remove('is-active')
      accordionItemHeader.classList.add('is-inactive')
    }
  })
}
