function toggleAnswer(index) {
    const answers = document.querySelectorAll('.answer');
    const advantages = document.querySelectorAll('.advantage');
    
    if (advantages[index].classList.contains('active')) {
        advantages[index].classList.remove('active');
    } else {
        advantages.forEach((adv, i) => {
            if (i !== index) adv.classList.remove('active');
        });
        advantages[index].classList.add('active');
    }
}

