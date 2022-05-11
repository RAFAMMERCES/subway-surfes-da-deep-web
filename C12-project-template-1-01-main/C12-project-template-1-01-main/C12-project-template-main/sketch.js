var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var guarda,guardaImg;

function preload(){
  //loadImage (carregarImagem) da pista)
  //loadAnimation (carregarAnimação) de corrida para o menino
  boyImg = loadAnimation("jake1.png","jake2.png","jake3.png","jake4.png","jake5.png");
  pathImg = loadImage("path.png");
  guardaImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista 
  path = createSprite(200,200,200,200);
//adicione uma imagem para a pista
  path.addImage(pathImg);
  path.scale=1.2;


//crie um sprite de menino
  boy = createSprite(200,250,25,25);
//adicione uma animação de corrida para ele
  boy.addAnimation("biruliru",boyImg);
  boy.scale=0.5;

  guarda = createSprite(200,250,25,25);
  guarda.addAnimation("bimbas",guardaImg);
  
//crie um limite à esquerda
  leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda
  leftBoundary.visible = false;
//crie um limite à direita
  rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
  rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  boy.x = mouseX;

  guarda.x = boy.x;

  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  boy.collide(rightBoundary);
  boy.collide(leftBoundary);

  guarda.collide(rightBoundary);
  guarda.collide(leftBoundary);

  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
