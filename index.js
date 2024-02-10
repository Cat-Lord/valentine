window.onload = () => {
  const yesButton = document.getElementById('yesAction');
  const noButton = document.getElementById('noAction');

  let currentScalingFactor = 1;
  let fontSize = parseFloat(
    window.getComputedStyle(yesButton).getPropertyValue('font-size')
  );

  noButton.addEventListener('click', () => {
    currentScalingFactor += 0.5;
    fontSize = fontSize * 2;
    increaseElementSize(yesButton, currentScalingFactor, fontSize);

    if (currentScalingFactor === 3) {
      noButton.style.visibility = 'hidden';
    }
  });

  console.log(yesButton);
  console.log(noButton);
};

function increaseElementSize(element, scalingFactor, fontSize) {
  element.style.fontSize = `${fontSize}px`;
  element.style.width = `${element.offsetWidth * scalingFactor}px`;
  element.style.height = `${element.offsetHeight * scalingFactor}px`;
}

function sheSaidYes() {
  location.href = 'yay.html';
}
