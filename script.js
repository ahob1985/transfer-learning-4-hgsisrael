// Author:

// Global UI Variables
let canvasDiv;
let canvas;
let textDiv;
let textP;
let sliderDiv;
let slider;
let sadSpan;
let happySpan;
let buttonDiv;
let addExampleButton;
let trainButton;

// Global ML Variables
let featureExtractor;
let predictor;
let video;
let isModelReady;
let isTrainingComplete;
let addedExamples;
//let featureExtractor;

function setup() {
  canvasDiv = createDiv() {
  canvas = createCanvas(640, 480);
  canvas.parent(canvasDiv);
  textDiv = createDiv();
  textP = createP("Model loading, please wait...");
  textP.parent(textDiv);

  buildInput();

  addedExamples = 0;

  isModelReady = false;
  isTrainingComplete = false;

  video = createCapture(VIDEO, videoReady);
}

function draw() {

}

function buildInput() {
  sliderDiv = createDiv();
  sadSpan = createSpan("Sad");
  slider = createSlider(0, 1, 0.5, 0,01);
  slider.parent(sliderDiv);
  happySpan = createSpan("Happy");
  happySpan.parent(sliderDiv);

  buttonDiv = createDiv();
  addExampleButton = createButton("Add Example");
  addExampleButton.parent(buttonDiv);
  addExampleButton.mousepressed(function() {
    addedExamples++;
    textP.html("Added Examples: " + addedExamples);
    predictor.addImage(canvas, slider.value());
  });
  trainButton = createButton("Train Model");
  trainButton.parent(buttonDiv);
  trainButton.mousePressed(function() {
    buttonDiv.style("display", "none");
    sliderDiv.style("display", "none");
    predictor.train(whileTraining);
  })
}

function videoReady() {

}

function featureExtractorLoaded() {

}

function modelReady() {

}

function whileTraining(loss) {

}

function gotResults(error, results) {

}
