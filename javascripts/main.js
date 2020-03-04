// console.log("hello");

import breads from "./components/bread.js";
import cheeses from "./components/cheese.js";
// import breadsMaker from "./helpers/data/breadData.js";

// div in html -id "bread-container"
//printToDom function in utils
//breadData will have array of bread objects, export a getBreads function
//each bread object = type, color, price, id
//bread.js component - with domString builder (find radio in bootstrap) use getBreads
//import breads component into main
//event listener on radio button - call breadDate.setselectedBread(breadId)
//setSelectedBread = assign a variable (selectedBreadId) to the id passed in (console.log id)

const init = () => {

    breads.makeBreadRadioButtons();
    cheeses.makeCheeseButtons();

};

init();