saveMaterials = function(item, qty, amt){
	
	var mTable = localStorage.getItem("materialsTable") || {};
	var size = 0;
        if(Object.size(mTable) > 0){
                mTable = JSON.parse(mTable);
		size = Object.key(mTable);
		size = parseInt(size); 
        }
	
	mTable[size+1] = {"item":item,
                          "quantity":qty,
                          "amt":amt
                       	 };
        mTable = JSON.stringify(mTable);
        localStorage.setItem("materialsTable", mTable);

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
