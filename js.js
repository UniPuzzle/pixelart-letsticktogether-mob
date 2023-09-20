const windowInnerWidth = document.documentElement.clientWidth;

const wrCard = document.querySelector(".wr-card");
const containerHor = document.querySelector(
  ".dashboard-item-card__thumb--horizontal"
);
const containerVer = document.querySelector(".dashboard-item-card__thumb");
const elems = document.querySelectorAll(".pla-sq");
const blockColors = document.querySelector(".block-colors");
const colorElems = document.querySelectorAll(".colors-item");

function resizeBlock() {
  if (containerHor) {
    newWidth = containerHor.clientWidth;
    newHeight =
      containerHor.clientWidth - (containerHor.clientWidth / 100) * 20;

    containerHor.style.width = newWidth + "px";
    containerHor.style.height = newHeight + "px";
  }
  if (containerVer) {
    newWidth = containerVer.clientWidth;
    newHeight =
      containerVer.clientWidth + (containerVer.clientWidth / 100) * 20;

    containerVer.style.width = newWidth + "px";
    containerVer.style.height = newHeight + "px";
  }
  if (blockColors) {
    newWidth = clientWidth - 30;
    console.log(newWidth);
    // newHeight =
    //   containerHor.clientWidth - (containerHor.clientWidth / 100) * 20;

    containerHor.style.width = newWidth + "px";
    // containerHor.style.height = newHeight + "px";
  }
}

function resizeElems() {
  for (const elem of elems) {
    if (containerHor) {
      elem.clientWidth;
      elem.clientHeight;
      newElemWidth = wrCard.clientWidth - (wrCard.clientWidth / 100) * 95;
      newElemHeight = wrCard.clientWidth - (wrCard.clientWidth / 100) * 95;
      console.log(newElemWidth);
      console.log(newElemHeight);

      elem.style.width = newElemWidth + "px";
      elem.style.height = newElemHeight + "px";
    }
    if (containerVer) {
      elem.clientWidth;
      elem.clientHeight;
      newElemWidth = wrCard.clientWidth - (wrCard.clientWidth / 100) * 94;
      newElemHeight = wrCard.clientWidth - (wrCard.clientWidth / 100) * 94;

      elem.style.width = newElemWidth + "px";
      elem.style.height = newElemHeight + "px";
    }
  }
}

function resizeColorElems() {
  for (const colorElem of colorElems) {
    if (blockColors) {
      colorElem.clientWidth;
      colorElem.clientHeight;

      newElemWidth =
        blockColors.clientWidth - (blockColors.clientWidth / 100) * 91;
      newElemHeight =
        blockColors.clientWidth - (blockColors.clientWidth / 100) * 91;

      colorElem.style.width = newElemWidth + "px";
      colorElem.style.height = newElemHeight + "px";
      console.log(newElemWidth);
    }
  }
}

resizeElems();
window.onresize = resizeElems;
resizeColorElems();
window.onresize = resizeColorElems;
resizeBlock();
window.onresize = resizeBlock;
