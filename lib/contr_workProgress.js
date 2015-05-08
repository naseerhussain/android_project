getWorkProgress = function(selected){
	
	var wpTable = localStorage.getItem("workProgressTable") || {};
        var size = Object.size(wpTable);
	var info = null;
        if(size > 0){
                wpTable = JSON.parse(wpTable);
		info = getInfo(wpTable, selected);
        }
	return info;
}

getInfo = function(obj, selected){

	var temp = {} , size = 0;
	for(var key in obj){
		size = Object.key(temp);
                size = parseInt(size);
		if(obj[key].whoName == selected){
			temp[size+1]={
					"task":obj[key].task,
					"daysLeft":obj[key].daysLeft,
					"workDone":obj[key].workDone,
					"totalWorkLeft":obj[key].totalWorkLeft
				     }
		}
	}
	return temp;
}

Object.size = function(obj) {
    var size = 0, key;

    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

