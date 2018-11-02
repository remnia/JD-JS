/*秒杀滚动*/
let imgList3 = document.querySelector(".miaosha2wai .miaosha2");
console.log(imgList3);
/*let yuanList1 = document.querySelectorAll(".billboardII .game-down .game-point li span");
console.log(yuanList1);*/
var leftBut1 = document.querySelector(".miaosha2wai .ds11");
console.log(leftBut1);
var rightBut1 = document.querySelector(".miaosha2wai .ds21");
console.log(rightBut1);
var box3 = document.querySelector(".miaosha2");
console.log(box3);
var c = 0;

var move2 = function  () {
	if (c<0) {
		c= 0;
		return;
	}if (c>1) {
		c=1;
		return;
	}/*if (a>yuanList1.length -1) {
		a = yuanList1.length - 1;
		return;
	}*/
	imgList3.style.left = -c*800+"px";
/*	yuanList1.forEach(function  (val,index) {
		yuanList1[index].style.background = "#b0b0b0";
		yuanList1[index].style.border = "2px solid #f5f5f5";
	});
		yuanList1[a].style.background = "#ffffff";
		yuanList1[a].style.border = "3px solid #ff0000";*/
}
	leftBut1.onclick = function(){
		c--;
		move2();
	};
	rightBut1.onclick = function(){
		c++;
		move2();
	};
/*yuanList1.forEach(function(val, index) {
	val.onmouseover  = function() {
		
		a = index;
		move1();

	}
});*/
/*右方轮播*/
/*let imgBox4 = document.querySelector(".miaosha3 .youbiantu");
console.log(imgBox4);
let yuanList4 = document.querySelectorAll(".miaosha3 .game-down2 .game-point2 li span");
console.log(yuanList4);
let box4 = document.querySelector(".miaosha3");
console.log(box4);
let n4 = 0;
let flag4 = true;

yuanList4.forEach(function (val, index) {
	val.onmouseover = function(){
		if (index == 0 && n==2) {
			n= 0;
		}else if(index==1 && n==1){
			n=1;
		}else{
			n = index+1;
		}
		move4();
	}
});
box4.onmouseover = function() {
	clearInterval(time4);
}
box4.onmouseout = function() {
	time4 = setInterval(function() {
		n4++;
		move4();
	}, 1000);
}


var time4 = setInterval(function() {
	n4++;
	move4();
}, 2000);
function move4 () {
		yuanList4.forEach(function(val,index){
		val.style.background = "#fff";
	});
	imgBox4.style.transition = 'all 1s';
	imgBox4.style.left = -n4 * 200 + "px";
	if (n4 == 0) {
		yuanList4[0].style.background = "orange";
	}else if(n4 == 2){
		yuanList4[0].style.background = "orange";
	}else{
		yuanList4[n4-1].style.background = "orange";
	}
}
imgBox4.addEventListener("transitionend", function() {
	if(n4 ==2) {
		n4 = 0;
		imgBox4.style.transition = 'all 1s';
		imgBox4.style.left = -0 * 200 + "px";
	}
	if(n4 >2) {
		n4 = 0;
		imgBox4.style.transition = 'all 1s';
		imgBox4.style.left = -0 * 200 + "px";
	}
	flag4 = true;
});
*/
let n4 = 1;
 var t=setInterval(function(){
  n4++;
  move6();
 },2000);
function move6(){
	$(".youbiantu").animate({
		left:-n4*200+"px"
	},1000);
	if (n4==2) {
		n4=0;
		$(".youbiantu").animate({
			left:-n4*200+"px"
		},0);
	}
}



/*let n5 = 1;
 var t1=setInterval(function(){
  n5++;
  move6();
 },2000);
function move6(){
	$(".lunbo").animate({
		left:-n4*390+"px"
	},1000);
	if (n5==3) {
		n5=0;
		$(".lunbo").animate({
			left:-n5*390+"px"
		},0);
	}
}
*/




/**/
let itemList = document.querySelectorAll(".billboard .dakuang .billboard3");
console.log(itemList);
let hengList = document.querySelectorAll(".billboard .billboard2 .ranksel");
console.log(hengList);
let e = 0;
console.log(e);

var move5 = function() {
	if(e > 4) {
		e = 0;
	} else if(e < 0) {
		e = 4;
	}
	itemList.forEach(function(val, index) {
		val.style.opacity = 0;
	});

	itemList[e].style.opacity = 1;


}
hengList.forEach(function(val, index) {
	val.onmouseover  = function() {		
		e = index;
		move5();

	}
});

		let time8 = setInterval(function() {
			let nowTime = new Date().getTime();
			console.log(nowTime)
			let futureTime = new Date(2018, 11, 4, 8, 0, 0).getTime();
			console.log(futureTime)
			let differ = futureTime - nowTime;
			console.log(differ)
			let hours = Math.floor(differ / 1000 / 60 / 60);
			let mins = Math.floor((differ - hours * 60 * 60 * 1000) / 1000 / 60);
			let seconds = Math.floor((differ - hours * 60 * 60 * 1000 - mins * 60 * 1000) / 1000);
			console.log(hours, mins, seconds)
			document.querySelector(" .blackbox1 span").innerHTML = hours >= 10 ? hours : "0" + hours;
			document.querySelector(" .blackbox2 span").innerHTML = mins >= 10 ? mins : "0" + mins;
			document.querySelector(" .blackbox3 span").innerHTML = seconds >= 10 ? seconds : "0" + seconds;
		}, 1000);