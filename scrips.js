let getmenuIcon=document.querySelector(".menu");
let getList=document.querySelector(".list")
let getLayout=document.querySelector(".layout")
let getcloseIcon=document.querySelector(".close")
getmenuIcon.onclick=(e)=>{
	getList.style.top="0";
	getcloseIcon.style.display="block";
	getLayout.classList.add("show")
	getcloseIcon.onclick=()=>{
		getList.style.top="-100%";
	getcloseIcon.style.display="none";
	getLayout.classList.remove("show")
	}
	getLayout.onclick=(e)=>{
		if(e.target.id=="layout"){
		getList.style.top="-100%";
	getcloseIcon.style.display="none";
	getLayout.classList.remove("show")		}
	}
}

let arrImg=[
"images/desktop-image-hero-1.jpg",
"images/desktop-image-hero-2.jpg",
"images/desktop-image-hero-3.jpg"
]
let getbtnLeft=document.querySelector("#btn__left")
let getbtnRight=document.querySelector("#btn__right")
let getleftContainer=document.querySelector(".left")
/*slide*/
let getClick=document.querySelector(".click");


let i=0;
getbtnLeft.onclick=()=>{
	i--;
	if(i<0){
	i=2;	
	}
	getleftContainer.style.backgroundImage="url("+arrImg[i]+")";	
}
getbtnRight.onclick=()=>{
	i++;
	if(i>=arrImg.length){
	i=0;	
	}
	getleftContainer.style.backgroundImage="url("+arrImg[i]+")";	
}

	// getleftContainer.style.backgroundImage="url("+arrImg[i]+")";
