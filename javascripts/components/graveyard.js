import utils from "../helpers/utils.js";
import personData from "../helpers/data/personData.js";

const graveyardBuilder = () => {
  const persons = personData.getDeadPersons();
  let domString = '';
  domString += '  <div class="card">',
  domString += '    <div class="card-header">GRAVEYARD</div>',
  domString += '    <ul class="list-group list-group-flush">',
  persons.forEach((p) => {
    domString += `  <li class="list-group-item">${p.name}</li>`
  });
  domString += '    </ul>',
  domString += '  </div>',
  utils.printToDom('graveyard', domString);
};

export default { graveyardBuilder };