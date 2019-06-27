const accordion = document.querySelector('.accordion')
const accordionItems = document.querySelectorAll('.accordion-item')

const resetAccordionItems = (activeAccordionItem) => {
  Array.from(accordionItems)
    .filter(accordionItem => accordionItem !== activeAccordionItem)
    .forEach(accordionItem => {
      accordionItem.classList.remove('is-active')
      accordionItem.querySelector('.accordion-item__body').style.height = '0'
    })
}

const toggleAccordionItem = (event) => {
  event.preventDefault()

  // Ignore elements other than the button
  if (!event.target.classList.contains('accordion-item__button')) {
    return
  }

  // Get the accordion item that was clicked
  const activeAccordionItem = event.target.closest('.accordion-item')
  activeAccordionItem.classList.toggle('is-active')

  resetAccordionItems(activeAccordionItem)

  const activeAccordionItemBody = activeAccordionItem.querySelector('.accordion-item__body')
  const activeAccordionItemHeight = activeAccordionItemBody.querySelector('.accordion-item__content').offsetHeight

  // Toggle the height of the accordion body container
  if (activeAccordionItem.classList.contains('is-active')) {
    activeAccordionItemBody.style.height = `${activeAccordionItemHeight}px`
  } else {
    activeAccordionItemBody.style.height = '0'
  }

  // Toggle the active class on the entire accordion if there is an active item
  if (activeAccordionItem.classList.contains('is-active')) {
    accordion.classList.add('is-active')
  } else {
    accordion.classList.remove('is-active')
  }
}

accordion.addEventListener('click', toggleAccordionItem)