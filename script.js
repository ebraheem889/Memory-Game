
document.querySelector('.control-buttons span').onclick = function() {

let yourname = prompt("What is Your Name");

  if(yourname == null || yourname == "" ){

      document.querySelector('.name span').innerHTML = 'Unkown';

  }

  else{

    document.querySelector('.name span').innerHTML = yourname;

  }


  document.querySelector(".control-buttons").remove();

};

let duration =1000; 


let blockscontainer =document.querySelector('.memory-game-blocks');

let blocks = Array.from(blockscontainer.children);


let orderRange = [...Array(blocks.length).keys()];
