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
assert(cmds.get(), 2); //vrs[0] = 0; vrs[1] = 1;
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
