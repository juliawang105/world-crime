export const play = () => {
  let button = document.getElementById("play-button");
  console.log(button);
//   if (button.innerText === "Play") {
//     button.innerText("Pause");
//     let interval = setInterval(step, 100);
//   } else {
//     button.innerText("Play");
//     clearInterval(interval);
//   };

    button.addEventListener('click', function(event) {
        console.log('click')
        setInterval(step, 100);
    })
};
1