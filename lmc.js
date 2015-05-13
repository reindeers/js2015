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


var cmds = (function() {
	var acm = 0;
	var cnt = 0;
	var flgz = 0;
	var flgp = 0;

	return{ 
		get: function(){
			return this.acm;
		},
		set: function(arg){
			this.acm = arg;
		},
		getc: function(){
			return this.cnt;
		},
		setc: function(arg){
			this.cnt = arg;
		},
		isflag: function(flg){
			return this[flg];
		},

		ADD: function(arg){
			var tmp = vrs[arg] + this.get();
			this.set(tmp);
			if (!tmp) {
				this.setflagz(1);
			} else if (tmp > 0 && tmp <= 999){
				this.setflagp(1);
			} else {
				console.log("error: out of range");
				return false;
			}
		},

		SUB: function(arg){
			var tmp = this.get() - vrs[arg];
			if (!tmp) {
				this.setflagz(1);
				this.set(tmp);
			} else if (tmp > 0) {
				this.setflagp(1);
				this.set(tmp);
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
			this.set(tmp);
			if (!tmp) {
				this.setflagz(1);
			} else if (tmp > 0){
				this.setflagp(1);
			}		
		}, 

		BRA: function(arg){
			this.setc(arg); 
		},

		BRZ: function(arg){
			if (this.isflag(flgz)) this.setc(arg);

		},	

		BRP: function(arg){
			if (this.isflag(flgz) || this.isflag(flgp)) this.setc(arg);
		},

		INP: function(arg){ //ToDo: Выбрать число из окошка INP 
			if (arg < 0 || arg > 999){
				console.log("error: invalid number");
				return 0;
			}  
			if (!arg) {
				this.setflagz(1);
			} else {
				this.setflagp(1);
			}
			this.set(arg);

		}, 	
		OUT: function(){ //ToDo: в OUT.
			console.log(this.get());
		},

		HLT: function(){
			console.log("work done");
			return 1;
		}
	}
}());

