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

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
