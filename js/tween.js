function mtween(obj,attr,target,duration,form,text){
			
			clearInterval(obj.timer);
			var begin=parseFloat(getComputedStyle(obj)[attr]) ;
			//鎬昏窛绂�
			var count=target-begin;
			//鑺辫垂鎬绘椂闂�		
			var duration=duration;
			//寮€濮嬫椂闂�
			var startTime=new Date().getTime();
			
			
		 	obj.timer=setInterval(function(){
			//	鏃堕棿宸�
				time=new Date().getTime()-startTime;
				
				if(time > duration){
				//寮鸿灏嗗綋鏃堕棿宸�(杩愯鏃堕棿) = 鑺辫垂鎬绘椂闂�
				time = duration;
				clearInterval(obj.timer);
				}
				
				
				if(time==duration){
					clearInterval(obj.timer);
					if(typeof text=='function'){
						text();
					}
				}
				
				var value=Tween[form](time, begin, count, duration);
				//	鍏紡 :璧峰浣嶇疆  + (鍖€閫熷害 = 鎬昏窛绂� / 鑺辫垂鎬绘椂闂�) * 鏃堕棿宸�(杩愯鏃堕棿)
				
				if(attr=='opacity'){
					value=value
				}else{
					value=value+'px';
				}
					obj.style[attr]=value;
				
		
				
			},30);
			
}

	function shake(obj,attr,speed,callback){
        clearInterval(obj[attr]);
        speed = speed || 30; //缁欓粯璁ゅ€间负30
        var arr = [];
        //寰楀埌涓€鍫嗘璐熸暟
        for( var i = speed; i > 0; i-=2 ){
            arr.push(i,-i);
        }
        arr.push(0);
        var m = 0;
        var b = parseFloat(getComputedStyle(obj)[attr]);
        obj[attr] = setInterval(function (){
            obj.style[attr] = b + arr[m] + "px";
            m++;
            //鍒癿涓簂ength鐨勬椂鍊欙紝娓呴櫎瀹氭椂鍣�
            if( m === arr.length ){
                clearInterval(obj[attr]);
                (typeof callback === "function") && callback();
            };
        },30);

    }

/*
* t : time 宸茶繃鏃堕棿
* b : begin 璧峰鍊�
* c : count 鎬荤殑杩愬姩鍊�
* d : duration 鎸佺画鏃堕棿
*
* 鏇茬嚎鏂圭▼
*
* http://www.cnblogs.com/bluedream2009/archive/2010/06/19/1760909.html
* */

//Tween.linear();

var Tween = {
	linear: function (t, b, c, d){  //鍖€閫�
		return c*t/d + b;
	},
	easeIn: function(t, b, c, d){  //鍔犻€熸洸绾�
		return c*(t/=d)*t + b;
	},
	easeOut: function(t, b, c, d){  //鍑忛€熸洸绾�
		return -c *(t/=d)*(t-2) + b;
	},
	easeBoth: function(t, b, c, d){  //鍔犻€熷噺閫熸洸绾�
		if ((t/=d/2) < 1) {
			return c/2*t*t + b;
		}
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInStrong: function(t, b, c, d){  //鍔犲姞閫熸洸绾�
		return c*(t/=d)*t*t*t + b;
	},
	easeOutStrong: function(t, b, c, d){  //鍑忓噺閫熸洸绾�
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeBothStrong: function(t, b, c, d){  //鍔犲姞閫熷噺鍑忛€熸洸绾�
		if ((t/=d/2) < 1) {
			return c/2*t*t*t*t + b;
		}
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	elasticIn: function(t, b, c, d, a, p){  //姝ｅ鸡琛板噺鏇茬嚎锛堝脊鍔ㄦ笎鍏ワ級
		if (t === 0) { 
			return b; 
		}
		if ( (t /= d) == 1 ) {
			return b+c; 
		}
		if (!p) {
			p=d*0.3; 
		}
		if (!a || a < Math.abs(c)) {
			a = c; 
			var s = p/4;
		} else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	elasticOut: function(t, b, c, d, a, p){    //*姝ｅ鸡澧炲己鏇茬嚎锛堝脊鍔ㄦ笎鍑猴級
		if (t === 0) {
			return b;
		}
		if ( (t /= d) == 1 ) {
			return b+c;
		}
		if (!p) {
			p=d*0.3;
		}
		if (!a || a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},    
	elasticBoth: function(t, b, c, d, a, p){
		if (t === 0) {
			return b;
		}
		if ( (t /= d/2) == 2 ) {
			return b+c;
		}
		if (!p) {
			p = d*(0.3*1.5);
		}
		if ( !a || a < Math.abs(c) ) {
			a = c; 
			var s = p/4;
		}
		else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		if (t < 1) {
			return - 0.5*(a*Math.pow(2,10*(t-=1)) * 
					Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		}
		return a*Math.pow(2,-10*(t-=1)) * 
				Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
	},
	backIn: function(t, b, c, d, s){     //鍥為€€鍔犻€燂紙鍥為€€娓愬叆锛�
		if (typeof s == 'undefined') {
		   s = 1.70158;
		}
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	backOut: function(t, b, c, d, s){
		if (typeof s == 'undefined') {
			s = 3.70158;  //鍥炵缉鐨勮窛绂�
		}
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	}, 
	backBoth: function(t, b, c, d, s){
		if (typeof s == 'undefined') {
			s = 1.70158; 
		}
		if ((t /= d/2 ) < 1) {
			return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		}
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	bounceIn: function(t, b, c, d){    //寮圭悆鍑忔尟锛堝脊鐞冩笎鍑猴級
		return c - Tween['bounceOut'](d-t, 0, c, d) + b;
	},       
	bounceOut: function(t, b, c, d){//*
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
		}
		return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
	},      
	bounceBoth: function(t, b, c, d){
		if (t < d/2) {
			return Tween['bounceIn'](t*2, 0, c, d) * 0.5 + b;
		}
		return Tween['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
	}
}