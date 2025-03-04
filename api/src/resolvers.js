/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    // demo(_,__,{models}) {
    //   models.Pet.findMany({})

    // },

    pets(_,{input},ctx,info) {
      return ctx.models.Pet.findMany(input); 
      //return p.filter((inp)=>input.type===p.type);
    } ,
    pet(_,{input},ctx) {
      return ctx.models.Pet.findOne(input); 
      //return p.filter((inp)=>input.type===p.type);
    }
  },
  Mutation: {
    newPet(_,{input}, ctx){
      const pet =ctx.models.Pet.create(input);
      return pet;
    }
  },
   Pet: {
     owner(pet,_,ctx) {
       return ctx.models.User.findOne({});

     }
  //   img(pet) {
  //     return pet.type === 'DOG'
  //       ? 'https://placedog.net/300/300'
  //       : 'http://placekitten.com/300/300'
  //   }
  },
   User: {
    pets(user,_,ctx) {
      return ctx.models.Pet.findMany({});
    }  
   }
}
