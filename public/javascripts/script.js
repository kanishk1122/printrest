let t =0;
let a =4;
let i=18;

function page1ani() {
    a =4
    t = 0; // Reset t before starting animations
    animation1();
    animation2();
    animation3();

  }


function animation1(){
    gsap.timeline()
         console.log(t+"2");
         if(a==4){
         gsap.from("#p1a1" ,{
 repeat: 10000000,  repeatDelay: i,
            opacity:0
         })
      gsap.from("#p1a1 p1" ,{
 repeat: 10000000,
   repeatDelay: i,
          y:100,
          opacity :0,
          delay:t+4,
          duration:0.5,
          stagger:0.2,
      })
      gsap.to("#p1a1 p1" ,{
 repeat: 10000000,  repeatDelay: i,

          y:-100,
          opacity :0,
          delay:t+7,
          duration:0.5,
          stagger:0.2,
      })
     
  
      gsap.from("#p1a1 #i1" ,{
 repeat: 10000000,  repeatDelay: i,

          y:100,
          opacity :0,
          delay:0.8+t,
          duration:1.5,
          stagger:0.2,
      })
      gsap.to("#p1a1 #i1" ,{
 repeat: 10000000,  repeatDelay: i,

          y:-100,
          opacity :0,
          delay:4+t,
          duration:0.5,
          stagger:0.2,
      })
      gsap.from("#p1a1 #i2" ,{
 repeat: 10000000,  repeatDelay: i,

          y:100,
          opacity :0,
          delay:1.5+t,
          duration:0.5,
          stagger:0.2,
      })
      gsap.to("#p1a1 #i2" ,{
 repeat: 10000000,  repeatDelay: i,

          y:-100,
          opacity :0,
          delay:5+t,
          duration:0.5,
          stagger:0.2,
      })
      gsap.from("#p1a1 #i3" ,{
 repeat: 10000000,  repeatDelay: i,

          y:100,
          opacity :0,
          delay:2.5+t,
          duration:0.5,
          stagger:0.2,
      })
      gsap.to("#p1a1 #i3" ,{
 repeat: 10000000,  repeatDelay: i,

          y:-100,
          opacity :0,
          delay:6+t,
          duration:0.5,
          stagger:0.2,
      })
      gsap.from("#p1a1 #i4" ,{
 repeat: 10000000,  repeatDelay: i,

          y:100,
          opacity :0,
          delay:3.5+t,
          duration:0.5,
          stagger:0.2,
      })
      gsap.to("#p1a1 #i4" ,{
 repeat: 10000000,  repeatDelay: i,

          y:-100,
          opacity :0,
          delay:7+t,
          duration:0.5,
          stagger:0.2,
      })
      gsap.from("#p1a1 #i5" ,{
 repeat: 10000000,  repeatDelay: i,

          y:100,
          opacity :0,
          delay:4.5+t,
          duration:0.5,
          stagger:0.2,
      })
      gsap.to("#p1a1 #i5" ,{
 repeat: 10000000,  repeatDelay: i,

          y:-100,
          opacity :0,
          delay:8+t,
          duration:0.5,
          stagger:0.2,
      })
      gsap.from("#p1a1 #i6" ,{
 repeat: 10000000,  repeatDelay: i,

          y:100,
          opacity :0,
          delay:5.5+t,
          duration:0.5,
          stagger:0.2,
      })
      gsap.to("#p1a1 #i6" ,{
 repeat: 10000000,  repeatDelay: i,

          y:-100,
          opacity :0,
          delay:9+t,
          duration:0.5,
          stagger:0.2,
          
      })
      gsap.to("#p1a1" ,{
 repeat: 10000000,  repeatDelay: i,
        opacity:1
      })
     
    
     }
     else{
        animation2()
        animation3()
     }
     
     a+=1;
     console.log(t)
     t+=7.5;
    }


  
 
    function animation2(){
        gsap.timeline()
             console.log(t+"2")
             if(a==5){
             gsap.from("#p1a2" ,{
 repeat: 10000000,  repeatDelay: i,
                opacity:0
             })
             gsap.from("#p1a2 h1" ,{
                repeat: 10000000,
                  repeatDelay: i,
                         y:100,
                         opacity :0,
                         delay:t,
                         duration:0.5,
                         stagger:0.2,
                     })
                     gsap.to("#p1a2 h1" ,{
                repeat: 10000000,  repeatDelay: i,
               
                         y:-100,
                         opacity :0,
                         delay:6+9,
                         duration:0.5,
                         stagger:0.2,
                     })
                    
      
          gsap.from("#p1a2 #i1" ,{
 repeat: 10000000,  repeatDelay: i,
 
              y:100,
              opacity :0,
              delay:0.8+t,
              duration:0.5,
              stagger:0.2,
          })
          gsap.to("#p1a2 #i1" ,{
 repeat: 10000000,  repeatDelay: i,
 
              y:-100,
              opacity :0,
              delay:4+t,
              duration:0.5,
              stagger:0.2,
          })
          gsap.from("#p1a2 #i2" ,{
 repeat: 10000000,  repeatDelay: i,
 
              y:200,
              opacity :0,
              delay:1.5+t,
              duration:1,
              stagger:0.2,
          })
          gsap.to("#p1a2 #i2" ,{
 repeat: 10000000,  repeatDelay: i,
 
              y:-300,
              opacity :0,
              delay:5+t,
              duration:0.5,
              stagger:0.2,
          })
          gsap.from("#p1a2 #i3" ,{
 repeat: 10000000,  repeatDelay: i,
 
              y:100,
              opacity :0,
              delay:2.5+t,
              duration:1,
              stagger:0.2,
          })
          gsap.to("#p1a2 #i3" ,{
 repeat: 10000000,  repeatDelay: i,
 
              y:-100,
              opacity :0,
              delay:6+t,
              duration:0.5,
              stagger:0.2,
          })
          gsap.from("#p1a2 #i4" ,{
 repeat: 10000000,  repeatDelay: i,
 
              y:100,
              opacity :0,
              delay:3.5+t,
              duration:0.5,
              stagger:0.2,
          })
          gsap.to("#p1a2 #i4" ,{
 repeat: 10000000,  repeatDelay: i,
 
              y:-100,
              opacity :0,
              delay:7+t,
              duration:0.5,
              stagger:0.2,
          })
          gsap.from("#p1a2 #i5" ,{
 repeat: 10000000,  repeatDelay: i,
 
              y:100,
              opacity :0,
              delay:4.5+t,
              duration:0.5,
              stagger:0.2,
          })
          gsap.to("#p1a2 #i5" ,{
 repeat: 10000000,  repeatDelay: i,
 
              y:-100,
              opacity :0,
              delay:8+t,
              duration:0.5,
              stagger:0.2,
          })
          gsap.from("#p1a2 #i6" ,{
 repeat: 10000000,  repeatDelay: i,
 
              y:100,
              opacity :0,
              delay:5.5+t,
              duration:0.5,
              stagger:0.2,
          })
          gsap.to("#p1a2 #i6" ,{
 repeat: 10000000,  repeatDelay: i,
 
              y:-100,
              opacity :0,
              delay:9+t,
              duration:0.5,
              stagger:0.2,
              
          })
          gsap.to("#p1a2" ,{
 repeat: 10000000,  repeatDelay: i,
            opacity:1
          })
          
        
       
         
         
        }
        else{
            animation3()
            animation1()
        }
        a+=1;
        t+=7.5
    }

        
        function animation3(){
            
                 console.log(t+"3")
                 if(a==6){
                 gsap.from("#p1a3" ,{
   
                    opacity:1
                 })
                 gsap.from("#p1a3 h1" ,{
                    repeat: 10000000,
                      repeatDelay: i,
                             y:100,
                             opacity :0,
                             delay:t,
                             duration:0.5,
                             stagger:0.2,
                         })
                         gsap.to("#p1a3 h1" ,{
                    repeat: 10000000,  repeatDelay: i,
                   
                             y:-100,
                             opacity :0,
                             delay:t+8,
                             duration:0.5,
                             stagger:0.2,
                         })
                        
                            
              gsap.from("#p1a3 #i1" ,{
   
     
                  y:100,
                  opacity :0,
                  delay:0.8+t,
                  duration:0.5,
                  stagger:0.2,
              })
              gsap.to("#p1a3 #i1" ,{
   
     
                  y:-100,
                  opacity :0,
                  delay:4+t,
                  duration:0.5,
                  stagger:0.2,
              })
              gsap.from("#p1a3 #i2" ,{
   
     
                  y:100,
                  opacity :0,
                  delay:1.5+t,
                  duration:0.5,
                  stagger:0.2,
              })
              gsap.to("#p1a3 #i2" ,{
   
     
                  y:-100,
                  opacity :0,
                  delay:5+t,
                  duration:0.5,
                  stagger:0.2,
              })
              gsap.from("#p1a3 #i3" ,{
   
     
                  y:100,
                  opacity :0,
                  delay:2.5+t,
                  duration:0.5,
                  stagger:0.2,
              })
              gsap.to("#p1a3 #i3" ,{
   
     
                  y:-100,
                  opacity :0,
                  delay:6+t,
                  duration:0.5,
                  stagger:0.2,
              })
              gsap.from("#p1a3 #i4" ,{
   
     
                  y:100,
                  opacity :0,
                  delay:3.5+t,
                  duration:0.5,
                  stagger:0.2,
              })
              gsap.to("#p1a3 #i4" ,{
   
     
                  y:-100,
                  opacity :0,
                  delay:7+t,
                  duration:0.5,
                  stagger:0.2,
              })
              gsap.from("#p1a3 #i5" ,{
   
     
                  y:100,
                  opacity :0,
                  delay:4.5+t,
                  duration:0.5,
                  stagger:0.2,
              })
              gsap.to("#p1a3 #i5" ,{
   
     
                  y:-100,
                  opacity :0,
                  delay:8+t,
                  duration:0.5,
                  stagger:0.2,
              })
              gsap.from("#p1a3 #i6" ,{
   
     
                  y:100,
                  opacity :0,
                  delay:5.5+t,
                  duration:0.5,
                  stagger:0.2,
              })
              gsap.to("#p1a3 #i6" ,{
   
     
                  y:-100,
                  opacity :0,
                  delay:9+t,
                  duration:0.5,
                  stagger:0.2,
                  
              })
              gsap.to("#p1a3" ,{
   
                opacity:1
              })
             
            
             
             
             
            }
            else{
                animation1()
                animation2()
            }
            a=4;
            t=0
        }
            
             
             
 

