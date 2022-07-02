import { getCustomProperty, incrementCustomProperty, setCustomProperty } from "./updateCustomProperty.js"

const ufoElem = document.querySelector("[data-ufo]")
const JUMP_SPEED = 0.45
const GRAVITY = 0.0015
const UFO_FRAME_COUNT = 3
const FRAME_TIME = 100


export let isJumping;
export var height = 0;
let ufoFrame
let currentFrameTime
let yVelocity
export function setupUfo() {
    isJumping = false
    ufoFrame = 0
    currentFrameTime = 0
    yVelocity = 0
    setCustomProperty(ufoElem, "--bottom", 0)
    // document.removeEventListener("keydown", onJump)
    // document.addEventListener("keydown", onJump)
}

export function updateUfo(delta, speedScale) {
    handleRun(delta, speedScale);
    handleJump(delta);
}

export function getUfoRect() {
    return ufoElem.getBoundingClientRect();
}

export function setUfoLose() {
    ufoElem.src = "ufodead.png";
}

function handleRun(delta, speedScale) {
    if (isJumping) {
        ufoElem.src = `ufo-0.png`;
        return;
    }

    if (currentFrameTime >= FRAME_TIME) {
        ufoFrame = (ufoFrame + 1) % UFO_FRAME_COUNT;
        ufoElem.src = `ufo-${ufoFrame}.png`;
        currentFrameTime -= FRAME_TIME;
    }
    currentFrameTime += delta * speedScale;
}

function handleJump(delta) {
    if (!isJumping) return
    incrementCustomProperty(ufoElem, "--bottom", yVelocity * delta)
    height = getCustomProperty(ufoElem, "--bottom");

    if (getCustomProperty(ufoElem, "--bottom") <= 0) {
        setCustomProperty(ufoElem, "--bottom", 0);
        isJumping = false;
    }

    yVelocity -= GRAVITY * delta;
}

export function onJump() {
    if (isJumping) return;
  
    yVelocity = JUMP_SPEED;
    isJumping = true;
  }