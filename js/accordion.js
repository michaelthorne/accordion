const accordion = document.querySelector('.accordion')
const accordionItems = Array.from(document.querySelectorAll('.accordion-item__header'))

const toggleAccordionItem = (event) => {
  const accordionItemHeader = event.target.parentElement

  console.log(event.target.parentElement)

  if (!accordionItems.includes(accordionItemHeader)) {
    return
  }

  accordionItemHeader.classList.toggle('is-active')
  accordionItemHeader.classList.remove('is-inactive')

  activateAccordion()
  deactivateAccordionItems(accordionItemHeader)

  // Cater for click of the same item
  if (!accordionItemHeader.classList.contains('is-active')) {
    resetAccordion()
  }
}

accordionItems.forEach((accordionItem) => {
  accordionItem.addEventListener('click', toggleAccordionItem)
})

const activateAccordion = () => {
  accordion.classList.add('is-active')
}

const resetAccordion = () => {
  accordion.classList.remove('is-active')

  accordionItems.forEach((accordionItem) => {
    accordionItem.classList.remove('is-inactive')
  })
}

const deactivateAccordionItems = (activeAccordionItemHeader) => {
  accordionItems.forEach((accordionItemHeader) => {
    if (activeAccordionItemHeader !== accordionItemHeader) {
      accordionItemHeader.classList.remove('is-active')
      accordionItemHeader.classList.add('is-inactive')
    }
  })
}
