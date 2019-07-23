import { Coordinate } from './coordinate.model';

export class Action {
  constructor(
    public thematic: string,
    public name: string,
    public address: string,
    public locationName: string,
    public locationCoordinates: Coordinate
    ) {
    this.thematic = thematic;
    this.name = name;
    this.address = address;
    this.locationName = locationName;
    this.locationCoordinates = locationCoordinates;
  }
}
