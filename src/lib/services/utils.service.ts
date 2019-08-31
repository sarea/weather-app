import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  /**
   * Convert seconds to date
   * @param time the given time as seconds.
   * @returns string, for example "Sat Aug 24 2019""
   */
  public getDateTime (time: number): string {
    return new Date(time * 1000).toDateString();
  }

  /**
   * Get hours from time as seconds
   * @param time the given time as seconds.
   * @returns number, should be 0-23
   */
  public getHours (time: number): number {
    return new Date(time * 1000).getHours();
  }

  /**
   * Get the icon URL from the assets/icons folder
   * @param icon icon name.
   * @returns string
   */
  public getIconUrl (icon: string): string {
    return `../../../assets/icons/${icon}.svg`;
  }

  /**
   * Get the rounded number
   * @param num the given number.
   * @returns number
   */
  public getRoundedNumber (num: number): number {
    return Math.round(num);
  }

  /**
   * Convert mile to kilometer and round the returned number
   * @param num the given number.
   * @returns number
   */
  public mileToKilometer (num: number): number {
    return Math.round(num * 1.60934);
  }

  /**
   * Convert seconds to time of type (hh:mm)
   * @param time the given time as seconds.
   * @returns string, hh:mm am/pm
   */
  public secondsToTime (time: number): string {
    const hours = this.getHours(time);
    return hours > 12 ?
    `${hours - 12}:00pm` :
    `${hours}:00am`;
  }

}
