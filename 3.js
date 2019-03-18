name = 'The Simpsons';

var family = {
  dad: {
    name: "Barter"
  },
  eldest: {
    name: 'Bart',
    getName: function() {
      console.log(this.name);
    }
  },
  youngest: {
    name: 'Maggie',
  }
};
// How to use this function to get this output:
// The Simpsons
// Bart
// Maggie

family.eldest.getName.call(global);
family.eldest.getName();
family.eldest.getName.call(family.youngest);


// https://insiders.liveshare.vsengsaas.visualstudio.com/join?1E46AC468151B635963BD2FCC8C7E2CEAD67