saveTask = function(task, timeslot, engineer ){
	var tTable = localStorage.getItem("tasksTable") || {};
	var size = 0;
        if(Object.size(tTable) > 0){
                tTable = JSON.parse(tTable);
                size = Object.key(tTable);
                size = parseInt(size);
        }

	var today = getDate();

        tTable[size+1] = {"task":task,
                          "timeSlot":timeslot,
			  "allotedOn":today,
                          "whoName":engineer,
                         };
        tTable = JSON.stringify(tTable);
        localStorage.setItem("tasksTable", tTable);

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

getDate = function(){
	
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
    		dd='0'+dd
	}	 

	if(mm<10) {
    		mm='0'+mm
	} 

	today = mm+'/'+dd+'/'+yyyy;

	return today;
}
