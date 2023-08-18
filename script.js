let imageNum = 0;
let leftArrowButton;
let rightArrowButton;
let currentImage;
let bottomImage1;
let bottomImage2;
let ethicalGoodLabel;

function initialize() {
  leftArrowButton = document.getElementById("leftArrow");
  rightArrowButton = document.getElementById("rightArrow");
  currentImage = document.getElementById("mainImage");
  bottomImage1 = document.getElementById("leftImage");
  bottomImage2 = document.getElementById("rightImage");
  ethicalGoodLabel = document.getElementById("ethicalGoodLabel");

  leftArrowButton.addEventListener("click", prevImage);
  rightArrowButton.addEventListener("click", nextImage);
}

async function prevImage() {
  imageNum--;
  if (imageNum == -1) {
    imageNum = 2;
  }
  currentImage.style.opacity = 0;
  bottomImage1.style.opacity = 0;
  bottomImage2.style.opacity = 0;
  await new Promise(resolve => setTimeout(resolve, 500));
  if (imageNum == 0) {
    ethicalGoodLabel.innerHTML = "Ethical good sacrificed: Culture";
    
    currentImage.setAttribute("src", "Images/Card0.png");
    bottomImage1.setAttribute("src", "Images/back01.png");
    bottomImage2.setAttribute("src", "Images/back02.png");
    bottomImage2.style.width = bottomImage1.width + "px";
  } else if (imageNum == 1) {
    ethicalGoodLabel.innerHTML = "Ethical good sacrificed: Language";
    
    currentImage.setAttribute("src", "Images/Card1.png");
    bottomImage1.setAttribute("src", "Images/back11.png");
    bottomImage2.style.width = 0;
  } else if (imageNum == 2) {
    ethicalGoodLabel.innerHTML = "Ethical good sacrificed: Family and Friends";

    currentImage.setAttribute("src", "Images/Card2.png");
    bottomImage1.setAttribute("src", "Images/back21.png");
    bottomImage2.style.width = 0;
  }
  currentImage.style.opacity = 1;
  bottomImage1.style.opacity = 1;
  bottomImage2.style.opacity = 1;
}

async function nextImage() {
  imageNum++;
  if (imageNum == 3) {
    imageNum = 0;
  }
  console.log(imageNum);
  currentImage.style.opacity = 0;
  bottomImage1.style.opacity = 0;
  bottomImage2.style.opacity = 0;
  await new Promise(resolve => setTimeout(resolve, 500));
  if (imageNum == 0) {
    ethicalGoodLabel.innerHTML = "Ethical good sacrificed: Culture";
    
    currentImage.setAttribute("src", "Images/Card0.png");
    bottomImage1.setAttribute("src", "Images/back01.png");
    bottomImage2.setAttribute("src", "Images/back02.png");
    bottomImage2.style.width = bottomImage1.width + "px";
  } else if (imageNum == 1) {
    ethicalGoodLabel.innerHTML = "Ethical good sacrificed: Language";
    
    currentImage.setAttribute("src", "Images/Card1.png");
    bottomImage1.setAttribute("src", "Images/back11.png");
    bottomImage2.style.width = 0;
  } else if (imageNum == 2) {
    ethicalGoodLabel.innerHTML = "Ethical good sacrificed: Family and Friends";

    currentImage.setAttribute("src", "Images/Card2.png");
    bottomImage1.setAttribute("src", "Images/back21.png");
    bottomImage2.style.width = 0;
  }
  currentImage.style.opacity = 1;
  bottomImage1.style.opacity = 1;
  bottomImage2.style.opacity = 1;
}
