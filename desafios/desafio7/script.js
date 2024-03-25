class Controle {
    constructor(marca) {
       this.marca = marca;
    }
   
    eCompativelCom(tv) {
       return this.marca === tv.marca;
    }
   }
   
   class TV {
    constructor(marca) {
       this.marca = marca;
       this.ligada = false;
    }
   
    ligar() {
       this.ligada = true;
       console.log(`TV ${this.marca} ligada.`);
    }
   
    desligar() {
       this.ligada = false;
       console.log(`TV ${this.marca} desligada.`);
    }
   }
   
   function conectarControle(controle, tv) {
    if (controle.eCompativelCom(tv)) {
       console.log(`Controle ${controle.marca} conectado à TV ${tv.marca}.`);
       if (!tv.ligada) {
          tv.ligar();
       } else {
          tv.desligar();
       }
    } else {
       console.log(`Controle ${controle.marca} não é compatível com a TV ${tv.marca}.`);
    }
   }
   
   let controleLG = new Controle('LG');
   let controleSamsung = new Controle('Samsung');
   let tvLG = new TV('LG');
   let tvSamsung = new TV('Samsung');
   
   conectarControle(controleLG, tvLG);
   conectarControle(controleSamsung, tvLG);
   