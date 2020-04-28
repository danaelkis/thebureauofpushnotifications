const allButtons=[
  // arrange all buttons in time order
  {
    text: 'Do you Love me?',
    text1: 'Accept',
    x: 100,
    y: 120,
    time: 5,
  },
  {
 text: 'this is where is the text',
    text1: 'this is where you click',
    x: 10,
    y: 20,
    time: 10,
  },
  {
 text: 'this is where is the text',
    text1: 'this is where you click',
    x: 100,
    y: 200,
    time: 10,
  },
  {
 text: 'this is where is the text',
    text1: 'this is where you click',
    x: 10,
    y: 20,
    time: 15,
  },
  {
 text: 'this is where is the text',
    text1: 'this is where you click',
    x: 10,
    y: 20,
    time: 22,
  },
  {
 text: 'this is where is the text',
    text1: 'this is where you click',
    x: 10,
    y: 20,
    time: 22,
  },

];
// remember how many buttons are active
let activeButtons=0;

function buttonClicked (element){
  // console.log('clicked!');
  // everytime button is clicked remove from counter and remove element
  activeButtons-=1;
  element.parentNode.removeChild(element);
  // if all buttons removed, play the video
  if (activeButtons===0)
  document.getElementById("myVideo").play();
}

function addButton (btn){
  // create a new button with text,x,y
  // pause the video and add to registry
  document.getElementById("myVideo").pause();
  activeButtons+=1;

  const n_wrapper = document.createElement("div");
  const n_body = document.createElement("div");
  const n_button = document.createElement("div");

  n_wrapper.className="notification";
  n_body.className="notification__body";
  n_button.className="notification__button";

  n_wrapper.style.top=btn.y+"px";
  n_wrapper.style.left=btn.x+"px";
  //https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp

  n_body.innerText=btn.text;
  n_button.innerText=btn.text1;

  n_button.onclick= ()=>buttonClicked(n_wrapper);

  n_wrapper.appendChild(n_body);
  n_wrapper.appendChild(n_button);
  document.body.appendChild(n_wrapper);
}

// autostart video

function init() {

  var overlay = document.getElementById( 'overlay' );
  			overlay.remove();


setTimeout(function(){document.getElementById("myVideo").play()},100);


setInterval(function(){
  // get time of video every X ms
  const currentTime=document.getElementById("myVideo").currentTime;
  // console.log(currentTime);
  allButtons.forEach(button=>{
    // iterate over all the buttons to see if they need to be triggered
    if (!button.played && currentTime-0.300<button.time && currentTime+0.300>button.time){
      addButton(button);
      // set button to trigger only once
      button.played=true;

      // allButtons.shift();
    }
  })
},500)
}


window.onload = function (){
  var startButton = document.getElementById( 'startButton' );
  		startButton.addEventListener( 'click', init );
}


// setTimeout(function(){document.getElementById("myVideo").play()},100);
//
//
// setInterval(function(){
//   // get time of video every X ms
//   const currentTime=document.getElementById("myVideo").currentTime;
//   // console.log(currentTime);
//   allButtons.forEach(button=>{
//     // iterate over all the buttons to see if they need to be triggered
//     if (!button.played && currentTime-0.300<button.time && currentTime+0.300>button.time){
//       addButton(button);
//       // set button to trigger only once
//       button.played=true;
//
//       // allButtons.shift();
//     }
//   })
// },500)


// TODO: change this
// example of adding buttons
// setTimeout(()=>addButton('test',100,100),7000);
// setTimeout(()=>addButton('test2',50,20),15000);
// setTimeout(()=>addButton('test3',200,200),16000);
// setTimeout(()=>addButton('test4',200,10),25000);

/*
function addButton (text,x,y){
  // create a new button with text,x,y
  // pause the video and add to registry
  document.getElementById("myVideo").pause();
  activeButtons+=1;
  const el = document.createElement("div");
  el.className="myButton";
  el.onclick= ()=>buttonClicked(el);
  el.innerText=text;
  el.style.top=y+"px";
  el.style.left=x+"px";
  document.body.appendChild(el);
}
*/
