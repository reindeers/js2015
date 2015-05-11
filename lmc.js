
/*

var cmd = {
			1: "ADD", 
			2: "SUB", 
			3: "STA", 
			5: "LDA", 
			6: "BRA", 
			7: "BRZ", 
			8: "BRP", 
			901: "INP", 
			902: "OUT", 
			000: "HLT" 
	}
*/

var npt = "HLT";
var number = 5;


var vrs = {0, 1, 5, 7}
var cmds = function() {
	var acm = 0;
	var cnt = 0;
	var flgz = 0;
	var flgp = 0;

	return{ //ToDo: get - set
		get: function(){
			return this.acm;
		},

		INP: function(arg){
			if (arg < 0 || arg > 999) return "error: invalid number"
			if (!arg) {
				this.setflagz(1);
			} else {
				this.setflagp(1);
			}
			this.acm = arg;

		}, 	

		isflag: function(flg){
			return this[flg];
		},

		ADD: function(arg){
			var tmp = vrs[arg] + this.get();
			this.INP(tmp);
			if (!tmp) {
				this.setflagz(1);
			} else if (tmp > 0 && tmp < 999){
				this.setflagp(1);
			} else {
				return "error: out of range";
			}
		},

		SUB: function(arg){
			var tmp = vrs[arg] - this.get();
			if (!tmp) {
				this.setflagz(1);
				this.INP(tmp);
			} else if (tmp > 0) {
				this.setflagp(1);
				this.INP(tmp);
			} else if (tmp < 0) {
				this.setflagp(0);
				this.setflagz(0);
			}
		},	

		STA: function(arg){
			vrs[arg] = this.get();
		},

		LDA: function(arg){
			var tmp = vrs[arg];
			this.INP(tmp);
			if (!tmp) {
				this.setflagz(1);
			} else if (tmp > 0){
				this.setflagp(1);
			}		
		}, 

		BRA: function(arg){
			this.cnt = arg;
		},

		BRZ: function(arg){
			if (this.isflag(flgz)) this.cnt = arg;

		},	

		BRP: function(arg){
			if (this.isflag(flgz) || this.isflag(flgp)) this.cnt = arg;
		},

		OUT: function(){
			console.log(this.get());
		},

		HLT: function(){
			return "exit";
		}
	}
};
