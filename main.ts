controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
f f f f f f 
f f f f f f 
`, mySprite, -150, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
f f f f f f 
f f f f f f 
`, mySprite, 150, 0)
})
let mySprite2: Sprite = null
let enemysprite: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 1 1 1 1 1 1 1 1 1 2 2 
2 2 1 f f f f f f f 1 2 2 
2 2 1 f f f f f f f 1 2 2 
2 2 1 f f f f f f f 1 2 2 
2 2 1 f f f f f f f 1 2 2 
2 2 1 f f f f f f f 1 2 2 
2 2 1 f f f f f f f 1 2 2 
2 2 1 f f f f f f f 1 2 2 
2 2 1 1 1 1 1 1 1 1 1 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . 2 . 2 . 2 . 2 . 2 . 2 
2 . 2 . 2 . 2 . 2 . 2 . 2 
2 . 2 . 2 . 2 . 2 . 2 . 2 
2 . 2 . 2 . 2 . 2 . 2 . 2 
`, SpriteKind.Player)
scene.setBackgroundColor(8)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
game.onUpdateInterval(500, function () {
    enemysprite = sprites.create(img`
. . . . . . . . . . . c c . . . 
. . . . . . . c c c c 6 3 c . . 
. . . . . . c 6 3 3 3 3 6 c . . 
. . c c . c 6 c c 3 3 3 3 3 c . 
. b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
. f f 5 c 6 c 5 f f 3 3 3 3 3 c 
. f f 5 c 6 c 5 f f 6 3 3 3 c c 
. b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
. . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
. c c 5 5 5 5 5 b c c 3 3 3 3 c 
c 5 5 4 5 5 5 4 b 5 5 c 3 3 c . 
b 5 4 b 4 4 4 4 b b 5 c b b . . 
c 4 5 5 b 4 b 5 5 5 4 c 4 5 b . 
c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
. c c c c c c c c c . . c c c . 
`, SpriteKind.Enemy)
    enemysprite.setPosition(Math.randomRange(10, 160), Math.randomRange(10, 120))
    mySprite2 = sprites.create(img`
. . . . . . c c . . . . . c c . 
. . . c c . c 3 c . c c . c 3 c 
. . c 3 6 c 3 3 c . c 3 c 6 3 c 
. . c 3 3 3 3 6 c . c 3 6 3 3 c 
. . . c 6 3 6 6 c c c 3 3 3 c . 
. . . . c c 6 6 c 6 c 6 3 3 c . 
. . . . c 3 c 6 c 3 3 c 6 6 c . 
c c . c 3 3 c c c c 3 3 c 6 c . 
c 3 c c 3 6 6 c 3 c 3 6 c 6 c . 
c 3 3 6 3 6 3 6 3 3 3 c c c c c 
. c 3 3 3 c 3 3 6 3 6 c c 3 3 c 
. . c 3 3 c c 3 3 3 6 c 3 3 6 . 
c c c 6 3 6 c c 6 3 6 6 3 6 c c 
c 3 3 3 3 3 c c c 3 6 3 3 3 3 c 
. c c 6 6 3 6 6 c 6 3 3 6 c c . 
. . . c 6 3 3 6 6 6 6 3 c . . . 
`, SpriteKind.Food)
    mySprite2.setPosition(Math.randomRange(0, 160), 111)
})
