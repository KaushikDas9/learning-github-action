
interface checkYearPrimeOrNotProps {
    year: number
}   

interface calculateDaysPassedInThisYearProps {
    day: number,
    month: number
    isPrime:boolean
}


/**
 * Calculates the number of days left in the current year from the current date.
 *
 * @returns {number} The number of days remaining in the year, accounting for leap years.
 */

    export const useCalculateDaysLeftInThatYear = (): number => {

        const date = new Date();
        
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        if (checkYearPrimeOrNot({ year })) {
            return 366 - calculateDaysPassedInThisYear({ day, month ,isPrime:true });
        }
        return 365 - calculateDaysPassedInThisYear({ day, month , isPrime:false });
 
    }
    /**
     * Checks if a given year is a leap year or not
     * @param {{ year: number }} yearProps object with year property
     * @returns {boolean} true if year is leap year, false otherwise
     */
    const checkYearPrimeOrNot = ({ year }: checkYearPrimeOrNotProps): boolean => {

        if (year % 4 === 0 && year % 100 !== 0 || year % 410 === 0) { 
            return true;
        }
        return false;
    }


/**
 * Calculates the number of days that have passed in the current year.
 * 
 * @param {Object} param - An object containing the details of the current day and month.
 * @param {number} param.day - The current day of the month.
 * @param {number} param.month - The current month of the year (1-12).
 * @param {boolean} param.isPrime - A flag indicating whether the current year is a leap year (prime) or not.
 * 
 * @returns {number} The total number of days that have passed in the year up to the specified day and month.
 */
    const calculateDaysPassedInThisYear = ({ day, month,isPrime }: calculateDaysPassedInThisYearProps ): number => { 
        
        const monthsOfNotPrimeYear = [0,31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
        const monthsOfPrimeYear = [0,31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];

        if( isPrime) {
            return monthsOfPrimeYear[month - 1] + day;
        }
        return monthsOfNotPrimeYear[month - 1] + day;

    }
