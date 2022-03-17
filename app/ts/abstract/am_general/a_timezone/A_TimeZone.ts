import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_general
{
  export interface A_TimeZone extends amGeneral.am_general.A_Entity
  {
    copyFromJson(jsonTimeZone: any): void;

    setContinent(continent: string): void;
    getContinent() : string;

    setCountry(country: string): void;
    getCountry() : string;

    setCity(country: string): void;
    getCity() : string;

    getAsString() : string ;
    getIANAString() : string ;

    setOffsetHours(offsetHours: number): void;
    getOffsetHours(): number;
  }
} 