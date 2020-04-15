const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const journeyStarts = this.journeys.map ( (journey) => {
    return journey.startLocation;
  })
  return journeyStarts;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const journeyEnds = this.journeys.map ( (journey) => {
    return journey.endLocation;
  })
  return journeyEnds;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeysByTransports = this.journeys.filter( (journey) => {
      return journey.transport === transport;
  })
  return journeysByTransports;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeysOverDistance = this.journeys.filter( (journey) => {
      return journey.distance > minDistance;
  })
  return journeysOverDistance;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const totalDistanceTravelled = this.journeys.reduce( (total, journey) => {
    return total + journey.distance;
  }, 0)
  return totalDistanceTravelled;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  // iterate through array
  const listOfJourneysByTransport = this.journeys.map( (journey) => {
    return journey.transport;
  });

  const uniqueList = new Set(listOfJourneysByTransport);
  const result = Array.from(uniqueList);
  // if value can't be found in list then add to list
  //return results
  return result;
};


module.exports = Traveller;
