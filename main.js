const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - scrollY - 10)+"px; left: " + (e.pageX - 10) + "px;");

    // document.querySelectorAll(".imgs").forEach(function(move){

    //   var moveVal = move.getAttribute("data-speed");
    //   var x = (e.clientX * moveVal) / 150;
    //   var y = (e.clientY * moveVal) / 150;

    //   move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";

    //   console.log(x);

    // });
})

document.querySelector(".tagline").addEventListener("mouseover", mouseOverTag);
document.querySelector(".tagline").addEventListener("mouseout", mouseOutTag);
document.querySelector(".navbar .menu .abo").addEventListener("click", about);
document.querySelector(".navbar .menu .pro").addEventListener("click", projects);
document.querySelector(".logo").addEventListener("click", home);
document.querySelector(".circleText").addEventListener("mouseover", mouseOverFast);
document.querySelector(".circleText").addEventListener("mouseout", mouseOutSlow);
document.querySelector(".burgerMenu").addEventListener("click", burgerMenu);
document.querySelector(".burgAbo").addEventListener("click", about);
document.querySelector(".burgPro").addEventListener("click", projects);

function burgerMenu(){
  
  var burgerMenu = document.querySelector(".burgerMenu");
  burgerMenu.classList.toggle("openBurger");

  var burgerMenuContent = document.querySelector(".burgerMenuContent");
  burgerMenuContent.classList.toggle("openBurgerMenuContent");



  console.log("success")

}

function mouseOverFast(){
  document.querySelector(".cText").style.animation = "rotation 3s infinite linear";
}

function mouseOutSlow(){
  document.querySelector(".cText").style.animation = "rotation 10s infinite linear";

}

// document.querySelectorAll(".projects .container img").forEach(function(gray){
//     gray.style.filter = "grayscale()";
//     gray.style.transform = "scale(1)";
// })

// document.querySelectorAll(".projects .container img").forEach(function(colored){
//   colored.style.filter = "none";
//   colored.style.transform = "scale(1.3)";
// })


document.querySelector(".projects .container .image0 img").addEventListener("mouseover", mouseOverColor0);
document.querySelector(".projects .container .image0 img").addEventListener("mouseout", mouseOutColor0);

document.querySelector(".projects .container .image1 img").addEventListener("mouseover", mouseOverColor1);
document.querySelector(".projects .container .image1 img").addEventListener("mouseout", mouseOutColor1);

document.querySelector(".projects .container .image2 img").addEventListener("mouseover", mouseOverColor2);
document.querySelector(".projects .container .image2 img").addEventListener("mouseout", mouseOutColor2);

document.querySelector(".projects .container .image3 img").addEventListener("mouseover", mouseOverColor3);
document.querySelector(".projects .container .image3 img").addEventListener("mouseout", mouseOutColor3);

document.querySelector(".projects .container .image4 img").addEventListener("mouseover", mouseOverColor4);
document.querySelector(".projects .container .image4 img").addEventListener("mouseout", mouseOutColor4);

document.querySelector(".projects .container .image5 img").addEventListener("mouseover", mouseOverColor5);
document.querySelector(".projects .container .image5 img").addEventListener("mouseout", mouseOutColor5);

document.querySelector(".projects .container .image6 img").addEventListener("mouseover", mouseOverColor6);
document.querySelector(".projects .container .image6 img").addEventListener("mouseout", mouseOutColor6);

document.querySelector(".projects .container .image7 img").addEventListener("mouseover", mouseOverColor7);
document.querySelector(".projects .container .image7 img").addEventListener("mouseout", mouseOutColor7);

document.querySelector(".projects .container .image8 img").addEventListener("mouseover", mouseOverColor8);
document.querySelector(".projects .container .image8 img").addEventListener("mouseout", mouseOutColor8);

document.querySelector(".projects .container .image9 img").addEventListener("mouseover", mouseOverColor9);
document.querySelector(".projects .container .image9 img").addEventListener("mouseout", mouseOutColor9);

document.querySelector(".projects .container .image10 img").addEventListener("mouseover", mouseOverColor10);
document.querySelector(".projects .container .image10 img").addEventListener("mouseout", mouseOutColor10);

document.querySelector(".projects .container .image11 img").addEventListener("mouseover", mouseOverColor11);
document.querySelector(".projects .container .image11 img").addEventListener("mouseout", mouseOutColor11);

document.querySelector(".projects .container .image12 img").addEventListener("mouseover", mouseOverColor12);
document.querySelector(".projects .container .image12 img").addEventListener("mouseout", mouseOutColor12);

// window.addEventListener('scroll', parallax);


// function parallax(){

//   const target = document.querySelector(".hero");
//   const target2 = document.querySelector(".container");
//   const child1 = target.children[0];
//   const child2 = target.children[1];
//   const child3 = target.children[2];
//   const child4 = target.children[3];
//   const child5 = target.children[4];

