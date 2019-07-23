import { Coordinate } from './coordinate.model';

export class User {

  constructor(
    public email: string,
    public localLocationName: string,
    public localLocationCoordinates: Coordinate,
    public actualLocationName: string,
    public actualLocationCoordinates: Coordinate,
    public isFacebookProfileUpload: boolean,
    public isTwitterProfileUpload: boolean,
    public isInstagramProfileUpload: boolean
    ) {
      this.email = email;
      this.localLocationName = localLocationName;
      this.localLocationCoordinates = localLocationCoordinates;
      this.actualLocationName = actualLocationName;
      this.actualLocationCoordinates = actualLocationCoordinates;
      this.isFacebookProfileUpload = isFacebookProfileUpload;
      this.isTwitterProfileUpload = isTwitterProfileUpload;
      this.isInstagramProfileUpload = isInstagramProfileUpload;
  }
}
