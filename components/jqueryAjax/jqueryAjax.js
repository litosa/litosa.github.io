(function () {

    var url = 'http://forverkliga.se/JavaScript/api/simple.php?world=whatever';
    var responseObject = [];

    var worldPopulationCounter = 0;
    var europePopulationCounter = 0;
    var femalePopulationCounter = 0;

    var worldPopulation = document.getElementById("worldPopulation");
    var europePopulation = document.getElementById("europePopulation");
    var femalePopulation = document.getElementById("femalePopulation");
    var lowestPopulation = document.getElementById("lowestPopulation");
    var highestPopulation = document.getElementById("highestPopulation");

    let btnprintOutWorldPopulation = document.getElementById("btnprintOutWorldPopulation");
    let btnprintOutEuropePopulation = document.getElementById("btnprintOutEuropePopulation");
    let btnprintOutFemalePopulation = document.getElementById("btnprintOutFemalePopulation");
    let btnprintOutLowestPopulation = document.getElementById("btnprintOutLowestPopulation");
    let btnprintOutHighestPopulation = document.getElementById("btnprintOutHighestPopulation");

    btnprintOutWorldPopulation.addEventListener("click", printOutWorldPopulation);
    btnprintOutEuropePopulation.addEventListener("click", printOutEuropePopulation);
    btnprintOutFemalePopulation.addEventListener("click", printOutFemalePopulation);
    btnprintOutLowestPopulation.addEventListener("click", printOutLowestPopulation);
    btnprintOutHighestPopulation.addEventListener("click", printOutHighestPopulation);


    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            responseObject = data;
        })
        .catch(function (err) {
            console.log(err)
        });


    function printOutWorldPopulation() {
        for (var country of responseObject) {
            worldPopulationCounter += country.population;
        }
        worldPopulation.innerHTML = worldPopulationCounter;
    }

    function printOutEuropePopulation() {
        for (var country of responseObject) {
            if (country.continent === 'Europe') {
                europePopulationCounter += country.population;
            }
        }
        europePopulation.innerHTML = europePopulationCounter;
    }

    function printOutFemalePopulation() {
        for (var country of responseObject) {
            if (country.name === 'Zimbabwe') {
                femalePopulationCounter = country.population * country.pFemale;
            }
        }
        var roundedValue = Math.round(femalePopulationCounter);
        femalePopulation.innerHTML = roundedValue;
    }

    function printOutLowestPopulation() {
        var countryWithLowestPopulation = '';
        var lowest = Number.POSITIVE_INFINITY;
        var tmp;

        for (var country of responseObject) {
            tmp = country.population;
            if (country.population < lowest) {
                lowest = country.population;
                countryWithLowestPopulation = country.name
            }
        }
        lowestPopulation.innerHTML = countryWithLowestPopulation;
    }

    function printOutHighestPopulation() {
        var continentWithHighestPopulation = '';
        var highest = Number.NEGATIVE_INFINITY;
        var tmp;

        for (var country of responseObject) {
            tmp = country.population;
            if (country.population > highest) {
                highest = country.population;
                continentWithHighestPopulation = country.continent
            }
        }
        highestPopulation.innerHTML = continentWithHighestPopulation;
    }

})();