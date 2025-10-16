function printGraph(dataset){

const listFilm = []
const listYear = []

dataset.forEach((element) =>{
  listFilm.push(element.title);
  listYear.push(parseInt(element.release_date.slice(0,4)));

})
var data =  {
  labels: listFilm,
  series: [listYear]
}
  var options = {
    fullWidth: true,
    width: 1200,
    height: 300,
    chartPadding: {
      right: 40
    }
  };
  new Chartist.Line(".pelis", data, options);
}

async function getData() {
  const response = await fetch ("https://swapi.info/api/films");
  const data = await response.json();
  
  printGraph(data)
}

getData();


//Grafica Personajes

function printGraphPerson(datasetPerson){

  datasetPerson = datasetPerson.slice(0, 10); 

const listPerson = []
const listNumberFilm = []

datasetPerson.forEach((element) =>{
  listPerson.push(element.name);
  listNumberFilm.push(parseInt(element.films.length));

})
var data =  {
  labels: listPerson,
  series: [listNumberFilm]
}
  var options = {
    
    fullWidth: true,
    width: 900,
    height: 200,
    chartPadding: {
      right: 40,
        
    }
  };
  new Chartist.Line(".person", data, options);
}

async function getDataPerson() {
  const response = await fetch ("https://swapi.info/api/people");
  const data = await response.json();
  
  printGraphPerson(data)

}

getDataPerson();





































