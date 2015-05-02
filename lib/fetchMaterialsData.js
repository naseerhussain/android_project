fetchData = function(item){
	var mTable = localStorage.getItem("materialsTable") || {};
        var size = Object.size(mTable);
        if(size > 0){
                mTable = JSON.parse(mTable);
                console.log("parse json");
                console.log(mTable);
        }

	var temp = Object.calcTotalAmtQty(mTable, item);
	//console.log(temp[0], temp[1]);
	return temp;
}

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

Object.calcTotalAmtQty = function(obj, item){
	var key, amt=0, qty=0;
	var whoName = localStorage.getItem("whoName");

	for(key in obj){

		if(obj[key].item == item && obj[key].whoName == whoName){
			amt += parseInt(obj[key].amt);
			qty += parseInt(obj[key].quantity);
		}
	}
	return [amt,qty];
};

totalAmountForAllMaterials = function(selected){

	var mTable = localStorage.getItem("materialsTable") || {};
        var size = Object.size(mTable);
        if(size > 0){
                mTable = JSON.parse(mTable);
                console.log("parse json");
                console.log(mTable);
        }

        //var temp = 

	return Object.calcTotalMaterialAmt(mTable, selected);

        //console.log(temp[0], temp[1]);
	//temp = toRupees(temp);
        //return temp;
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
