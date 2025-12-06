var points=[{x:0,y:100},{x:0,y:0},{x:20,y:-30},{x:50,y:0},{x:20,y:20},{x:50,y:80},{x:50,y:-30},{x:20,y:-30},{x:0,y:-50}];
var con,i,widh,height,direct,range,size
function line(){	
			var x
			if(direct){
				x=width/2+size*points[i].x;
			}else{
				x=width/2-size*points[i].x;
			}
			var y=height/2-size*(points[i].y-40);
			if(i==0){
				con.moveTo(x,y);
			}else{
				con.lineTo(x,y);
			}
}
function half(){
			for(i=0;i<points.length;i++){
				line();
			}
}
function change(){
			size=range.value/20;
			con.clearRect(0,0,width,height);
			con.beginPath();
			direct=true;
			half();
			direct=false;
			half();
			con.stroke();
}
function start_den_Dreizack(){
			var can=document.getElementById("my-screen");
			con=can.getContext("2d");print("----")
			width=can.width;
			height=can.height;
			range=document.getElementById("range");
			change();		
}