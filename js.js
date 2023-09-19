const windowInnerWidth = document.documentElement.clientWidth;

const wrCard = document.querySelector(".wr-card");
const containerHor = document.querySelector(
  ".dashboard-item-card__thumb--horizontal"
);
const containerVer = document.querySelector(".dashboard-item-card__thumb");
const elems = document.querySelectorAll(".pla-sq");

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

resizeElems();
window.onresize = resizeElems;
resizeBlock();
window.onresize = resizeBlock;
