const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(array, name){
    let names = [];
    for (let i = 0; i < array.length; i++){
        if (array[i].toLowerCase() === name.toLowerCase()){
            names.push(array[i]);
        }
    }
    return names;
}

function findMatching(array, string){
    let names = array.filter(name => name.toLowerCase() === string.toLowerCase());
    return names;
}

console.log(findMatching(drivers, "Bobby"));

function fuzzyMatch(array, string){
    let names = array.filter(name => name.slice(0, string.length) === string)
    return names;
}

console.log(fuzzyMatch(drivers, 'Sa'));

const driversObj = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(array, string){
    let names = array.filter(array => array.name === string);
    return names;
}

console.log(matchName(driversObj, 'Bobby'));