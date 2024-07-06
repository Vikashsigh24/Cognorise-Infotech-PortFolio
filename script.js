function hide() {
    var hide1 = document.getElementById("hide_column1");
    var hide2 = document.getElementById("hide_column2");
    
    hide1.classList.toggle("hide-column");

    hide2.classList.toggle("hide-column");


    const btn = document.querySelector('#toggle-button');
    if (btn.innerText === 'View More') {
        btn.innerText = 'View Less';
    } else {
        btn.innerText = 'View More';
    }
 
};

document.querySelectorAll('.right-nav a').forEach(link => {
    link.addEventListener('click', function() {
        // Remove 'active' class from all links
        document.querySelectorAll('.right-nav a').forEach(link => link.classList.remove('active'));

        // Add 'active' class to the clicked link
        this.classList.add('active');
    });
});


document.querySelectorAll('.right-nav a').forEach(link => {
    link.addEventListener('click', function() {
        // Remove 'active' class from all links
        document.querySelectorAll('.right-nav a').forEach(link => link.classList.remove('active'));

        // Add 'active' class to the clicked link
        this.classList.add('active');
    });
});

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    
    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }else{
            reveals[i].classList.remove('active');

        }
    }

}

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.container');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentIndex = sections.length;
    while(--currentIndex && window.scrollY + 50 < sections[currentIndex].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove('active'));
    navLinks[currentIndex].classList.add('active');
});
