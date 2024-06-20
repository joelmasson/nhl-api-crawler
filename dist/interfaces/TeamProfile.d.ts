export interface TimeZone {
    id: string;
    offset: number;
    tz: string;
}
export interface Venue {
    name: string;
    link: string;
    city: string;
    timeZone: TimeZone;
    id?: number;
}
export interface Division {
    id: number;
    name: string;
    nameShort: string;
    link: string;
    abbreviation: string;
}
export interface Conference {
    id: number;
    name: string;
    link: string;
}
export interface Franchise {
    franchiseId: number;
    teamName: string;
    link: string;
}
export interface Person {
    id: number;
    fullName: string;
    link: string;
}
export interface Position {
    code: string;
    name: string;
    type: string;
    abbreviation: string;
}
export interface Roster2 {
    person: Person;
    jerseyNumber: string;
    position: Position;
}
export interface Roster {
    roster: Roster2[];
    link: string;
}
export interface TeamData {
    rawTricode: string;
    triCode: string;
    id: number;
    fullName: string;
    franchiseId: number;
    leagueId: number;
}
export interface TeamProfileData {
    data: TeamData[];
}
export default interface TeamProfile {
    data: TeamProfileData;
}
