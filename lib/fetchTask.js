returnTask = function(){
	var tTable = localStorage.getItem("tasksTable") || {};
	var whoName = localStorage.getItem("whoName");
	var size = Object.size(tTable);
	var task = " ";
        if(size > 0){
                tTable = JSON.parse(tTable);
		for(var key in tTable){
                	if(tTable[key].whoName == whoName){
                        	task = tTable[key].task;
                	}
        	}
        }
        return task;
}

returnDaysLeft = function(){
	var tTable = localStorage.getItem("tasksTable") || {};
        var whoName = localStorage.getItem("whoName");
        var size = Object.size(tTable);
	var date, timeSlot = 0;
	if(size > 0){
                tTable = JSON.parse(tTable);
                for(var key in tTable){
                        if(tTable[key].whoName == whoName){
                                date = tTable[key].allotedOn;
				timeSlot = tTable[key].timeSlot;
                        }
                }
        }
        return daysLeft(date,timeSlot);
}

daysLeft = function(date, timeSlot){
	var date1 = new Date(date);
	var date2 = getDate();
	date2 = new Date(date2);

	var timeDiff = Math.abs(date2.getTime() - date1.getTime());
	var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
	console.log(diffDays);
	return timeSlot-diffDays;
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



Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
}

calcWorkLeft = function(workDoneToday, totalWorkLeft){

	var tTable = localStorage.getItem("tasksTable") || {};
        var whoName = localStorage.getItem("whoName");
        var size = Object.size(tTable);
	var timeSlot = 0;
	if(size > 0){
		tTable = JSON.parse(tTable);
		for(var key in tTable){
                        if(tTable[key].whoName == whoName){
                                timeSlot = tTable[key].timeSlot;
                        }
                }
	}
	var perDay = parseFloat(100/timeSlot);
	var perDayDone = parseFloat(perDay * (workDoneToday/100));
	
	totalWorkLeft -= perDayDone;

	return totalWorkLeft.toFixed(2);
}

saveWorkProgress = function(taskName, daysLeft, workDone, workLeft){
	var wpTable = localStorage.getItem("workProgressTable") || {};
	var whoName = localStorage.getItem("whoName");
	var size = Object.size(wpTable);
        var key = 0;
        if(size > 0){
                wpTable = JSON.parse(wpTable);
		key = Object.key(wpTable);
	}

	wpTable[size+1] = {"task":taskName,
			   "daysLeft":daysLeft,
                           "workDone":workDone,
                           "totalWorkLeft":workLeft,
                           "whoName":whoName,
                         };
        wpTable = JSON.stringify(wpTable);
        localStorage.setItem("workProgressTable", wpTable);

}

Object.key = function(obj){
        var size = 0;

        for(var key in obj){
                size= key;
        }
        return size;
}

