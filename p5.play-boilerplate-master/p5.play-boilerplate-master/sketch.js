
var gamestate = 0

var dCount = 0

function preload() {
  treeImg = loadImage("assets/tree.png")
  diamondImg = loadImage("assets/diamond.png")
  bgImg = loadImage("assets/grassbg.jpg")
  characterImg = loadImage("assets/character.png")
  bg2Img = loadImage("assets/caveBg.jpg")
  rockImg = loadImage("assets/rock.png")

}


function setup() {
  createCanvas(600, 600);

  bg = createSprite(width/2 , height/2)
  bg.addImage(bgImg)

  tree = createSprite(50, 500)
  tree.addImage(treeImg)
  tree.scale = 0.6
  tree.setCollider("circle", 0, 0, 100)
  // tree.debug = true


  tree2 = createSprite(50, 200)
  tree2.addImage(treeImg)
  tree2.scale = 0.6
  tree2.setCollider("circle", 0, 0, 100)
  // tree2.debug = true

  tree3 = createSprite(410, 220)
  tree3.addImage(treeImg)
  tree3.scale = 0.6
  tree3.setCollider("circle", 0, 0, 100)
  //tree3.debug = true

  tree4 = createSprite(300, 420)
  tree4.addImage(treeImg)
  tree4.scale = 0.6
  tree4.setCollider("circle", 0, 0, 100)
  //tree4.debug = true

  tree5 = createSprite(200, 310)
  tree5.addImage(treeImg)
  tree5.scale = 0.6
  tree5.setCollider("circle", 0, 0, 100)
  //tree5.debug = true

  tree6 = createSprite(500, 450)
  tree6.addImage(treeImg)
  tree6.scale = 0.6
  tree6.setCollider("circle", 0, 0, 100)
  //tree6.debug = true

  tree7 = createSprite(200, 70)
  tree7.addImage(treeImg)
  tree7.scale = 0.6
  tree7.setCollider("circle", 0, 0, 100)
  //tree7.debug = true

  diamond1 = createSprite(550, 150)
  diamond1.addImage(diamondImg)
  diamond1.scale = 0.2
  // diamond.setCollider("circle" , 0 , 0 , 210)
  diamond1.debug = true

  player = createSprite(40, 350)
  player.addImage(characterImg)
  player.scale = 0.17
  player.setCollider("rectangle", 0, 0, 200, 500)
  player.debug = false

  
  // ---------------------------- second stage -----------------------------------
  
  bg2 = createSprite(width/2,height/2)
  bg2.addImage(bg2Img)
  bg2.visible = false

  rock = createSprite(220,370)
  rock.addImage(rockImg)
  rock.scale = 0.2
  rock.visible = false

  rock2 = createSprite(220,370)
  rock2.addImage(rockImg)
  rock2.scale = 0.2
  rock2.visible = false

  rock3 = createSprite(260,450)
  rock3.addImage(rockImg)
  rock3.scale = 0.2
  rock3.visible = false

  rock4 = createSprite(420,490)
  rock4.addImage(rockImg)
  rock4.scale = 0.2
  rock4.visible = false

  rock5 = createSprite(300,580)
  rock5.addImage(rockImg)
  rock5.scale = 0.2
  rock5.visible = false

  rock6 = createSprite(500,350)
  rock6.addImage(rockImg)
  rock6.scale = 0.2
  rock6.visible = false

  // display
  
  
  
  

}

function draw() {
  background(0);

  if (keyDown("left")) {
    player.x = player.x - 2
  }

  if (keyDown("right")) {
    player.x = player.x + 2
  }

  if (keyDown("up")) {
    player.y = player.y - 2
  }

  if (keyDown("down")) {
    player.y = player.y + 2
  }


  if (player.isTouching(tree) || player.isTouching(tree2) || player.isTouching(tree3) || player.isTouching(tree4) || player.isTouching(tree5) || player.isTouching(tree6) || player.isTouching(tree7)) {
    gamestate = 1
  }


  if (player.isTouching(diamond1)) {
    gamestate = 2
    dCount = 1
  }

  if(gamestate == 2){
    bg.destroy()
    tree.destroy()
    tree2.destroy()
    tree3.destroy()
    tree4.destroy()
    tree5.destroy()
    tree6.destroy()
    tree7.destroy()
    
    bg2.visible = true
    rock.visible = true
    rock2.visible = true
    rock3.visible = true
    rock4.visible = true
    rock5.visible = true
    rock6.visible = true

    player = createSprite(40, 350)
  player.addImage(characterImg)
  player.scale = 0.17
  player.setCollider("rectangle", 0, 0, 200, 500)
  player.debug = false

  }


  drawSprites();

  textSize(25)
  fill("white")
  text("Diamonds Collected : " + dCount , 260 , 50)
}

function gameOver() {
  swal(
    {
      title: 'Congratulation!!',
      text: "You have collected a diamond!",
      imageUrl:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/df2b5fef-969f-4e62-8eea-7858457a695e/dcnnpan-3ab9bbad-5112-4c05-8cad-e304171a8133.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RmMmI1ZmVmLTk2OWYtNGU2Mi04ZWVhLTc4NTg0NTdhNjk1ZVwvZGNubnBhbi0zYWI5YmJhZC01MTEyLTRjMDUtOGNhZC1lMzA0MTcxYTgxMzMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.huKeW7DQ1pxRS2sDmBExV9_iqA4yqeuMWGIF6xG3WJc",
      imageSize: "150x150",
      confirmButtonText: "Play Again"
    },
    function (isConfirm) {
      if (isConfirm) {
        location.reload();
      }
    }
  );
}