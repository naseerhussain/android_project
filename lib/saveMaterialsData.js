saveMaterials = function(item, qty, amt){
	
	var mTable = localStorage.getItem("materialsTable") || {};
	var size = Object.size(mTable);
        if(size > 0){
                mTable = JSON.parse(mTable);
                console.log("parse json");
                console.log(mTable);
        }

	mTable["'"+size+1+"'"] = {"item":item,
                         	  "quantity":qty,
                         	  "amt":amt
                        	 };
        console.log(mTable);
        mTable = JSON.stringify(mTable);
        console.log(mTable);
        localStorage.setItem("materialsTable", mTable);

}

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

