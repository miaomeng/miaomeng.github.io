function MT(ele,options,callback){
	var opt = {};
	var n;
	var time = +new Date();
	var arr = [];
	for(var attr in options){
		//鍒涘缓涓€涓璞★紝瀵瑰簲杩愬姩鐨勫睘鎬с€�
		opt[attr] = {};
		n = getStyle(ele,attr);
		//璁板綍璧峰浣嶇疆銆�
		opt[attr].begin = isNaN(n)?0:n; 
		//璁板綍鎬昏窛绂汇€�
		opt[attr].count =  options[attr].target - opt[attr].begin;
		//璁板綍姣忎釜灞炴€ц繍鍔ㄦ€绘椂闂�
		arr.push(opt[attr].duration = options[attr].duration||400);
		//璁板綍姣忎釜灞炴€х殑杩愬姩褰㈠紡銆�
		opt[attr].fx = options[attr].fx||'linear';
		//姣忎釜灞炴€ц繍鍔ㄧ粨鏉熺殑鍥炶皟銆�
		opt[attr].callback = options[attr].callback||function(){};
	}

	//姹傛渶澶ф椂闂淬€�
	var maxDuration = Math.max.apply(null,arr);
	clearInterval(timer);
	var timer = setInterval(function(){
		//璁＄畻宸茶繃鍘绘椂闂淬€�
		var t = +new Date() - time ;
		var value;
		if(t>=maxDuration){
			t = maxDuration;
			clearInterval(timer);
		}
		for(var attr in opt){
			var obj = opt[attr];
			obj.t = t;
			//鍒ゆ柇姣忎竴涓殑宸茶繃鍘绘椂闂淬€�
			if(obj.duration&&obj.t>=obj.duration){
				obj.t = obj.duration;
				
			}
			//宸茶繃鍘绘椂闂村皬浜庢€绘椂闂寸殑鍙互缁х画杩愬姩锛屽惁鍒欒皟鐢ㄥ洖璋冦€�
			if(obj.t<=obj.duration){
				value = Tween[obj.fx](obj.t,obj.begin,obj.count,obj.duration);
				// console.log(attr);
				ele.style[attr] = value + 'px';
			}
			//璋冪敤callback
			if(obj.t == obj.duration){
				obj.duration = false;
				obj.callback();
			}
			
		}
		if(t==maxDuration){
			callback&&callback();
		}
		
	}, 30);	

}

function getStyle(ele,attr){

	return parseFloat(ele.currentStyle?ele.currentStyle[attr]:getComputedStyle(ele)[attr]);
}