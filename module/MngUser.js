/*
	MngUser
*/
var users = [
	{ id: 1, username: 'Xiao4', password: 'dpr123123', email: 'liuwenbo@domob.cn' }
];
function MngUser (user) {
	if(user){
		for(key in user){
			if(user.hasOwnProperty(key)){
				this[key] = user[key];
			}
		}
	}
}

MngUser.prototype.findOneByName = function(username, done) {
	for (var i = users.length - 1; i >= 0; i--) {
		if(users[i].username == username){
			var tmpUser = new MngUser(users[i]);
			done(null, tmpUser);
			return;
		}
	};
	done(new Error("No user using "+username+" as name."));
};
MngUser.prototype.findOneById = function(id, done) {
	for (var i = users.length - 1; i >= 0; i--) {
		if(users[i].id == id){
			var tmpUser = new MngUser(users[i]);
			done(null, tmpUser);
			return;
		}
	};
	done(new Error("No user using "+username+" as name."));
};
MngUser.prototype.validPassword = function(password) {
	if(password && this.password && this.password === password){
		return true;
	}
	return false;
}

module.exports = new MngUser();