const allButtons=[
  // arrange all buttons in time order
  {
    text: 'Thats me, a push notification',
    text1: 'clear',
    x: 100,
    y: 120,
    time: 37,
    width: 500,
    height: 100,
    fonts: 'sans-serif',
    fontsize: 18,
  },
  {
 text: 'two thousand and three',
    text1: 'clear',
    x: 250,
    y: 600,
    time: 47,
    width: 500,
    height: 100,
    fonts: 'sans-serif',
    fontsize: 18,
  },
  {
  text: '2003',
     text1: 'clear',
     x: 120,
     y: 700,
     time: 47,
     width: 500,
     height: 100,
     fonts: 'Fugue',
     fontsize: 32,
   },

  {
 text: 'Push email was introduced by Blackberry in 2003. It is a method of having email received for a user on a server automatically forwarded to a mobile device.',
    text1: 'ok',
    x: 10,
    y: 20,
    time: 52,
    width: 500,
    width2: 500,
    fonts: 'Fugue',
  },
  {
 text: 'Do you remember your first kiss?',
    text1: 'clear',
    x: 10,
    y: 20,
    time: 72,
  },
  {
 text: 'Me',
    text1: 'clear',
    x: 10,
    y: 20,
    time: 118,
  },
  {
 text: 'me',
    text1: 'clear',
    x: 10,
    y: 20,
    time: 120,
  },
  {
 text: 'me',
    text1: 'clear',
    x: 10,
    y: 20,
    time: 122,
  },
  {
  text: 'Do you maybe remember 2013?',
     text1: 'mmmm',
     x: 10,
     y: 20,
     time: 124,
   },
   {
   text: 'The calCOPPA legistlation',
      text1: 'clear',
      x: 10,
      y: 20,
      time: 128,
    },
    {
    text: 'give me a second',
       text1: 'clear',
       x: 10,
       y: 20,
       time: 168,
     },
     {
     text: 'like this',
        text1: 'ignore',
        x: 10,
        y: 20,
        time: 200,
      },
      {
      text: 'and like this',
         text1: 'ignore',
         x: 10,
         y: 20,
         time: 200,
       },
       {
       text: 'and this',
          text1: 'ignore',
          x: 10,
          y: 20,
          time: 200,
        },
        {
        text: 'what about this?',
           text1: 'ignore',
           x: 10,
           y: 20,
           time: 200,
         },
         {
         text: 'something like this?',
            text1: 'ignore',
            x: 10,
            y: 20,
            time: 200,
          },
          {
          text: 'possibily THIS',
             text1: 'ignore',
             x: 10,
             y: 20,
             time: 200,
           },
           {
           text: 'lets just chill for a second',
              text1: 'clear',
              x: 10,
              y: 20,
              time: 207,
            },
            {
            text: 'lets take a deep breath',
               text1: 'clear',
               x: 10,
               y: 20,
               time: 208,
             },
             {
             text: 'Y',
                text1: 'clear',
                x: 10,
                y: 20,
                time: 234,
              },
              {
              text: 'O',
                 text1: 'clear',
                 x: 10,
                 y: 400,
                 time: 234,
               },
               {
               text: 'U',
                  text1: 'clear',
                  x: 10,
                  y: 800,
                  time: 234,
                },
                {
                text: 'dont know what to write',
                   text1: 'clear',
                   x: 10,
                   y: 20,
                   time: 261,
                 },
                 {
                 text: 'should i send you a push when the coronavirus is over?',
                    text1: 'clear',
                    x: 10,
                    y: 20,
                    time: 323,
                  },
                  {
                  text: 'should i send you a push when there is a new slot on amazon fresh?',
                     text1: 'clear',
                     x: 10,
                     y: 20,
                     time: 339,
                   },
                   {
                   text: 'feeling like you lost some weight?',
                      text1: 'clear',
                      x: 10,
                      y: 20,
                      time: 352,
                    },
                    {
                    text: 'a push',
                       text1: 'clear',
                       x: 10,
                       y: 20,
                       time: 359,
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

  n_body.style.width=btn.width+"px";
  n_body.style.height=btn.height+"px";
  n_button.style.width=btn.width+"px";

  n_body.style.fontFamily=btn.fonts;
  n_button.style.fontFamily=btn.fonts;

  n_body.style.fontSize=btn.fontsize+"px";
  n_button.style.fontSize=btn.fontsize+"px";

  // n_button.style.fontFamily=btn.fonts;



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
