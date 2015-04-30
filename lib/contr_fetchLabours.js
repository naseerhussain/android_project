fillDates = function(){
	
	var lTable = localStorage.getItem("labours");
	lTable = JSON.parse(lTable);
	var dateArray = [];

	$("#selectDate").append('<option style="color:black" selected>Select</option>');
	var array = getArray(lTable);
	
	for(var i=0; i < array.length; i++){
			$("#selectDate").append('<option style="color:black;">'+array[i]+'</option>');
	}
}

getArray = function(obj){
	var array = [], temp = [];

	for(var key in obj){
		array.push(obj[key].date);
	}

	for(var i=0;i<array.length;i++){
		var current = array[i];
		if(temp.indexOf(current)<0) temp.push(current);
	}
	return temp;
}


fetchLaboursData = function(selected){

	var lTable = localStorage.getItem("labours") || {};
        var size = Object.size(lTable);
	var data;
        if(size > 0){
                lTable = JSON.parse(lTable);
		data = selectedLaboursData(selected, lTable);
        }
	
	return data;

}

selectedLaboursData = function(selected, obj){
	var temp = {} , size = 0;
	for(var key in obj){
		size = Object.key(temp);
		size = parseInt(size);
		if(obj[key].date == selected){
			temp[size+1] = {
                               		"attendance" : obj[key].attendance,
					"pay" : obj[key].pay
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

Object.key = function(obj){
        var size = 0;

        for(key in obj){
                size= key;
        }
        return size;
}

