import utils from "../helpers/utils.js";
import personData from "../helpers/data/personData.js";

const tankBuilder = () => {
  const persons = personData.getAlivePersons();
  let domString = '<h2 class="col-12 text-center">Tank</h2>';
  domString += '  <div class="card">',
  domString += '    <ul class="list-group list-group-flush">',
  persons.forEach((p) => {
    domString += `  <li class="list-group-item">${p.name}</li>`
  });
  domString += '    </ul>',
  domString += '  </div>',
  utils.printToDom('tank', domString);
};

export default { tankBuilder };