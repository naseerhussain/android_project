signIn = function(who, userId, pwd){
	
	var obj = localStorage.getItem(who) || {};
        if(Object.size(obj) > 0){
                obj = JSON.parse(obj);
        }
	
	return checkCredentials(userId,pwd, obj);	
}

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

checkCredentials = function(userId, pwd, obj){
	
	for(key in obj){
		if(key == userId && obj[key].pwd == pwd )return true;
	}
	return false;
}
