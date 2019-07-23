import { Coordinate } from './coordinate.model';

export class Action {
  public thematic: string;
  public name: string;
  public address: string;
  public locationName: string;
  public locationCoordinates: Coordinate;

  constructor(thematic: string, name: string, address: string, locationName: string, locationCoordinates: Coordinate) {
    this.thematic = thematic;
    this.name = name;
    this.address = address;
    this.locationName = locationName;
    this.locationCoordinates = locationCoordinates;
  }
}