//   const img1 = target2.children[0];
//   const img2 = target2.children[1];
//   const img3 = target2.children[2];
//   const img4 = target2.children[3];
//   const img5 = target2.children[4];
//   const img6 = target2.children[5];
//   const img7 = target2.children[6];
//   const img8 = target2.children[7];
//   const img9 = target2.children[8];
//   const img10 = target2.children[9];
//   const img11 = target2.children[10];
//   const img12 = target2.children[11];
  

//   var scrolled = window.pageYOffset;
//   var rate = scrolled * - 0.35;

//   document.querySelector(".hero").style.zIndex = "-10";
//   child1.style.transform ='translateY('+rate* 5+'px)';
//   child2.style.transform ='translateY('+rate* 4 +'px)';
//   child3.style.transform ='translateY('+rate* 3 +'px)';
//   child4.style.transform ='translateY('+rate* 2 +'px)';
//   child5.style.transform ='translateY('+rate* 1 +'px)';

//   img1.style.transform ='translate3d(0px, '+rate* 1 +'px, 0px)';
//   img2.style.transform ='translate3d(0px, '+rate* 2 +'px, 0px)';
//   img3.style.transform ='translate3d(0px, '+rate* 1 +'px, 0px)';
//   img4.style.transform ='translate3d(0px, '+rate* 2 +'px, 0px)';
//   img5.style.transform ='translate3d(0px, '+rate* 1 +'px, 0px)';
//   img6.style.transform ='translate3d(0px, '+rate* 2 +'px, 0px)';
//   img7.style.transform ='translate3d(0px, '+rate* 1 +'px, 0px)';
//   img8.style.transform ='translate3d(0px, '+rate* 2 +'px, 0px)';
//   img9.style.transform ='translate3d(0px, '+rate* 1 +'px, 0px)';
//   img10.style.transform ='translate3d(0px, '+rate* 2 +'px, 0px)';
//   img11.style.transform ='translate3d(0px, '+rate* 1 +'px, 0px)';
//   img12.style.transform ='translate3d(0px, '+rate* 2 +'px, 0px)';
  

  

//   console.log(rate);
// }

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting){
        entry.target.classList.add('show');
      }
      else {
        entry.target.classList.remove('show')
      }
    })
})

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting){
      entry.target.classList.add('fade');
    }
    else {
      entry.target.classList.remove('fade')
    }
  })
})



const hiddenElements = document.querySelectorAll('.text');
hiddenElements.forEach((el) => observer.observe(el));

const hiddenElements2 = document.querySelectorAll('.imgs');
hiddenElements2.forEach((el) => observer2.observe(el));



let fonts = ['Courier New', 'Franklin Gothic Medium', 'Gill Sans', 'Arial', 'Verdana', 'Tahoma', 'Trebuchet MS', 'Times New Roman', 'Georgia', 'Garamond','Brush Script MT']

function FontPicker(min, max){
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2) + min;

  return result;

}

function mouseOverColor0(){
  document.querySelector(".projects .container .image0 img").style.filter = "none";
  document.querySelector(".projects .container .image0 img").style.transform = "scale(1.3)";
}

function mouseOutColor0(){
  document.querySelector(".projects .container .image0 img").style.filter = "grayscale()";
  document.querySelector(".projects .container .image0 img").style.transform = "scale(1)";
}

function mouseOverColor1(){
  document.querySelector(".projects .container .image1 img").style.filter = "none";
  document.querySelector(".projects .container .image1 img").style.transform = "scale(1.3)";
}

function mouseOutColor1(){
  document.querySelector(".projects .container .image1 img").style.filter = "grayscale()";
  document.querySelector(".projects .container .image1 img").style.transform = "scale(1)";
}

function mouseOverColor2(){
  document.querySelector(".projects .container .image2 img").style.filter = "none";
  document.querySelector(".projects .container .image2 img").style.transform = "scale(1.3)";
}

function mouseOutColor2(){
  document.querySelector(".projects .container .image2 img").style.filter = "grayscale()";
  document.querySelector(".projects .container .image2 img").style.transform = "scale(1)";
}

function mouseOverColor3(){
  document.querySelector(".projects .container .image3 img").style.filter = "none";
  document.querySelector(".projects .container .image3 img").style.transform = "scale(1.3)";
}

function mouseOutColor3(){
  document.querySelector(".projects .container .image3 img").style.filter = "grayscale()";
  document.querySelector(".projects .container .image3 img").style.transform = "scale(1)";
}

function mouseOverColor4(){
  document.querySelector(".projects .container .image4 img").style.filter = "none";
  document.querySelector(".projects .container .image4 img").style.transform = "scale(1.3)";
}

function mouseOutColor4(){
  document.querySelector(".projects .container .image4 img").style.filter = "grayscale()";
  document.querySelector(".projects .container .image4 img").style.transform = "scale(1)";
}

function mouseOverColor5(){
  document.querySelector(".projects .container .image5 img").style.filter = "none";
  document.querySelector(".projects .container .image5 img").style.transform = "scale(1.3)";
}

