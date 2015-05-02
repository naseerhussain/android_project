addSiteEngr = function(){

	var sTable = localStorage.getItem("siteengineer");
	sTable = JSON.parse(sTable);

	$("#selectSiteEngr").append('<option style="color:black" selected>Select</option>');
	for (key in sTable){

	      $("#selectSiteEngr").append('<option style="color:black;">'+sTable[key].name+'</option>');
        }
}

returnUserId = function(selected){
	var sTable = localStorage.getItem("siteengineer");
	sTable = JSON.parse(sTable);
	for(var key in sTable){
		if(sTable[key].name == selected) return key;
	}
	return false;
}

calculateTotal = function(amt, selected){
	var contSE = localStorage.getItem("contractSiteEngineer") || {};
	var total = 0;	
        if(Object.size(contSE) > 0){
                contSE = JSON.parse(contSE);
		total = calcAmt(contSE, selected);
		total = parseInt(total);
        }

	total += parseInt(amt);
	
	return total;
}

saveAmtPaid = function(selected , amt){
	var contSE = localStorage.getItem("contractSiteEngineer") || {};
	var key = 0;

	if(Object.size(contSE) > 0){
		contSE = JSON.parse(contSE);
		key = Object.key(contSE);
		key = parseInt(key);		
	}

	contSE[key+1] = {
				"whoName":selected,
				"totalAmt":amt
			 };

	contSE = JSON.stringify(contSE);
	localStorage.setItem("contractSiteEngineer",contSE);
}

calcAmt = function(obj, selected){
		
	for(var key in obj){
		if(obj[key].whoName == selected) return obj[key].totalAmt;
	}
	return 0;
}

totalLabAmt = function(selected){

	var obj = localStorage.getItem("labours") || {};
	var total = 0;

	if (Object.size(obj) > 0){
		obj = JSON.parse(obj);

		for(var key in obj){
			
			if(obj[key].whoName == selected){
				 total += parseInt(obj[key].pay)
			}
		}
 	}

	return total;
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





/*	
	$("#selectSiteEngr").on('change',function(){
		selected = this.value;
	});

	console.log(selected);
	
	if(Object.size(lTable) > 0){

		lTable = JSON.parse(lTable)
		size = Object.key(lTable);
		console.log(size);
	}

	lTable[size+1]={
				"siteEngrName": selected,
				"paidToday": $("#contr_siteEngr_addAmt").val(),
				
		       };

}
/*
1. site engineer name- this will be store when we select it from dropdown
2. paid today: This data fetched from add amount textbox
3. Total amount paid= "total amount paid" + "paid today" (initialize with 0);
			 
4. Amount left with siteEngr = "Amount left with site Engr" - (total_amount(siteEng_material table)+total_amount(siteEng_labours table));
*/

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

