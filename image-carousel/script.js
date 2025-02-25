import { imageTrackers, images, nextBtn, prevBtn } from "./dom-elements.js";

// console.log(images);
let currImageIdx = 0;
let prevActiveImageTrackerIdx = 0;

const loadImage = () => {
  imageTrackers[prevActiveImageTrackerIdx].style.background =
    "linear-gradient(to right, blue, rgb(251, 0, 251))";
  images[currImageIdx].style.display = "inline-block";
};

const rightMove = (start, end) => {
  for (let i = 0; i < end - start; i++) {
    setTimeout(() => {
      images[currImageIdx].style.animation = `leftExit 0.1s ease forwards`;
      currImageIdx++;
      images[currImageIdx].style.display = "inline-block";
      images[currImageIdx].style.animation = "rightEntry 0.1s ease forwards";
      imageTrackers[prevActiveImageTrackerIdx].style.background = "white";
      prevActiveImageTrackerIdx++;
      imageTrackers[prevActiveImageTrackerIdx].style.background =
        "linear-gradient(to right, blue, rgb(251, 0, 251))";
    }, i * 500);
  }
};

const leftMove = (start, end) => {
  for (let i = start - end; i > 0; i--) {
    setTimeout(() => {
      images[currImageIdx].style.animation = "rightExit 0.1s ease forwards";
      currImageIdx--;
      images[currImageIdx].style.display = "inline-block";
      images[currImageIdx].style.animation = "leftEntry 0.1s ease forwards";
      imageTrackers[prevActiveImageTrackerIdx].style.background = "white";
      prevActiveImageTrackerIdx--;
      imageTrackers[prevActiveImageTrackerIdx].style.background =
        "linear-gradient(to right, blue, rgb(251, 0, 251))";
    }, i * 500);
  }
};

nextBtn.addEventListener("click", () => {
  if (currImageIdx < images.length - 1) {
    console.log(currImageIdx);
    images[currImageIdx].style.animation = `leftExit 0.1s ease forwards`;
    currImageIdx++;
    images[currImageIdx].style.display = "inline-block";
    images[currImageIdx].style.animation = "rightEntry 0.1s ease forwards";
    imageTrackers[prevActiveImageTrackerIdx].style.background = "white";
    prevActiveImageTrackerIdx++;
    imageTrackers[prevActiveImageTrackerIdx].style.background =
      "linear-gradient(to right, blue, rgb(251, 0, 251))";
  } else {
    leftMove(images.length - 1, 0);
  }
});

prevBtn.addEventListener("click", () => {
  if (currImageIdx > 0) {
    images[currImageIdx].style.animation = "rightExit 0.1s ease forwards";
    currImageIdx--;
    images[currImageIdx].style.display = "inline-block";
    images[currImageIdx].style.animation = "leftEntry 0.1s ease forwards";
    imageTrackers[prevActiveImageTrackerIdx].style.background = "white";
    prevActiveImageTrackerIdx--;
    imageTrackers[prevActiveImageTrackerIdx].style.background =
      "linear-gradient(to right, blue, rgb(251, 0, 251))";
  } else {
    rightMove(0, images.length - 1);
  }
});

console.log(imageTrackers);
imageTrackers.forEach((imageTracker, index) => {
  imageTracker.addEventListener("click", () => {
    if (index > currImageIdx) {
      rightMove(currImageIdx, index);
    } else if (index < currImageIdx) {
      leftMove(currImageIdx, index);
    }
  });
});

loadImage();
