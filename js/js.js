

// Her defineres animationer

    var rightItem = document.getElementById('item1');
    var tog = document.getElementById('tog');
    var hotlinebillede2 = document.getElementById('hotlinebillede2');

    ;
    (function() {

      var throttle = function(type, name, obj) {
        var obj = obj || window;
        var running = false;
        var func = function() {
          if (running) {
            return;
          }
          running = true;
          requestAnimationFrame(function() {
            obj.dispatchEvent(new CustomEvent(name));
            running = false;
          });
        };
        obj.addEventListener(type, func);
      };

      throttle("scroll", "optimizedScroll");
    })();

    window.addEventListener("optimizedScroll", function() {
      
      // pigens skygge
      rightItem.style.transform = "rotate(-" + window.pageYOffset / 23 + "deg)";
      // tog
      tog.style.transform = "translate(-" + window.pageYOffset * 3.4 + "px)";
      // hotline
      hotlinebillede2.style.transform = "rotate(" + window.pageYOffset / 3 + "deg)";
    })

// Her er indstillingerne for AOS library

    AOS.init({
        offset: 400,
        duration: 1000
      });

    
// Her er indstillingerne for Parallax library

    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);


// Autoplay audio 1

let options = {
  root: null,
  rootMargin:'0px',
  threshold:1.0
};

let callback = (entries, observer)=>{
  entries.forEach(entry => {
    if(entry.target.id == 'myAudio'){

      if(entry.isIntersecting){
        entry.target.play();
      }
      else{
        entry.target.pause();
      }
    }
    
  });
}


let observer = new IntersectionObserver(callback,options);
observer.observe(document.querySelector('#myAudio'))

// audio 2

let options1 = {
  root: null,
  rootMargin:'0px',
  threshold:1.0
};

let callback1 = (entries, observer1)=>{
  entries.forEach(entry => {
    if(entry.target.id == 'myAudio1'){

      if(entry.isIntersecting){
        entry.target.play();
      }
      else{
        entry.target.pause();
      }
    }
    
  });
}

let observer1 = new IntersectionObserver(callback1,options1);
observer1.observe(document.querySelector('#myAudio1'))
