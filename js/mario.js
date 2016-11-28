window.onload=function(){
    var documentWidth = document.documentElement.clientWidth;
    var documentHeight = document.documentElement.clientHeight;
    var box = document.getElementById('box');
    var wrap = document.getElementById('wrap');
    var wall = document.getElementsByClassName('wall');
    var left = document.getElementById('left');
    var right = document.getElementById('right');
    var leftSpans = left.getElementsByTagName('span');
    var rightSpans = right.getElementsByTagName('span');
    var startShow = document.getElementById('start-show');
    var bag = document.getElementById('bag');
    var pic = document.getElementById('pic');
    var load = document.getElementById('load');
    var bg = document.getElementById('bg');
    var logo = document.getElementById('logo');
    var loadSpans = load.getElementsByTagName('span');
    var nav = document.getElementById('nav');
    var line = nav.getElementsByClassName('line');
    // var navShow = document.getElementById('nav-show');
    // var navAll = document.getElementById('navAll');
    // var navAllLis = navAll.getElementsByTagName('li');
    var where1 = document.getElementById('where1');
    var where2 = document.getElementById('where2');
    var textLine = document.getElementsByClassName('text-line');
    var sha = document.getElementById('sha');
    var girl = document.getElementById('girl');
    var sunshine = document.getElementById('sunshine');
    var mount = document.getElementById('mount');
    var sunshinePic = document.getElementById('sunshine-pic');
    var build = document.getElementsByClassName('build');
    var can = document.getElementById('can');
    var sayLis = document.getElementById('say-pic').getElementsByTagName('li');
    var onOff=false;
    var num=0;
    var n=0;

    // 鍏冪礌瀹介珮鑷€傚簲锛�
    changeSize();
    window.onresize=function(){
        changeSize();
    }
    function changeSize(){
        var documentWidth = document.documentElement.clientWidth;
        var documentHeight = document.documentElement.clientHeight;
        box.style.width=documentWidth+'px';
        box.style.height=documentHeight*2+'px';
        wrap.style.height=startShow.style.height=documentHeight+'px';
    }
    box.style.top=-documentHeight+'px';

    wall[2].style.cssText='transform:translateZ(-'+documentWidth+'px) rotateY(180deg);'
    
    // 鍒氬紑濮嬪睍绀洪〉鏁堟灉
    // 鍥炬爣鏀惧ぇ
    setTimeout(function(){
        startShow.style.display='block';
    },30)
    setTimeout(function(){
        bag.style.transform='scale(2)';
        wrap.style.display='block';
    },60)
    //logo鍥剧墖鏄剧ず
    setTimeout(function(){
        pic.style.display='block';
    },600)
    //logo鍥剧墖绉诲埌鍚堥€備綅缃�
    setTimeout(function(){
        pic.style.transform='translate(-50%,90%)'
    },620)
    //鍦嗚儗鏅浘娑堝け
    setTimeout(function(){
        $("#bg").fadeOut("normal");
    },1100)
    //loading鏁堟灉鏄剧ず
    setTimeout(function(){
        $("#load").fadeIn("slow");
        load.style.transform='rotate(720deg)'
    },2000)
    //loading鐐稿紑锛屽浘鐗囧嚭鐜伴槾褰�
    
    setTimeout(function(){
        for(var i=0;i<loadSpans.length;i++){
            var numT=-(Math.random()*(2-(Math.random()*5))*(200-100)+100);
            var numL=-(Math.random()*(2-(Math.random()*5))*(500-100)+100);
            logo.style.boxShadow='0px 0px 15px 1px #ffefc6';
            loadSpans[i].style.transform='translate('+numL+'px,'+numT+'px) scale(2.5)';
        }
    },4800)
    //棣栭〉灞曠ず椤典笅绉伙紝鏀瑰彉top鍊�
    var off=false;
    setTimeout(function(){
        mtween(box,'top',0,500,'easeBoth');
        off=true;
    },5300)
    
    //绗竴椤靛紑濮嬪瓧骞曚笂
    setTimeout(function(){
    // 绗竴椤�
    var p1 = textLine[0].getElementsByTagName('p');
    var p2 = textLine[1].getElementsByTagName('p');
    var p3 = textLine[2].getElementsByTagName('p');
    var p4 = textLine[3].getElementsByTagName('p');
    var array=['你好，我是苗萌!一个敢挑战敢创新的小伙子','1985年11月05日的这一天我喜气洋洋的诞生在一个优美的小村庄','随着年龄的增长，开始了自己的网络之旅，热衷于各种各样的图形色彩样式设计','毕业期间酷爱网站设计，于是走上了一条幸福的不归路_']
    function fn(who){
        var str='';
        for(var i=0;i<who.length;i++){
            str+='<p>'+who[i]+'</p>'
        }
        return str;
    }
    
    textLine[0].innerHTML=fn(array[0]);
    textLine[1].innerHTML=fn(array[1]);
    textLine[2].innerHTML=fn(array[2]);
    textLine[3].innerHTML=fn(array[3]);
    var num=0;
    var n=0;
    var m=0;
    var t=0;
        // if(off){
            mtween(right,'right',50,500,'easeBoth');
            mtween(nav,'right',50,500,'easeBoth');
            var timer=setInterval(function(){
                if(num>=p1.length){
                    p2[n].style.display='block';
                    n++;
                    if(n>=p2.length){
                        num=0;
                    }
                }else if(n>=p2.length){
                    p3[m].style.display='block';
                    m++;
                    if(m>=p3.length){
                        n=0;
                    }
                }else if(m>=p3.length){

                    if(t>=p4.length-1){
                        clearInterval(timer);
                    }
                    p4[t].style.display='block';
                    t++;
                    var pL=textLine[3].children[p4.length-1].offsetLeft;
                    var pT=textLine[3].children[p4.length-1].offsetTop;
                }else{
                    p1[num].style.display='block';
                    num++;
                }
            },90);
            setInterval(function(){
                mtween(p4[p4.length-1],'opacity',0,100,'linear',function(){
                    mtween(p4[p4.length-1],'opacity',1,100,'linear')
                })
            },400) 

            // 灏忕悆
        
            var canvas = document.getElementById('canvas');
            var context = canvas.getContext('2d'); 
            canvas.width=1500;
            canvas.height=555;

            function change(){
                 for(var i=0;i<arr.length;i++){
                     arr[i].x+=arr[i].vx+(Math.random()*3);
                     arr[i].y+=arr[i].vy;
                     arr[i].vy+=arr[i].g;
                     if(arr[i].y>canvas.height-arr[i].r){
                         arr[i].y=canvas.height-arr[i].r;
                         arr[i].vy=-arr[i].vy*0.6;

                     }
                 }
            }

            function render(con){
              con.clearRect(0,0,canvas.width,canvas.height);
                 for(var i=0;i<arr.length;i++){
                     con.fillStyle=arr[i].color;
                     con.beginPath();
                     con.arc(arr[i].x,arr[i].y,arr[i].r,0,Math.PI*2);
                     con.closePath();
                     con.fill();
                 }
             
            }
            var arr=[];
            for(var i=0;i<100;i++){
                 var data={
                     x:610+Math.random()*50+30,
                     y:205+Math.random()*30,
                     r:Math.random()+1,
                     g:Math.random()+0.3,
                     vx:Math.pow(1,Math.ceil(Math.random()*1000))*4,
                     vy:1,
                     color:'#848484'
                 }
                 arr.push(data);
            }
             
            setTimeout(function(){
                var timer3=setInterval(function(){
                    render(context);
                    change();
                },30);
                // 娌欑敾鍑虹幇
                
            },9800)
            setTimeout(function(){
                mtween(sha,'width',690,2000,'linear');
            },3000)
            setTimeout(function(){
                mtween(girl,'opacity',1,500,'linear',function(){
                    var h=-1;
                    var timerGirl=setInterval(function(){
                        h++;
                        var l=h%2+1;
                        girl.style.background='url(img/girl'+l+'.png) no-repeat';
                        var gT=girl.offsetTop;
                        var gL=girl.offsetLeft;
                        gT-=8;
                        gL-=8;
						//console.log(gT);
                        if(gL<315){
                            gL+=30;
                        }
                        if(gT<=-10){
                            clearInterval(timerGirl);
                        }
                        girl.style.left=gL+'px';
                        girl.style.top=gT+'px';
                    },600)
                });
            },5000);
            setTimeout(function(){
                mtween(sunshine,'opacity',1,3000,'linear',function(){
                    mtween(build[0],'height',291,500,'linear',function(){
                        mtween(build[1],'height',224,500,'linear',function(){
                            mtween(build[2],'height',190,500,'linear',function(){
                                mtween(build[3],'height',327,500,'linear');
                            })
                        })
                    })
                });
            },8000)
        // }
          
    },5600)


    // 榧犳爣绉诲叆宸﹀彸鎸夐挳
    
    right.onmouseover=function(){
        mtween(where2,'right',70,100,'easeBoth');
        where2.innerHTML=wall[Math.abs(num)/90+1].getAttribute('call');
    }
    right.onmouseout=function(){
        mtween(where2,'right',-150,100,'easeBoth');
    }
    left.onmouseover=function(){
        mtween(where1,'left',40,100,'easeBoth');
        console.log(num);
        where1.innerHTML=wall[Math.abs(num)/90-1].getAttribute('call');
    }
    left.onmouseout=function(){
        mtween(where1,'left',-150,100,'easeBoth');
    }
    // 鐐瑰嚮鍙虫寜閽�
    
    right.onclick=function(){
        hide('90deg','-90deg','0','0','19px','-19px','5px','center','center');
        clickBtn(-90,Math.abs(num)>(wall.length-3)*90,right,left)

    }
    // 鐐瑰嚮宸︽寜閽�
    left.onclick=function(){
        hide('90deg','-90deg','0','0','19px','-19px','5px','center','center');
        clickBtn(90,Math.abs(num)==90,left,right)
    }

    // 鐐瑰嚮鍑芥暟
    function clickBtn(a,b,c,d){
        setTimeout(function(){
            right.style.right=-500+'px';
            left.style.left=-500+'px';
            mtween(nav,'right',-80,100,'bounceOut');
        },500)
        setTimeout(function(){
            num+=a;
            if(num!=0){
                can.style.display='none';
            }
            if(b){
                //console.log(num);
                c.style.display='none';
            }
            wrap.style.transform='rotateY('+num+'deg)'
            d.style.display='block';
        },1100)
        setTimeout(function(){
            hide('45deg','-45deg','45deg','-45deg','0','0','0','0','19px');
            right.style.right=50+'px';
            left.style.left=50+'px';
            mtween(nav,'right',50,100,'bounceIn');
        },2000)
    }
    // 鎸夐挳娑堝け
    function hide(a,b,c,d,e,f,g,h,i){
        leftSpans[0].style.cssText='transform:rotate('+a+') translate('+e+',0);tasnform-origin:'+h+' '+i+''
        leftSpans[1].style.cssText='transform:rotate('+b+') translate('+e+',0);tasnform-origin:'+h+' '+i+''
        rightSpans[0].style.cssText='transform:rotate('+c+') translate('+g+','+e+');tasnform-origin:42px 19px'
        rightSpans[1].style.cssText='transform:rotate('+d+') translate('+g+','+f+');tasnform-origin:42px 19px'
    }
    // 鐐瑰嚮nav
    var menu = document.getElementById('menu');
    var isClick=true;
    nav.onclick=function(){
        //console.log(isClick);
        if(isClick){
            line[0].style.transform='translate(0,20px) rotate(180deg)';
            line[2].style.transform='translate(0,18px) rotate(180deg)';
            setTimeout(function(){
                line[0].style.transform='translate(0,20px) rotate(405deg)';
                line[2].style.transform='translate(0,18px) rotate(-405deg)';
                line[1].style.display='none';
                mtween(menu,'right',110,900,'linear');
            },200)
            isClick=false;
        }else{
            line[0].style.transform='  rotate(180deg)';
            line[2].style.transform='  rotate(-180deg)';
            line[1].style.display='block';
            setTimeout(function(){
                line[0].style.transform='translate(0,10px) rotate(180deg)';
                line[2].style.transform='translate(0,30px) rotate(180deg)';
                mtween(menu,'right',-9999,900,'linear');
            },300)
            isClick=true;
        }
    }

    // 绗簩椤�
    var hand = document.getElementById('hand');
    var dot = document.getElementById('dot');
    var area = document.getElementsByClassName('area');
    var areaText = document.getElementsByClassName('area-text');
    var explain =document.getElementsByClassName('explain');
    var littleM = document.getElementsByClassName('littleM');
    var liHeight = ['0.9','0.85','0.8','0.75','0.65','0.60','0.5','0.3']
    var liStatus=true;
    // 閾冮摏鐐瑰嚮
    hand.onclick=function(){
        shake(dot,'left',15);
        if(liStatus){
            mtween(area[0],'height',250*liHeight[0],300,'linear');
            mtween(area[1],'height',250*liHeight[1],300,'linear');
            mtween(area[2],'height',250*liHeight[2],300,'linear');
            mtween(area[3],'height',250*liHeight[3],300,'linear');
            mtween(area[4],'height',250*liHeight[4],300,'linear');
            mtween(area[5],'height',250*liHeight[5],300,'linear');
            mtween(area[6],'height',250*liHeight[6],300,'linear');
            mtween(area[7],'height',250*liHeight[7],300,'linear',function(){
                $('.area-text').fadeIn('slow');
            });
            setTimeout(function(){
                for(var i=0;i<littleM.length;i++){
                    mtween(littleM[i],'marginTop',-150,100,'linear',function(){
                        mtween(littleM[0],'marginTop',250*liHeight[0]-40,300,'linear');
                        mtween(littleM[1],'marginTop',250*liHeight[1]-40,300,'linear');
                        mtween(littleM[2],'marginTop',250*liHeight[2]-40,300,'linear');
                        mtween(littleM[3],'marginTop',250*liHeight[3]-40,300,'linear');
                        mtween(littleM[4],'marginTop',250*liHeight[4]-40,300,'linear');
                        mtween(littleM[5],'marginTop',250*liHeight[5]-40,300,'linear');
                        mtween(littleM[6],'marginTop',250*liHeight[6]-40,300,'linear');
                        mtween(littleM[7],'marginTop',250*liHeight[7]-40,300,'linear');
                    });
                }
            },100)

            liStatus=false;
            // 鏌辩姸鍥鹃紶鏍囩Щ鍏�
            for(var i=0;i<sayLis.length;i++){
                sayLis[i].index=i;
                sayLis[i].onmouseover=function(){
                    explain[this.index].style.display='block';
                    this.style.cssText='width:85px;marginLeft:0;'
                }
                sayLis[i].onmouseout=function(){
                    explain[this.index].style.display='none';
                    this.style.cssText='width:75px;marginLeft:10px;'
                }
            }
        }else{
            for(var i=0;i<littleM.length;i++){
                mtween(littleM[i],'marginTop',-150,200,'linear',function(){
                    for(var i=0;i<littleM.length;i++){
                        mtween(littleM[i],'marginTop',-50,100,'linear');
                    }
                });
            }
           
            for(var i=0;i<area.length;i++){
                mtween(area[i],'height',50,300,'linear',function(){
                    $('.area-text').fadeOut('fast');
                });
            }

            liStatus=true;
            for(var i=0;i<sayLis.length;i++){
                sayLis[i].index=i;
                sayLis[i].onmouseover=function(){
                    explain[this.index].style.display='none';
                }
                
            }
        }
    }

    

    // skill 鎸夐挳
    
            var ski = document.getElementById('ski');
            var li = ski.getElementsByTagName('li');
            var prev = document.getElementById('prev');
            var next = document.getElementById('next');
            var arr=[];
            for(var i=0;i<li.length;i++){
                var oSpan = li[i].children[0];
                arr[i]={left:getStyle(li[i],'left'),opacity:getStyle(li[i],'opacity'),transform:getStyle(li[i],'transform'),zIndex: getStyle(li[i],'z-index'),alpha:getStyle(oSpan,'opacity')};
            }
            prev.onclick=function(){
                arr.unshift(arr.pop());
                data.unshift(data.pop());
                toStyle();
            }
            next.onclick=function(){  
                arr.push(arr.shift());
                data.push(data.shift());
                toStyle();
            }
            function toStyle(){
                for(var i=0;i<li.length;i++){
                    var oSpan = li[i].children[0];
                    li[i].style.left=arr[i].left;
                    li[i].style.opacity=arr[i].opacity;
                    li[i].style.transform=arr[i].transform;
                    li[i].style.zIndex=arr[i].zIndex;
                    oSpan.style.opacity=arr[i].alpha;
                }
                for(var i=0;i<cloudLi.length;i++){
                    cloudLi[i].innerHTML=data[0][i];
                } 
            }
        
        function getStyle(obj,attr){
            if(obj.currentStyle){
                return obj.currentStyle[attr];
            }else{
                return getComputedStyle(obj)[attr];
            }
        }
    
        // mario寮熷紵
        var mariodd = document.getElementById('mariodd');
        var cloud = document.getElementById('cloud');
        var str2 = '';
            var num5 = 0;
            for(var i = 0;i < 100; i++){
                if(i%10 == 0){
                    num5++;
                }
                str2 = str2 + '<div style="left:'+(i%10)*13+'px;top:'+(num5-1)*20+'px;background:url(img/dd.png);background-position:'+-(i%10)*13+'px '+-(num5-1)*20+'px;"></div>';
            }
            mariodd.innerHTML = str2;
            var marioddTimer=setInterval(function(){
                mtween(mariodd,'top',-80,300,'linear',function(){
                    mtween(mariodd,'top',30,300,'linear')
                });
            },700)
            var div2 = mariodd.getElementsByTagName('div');
            mariodd.onmouseover=function(){
                clearInterval(marioddTimer);
            }
            mariodd.onclick=function(){

                for(var i=0;i<div2.length;i++){
                    MT(div2[i],{
                        left:{
                            target:(0.5-Math.random())*500,
                            duration:1000,
                            fx:'linear'
                            
                        },
                        top:{
                            target:(0.5-Math.random())*500,
                            duration:1000,
                            fx:'linear'                         
                        }
                    },function(){
                        mariodd.style.display='none';
                        setTimeout(function(){
                            cloud.style.transform='rotateX(0)';
                        },200)
                    });
                }
            }

    //console.log(data[0].html[0]);
    // 浜戦噷闈㈢殑鏂囧瓧绠€浠嬪垵濮嬪寲
    
    var cloudLi = cloud.getElementsByTagName('li');
    for(var i=0;i<cloudLi.length;i++){
        cloudLi[i].innerHTML=data[0][i];
    }        
    // 绗笁椤�
    var list = document.getElementById('list');
    var listLi = list.getElementsByTagName('li');
    var scroll = document.getElementById('scroll');
    var scrollSpan = scroll.getElementsByTagName('span')[0];
    var myProject = document.getElementById('my-project');
    setTimeout(function(){
        var HH=scroll.offsetHeight/(list.offsetHeight/myProject.offsetHeight);
        console.log(scroll.offsetHeight,list.offsetHeight,myProject.offsetHeight);
        if(myProject.offsetHeight/list.offsetHeight>1){
            HH=0;
        }else if(myProject.offsetHeight/list.offsetHeight<0.1){
            HH=20;
        }
        if(myProject.offsetHeight/list.offsetHeight<1){
             scroll.onmousewheel=list.onmousewheel=goScroll;
        }
        scrollSpan.style.height=HH+'px';
        scrollSpan.onmousedown=function(e){
            var boxHeight = scroll.offsetHeight;
            var box2Height = scrollSpan.offsetHeight;
            var pHeight = list.offsetHeight;
            var beginM = e.clientY-scrollSpan.offsetTop;
            document.onmousemove=function(e){
                var box2Top = scrollSpan.offsetTop;
                var T = e.clientY-beginM;
                if(T<0){
                    T=0;
                }else if(T>boxHeight-box2Height){
                    T=boxHeight-box2Height;
                }
                scrollSpan.style.top=T+'px';
                list.style.top=box2Top/(boxHeight-box2Height)*(scroll.clientHeight-list.offsetHeight)+'px';
            }
            document.onmouseup=function(){
                 document.onmousemove=null;
            }
            return false;
        }
       
        function goScroll(e){
            var onOff=true;
            if(e.wheelDelta){
                if(e.wheelDelta>0){
                    onOff=true;
                }else{
                    onOff=false;
                }
            }
            if(e.detail){
                if(e.detail>0){
                    onOff=false;
                }else{
                    onOff=true;
                }
            }
            var T;
            if(onOff){
                T=scrollSpan.offsetTop-10;
            }else{
                T=scrollSpan.offsetTop+10;
            }
            if(T<0){
                T=0;
            }else if(T>scroll.offsetHeight-scrollSpan.offsetHeight){
                T=scroll.offsetHeight-scrollSpan.offsetHeight;
            }
            scrollSpan.style.top=T+'px';
            list.style.top=scrollSpan.offsetTop/(scroll.offsetHeight-scrollSpan.offsetHeight)*(scroll.clientHeight-list.offsetHeight)+'px';
            return false;
        }

    },500)
    


    // li閲岄潰鐨勮儗鏅浘
    var number=-1;
    for(var i=0;i<listLi.length;i++){
        number++;
        listLi[i].style.background='url(img/pic/'+number+'.png)'
        listLi[i].style.backgroundSize='100% 100%'
    }
    var isay = document.getElementsByClassName('isay');
    for(var i=0;i<isay.length;i++){
        isay[i].innerHTML=spanText[i];
    }
    var listA = list.getElementsByTagName('a');
    for(var i=0;i<listA.length;i++){
        listA[i].href=href[i];
    }
    for(var i=0;i<listLi.length;i++){
        listLi[i].index=i;
        listLi[i].onmouseover=function(){
            console.log(this);
            this.style.cssText='box-shadow: 0 3px 8px 2px white;background-image:url(img/pic/'+this.index+'.png);backgroundSize:100% 100%;marginTop:0';
        }
        listLi[i].onmouseout=function(){
            this.style.cssText='box-shadow: 0 3px 6px 2px black;background-image:url(img/pic/'+this.index+'.png);backgroundSize:100% 100%;marginTop:4%';
        }
    }
    // 绗洓椤�
    var photoGo = document.getElementById('photoGo');
    var someOne=0;
    function autoPlay(){
        someOne++;
        if(someOne>2){
            someOne=0;
        }
    
        mtween(photoGo,'left','-'+someOne*276,1000,'linear')
    }
    
    timer5=setInterval(function(){
        autoPlay();
    },2000);

}       
        // leftSpans[0].style.cssText='transform:rotate(45deg) translate(0,0);tasnform-origin:0 19px'
        // leftSpans[1].style.cssText='transform:rotate(-45deg) translate(0,0);tasnform-origin:0 19px'
        // rightSpans[0].style.cssText='transform:rotate(45deg) translate(0,0);tasnform-origin:42px 19px'
        // rightSpans[1].style.cssText='transform:rotate(-45deg) translate(0,0);tasnform-origin:42px 19px'