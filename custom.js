var image = document.getElementById('product');
var imageImg=document.getElementById('img');
var span=document.getElementById('ind')
image.addEventListener("mousemove", (event)=>{
	// let x= event.clientX*0.3;
	// let y= event.clientY*0.3;

	let x=event.clientX-image.offsetLeft;
	let y=event.clientY-image.offsetTop;
	let realX, realY;
	const width= image.offsetWidth;
	const height= image.offsetHeight;
	realX = (width/2-x)*0.5 ;
	realY = (width/2-y)*0.5;
	console.log(`x is ${realX}`);
	console.log(realY);
	imageImg.style.transform='scale(3) translate(' +(realX+192)+'px , '+(realY)+'px )';

	// all for indicator

	
});
image.addEventListener("mouseleave", (event)=>{
	imageImg.style.transform='none';
});