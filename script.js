
var result = 0;
function score(){
	
	var z = [];
	
	var a = document.getElementsByName('ans1');
	for(var i = 0; i < 4; i++){
    if(a[i].checked){
        z[0] = a[i].value;
    }
	}
	var b = document.getElementsByName('ans2');
	for(var i = 0; i < 4; i++){
    if(b[i].checked){
        z[1] = b[i].value;
    }
	}
	var c = document.getElementsByName('ans3');
	for(var i = 0; i < 4; i++){
    if(c[i].checked){
        z[2] = c[i].value;
    }
	}
	var d = document.getElementsByName('ans4');
	for(var i = 0; i < 4; i++){
    if(d[i].checked){
        z[3] = d[i].value;
    }
	}
	var e = document.getElementsByName('ans5');
	for(var i = 0; i < 4; i++){
    if(e[i].checked){
        z[4] = e[i].value;
    }
	}
	var f = document.getElementsByName('ans6');
	for(var i = 0; i < 4; i++){
    if(f[i].checked){
        z[5] = f[i].value;
    }
	}
	var g = document.getElementsByName('ans7');
	for(var i = 0; i < 4; i++){
    if(g[i].checked){
        z[6] = g[i].value;
    }
	}
	var h = document.getElementsByName('ans8');
	for(var i = 0; i < 4; i++){
    if(h[i].checked){
        z[7] = h[i].value;
    }
	}
	var i = document.getElementsByName('ans9');
	for(var y = 0; y < 4; y++){
    if(i[y].checked){
        z[8] = i[y].value;
    }
	}
	var j = document.getElementsByName('ans10');
	for(var i = 0; i < 4; i++){
    if(j[i].checked){
        z[9] = j[i].value;
    }
	}
	var k = document.getElementsByName('ans11');
	for(var i = 0; i < 4; i++){
    if(k[i].checked){
        z[10] = k[i].value;
    }
	}
	var l = document.getElementsByName('ans12');
	for(var i = 0; i < 4; i++){
    if(l[i].checked){
        z[11] = l[i].value;
    }
	}
	var m = document.getElementsByName('ans13');
	for(var i = 0; i < 4; i++){
    if(m[i].checked){
        z[12] = m[i].value;
    }
	}
	var n = document.getElementsByName('ans14');
	for(var i = 0; i < 4; i++){
    if(n[i].checked){
        z[13] = n[i].value;
    }
	}
	var o = document.getElementsByName('ans15');
	for(var i = 0; i < 4; i++){
    if(o[i].checked){
        z[14] = o[i].value;
    }
	}
	var p = document.getElementsByName('ans16');
	for(var i = 0; i < 4; i++){
    if(p[i].checked){
        z[15] = p[i].value;
    }
	}
	var q = document.getElementsByName('ans17');
	for(var i = 0; i < 4; i++){
    if(q[i].checked){
        z[16] = q[i].value;
    }
	}
	var r = document.getElementsByName('ans18');
	for(var i = 0; i < 4; i++){
    if(r[i].checked){
        z[17] = r[i].value;
    }
	}
	var s = document.getElementsByName('ans19');
	for(var i = 0; i < 4; i++){
    if(s[i].checked){
        z[18] = s[i].value;
    }
	}
	var t = document.getElementsByName('ans20');
	for(var i = 0; i < 4; i++){
    if(t[i].checked){
        z[19] = t[i].value;
    }
	}
	
	for(var i=0;i<20;i++){
		result = result + parseInt(z[i]);
	}
	
	if(result > 60){
		window.location.href = "4.html";
	}else if(result > 40){
		window.location.href = "3.html";
	}else{
		window.location.href = "2.html";
	}
	
	}
	
	
	
