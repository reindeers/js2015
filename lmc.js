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


var vrs = [0, 1, 5, 7];
var cmds = (function() {
	var acm = 0;
	var cnt = 0;
	var flgz = 0;
	var flgp = 0;

	return{ 
		get: function(){ //ToDo: private
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
		isflagp: function(){
			return this.flgp;
		},
		isflagz: function(){
			return this.flgz;
		},
		setflagz: function(){
			this.flgz = 1;
			this.flgp = 0;
		},
		setflagp: function(){
			this.flgp = 1;
			this.flgz = 0;
		},
		setflag_none: function(){
			this.flgp = 0;
			this.flgz = 0;
		},

		ADD: function(arg){
			var tmp = vrs[arg] + this.get();
			this.set(tmp);
			if (!tmp) {
				this.setflagz();
			} else {
				this.setflagp();
			};
			if (tmp < 0 || tmp > 999) {
				console.log("error: out of range");
				return false;
			};
		},

		SUB: function(arg){
			var tmp = this.get() - vrs[arg];
			if (!tmp) {
				this.setflagz();
				this.set(tmp);
			} else if (tmp > 0) {
				this.setflagp();
				this.set(tmp);
			} else if (tmp < 0) {
				this.setflag_none();
			}
		},	

		STA: function(arg){
			vrs[arg] = this.get();
		},

		LDA: function(arg){
			var tmp = vrs[arg];
			this.set(tmp);
			if (!tmp) {
				this.setflagz();
			} else if (tmp > 0){
				this.setflagp();
			}		
		}, 

		BRA: function(arg){
			this.setc(arg); 
		},

		BRZ: function(arg){
			if (this.isflagz) this.setc(arg);

		},	

		BRP: function(arg){
			if (this.isflagz || this.isflagp) this.setc(arg);
		},

		INP: function(arg){ //ToDo: Выбрать число из окошка INP 
			if (arg < 0 || arg > 999){
				console.log("error: invalid number");
				return 0;
			}  
			if (!arg) {
				this.setflagz();
			} else {
				this.setflagp();
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

