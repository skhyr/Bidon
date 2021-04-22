var elementsInsideBody = [...document.body.getElementsByTagName('*')];
// This makes an array of everything inside the body tag


//a function that loops through every single item
function findAndReplace(){
  elementsInsideBody.forEach(element =>{
    element.childNodes.forEach(child =>{
      if(child.nodeType === 3){
        replaceText(child);
      }
    });

  });
}

function replaceText (node) {
  let value = node.nodeValue;
  value = value.replace(/Biden/gi, 'Bidon');
  node.nodeValue = value;
}

window.onload = findAndReplace();
window.addEventListener("change", findAndReplace());
setTimeout(() => {
    findAndReplace();
}, 1000);