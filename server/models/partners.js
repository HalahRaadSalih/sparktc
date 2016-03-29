var  knex = require('../../db/knex');

// getting all partners
var Partners = function(){
  return knex('partners');
}

// create partner
var addPartner = function(partner){
  return Partners().insert({
    name: partner.name,
    phoneNumber: partner.phoneNumber,
    address: partner.address,
    companyDescription: partner.companyDescription,
    companyName: partner.companyName,
    email: partner.email,
    comapanyURL: partner.comapanyURL,
    imgURL: partner.companyLogo
  }).then(function(newPartner){
    return newPartner;
  });
}


module.exports = {
  allPartners: Partners,
  addPartner: addPartner
}
