let jsonData = async () => {
  let test = await fetch('../../data.json').then(response => response.json()).then(
    test => {
      return test;
    }
  );
  return test;
}

let jsonToObject = async () => {

  let stats = await jsonData();
  let statParagraphs = document.querySelectorAll('#stats div p');


  //assigning json object values to arrays to iterate later.
  let icons = [];
  let categories = [];
  let scores = [];

  //assigning html elements to arrays
  let iconElements = [];
  let categoryElements = [];
  let scoreElements = [];

  for(let stat of stats){
    icons.push(stat.icon);
    categories.push(stat.category);
    scores.push(stat.score);
  }
  console.log(icons,categories,scores);

  //paragraph elements
  let elements = []
  for(let element of statParagraphs){ 
    elements.push(element.childNodes);
  }
  
  
  for(let element in elements){ 
    if(element % 2 === 0){
      iconElements.push(elements[element][0]);
      categoryElements.push (elements[element][1]);
    }else if (element % 2 === 1){
      scoreElements.push(elements[element][0]);
  }
  
}
  console.log(iconElements);
  console.log(scoreElements);
  console.log(categoryElements);

  for(let i in icons){
    iconElements[i].setAttribute('src', icons[i]);
    categoryElements[i].innerHTML = categories[i];
    scoreElements[i].innerHTML = scores[i];
    
  }
  
  //result
let total = 0;
  for(let result of scores){
    total += result;
  }
  total = Math.round(total/scores.length)
  document.querySelector('#result h1').innerHTML = total


}
jsonToObject();