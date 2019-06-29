import React, { useEffect } from 'react'
import './Accordion.css'
import ImageGrid from '../../components/ImageGrid/ImageGrid'

const Accordion = () => {
  useEffect(() => {
    setupAccordionItem(document.querySelector('.Accordion-item.is-active'))
  })

  const setupAccordionItem = (activeAccordionItem) => {
    if (activeAccordionItem === null) {
      return
    }

    const activeAccordionItemBody = activeAccordionItem.querySelector('.Accordion-item__body')
    const activeAccordionItemHeight = activeAccordionItemBody.querySelector('.Accordion-item__content').offsetHeight

    const accordion = document.querySelector('.Accordion')

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

  const resetAccordion = (activeAccordionItem) => {
    const accordion = document.querySelector('.Accordion')

    if (activeAccordionItem.classList.contains('is-active')) {
      accordion.classList.add('is-active')
    } else {
      accordion.classList.remove('is-active')
    }

    const accordionItems = document.querySelectorAll('.Accordion-item')

    Array.from(accordionItems)
      .filter(accordionItem => accordionItem !== activeAccordionItem)
      .forEach(accordionItem => {
        accordionItem.classList.remove('is-active')
        accordionItem.querySelector('.Accordion-item__body').style.height = '0'

        Array.from(accordionItem.querySelectorAll('input')).forEach(input => {
          input.setAttribute('tabindex', '-1')
        })
      })
  }

  const toggleAccordionItem = (event) => {
    event.preventDefault()

    // Ignore elements other than the button
    if (!event.target.classList.contains('Accordion-item__button')) {
      return
    }

    // Get the accordion item that was clicked
    const activeAccordionItem = event.target.closest('.Accordion-item')
    activeAccordionItem.classList.toggle('is-active')

    resetAccordion(activeAccordionItem)
    setupAccordionItem(activeAccordionItem)
  }

  return (
    <div className="Accordion is-active">
      <div className="Accordion-item">
        <div className="Accordion-item__header">
          <button className="Accordion-item__button" onClick={toggleAccordionItem}>
            <span className="Accordion-item__label">Filter</span>
            <span className="Accordion-item__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z" />
            </svg>
          </span>
          </button>
        </div>

        <div className="Accordion-item__body">
          <div className="Accordion-item__content">
            <ImageGrid />
          </div>
        </div>
      </div>

      <div className="Accordion-item">
        <div className="Accordion-item__header">
          <button className="Accordion-item__button" onClick={toggleAccordionItem}>
            <span className="Accordion-item__label">Adjust</span>
            <span className="Accordion-item__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M496 384H160v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h336c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h80c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160H288V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16 16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z" />
            </svg>
          </span>
          </button>
        </div>

        <div className="Accordion-item__body">
          <div className="Accordion-item__content">
            <form>
              <label htmlFor="slider1">Slider 1</label>
              <input id="slider1" type="range" min="0" max="100" tabIndex="-1" />

              <label htmlFor="slider2">Slider 2</label>
              <input id="slider2" type="range" min="0" max="100" tabIndex="-1" />

              <label htmlFor="slider3">Slider 3</label>
              <input id="slider3" type="range" min="0" max="100" tabIndex="-1" />

              <label htmlFor="slider4">Slider 4</label>
              <input id="slider4" type="range" min="0" max="100" tabIndex="-1" />
            </form>
          </div>
        </div>
      </div>

      <div className="Accordion-item is-active">
        <div className="Accordion-item__header">
          <button className="Accordion-item__button" onClick={toggleAccordionItem}>
            <span className="Accordion-item__label">Tint</span>
            <span className="Accordion-item__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
              <path
                d="M205.22 22.09c-7.94-28.78-49.44-30.12-58.44 0C100.01 179.85 0 222.72 0 333.91 0 432.35 78.72 512 176 512s176-79.65 176-178.09c0-111.75-99.79-153.34-146.78-311.82zM176 448c-61.75 0-112-50.25-112-112 0-8.84 7.16-16 16-16s16 7.16 16 16c0 44.11 35.89 80 80 80 8.84 0 16 7.16 16 16s-7.16 16-16 16z" />
            </svg>
          </span>
          </button>
        </div>

        <div className="Accordion-item__body">
          <div className="Accordion-item__content">
            <form>
              <label htmlFor="slider5">Slider 5</label>
              <input id="slider5" type="range" min="0" max="100" tabIndex="-1" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accordion