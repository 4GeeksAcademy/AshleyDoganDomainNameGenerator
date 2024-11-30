/* eslint-disable */
import "bootstrap";
import "./styles.css";
window.onload = function() {
  // arrays with the words
  let pronoun = ["the", "our", "four"];
  let adj = ["cool", "fuzzy", "green"];
  let noun = ["raisins", "noodles", "dogs", "goats"];

  // generating the domains
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        console.log(pronoun[i] + adj[j] + noun[k] + ".com");
      }
    }
  }
};
