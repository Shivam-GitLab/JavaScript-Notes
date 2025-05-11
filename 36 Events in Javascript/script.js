// 1. Way
// document.getElementById('owl').onclick = function(){
//     alert("owl clicked")
// }

// 2. Way
// document.getElementById('owl').addEventListener('click', function(){
//     alert("owl clicked again");
// })

// 3. Way
// document.getElementById("owl").addEventListener("click", function (e) {
//   console.log(e);
// });

// attachEvent()
// jQuery - on

// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode

// 4. Way
document.getElementById("images").addEventListener(
  "click",
  function (e) {
    console.log("clicked inside the ul");
  },
  false
);

document.getElementById("owl").addEventListener(
  "click",
  function (e) {
    console.log("owl clicked");
    // e.stopPropagation();
  },
  false
);

document.getElementById('google').addEventListener('click',function(e){
    e.preventDefault();
    e.stopPropagation();
    console.log("google clicked");
}, false)

document.querySelector("#images").addEventListener("click", function (e) {
  console.log(e.target.tagName);
//   removeIt.parentNode.removeChild(removeIt)
  if (e.target.tagName === "IMG") {
    console.log(e.target.id);
    let removeIt = e.target.parentNode;
    removeIt.remove();
  }
});


