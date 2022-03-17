import amGeneralTimeZone     = require("../../../../../app/ts/abstract/am_general/a_timezone/A_TimeZone");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class R_TimeZone extends rmGeneralEntity.rm_general.R_Entity
                          implements amGeneralTimeZone.am_general.A_TimeZone
  {
    //--- properties
    _continent: string;
    _country: string;
    _city: string;

    _offsetHours: number;


    //----------- constructor 
    constructor()  
    {  
      super();

      this._continent   = "";
      this._country     = "";
      this._city        = "";
      this._offsetHours = 0;
    }

    public copyFromJson(jsonTimeZone: any): void
    {
      this._continent   = jsonTimeZone._continent;
      this._country     = jsonTimeZone._country;
      this._city        = jsonTimeZone._city;
      this._offsetHours = jsonTimeZone._offsetHours;
    }

    //---------------------
    public setContinent(continent: string)   : void
    {
       this._continent = continent;
    }

    //----------------------
    public getContinent() : string
    {
      return this._continent;
    }

    //---------------------
    public setCountry(country: string)   : void
    {
       this._country = country;
    }

    //----------------------
    public getCountry() : string
    {
      return this._country;
    }

    //---------------------
    public setCity(city: string)   : void
    {
       this._city = city;
    }

    //----------------------
    public getCity() : string
    {
      return this._city;
    }

    //----------------------
    public setOffsetHours(offsetHours: number): void
    {
      this._offsetHours = offsetHours;
    }

    //----------------------
    public getOffsetHours(): number
    {
      return this._offsetHours;
    }

    //----------------------
    public getAsString() : string
    {
      let strRet = "";
      if (this._continent != null && this._continent.length > 0) {
        strRet += this._continent;
      } 

      if (this._country != null && this._country.length > 0) {
        strRet += strRet.length > 0 ? ` - ${this._country}` : `${this._country}`;
      } 

      if (this._city != null && this._city.length > 0) {
        strRet += strRet.length > 0 ? ` - ${this._city}` : `${this._city}`;
      } 

      return strRet;
    }

    //----------------------
    public getIANAString() : string
    {
      let strRet = "";
      if (this._continent != null && this._continent.length > 0) {
        strRet += this._continent;
      } 
      
      if (this._country != null && this._country.length > 0) {
        strRet += strRet.length > 0 ? `/${this._country}` : `${this._country}`;
      } 

      if (this._city != null && this._city.length > 0) {
        strRet += strRet.length > 0 ? `/${this._city}` : `${this._city}`
      }

      return strRet;
    }
  }   
} 