function mouseOutColor5(){
  document.querySelector(".projects .container .image5 img").style.filter = "grayscale()";
  document.querySelector(".projects .container .image5 img").style.transform = "scale(1)";
}

function mouseOverColor6(){
  document.querySelector(".projects .container .image6 img").style.filter = "none";
  document.querySelector(".projects .container .image6 img").style.transform = "scale(1.3)";
}

function mouseOutColor6(){
  document.querySelector(".projects .container .image6 img").style.filter = "grayscale()";
  document.querySelector(".projects .container .image6 img").style.transform = "scale(1)";
}

function mouseOverColor7(){
  document.querySelector(".projects .container .image7 img").style.filter = "none";
  document.querySelector(".projects .container .image7 img").style.transform = "scale(1.3)";
}

function mouseOutColor7(){
  document.querySelector(".projects .container .image7 img").style.filter = "grayscale()";
  document.querySelector(".projects .container .image7 img").style.transform = "scale(1)";
}

function mouseOverColor8(){
  document.querySelector(".projects .container .image8 img").style.filter = "none";
  document.querySelector(".projects .container .image8 img").style.transform = "scale(1.3)";
}

function mouseOutColor8(){
  document.querySelector(".projects .container .image8 img").style.filter = "grayscale()";
  document.querySelector(".projects .container .image8 img").style.transform = "scale(1)";
}

function mouseOverColor9(){
  document.querySelector(".projects .container .image9 img").style.filter = "none";
  document.querySelector(".projects .container .image9 img").style.transform = "scale(1.3)";
}

function mouseOutColor9(){
  document.querySelector(".projects .container .image9 img").style.filter = "grayscale()";
  document.querySelector(".projects .container .image9 img").style.transform = "scale(1)";
}

function mouseOverColor10(){
  document.querySelector(".projects .container .image10 img").style.filter = "none";
  document.querySelector(".projects .container .image10 img").style.transform = "scale(1.3)";
}

function mouseOutColor10(){
  document.querySelector(".projects .container .image10 img").style.filter = "grayscale()";
  document.querySelector(".projects .container .image10 img").style.transform = "scale(1)";
}

function mouseOverColor11(){
  document.querySelector(".projects .container .image11 img").style.filter = "none";
  document.querySelector(".projects .container .image11 img").style.transform = "scale(1.3)";
}

function mouseOutColor11(){
  document.querySelector(".projects .container .image11 img").style.filter = "grayscale()";
  document.querySelector(".projects .container .image11 img").style.transform = "scale(1)";
}

function mouseOverColor12(){
  document.querySelector(".projects .container .image12 img").style.filter = "none";
  document.querySelector(".projects .container .image12 img").style.transform = "scale(1.3)";
}

function mouseOutColor12(){
  document.querySelector(".projects .container .image12 img").style.filter = "grayscale()";
  document.querySelector(".projects .container .image12 img").style.transform = "scale(1)";
}



function home(){
  document.querySelector(".hero").style.display = "block";
  document.querySelector(".about").style.display = "none";
  document.querySelector(".projects").style.display = "none";
  document.querySelector(".circleText").style.display = "block";
}

function about(){
  console.log("about");
  document.querySelector(".hero").style.display = "none";
  document.querySelector(".about").style.display = "flex";
  document.querySelector(".projects").style.display = "none";
  document.querySelector(".circleText").style.display = "none";

  var burgerMenu = document.querySelector(".burgerMenu");
  burgerMenu.classList.toggle("openBurger");

  var burgerMenuContent = document.querySelector(".burgerMenuContent");
  burgerMenuContent.classList.toggle("openBurgerMenuContent")
}
function projects(){
  console.log("projects");
  document.querySelector(".hero").style.display = "none";
  document.querySelector(".about").style.display = "none";
  document.querySelector(".projects").style.display = "block";
  document.querySelector(".circleText").style.display = "none";

  var burgerMenu = document.querySelector(".burgerMenu");
  burgerMenu.classList.toggle("openBurger");

  var burgerMenuContent = document.querySelector(".burgerMenuContent");
  burgerMenuContent.classList.toggle("openBurgerMenuContent")
}


function mouseOverTag() {
    let index = FontPicker(0, fonts.length-1);
    document.querySelector(".tagline").style.fontFamily = String(fonts[index]);
  }

  function mouseOutTag() {
    let index = FontPicker(0, fonts.length-1);
    document.querySelector(".tagline").style.fontFamily = String(fonts[index]);
  }

  // particles


  // tooltip


  // circle animation
 
  const cText = document.querySelector('.cText p');
  cText.innerHTML = cText.innerText.split("").map(
    (char, i) => 
    `<span style="transform:rotate(${i * 6.4}deg)">${char}</span>`).join("");



    // burger menu

    // $(document).ready(function(){
    //   $('burgerMenu').click(function(){
    //     $(this).toggleClass('open');
    //   });
    // });