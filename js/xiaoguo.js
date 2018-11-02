window.onscroll = function  () {
	let tiao = document.querySelector(".tiaozi");
	let top = document.documentElement.scrollTop;
console.log(tiao);
console.log(top);
	if (top>600) {
		tiao.style.top = "0";
		setTimeout(function  () {
			tiao.style.transition = "all 0s";
		},30)
	} else{
		tiao.style.top = "-100px";
		setTimeout(function  () {
			tiao.style.transition = "all 1s";
		},30)
	}
}

/*let aside = document.querySelectorAll(".dahezi>div");
let floor = document.querySelectorAll(".cebian li");

floor.forEach(function  (val,index) {
	if (top>1500&&top<1980) {
		floor[index].style.background = "lightcoral";
	} else{
		
	}
	
	
	val.onclick = function  () {
		var a = aside[index].offsetTop;
		
		console.log(a);
		document.documentElement.scrollTop = a;
		console.log(document.documentElement.scrollTop);
//		aside[index].style.transition: "all 0.6s";
	}
	val.onmouseover = function  () {
		floor[index].style.background = "lightcoral";
	}
	val.onmouseout = function  () {
		floor[index].style.background = "";
	}
})*/






var imgList = document.querySelectorAll(".gundongtu .bannertu li");
var yuanList = document.querySelectorAll(".gundongtu .diankuang li");
var leftButton = document.querySelector(".gundongtu .zuojiantou");
var rightButton = document.querySelector(".gundongtu .youjiantou");
var box = document.querySelector(".gundongtu");
var n = 0;
var move = function() {
	if(n > 4) {
		n = 0;
	} else if(n < 0) {
		n = 4;
	}
	imgList.forEach(function(val, index) {
		val.style.opacity = 0;
		yuanList[index].style.background = "black";

	});

	imgList[n].style.opacity = 1;
	yuanList[n].style.background = "gainsboro";

}
var time = setInterval(function() {
	move();
	n++;
}, 2000);
box.onmouseover = function() {
	clearInterval(time);
}
box.onmouseout = function() {
	time = setInterval(function() {
		move();
		n++;
	}, 2000);
}
leftButton.onclick = function() {

	move();
	n--;
}
rightButton.onclick = function() {

	move();
	n++;
}
yuanList.forEach(function(val, index) {
	yuanList[index].onclick = function() {
		n = index;
		move();

	}
});


/*var imgList1 = document.querySelector(".billboardII .lunbo");
console.log(imgList1);
var yuanList1 = document.querySelectorAll(".billboardII .game-down .game-point li span");
console.log(yuanList1);
var leftBut = document.querySelector(".billboardII .ds1");
console.log(leftBut);
var rightBut = document.querySelector(".billboardII .ds2");
console.log(rightBut);
var box1 = document.querySelector(".lunbo");
console.log(box1);
var a = 0;

var move1 = function  () {
	if (a<0) {
		a= 0;
		return;
	}if (a>yuanList1.length -1) {
		a = yuanList1.length - 1;
		return;
	}
	imgList1.style.left = -a*390+"px";
	yuanList1.forEach(function  (val,index) {
		yuanList1[index].style.background = "#b0b0b0";
		yuanList1[index].style.border = "2px solid #f5f5f5";
	});
		yuanList1[a].style.background = "#ffffff";
		yuanList1[a].style.border = "3px solid #ff0000";
}
	leftBut.onclick = function(){
		a--;
		move1();
	};
	rightBut.onclick = function(){
		a++;
		move1();
	};
yuanList1.forEach(function(val, index) {
	val.onmouseover  = function() {
		
		a = index;
		move1();

	}
});*/

let a = 0;
$(".billboardII .ds1").click(function(){
	a--;
	move1();
	
});
$(".billboardII .ds2").click(function(){
	a++;
	move1();
	
});
 var t=setInterval(function(){
  a++;
  move1();
 },2000);
function move1(){
	$(".billboardII .game-down .game-point li span").css("background","white");
	$($(".billboardII .game-down .game-point li span")[a]).css("background","white");
	$(".lunbo").animate({
		left:-a*390+"px"
	},1000);
	if (a==3) {
		a=0;
		$($(".billboardII .game-down .game-point li span")[0]).css("background","white");
		$(".lunbo").animate({
			left:-a*390+"px"
		},0);
	}/* else if(n==0){
		n=3;
		$(".tu").animate({
			left:-4*300+"px"
		},0);
	} */
}



let imgList2 = document.querySelector(".billboardIII .sale-big1 ");
console.log(imgList2);
let yuanList2 = document.querySelectorAll(".billboardIII .game-down1 .game-point1 li span");
console.log(yuanList2);
var box2 = document.querySelector(".sale-big");
console.log(box2);
var b = 0;

var move3 = function  () {
	if (b<0) {
		b= 0;
		return;
	}if (b>yuanList2.length -1) {
		b = yuanList2.length - 1;
		return;
	}
	imgList2.style.left = -b*390+"px";
	yuanList2.forEach(function  (val,index) {
		yuanList2[index].style.background = "#b0b0b0";
		yuanList2[index].style.border = "2px solid #f5f5f5";
	});
		yuanList2[b].style.background = "#ffffff";
		yuanList2[b].style.border = "3px solid #ff0000";
}

yuanList2.forEach(function(val, index) {
	val.onmouseover  = function() {
		
		b = index;
		move3();

	}
});

let flag = true;
$(".cebian li").click(function(){
	flag = false;
	let index = $(".cebian li").index(this);
	let bottomNum = $(".dahezi>div").eq(index).offset().top;
	console.log(bottomNum);
	$(".cebian li").eq(index).css("background","red").siblings().css("background","white");
	$("html,body").animate({
		scrollTop:bottomNum
	},500,function(){
		flag = true;
	});
	$(window).scroll(function(){
		if (flag) {
					let scrTop = $(window).scrollTop();
		for (let i=0;i<$(".cebian li").length;i++) {
			let min = $(".dahezi>div").eq(i).offset().top;
			let max = min + $(".dahezi>div").eq(i).outerHeight();
			if (scrTop>=min && scrTop<max) {
				$(".cebian li").eq(i).css("background","red").siblings().css("background","white");
			}
		}
		}

	});
	
});
