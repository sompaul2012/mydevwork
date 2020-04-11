//Arrwo function starts
const materials = [
  {'Name':'Aryansh','Age':1,'Sex':'Male','Attributes':[{'Name':'Status','Citizen':'Indian'},{'Name':'Criteria','Citizen':'Finnish'}]},
  {'Name':'SomnathPaaulPaulPaul',Age:'33','Sex':'Male','Attributes':[{'Name':'Status','Citizen':'Indian'},{'Name':'Criteria','Citizen':'Indian'}]}
];

console.log(materials.map(material => material.Name));
// expected output: Array [8, 6, 7, 9]
var simple;
const len = materials.map((element) => {
  //return element.Name.length;
  const citizen = element.Attributes.map(attribute => attribute.Citizen);
  console.log(citizen);
  const actualcitizen = citizen.includes('Indian') ? 'Indian':'Finnish';
  console.log(actualcitizen);
});
//var simple = a => a > 15 ? 15 : a; 
/*
elements.map(element => {
  return element.length;
}); 
*/


//Arrow Function ends
