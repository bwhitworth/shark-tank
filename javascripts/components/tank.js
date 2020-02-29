import utils from "../helpers/utils.js";
import personData from "../helpers/data/personData.js";

const tankBuilder = () => {
  const persons = personData.getAlivePersons();
  let domString = '';
  domString += '<div class="col-6">'
  domString += '  <div class="card">',
  domString += '    <div class="card-header">TANK</div>',
  domString += '    <ul class="list-group list-group-flush">',
  persons.forEach((p) => {
    domString += `  <li class="list-group-item">${p.name}</li>`
  });
  domString += '    </ul>',
  domString += '  </div>',
  domString += '</div>'
  utils.printToDom('tank', domString);
};

export default { tankBuilder };