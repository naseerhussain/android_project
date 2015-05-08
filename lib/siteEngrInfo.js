amountRemaining = function(){
	var amt = 0;
        var contTable = localStorage.getItem("contractSiteEngineer");
        var whoName = localStorage.getItem("whoName");

        contTable = JSON.parse(contTable);
                
        for(var key in contTable){
        	if(whoName ==   contTable[key].whoName) amt += parseInt(contTable[key].totalAmt) ;
        }
	
	amt = amt - (totalAmountForAllMaterials() + totalAmtForLabours());	
	return amt;
}

totalAmountForAllMaterials = function(){

        var mTable = localStorage.getItem("materialsTable") || {};
	var who = localStorage.getItem("whoName");
        var size = Object.size(mTable);
        if(size > 0){
                mTable = JSON.parse(mTable);
        }

        return Object.calcTotalMaterialAmt(mTable, who);
}

Object.calcTotalMaterialAmt = function(obj, selected){
        var key, amt=0;
        for(key in obj){
                if(selected == obj[key].whoName){
                        amt += parseInt(obj[key].amt);
                }
        }
        return amt;
}

totalAmtForLabours = function(){
	var lTable = localStorage.getItem("labours");
	var who = localStorage.getItem("whoName");
  	var amt = 0;
	
	if(Object.size(lTable) > 0){
		lTable = JSON.parse(lTable);
  		amt = calcAmtGiven(lTable, who);
	}
	
	return amt;
}

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
}

calcAmtGiven = function(obj, who){
	var amt = 0 ;
	for(var key in obj){
		if(obj[key].whoName == who) amt += parseInt(obj[key].pay);
	}
	
	return amt;
}

toRupees = function(amt){
	var x = amt;
	x = x.toString();
	var lastThree = x.substring(x.length-3);
	var otherNumbers = x.substring(0,x.length-3);
	if(otherNumbers != '')
		lastThree = ',' + lastThree;
	var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

	return res

}

