import tank from "./components/tank.js";
import graveyard from "./components/graveyard.js";
import personData from "./helpers/data/personData.js";

const sharkAttackEvent = () => {
  personData.randomMurder();
  tank.tankBuilder();
  graveyard.graveyardBuilder();
};

const reviveEvent = (e) => {
  const personId = e.target.id;
  personData.bringToLife(personId);
  tank.tankBuilder();
  graveyard.graveyardBuilder();
};

const init = () => {
  tank.tankBuilder();
  graveyard.graveyardBuilder();
  $( "#bite-me" ).click(sharkAttackEvent);
  $( "body" ).on( 'click', '.revive-btn', reviveEvent);
};

init();