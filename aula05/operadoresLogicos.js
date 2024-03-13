

//operador E: &&
// -retorna true se, e somente se, os todos booleanos envolvidos também forem true

true && true;  //true
false && true;  //false
true && false;  //false
false && false;  //false

  const var1 = 50;
           const var2 = 50;
                  const var3 = 35;

//    console.log(var1 === var2 && var1 > var3)
               true && true; 

//EXERCICIOS:
 
const a = true;
const b = false;
const c = true;


console.log(a && b);
     console.log(b && c);
          console.log(a && c);
               console.log(a && b && c);

//Operador OU: ||
// Só retorna false se, e somente se, todos os booleanos envolvidos também forem false

const d = true;
const e = false;
const f = true;

true || true;  
false || true; 
true || false;
false || false;

console.log(d || e);
     console.log(e || f);
          console.log(d || f);
               console.log(d || e || f);

//operador Não/Negação: !
//Sempre retorna o oposto

const g = true;
const h = false;
const i = true;

/*true ! true;  
false ! true; 
true ! false;
false ! false; */

console.log(!g || !h);
     console.log(!h || !i);
          console.log(!g || !i);
               console.log(!g || !h || !i);
!true //false
!false //true


