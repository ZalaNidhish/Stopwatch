const bgSound = new Audio('start-13691.mp3');
const btnSound = new Audio('sound-1-167181.mp3');
const start = document.querySelector("#start");
const reset = document.querySelector("#reset");
const hrs = document.querySelector("#hrs");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");
const milisec = document.querySelector("#milisec");
const hero = document.querySelector(".hero");
const loader1= document.querySelector(".loader1");
const vol = document.querySelector(".symbol");
const criteria = document.querySelector(".criteria");
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var i = 0;
var v = 0;
var miliseconds = null;
var landscape;
setInterval(()=>{
    landscape = window.matchMedia("(orientation:landscape)").matches;
if(landscape==true){
    criteria.style.display = "none";
}
else if(landscape==false){
    criteria.style.display = "block";
    hero.style.display = "none";
    loader1.style.display = "none";
}
},100)




    vol.addEventListener("click",()=>{
        if(v==0){
            v=1;
            vol.innerHTML = `<img src="mute.png">`
        }
        else if(v==1){
            v=0;
            vol.innerHTML = `<img src="speaker.png">`
        }
    })
    
    setTimeout(()=>{
         hero.style.display = "flex";
         loader1.style.display = "none";
     },5000);
    
    
    start.addEventListener("click",()=>{
    
    if(v==0){btnSound.play();}
    
    if(i==0){
        i=1;
        start.innerHTML = `<h3>Pause</h3>`;
        reset.style.display = "none";
    
        miliseconds = setInterval(()=>{
            a++;
            if(a>60){
                a=0;
                milisec.innerHTML = `<h2>${a}</h2>`;
                b++;
                if(v==0){bgSound.play()};
                if(b>60){
                    b=0;
                    sec.innerHTML = `<h2>${b}</h2>`;
                    c++;
                    if(c>60){
                        c=0;
                        min.innerHTML = `<h2>${c}</h2>`;
                        d++;
                        hrs.innerHTML = `<h2>${d}</h2>`;
                    }
                    else(
                        min.innerHTML = `<h2>${c}</h2>`
                    )
                }
                else(
                    sec.innerHTML = `<h2>${b}</h2>`
                ) 
            }
            else(
                milisec.innerHTML = `<h2>${a}</h2>`
            )
        },15)
    }
    else if(i==1){
        i=0;
        // a = b = c = d =0;
        start.innerHTML = `<h3>Resume</h3>`;
        reset.style.display = "flex";
        // milisec.innerHTML = `<h2>${a}</h2>`;
        // sec.innerHTML = `<h2>${b}</h2>`;
        // min.innerHTML = `<h2>${a}</h2>`;
        // hrs.innerHTML = `<h2>${a}</h2>`;
        clearInterval(miliseconds);
        // clearInterval(seconds);
        // clearInterval(minutes);
        // clearInterval(hours);
    }
    }
    )
    
    reset.addEventListener("click",()=>{
        if(v==0){btnSound.play();}
        a = b = c = d = 0;
        milisec.innerHTML = `<h2>${a}</h2>`;
        sec.innerHTML = `<h2>${b}</h2>`;
        min.innerHTML = `<h2>${c}</h2>`;
        hrs.innerHTML = `<h2>${d}</h2>`;
        clearInterval(miliseconds);
        reset.style.display = "none";
        start.innerHTML = `<h3>Start</h3>`;
    })
    
    // start.addEventListener("click",function(e){
    //     let x = e.clientX - e.target.offsetLeft;
    //     let y = e.clientY - e.target.offsetTop;
    
    //     let ripples = document.createElement('span');
    //     ripples.style.left = x + "px";
    //     ripples.style.top = y + "px";
    //     this.appendChild(ripples);
    
    //     setTimeout(()=>{
    //         ripples.remove();
    //     },500)
    // })