page1ani()
window.addEventListener("reset",()=>{
    page1ani()
})

gsap.from("#boble", {
    duration: 1.5,
    y: 10,
    repeat: -1,
    yoyo: true
});
gsap.to("#boble", {
    duration: 1.5,
    y: -10,
    repeat: -1,
    yoyo: true
});

var pa2a=document.querySelector("#page2")
var image =document.getElementsByClassName("your-element")



VanillaTilt.init(image, {

    max: 20,
    speed: 400,
    reverse: true,

});

function loginpageactive(event) {
  
    // Fetch content of loginp.ejs
    fetch('/login')
        .then(response => response.text())
        .then(html => {
            // Insert fetched HTML into loginContent div
            document.getElementById("loginContent").innerHTML = html;
        })
        .catch(error => {
            console.error('Error fetching login page:', error);
        });
};
loginpageactive()
var loginbtn =document.getElementById("loginbtn");
var login = document.getElementById("login");
var logincon =document.getElementById("loginContent");
let r=0;
loginbtn.addEventListener("click",()=>{
    login.style.scale=1;
    login.style.opacity=1;
    
    logincon.style.opacity=1;
    r+=1

})

login.addEventListener("click",()=>{

    login.style.scale=0;
    login.style.opacity=0;
    
    logincon.style.opacity=0;
    r-=1
    
})
document.getElementById("cancle").addEventListener("click",()=>{

    login.style.scale=0;
    login.style.opacity=0;
    
    logincon.style.opacity=0;
    r-=1
    
})
