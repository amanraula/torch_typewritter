document.addEventListener('mousemove', (e) => {
      const torch = document.querySelector('.torch');
      torch.style.left = `${e.pageX - 150}px`;
      torch.style.top = `${e.pageY - 150}px`;
    });

    const ball = document.querySelector('.ball');
    let posX = Math.random() * (window.innerWidth - 50);
    let posY = Math.random() * (window.innerHeight - 50);
    let velX = (Math.random() - 0.5) * 20;
    let velY = (Math.random() - 0.5) * 20;

    function updateBallPosition() {
      posX += velX;
      posY += velY;
      
      if (posX <= 0 || posX >= window.innerWidth - 50) {
        velX = -velX;
      }
      if (posY <= 0 || posY >= window.innerHeight - 50) {
        velY = -velY;
      }

      // Collision detection with torch
      const torch = document.querySelector('.torch');
      const torchRect = torch.getBoundingClientRect();
      const ballRect = ball.getBoundingClientRect();
      
      // if (
      //   ballRect.right >= torchRect.left &&
      //   ballRect.left <= torchRect.right &&
      //   ballRect.bottom >= torchRect.top &&
      //   ballRect.top <= torchRect.bottom
      // ) {
      //   // Ball collides with torch, reverse its direction
      //   velX = -velX;
      //   velY = -velY;
      // }

      ball.style.left = `${posX}px`;
      ball.style.top = `${posY}px`;
      
      requestAnimationFrame(updateBallPosition);
    }

    updateBallPosition();

    // Typewriter effect for "Hello"
    const helloText = "Hello";
    let helloChar = 0;
    const helloElement = document.querySelector('.hello');

    function typeHello() {
      if (helloChar < helloText.length) {
        let charSpan = document.createElement('span');
        charSpan.textContent = helloText[helloChar];
        charSpan.classList.add('underline');
        helloElement.appendChild(charSpan);
        helloChar++;
        setTimeout(typeHello, 500); // 100ms delay between each character
      } else {
        helloChar = 0;
        helloElement.textContent = ""; // Clear the text
        setTimeout(typeHello, 100); // Start again after clearing
      }
    }

    typeHello();

    // Typewriter effect for "AMAN WELCOMES YOU"
    const welcomeText = "Aman Welcomes You";
    let welcomeChar = 0;
    const welcomeElement = document.querySelector('.welcome');

    function typeWelcome() {
      if (welcomeChar < welcomeText.length) {
        let charSpan = document.createElement('span');
        charSpan.textContent = welcomeText[welcomeChar];
        charSpan.classList.add('underline');
        welcomeElement.appendChild(charSpan);
        welcomeChar++;
        setTimeout(typeWelcome, 150); // 100ms delay between each character
      } else {
        welcomeChar = 0;
        welcomeElement.textContent = ""; // Clear the text
        setTimeout(typeWelcome, 900); // Start again after clearing
      }
    }

    typeWelcome();