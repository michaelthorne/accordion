

export const toggleAccordionItem = (event) => {
  event.preventDefault()

  // Ignore elements other than the button
  if (!event.target.classList.contains('Accordion-item__button')) {
    return
  }

  // Get the accordion item that was clicked
  const activeAccordionItem = event.target.closest('.Accordion-item')
  activeAccordionItem.classList.toggle('is-active')

  resetAccordionItems(activeAccordionItem)

  const activeAccordionItemBody = activeAccordionItem.querySelector('.Accordion-item__body')
  const activeAccordionItemHeight = activeAccordionItemBody.querySelector('.Accordion-item__content').offsetHeight
  const accordion = document.querySelector('.Accordion')

  // Update the accordion item height and active class of the accordion
  if (activeAccordionItem.classList.contains('is-active')) {
    activeAccordionItemBody.style.height = `${activeAccordionItemHeight}px`
    Array.from(activeAccordionItemBody.querySelectorAll('input')).forEach(input => {
      input.removeAttribute('tabindex')
    })
    accordion.classList.add('is-active')
  } else {
    activeAccordionItemBody.style.height = '0'
    Array.from(activeAccordionItemBody.querySelectorAll('input')).forEach(input => {
      input.setAttribute('tabindex', '-1')
    })
    accordion.classList.remove('is-active')
  }
}