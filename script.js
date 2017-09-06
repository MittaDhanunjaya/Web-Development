var start=new Date().getTime();
function randomColor(){
    var letter='0123456789ABCDEF'.split('');
    var color='#';
for(var i=0;i<6;i++){
    color+=letter[Math.floor(Math.random()*16)];
    }
    return color;
    }
function makeShapeAppear(){
    var top=Math.random()*300;
    var left=Math.random()*800;
    var width=(Math.random()*300)+100;
 
    if(Math.random()>0.5){
        document.getElementById("shape").style.borderRadius="50%";
        }else{
            document.getElementById("shape").style.borderRadius="0%";
	        }
				
	document.getElementById("shape").style.backgroundColor=randomColor();
    document.getElementById("shape").style.top=top +"px"
    document.getElementById("shape").style.left=left +"px"
    document.getElementById("shape").style.display="block";
	document.getElementById("shape").style.width=width +"px";
	document.getElementById("shape").style.height=width +"px";
	start=new Date().getTime();
     }
function appearAfterTime(){
    setTimeout(makeShapeAppear,Math.random()*2000);
     }
appearAfterTime();
document.getElementById("shape").onclick=function(){
    var end=new Date().getTime();
    document.getElementById("shape").style.display="none";
    var Time=(end-start)/1000;
    document.getElementById("timeTaken").innerHTML=Time +"s";
    appearAfterTime();
    }