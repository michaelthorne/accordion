const accordion = document.querySelector('.accordion')
const accordionItems = document.querySelectorAll('.accordion-item')

const resetAccordionItems = (activeAccordionItem) => {
  Array.from(accordionItems)
    .filter(accordionItem => accordionItem !== activeAccordionItem)
    .forEach(accordionItem => {
      accordionItem.classList.remove('is-active')
      accordionItem.querySelector('.accordion-item__body').style.height = '0'

      Array.from(accordionItem.querySelectorAll('input')).forEach(input => {
        input.setAttribute('tabindex', '-1')
      })
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
  const activeAccordionItemHeight = activeAccordionItemBody.scrollHeight

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

accordion.addEventListener('click', toggleAccordionItem)

const toggleUtils = document.querySelector('#toggleUtils')

toggleUtils.addEventListener('click', (e) => {
  e.preventDefault()

  const utils = document.querySelector('.app-body__utils')
  utils.classList.toggle('is-active')
})

const toggleNav = document.querySelector('#toggleNav')

toggleNav.addEventListener('click', (e) => {
  e.preventDefault()

  const nav = document.querySelector('.app-body__nav')
  nav.classList.toggle('is-active')
})