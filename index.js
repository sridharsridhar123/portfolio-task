for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    // Set random position for each star
    star.style.left = Math.random() * 150+ 'vw';
    star.style.top = Math.random() * 150 + 'vh';
    star.style.right=Math.random()* 150+ 'vw';
    star.style.bottom=Math.random()*150+ 'vh';

    document.body.appendChild(star);
  }