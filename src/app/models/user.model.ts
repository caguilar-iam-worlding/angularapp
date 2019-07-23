import { Coordinate } from './coordinate.model';

export class User {
  public email: string;
  public localLocationName: string;
  public localLocationCoordinates: Coordinate;
  public actualLocationName: string;
  public actualLocationCoordinates: Coordinate;
  public isFacebookProfileUpload: boolean;
  public isTwitterProfileUpload: boolean;
  public isInstagramProfileUpload: boolean;

  constructor(email: string, localLocName: string, localLocCoordinate: Coordinate, actualLocName: string, actualLocCoordinate: Coordinate,
    isFacebookProfileUpload: boolean, isTwitterProfileUpload: boolean, isInstagramProfileUpload: boolean) {
      this.email = email;
      this.localLocationName = localLocName;
      this.localLocationCoordinates = localLocCoordinate;
      this.actualLocationName = actualLocName;
      this.actualLocationCoordinates = actualLocCoordinate;
      this.isFacebookProfileUpload = isFacebookProfileUpload;
      this.isTwitterProfileUpload = isTwitterProfileUpload;
      this.isInstagramProfileUpload = isInstagramProfileUpload;
  }
}
