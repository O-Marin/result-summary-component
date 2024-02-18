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

  let objeto = await jsonData();
  /**array with the images of the paragraphs */
  let imgs = [];
  statParagraphs.forEach(paragraph => imgs.push(paragraph.querySelector('img')));

  /**array with the image reference */
  let imgSrc = []
  objeto.forEach(element => imgSrc.push(element.icon));

  /**Pair up img element with img src in a single array */
  let icons = []


  /**adding categories to array */
  let categories = [];
  objeto.forEach(element => categories.push(element.category));

  /**assigning score results into an array */
  let scores = []
  objeto.forEach(element => scores.push(element.score));

  /**seleccionar primer parrafo en el array que guarda los parrafos */

  let reactionSpans = statParagraphs[0].querySelectorAll(`p > span`);
  let spans = [];
  /** */

  statParagraphs.forEach(paragraph => {
    //populating spans array with pairs of spans from each paragraph
    spans.push(paragraph.querySelectorAll('p span'));
  })

spans[1][0].innerHTML 


spans.forEach((span,index) => {

 
  span.forEach((spa, index1)=>{

    if(span[index1].innerHTML === ''){

      span[0].innerHTML = categories[index];
      span[1].innerHTML = `${scores[index]} <span style="display:inline-block;color: rgb(168, 158, 158);"> /100 </span>`;
    }

   
    
  })
    
})

  //add images
  for (let i in imgs) {
    imgs[i].setAttribute('src', imgSrc[i]);
  }

 
}

jsonToObject();





