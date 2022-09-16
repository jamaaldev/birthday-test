declare class DaysToCome {
    textGreeting?: string | undefined;
    textDaysLeft?: string | undefined;
    textDayLeft?: string | undefined;
    textBirthDay?: string | undefined;
    constructor(customTextDaysToCome: any);
    YearsOld(DOB: string): number[] | undefined;
    DaysToBirthDay(DOB: string, DaysLeft: string, el?: string, nameClass?: string): string | undefined;
}
declare class DaysGone {
    textDaysGone?: string;
    textDayGone?: string;
    textBirthDayGone?: string;
    constructor(customTextDaysGone: any);
    DaysGoneBirthDay(DOB: string, DayGone: any, el?: string, nameClass?: string): string | undefined;
}
declare class JointDate {
    YearJoint: (jointed: any, dayFormat: any) => string | undefined;
}
export { DaysToCome, DaysGone, JointDate };
