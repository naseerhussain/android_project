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
	for(key in obj){

		if(obj[key].item == item){
			amt += obj[key].amt;
			qty += obj[key].quantity;
		}
	}
	return [amt,qty];
};
