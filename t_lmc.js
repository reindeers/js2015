	var assert = function(t, e){
		if (t!=e){
			console.log(t + "!=" + e);
			return 0;
		} else {
			console.log("ok");
			return 1;
		}
	}

	var no_assert = function(t, e){
		if (t!=e){
			console.log("ok");
			return 1;
		} else {
			console.log(t + "=" + e);
			return 0;
		}
	}


/*					Check cmds functions			*/

console.log("!! Проверка служебных функций");

cmds.set(1);
assert(cmds.get(), 1);

cmds.setc(1);
assert(cmds.getc(), 1);

cmds.flgz = 1;
cmds.flgp = 0;

assert(cmds.isflagp(), 0);
assert(cmds.isflagz(), 1);


console.log("!! Проверка команд из cmds");
console.log("ADD");
cmds.set(1);
cmds.ADD(1);
assert(cmds.get(), 2); //vrs[0] = 0; vrs[1] = 1;
assert(cmds.isflagp(), 1); 
assert(cmds.isflagz(), 0); 


cmds.set(0);
cmds.ADD(0);
assert(cmds.get(), 0); 
assert(cmds.isflagz(), 1); 
assert(cmds.isflagp(), 0); 

cmds.set(1000);
assert(cmds.ADD(0), 0); 
assert(cmds.get(), 1000); 
assert(cmds.isflagz(), 0); 
assert(cmds.isflagp(), 1); 


console.log("SUB");
cmds.set(3);
cmds.SUB(1);
assert(cmds.get(), 2); //vrs[0] = 0; vrs[1] = 1; vrs[3] = 0;
assert(cmds.isflagp(), 1); 
assert(cmds.isflagz(), 0); 


cmds.set(1);
cmds.SUB(1);
assert(cmds.get(), 0); 
assert(cmds.isflagz(), 1); 
assert(cmds.isflagp(), 0); 

cmds.set(0);
cmds.SUB(1);
assert(cmds.get(), 0); 
assert(cmds.isflagz(), 0); 
assert(cmds.isflagp(), 0); 


console.log("STA (NB!! change vrs array)");
cmds.set(10);
cmds.STA(0);
assert(vrs[0], 10); 

console.log("LDA (NB!! change vrs array)");
cmds.set(0);
vrs[0] = 10;
cmds.LDA(0); 
assert(cmds.get(), 10); 
assert(cmds.isflagz(), 0); 
assert(cmds.isflagp(), 1); 

vrs[0] = 0;
cmds.LDA(0);
assert(cmds.get(), 0); 
assert(cmds.isflagz(), 1); 
assert(cmds.isflagp(), 0); 

console.log("BRA");
cmds.BRA(5);
assert(cmds.getc(), 5); 

console.log("BRZ");
cmds.setflagz()
cmds.BRZ(6)
assert(cmds.getc(), 6); 

cmds.setflagp()
cmds.BRZ(5);
assert(cmds.getc(), 5); 

console.log("BRP");
cmds.setflagz()
cmds.BRZ(6)
assert(cmds.getc(), 6); 

cmds.setflagp()
cmds.BRZ(5);
assert(cmds.getc(), 5); 

cmds.setflag_none()
cmds.BRZ(6);
assert(cmds.getc(), 6); 

console.log("INP");
cmds.INP(1);
assert(cmds.get(), 1); 
assert(cmds.isflagp(), 1); 

cmds.INP(0);
assert(cmds.get(), 0); 
assert(cmds.isflagz(), 1); 

assert(cmds.INP(1000), 0); 

console.log("OUT");
cmds.set(10);
cmds.OUT();

console.log("HLT");
assert(cmds.HLT(), 1); 
