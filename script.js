

function score(){
	var result = 0;
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
	
	
	
	
	for(var i=0;i<11;i++){
		result = result + parseInt(z[i]);
	}
	
	if(result > 20){
		document.write("Depressed");
	}else{
		document.write("Not Depressed");
	}
	}
	
