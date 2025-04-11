const ball = document.createElement('div')
document.body.appendChild(ball)
const LPadel = document.createElement('div')
document.body.appendChild(LPadel)
let LPadelWidth = 20
let lPadelHeight = 100
const ballRadius = 30
const windowHeight = window.innerHeight
const windowWidth = window.innerWidth
let ballXPosition = windowWidth/2 - ballRadius
let ballYPosition = windowHeight/2 - ballRadius
let BallSpeed = 5
let ballXDirection = 1

setInterval(moveBall(), 10)

function moveBall() {
    ball.style.left = ballXPosition + BallSpeed * ballXDirection
    ball.style.left = `${ballXPosition}px`
    if (ballXPosition > windowWidth ){
        ballXDirection = ballXDirection * -1
    }
    if (ballXPosition < 0 || ballXPosition > windowWidth - 2 * ballRadius )
    {
        ballXDirection = ballXDirection * -1
    }

}
createBall()

function createBall(){
    document.body.appendChild(ball)
    ball.style.height = `${2 * ballRadius }px`
    ball.style.width = `${2 * ballRadius }px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "green"
    ball.style.position = "absolute"
    ball.style.top = `${windowHeight/2 - ballRadius}px`
    ball.style.left = `${windowWidth/2 - ballRadius}px`
}



function createLPadel()

{    LPadel.style.height = `${LPadelHeight}px`
    LPadel.style.width =  `${LPadelWidth}px`
    LPadel.style.backgroundColor = `blue`
    LPadel.style.position = `absolute`

}
