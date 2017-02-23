var oBox=document.getElementsByClassName('file');
			console.log(oBox)
			for(var i=0;i<oBox.lenght;i++){
				Darget('oBox[i]')
			}
function Darget(oBox){///不会做
				oBox.addEventListener('mousedown',fnDown);
				
				function fnDown(e){
					var disx=e.pageX-this.offsetLeft;//这里的this就是oBox
					var dixy=e.pageY-this.offsetTop;//这里的this就是oBox
					document.addEventListener('mousemove',fnMove);
					document.addEventListener('mouseup',fnUp);
					e.preventDefault();
				
				function fnMove(e){
					var l=e.pageX-disx;
					var t=e.pageY-dixy;
					if(l<0){
						l=0;
					}else if(l>document.documentElement.clientWidth-oBox.clientWidth){
						l=document.documentElement.clientWidth-oBox.clientWidth;
					}
					if(t<0){
						t=0;
					}else if(t>document.documentElement.clientHeight-oBox.clientHeight){
						t=document.documentElement.clientHeight-oBox.clientHeight;
					}
					
						oBox.style.left=l+'px';
						oBox.style.top=t+'px';
				}
				function fnUp(e){
						document.removeEventListener('mousemove',fnMove);
						document.removeEventListener('mouseup',fnUp);
				}
			}	
				
}			