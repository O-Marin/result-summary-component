let jsonData = async () => {
  let test = await fetch('../../data.json').then(response => response.json()).then(
    test => {
      return test;
    }
  );
  return test;
}

let jsonToObject = async () => {
  let statParagraphs = document.querySelectorAll('div#stats > p');
 
  /**
   * let reactionParagraph = document.querySelector('#reaction');
  let memoryParagraph = document.querySelector('#memory');
  let verbalParagraph = document.querySelector('#verbal');
  let visualParagraph = document.querySelector('#visual');
   */

  let objeto = await jsonData();
  /**array with the images of the paragraphs */
  let imgs = [];
  statParagraphs.forEach(paragraph => imgs.push(paragraph.querySelector('img')));
  console.log(imgs)
  /**array with the image reference */
  let imgSrc = []
  objeto.forEach(element => imgSrc.push(element.icon));  
  console.log(imgSrc);
  /**Pair up img element with img src in a single array */
  let icons = []

  
  /**to do, 
   * crear un nuevo array que contenga el par elemento html IMG y el src del icono
   * hacer lo mismo para los span dentro del parrafo, la categoria y el score
   * darle id a los span para facilitar los selectores
   *  */
 
  /**thought process
   * I want to assign certain values to certain html elements
   * one of the ideas I got was to create arrays of [html element, object value] to then assign them into the html
   * another option could be creating new objects with those characteristics, but it could be more cumbersome.
   */



  /**adding categories to array */
  let categories = [];
  objeto.forEach(element => categories.push(element.category));  
  console.log(categories);
  /**assigning score results into an array */
  let scores = []
  objeto.forEach(element => scores.push(element.score));
  console.log(scores)
  /**seleccionar primer parrafo en el array que guarda los parrafos */
  console.log(statParagraphs[0]);
  console.log(statParagraphs[0].querySelectorAll(`p > span`))
  
  
  //statParagraphs.forEach()
}

jsonToObject();





