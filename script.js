// document.getElementsByTagName('body')[0].innerHTML = 'test';

const cMiddle = document.getElementById('cMiddle');
const arrowLeft = document.getElementById('arrowLeft');
const arrowRight = document.getElementById('arrowRight');
const circleNav = document.getElementById('circleNav');
const ring = document.getElementById('ring');

const photos = [];

photos.push('./img/corbusier_0.jpg');
photos.push('./img/corbusier_1.jpg');
photos.push('./img/corbusier_2.jpg');
photos.push('./img/corbusier_3.jpg');
photos.push('./img/corbusier_4.jpg');
photos.push('./img/corbusier_5.jpg');

for (let i = 0; i < photos.length; i += 1) {
  const div = document.createElement('div');
  if (i === 0) {
    div.className = 'photo show';
  } else {
    div.className = 'photo hide';
  }
  div.style.backgroundImage = `url(${photos[i]})`;
  div.id = `photo${i}`;
  cMiddle.appendChild(div);

  const circle = document.createElement('div');
  circle.className = 'circle';
  circle.id = `circle${i}`;
  circleNav.appendChild(circle);
}

let currentIndex = 0;

function updateImage() {
  ring.style.left = `${currentIndex * 26}px`;
  for (let i = 0; i < photos.length; i += 1) {
    if (i === currentIndex) {
      document.getElementById(`photo${i}`).className = 'photo show';
    } else {
      document.getElementById(`photo${i}`).className = 'photo hide';
    }
  }
}

document.addEventListener('click', (e) => {
  if (e.target === arrowLeft) {
    if (currentIndex === 0) {
      currentIndex = photos.length - 1;
    } else {
      currentIndex -= 1;
    }
    updateImage();
  } else if (e.target === arrowRight) {
    if (currentIndex === photos.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex += 1;
    }
    updateImage();
  } else {
    for (let i = 0; i < photos.length; i += 1) {
      if (e.target === document.getElementById(`circle${i}`)) {
        currentIndex = i;
        updateImage();
      }
    }
  }
});
