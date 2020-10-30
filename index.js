'use strict'

let btn5 = document.getElementById('btn5');

btn5.addEventListener('click', rotate)

function rotate() {
  const btnQuant = 9;

  for (let i=0; i<btnQuant; i++) {
    let thisBtnId = 'btn'+(i+1);

    let thisBtn = document.getElementById(thisBtnId);

    let oldVal = thisBtn.innerHTML;
    console.log(oldVal)
    let newVal = changeVal(Number(oldVal));
    console.log(newVal)

    thisBtn.innerHTML = newVal;

  }
}

function changeVal(val) {
  switch (val) {
    case 1:
      val = 4;
      break;
    case 2:
      val = 1;
      break;
    case 3:
      val = 2;
      break;
    case 4:
      val = 7;
      break;
    case 6:
      val = 3;
      break;
    case 7:
      val = 8;
      break;
    case 8:
      val = 9;
      break;
    case 9:
      val = 6;
      break;
    default:
  }

  return val;
}