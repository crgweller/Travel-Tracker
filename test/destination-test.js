import chai from 'chai';
const expect = chai.expect;
import DestinationRepository from '../src/DestinationRepository';
import Destination from '../src/Destination';
import { destinationsData } from './testData';

describe('Destination Test', function() {
  const destinationRepository = new DestinationRepository();
  destinationRepository.loadDestinations(destinationsData)

  const destination = destinationRepository.allDestinations[2]

  it("should be a function", function () {
    expect(Destination).to.be.a("function");
  });

  it('should have a trip ID', function () {
    expect(destination.id).to.equal(3);
  });

  it('should have a trip destination name', function () {
    expect(destination.destination).to.equal('Sydney, Austrailia');
  });

  it('should have a trip lodging cost', function () {
    expect(destination.lodgingCost).to.equal(130);
  });

  it('should have a trip flight cost', function () {
    expect(destination.flightCost).to.equal(950);
  });

  it('should have a trip image', function () {
    expect(destination.image).to.deep.equal({
        url: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        alt: 'opera house and city buildings on the water with boats'
      });
  });

})