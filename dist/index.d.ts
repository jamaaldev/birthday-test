declare class DaysToCome {
    textGreeting: string;
    textDaysLeft: string;
    textDayLeft: string;
    textBirthDay: string;
    constructor(textGreeting: string, textDaysLeft: string, textDayLeft: string, textBirthDay: string);
    YearsOld(DOB: string): any[];
    DaysToBirthDay(DOB: string, DaysLeft: any, el: string, nameClass: string): string;
}
declare class DaysGone {
    textDaysGone: any;
    textDayGone: any;
    textBirthDayGone: any;
    constructor({ textDaysGone, textDayGone, textBirthDayGone }: any);
    DaysGoneBirthDay(DOB: string, DayGone: any, el: string, nameClass: string): string;
}
declare class JointDate {
    YearJoint: (jointed: any, dayFormat: any) => string;
}
export { DaysToCome, DaysGone, JointDate };
