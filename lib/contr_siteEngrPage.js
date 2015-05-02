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

