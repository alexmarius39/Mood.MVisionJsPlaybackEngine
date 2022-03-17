import amCronConfiguration  = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_cronservice/AE_CronConfiguration");

import amGeneralScheduleInfo = require("../../../../../app/ts/abstract/am_general/ae_scheduleinfo/AE_ScheduleInfo");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");


export module rm_nonrenderingservices
{
  export class RE_CronConfiguration extends rmGeneralEntity.rm_general.R_Entity
                                    implements amCronConfiguration.am_nonrenderingservices.AE_CronConfiguration
  {  

    //----------- properties
    _aScheduleInfoList : Array<amGeneralScheduleInfo.am_general.AE_ScheduleInfo> ;

    //----------- constructor 
    constructor()  
    {  
      super();

      this._aScheduleInfoList = new Array<amGeneralScheduleInfo.am_general.AE_ScheduleInfo>();
    }

    //-----------------------------------------------
    public copyFromJson(aJsonCronConfiguration : any)
    {
      if (aJsonCronConfiguration == 0)
        return 0;
      var crtScheduleInfo : amGeneralScheduleInfo.am_general.AE_ScheduleInfo = null;
      for (var k = 0; k < aJsonCronConfiguration.schedule_infos.length; k++) 
      {
        crtScheduleInfo = this._aSrvLocator._iEntityCreation.createDefaultScheduleInfo(null);
        crtScheduleInfo.injectDependencies( this._aSrvContainer, this._aSrvLocator, this._aSrvLog, null); //error);
        crtScheduleInfo.copyFromJson(aJsonCronConfiguration.schedule_infos[k]);
        this.addScheduleInfo(crtScheduleInfo);
      }
    }

    //-----------------------------------------------
    public getScheduleInfoList() : Array<amGeneralScheduleInfo.am_general.AE_ScheduleInfo>
    {
      return this._aScheduleInfoList;
    }
    //-----------------------------------------------
    public setScheduleInfoList(aScheduleInfoList : Array<amGeneralScheduleInfo.am_general.AE_ScheduleInfo>)
    {
      this._aScheduleInfoList = aScheduleInfoList;
    }

    //-----------------------------------------------
    public addScheduleInfo(aScheduleInfo : amGeneralScheduleInfo.am_general.AE_ScheduleInfo) : number 
    {
      this._aScheduleInfoList.push(aScheduleInfo);
      return 0;
    }
  }
} 