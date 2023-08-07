
/**
 * Attach click event listeners to list items and close buttons inside dialogs.
 * Open corresponding dialogs on list item click.
 * Close dialogs on close button click.
 */
 
/**
 * Represents a collection of dialog elements.
 * @type {NodeListOf<HTMLDialogElement>}
 */
const dialogs = document.querySelectorAll('dialog');

/**
 * Represents a collection of list items.
 * @type {NodeListOf<HTMLLIElement>}
 */
const listItems = document.querySelectorAll('li');
listItems.forEach((li) => {

     /**
   * Event listener for the click event on a list item.
   * @param {MouseEvent} event - The click event object.
   */
  li.addEventListener('click', () => {

    const dialog = document.querySelector(`dialog[data-${li.textContent.toLowerCase().replace(/[^a-z]/g, "")}]`);
    if (dialog) {
      dialog.showModal();
    }
  });
});

/**
 * Represents a collection of close buttons inside dialogs.
 * @type {NodeListOf<HTMLButtonElement>}
 */
const closeButtons = document.querySelectorAll('dialog button');
closeButtons.forEach((button) => {

    /**
   * Event listener for the click event on a close button.
   * @param {MouseEvent} event - The click event object.
   */
  button.addEventListener('click', () => {
   
    /**
     * The closest dialog element to the clicked button.
     * @type {HTMLDialogElement}
     */
    const dialog = button.closest('dialog');
    if (dialog) {
      dialog.close();
    }
  });
});


const SouthAfrican = document.querySelector("body > ul > li:nth-child(91)")
const southAficaDial = document.querySelector("body > ul > dialog:nth-child(92)")

SouthAfrican.addEventListener('click' ,()=>{
    southAficaDial.open = true
})

const cordeV = document.querySelector("body > ul > li:nth-child(25)")
const cordeDialog = document.querySelector("body > ul > dialog:nth-child(26)")

cordeV.addEventListener('click' , () =>{
    cordeDialog.open = true
})



/**
 * Event listener for the DOMContentLoaded event.
 * Calculates the total population based on country info elements and appends it to the target element.
 */
window.addEventListener('DOMContentLoaded', () => {

     /**
   * Represents a collection of country info elements.
   * @type {NodeListOf<Element>}
   */
    const populationElements = document.querySelectorAll('.country-info');

    /**
   * The total population.
   * @type {number}
   */
    let totalPopulation = 0;

    populationElements.forEach(element => {

    /**
     * The population text within a country info element.
     * @type {string}
     */
        const populationText = element.textContent;

        /**
     * The population value extracted from the population text.
     * @type {RegExpMatchArray|null}
     */
        const populationMatch = populationText.match(/Population:\s([\d.]+)/);

        if (populationMatch) {
            const population = parseFloat(populationMatch[1]);
            totalPopulation += population;
        }
    });
    

     /**
   * The total population element.
   * @type {HTMLDivElement}
   */
     const totalPopulationElement = document.createElement('div');
     totalPopulationElement.classList.add('total-population');
     
     const formattedTotalPopulation = totalPopulation.toLocaleString('en-US', {
       minimumFractionDigits: 2,
       maximumFractionDigits: 3,
     });
     
     totalPopulationElement.textContent = 'Total Population: ' + formattedTotalPopulation + ' billion';
     
     const targetElement = document.getElementById('total-population');
     targetElement.appendChild(totalPopulationElement);
     
});


const helpButton = document.querySelector('#help-button')
const helpDialog = document.querySelector('#help-dialog')

helpButton.addEventListener('click' , () =>{
    helpDialog.open = true
})
