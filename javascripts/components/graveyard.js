import utils from "../helpers/utils.js";
import personData from "../helpers/data/personData.js";

const graveyardBuilder = () => {
  const persons = personData.getDeadPersons();
  let domString = '<h2 class="col-12 text-center">Graveyard</h2>';
  domString += '<div class="d-flex flex-wrap">';

  persons.forEach((person) => {
    domString += '<div class="col-4 person-card">';
    domString += '  <div class="card">';
    domString += '    <div class="card-body">';
    domString += `    <h5 class="card-title">${person.name}</h5>`;
    domString += `    <button type="button" class="btn btn-primary revive-btn" id="${person.id}">Revive</button>`,
    domString += '    </div>';
    domString += '  </div>';
    domString += '</div>';
  });
  domString += '</div>';
  utils.printToDom('graveyard', domString);
};



export default { graveyardBuilder };