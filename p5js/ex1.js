//Variáveis tipo let nomeDaVar;

function setup() { //código que só corre uma vez

  ///Não Apagar para Baixo até <<<
  var canvasDiv = document.getElementById('ex1');
  var width = canvasDiv.offsetWidth;
  var sketchCanvas = createCanvas(width,width*.75);
  console.log(sketchCanvas);
  sketchCanvas.parent('ex1');
  ///<<< Não fica a faltar createCanvas


}

function draw() { //código que corre em loop
   //podem apagar esta linha!
  background(80,150,120);

    fill (99, 81, 80);
    square(120, 120, 250, 20);

    fill (191, 159, 157)
    ellipse(245,250,190,200);

    fill (196, 132, 161);
    ellipse(136, 250, 30, 30);
    ellipse(354, 250, 30, 30);

    fill (245, 252, 252);
    ellipse (200, 230,40, 55);
    ellipse (285, 230,40, 55);

    fill (62, 181, 181);
    ellipse (200, 229, 20, 20);
    ellipse (286, 229, 20, 20);

    fill (51, 66, 66);
    ellipse (200, 229, 10, 10);
    ellipse (286, 229, 10, 10);

    fill (143, 80, 91);
    square(230, 285, 30, 10);

    fill (179, 136, 143);
    circle(244, 256, 20);

  }


}
