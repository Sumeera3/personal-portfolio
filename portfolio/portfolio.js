document.getElementById('About');
document.getElementById('btn2');
document.getElementById('btn1');
let clicked=true;
    var typed = new Typed('#element', {
      strings: ['<i><strong>WEB DESIGNER</strong><\i>', '<i><strong>WEB DEVELOPER</strong><\i>',],
      typeSpeed: 50,
    });
    function about()
    {

        About.innerHTML="<div>Hey there! I'm SYED SUMEERA, currently a dedicated student at GIST College. My journey revolves around the pursuit of knowledge, and I thrive on learning new skills that fuel my curiosity and passion for growth.<br><br>As a student, I'm deeply engaged in exploring various subjects at GIST College, honing my academic skills, and cultivating a mindset of continuous learning. My enthusiasm extends beyond the classroom, where I actively seek opportunities to apply my knowledge and gain hands-on experience.<br><br>One of my key interests is undertaking internships that align with my academic pursuits. I am eager to contribute my skills and learn from real-world experiences. Whether it's in web development or related areas, I am excited about the prospect of applying classroom knowledge to practical scenarios.<br><br>I am currently on the lookout for internship opportunities that allow me to blend my academic knowledge with practical applications. If you have exciting internship prospects or share a passion for WEB DEVELOPMENT, let's connect and explore the possibilities together.<br><br>Thanks for taking the time to get to know me—I'm eager to embark on new learning adventures and contribute to meaningful projects!</div>";
        About.style.display="flex";
        if(clicked){
            About.style.display="flex";
            btn1.innerText="Close";
            clicked=false; 
        }
        else{
            About.style.display="none";
            btn1.innerText="About Me";
            clicked=true; 
        }

    }
   

