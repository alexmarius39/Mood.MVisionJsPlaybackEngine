import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_TvSignageSetup");

import nmTransversalServicesTizen = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_tizen/N_SDK_Tizen");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amGeneralCaptureScreenInfo   = require("../../../../../app/ts/abstract/am_general/a_capturescreeninfo/A_CaptureScreenInfo");
import amGeneralFailureModeInfo   = require("../../../../../app/ts/abstract/am_general/a_failuremodeinfo/A_FailureModeInfo");
import amGeneralTileInfo          = require("../../../../../app/ts/abstract/am_general/a_tileinfo/A_TileInfo");
import amGeneralSystemMonitorInfo = require("../../../../../app/ts/abstract/am_general/a_systemmonitorinfo/A_SystemMonitorInfo");
import amGeneralUsagePermissions  = require("../../../../../app/ts/abstract/am_general/a_usagepermissions/A_UsagePermissions");

//import * as tizenTest from "./tizentest";

declare var tizen : any;
declare var b2bapis : any;
export module nm_transversalservices
{

  export class IImpl_SDK_TvSignageSetup_Tizen implements amGeneral.am_transversalservices.I_SDK_TvSignageSetup
  {
    //----------- properties
    _name: string;  

    //----------- owner
    _owner: nmTransversalServicesTizen.nm_transversalservices.N_SDK_Tizen;

    //----------- constructor 
    constructor(owner: nmTransversalServicesTizen.nm_transversalservices.N_SDK_Tizen)  
    {
      this._owner = owner;  
    }

    //-------------------------------
    //       Capture Screen
    //-------------------------------

    //---------------------
    public captureScreen(captureScreenInfo: amGeneralCaptureScreenInfo.am_general.A_CaptureScreenInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      const self = this;

      function onSuccessCaptureScreen(screenshotFilePath) {
        const screenshotFileDir:string = screenshotFilePath.substring(0, screenshotFilePath.lastIndexOf('/'));
        function onResolveDirectorySuccess(dirPathHandle) {
          const screenshotTmpFile = captureScreenInfo.getFileInfo().getFullName();
          function onCopySuccess() {
            function onResolveFileSuccess(filePathHandle) {
              let myNewExif = null;
              try {
                myNewExif = new tizen.ExifInformation();
                myNewExif.uri = filePathHandle.toURI();
                if (captureScreenInfo.getOrientation() === "PORTRAIT") {
                  myNewExif.orientation = "ROTATE_90";
                }
              } catch(e) {
                error != null && error.setError(9024, `[Tizen]: captureScreen error Exif object error ${e.message}`);
                context != null && context.setError(error);
                callback != null && callback(context);
                return;
              }

              tizen.exif.saveExifInfo(myNewExif, function() {
                context != null && context.setError(error);
                callback != null && callback(context);            
              }, function(e) {
                if (self._owner._debug) {
                  document.getElementById("rend.message").innerHTML += `<p>[Tizen]: captureScreen save Exif object error ${e.message}</p>`;
                }
                error != null && error.setError(9024, `[Tizen]: captureScreen save Exif object error ${e.message}`);
                context != null && context.setError(error);
                callback != null && callback(context);            
              });  
            }

            function onResolveFileError(e) {
              if (self._owner._debug) {
                document.getElementById("rend.message").innerHTML += `<p>[Tizen]: captureScreen resolve file ${screenshotTmpFile} error ${e.message}</p>`;
              }
              error != null && error.setError(9023, `[Tizen]: captureScreen resolve file ${screenshotTmpFile} error ${e.message}`);
              context != null && context.setError(error);
              callback != null && callback(context);      
            }

            try {
              tizen.filesystem.resolve(screenshotTmpFile, onResolveFileSuccess, onResolveFileError);
            } catch(e) {
              error != null && error.setError(9023, `[Tizen]: captureScreen exception ${e.message}`);
              context != null && context.setError(error);
              callback != null && callback(context);      
            }
          }
  
          function onCopyError(e) {
            if (self._owner._debug) {
              document.getElementById("rend.message").innerHTML += `<p>SDK capture screen copy file error ${screenshotFilePath} ${screenshotTmpFile} ${e.message}</p>`;
            }
            error != null && error.setError(9022, `[Tizen]: captureScreen copy file error ${e.message}`);
            context != null && context.setError(error);
            callback != null && callback(context);    
          }

          dirPathHandle.copyTo(screenshotFilePath, screenshotTmpFile, true, onCopySuccess, onCopyError);
        }

        function onResolveDirectoryError(e) {
          if (self._owner._debug) {
            document.getElementById("rend.message").innerHTML += `<p>[Tizen]: captureScreen resolve directory ${screenshotFileDir} error ${e.message}</p>`;
          }
          error != null && error.setError(9021, `[Tizen]: captureScreen resolve directory ${screenshotFileDir} error ${e.message}`);
          context != null && context.setError(error);
          callback != null && callback(context);  
        }

        try {
          tizen.filesystem.resolve(screenshotFileDir, onResolveDirectorySuccess, onResolveDirectoryError);
        } catch(e) {
          error != null && error.setError(9021, `[Tizen]: captureScreen exception ${e.message}`);
          context != null && context.setError(error);
          callback != null && callback(context);  
        }
      }

      function onErrorCaptureScreen(err) {
        if (self._owner._debug) { 
          document.getElementById("rend.message").innerHTML += `<p>SDK capture screen error ${err.message}</p>`;
        }
        error != null && error.setError(9020, `[Tizen]: captureScreen function error ${err.message}`);
        context != null && context.setError(error);
        callback != null && callback(context);
      }

      try {
        b2bapis.b2bcontrol.captureScreen(onSuccessCaptureScreen, onErrorCaptureScreen);
      } catch(e) {
        error != null && error.setError(9020, `[Tizen]: captureScreen exception ${e.message}`);
        context != null && context.setError(error);
        callback != null && callback(context);
      }
    }

    //------------------------------------
    public promise_captureScreen(soundProperties: amGeneralCaptureScreenInfo.am_general.A_CaptureScreenInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }


    //-------------------------------
    //       Check Screen
    //  The Check Screen feature judges whether there are abnormalities at the edges of the screen. R, G, and B OSDs
    //     are formed on the screen at one second intervals and an RGB Sensor tests the areas.
    //  If set to On, the Check Screen feature is enabled.
    //  If set to Off, the Check Screen feature is disabled.
    // When the Portrait mode is On, the Check Screen feature is Off and deactivated    
    //----------------------------------

    //--------------------------
    public enableCheckScreen(enabledCheckScreen: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //-------------------------
    public promise_enableCheckScreen(enabledCheckScreen: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //------------------------------------------------------------------------
    //Fail Over
    //The input source with the highest priority will be selected.
    //-- Off
    //   The Auto-Fail Over feature is disabled.
    //--- Auto
    // The input source changes according to the specified order. When several input sources are found, the input
    // source with the highest priority will be selected.
    // Priority: 1.HDMI, 2.DVI-D, 3.DISPLAYPORT, and 4.OPS, 5.RGB, 6.Internal Memory
    //-- Manual
    // The input source changes according to the specified order. When several input sources are found, the input
    // source with the highest priority will be selected.
    // y You can set Priority 1 - Priority 6.
    //-- NOTE:
    // Content copied using My Media will be saved in the root folder.
    // If the input is switched to Internal Memory due to Fail Over, videos files or image files saved in the top-level
    //   folder in the Internal Memory will be displayed.
    // If there are both video files and image files in the same folder, then only the video files will be played.
    // Content distributed by SuperSign will be saved in the folder named 'normal' in the internal memory. Therefore,
    //content distributed by SuperSign will not be automatically played due to Fail Over.
    //---------------------

    //------------------------------
    public setFailureMode(failureModeInfo: amGeneralFailureModeInfo.am_general.A_FailureModeInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //------------------------------
    public promise_setFailureMode(failureModeInfo: amGeneralFailureModeInfo.am_general.A_FailureModeInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    public getFailureMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //------------------------------
    public promise_getFailureMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //--------------------
    // Intelligent Auto
    // Adjusts the size, position, and phase of the monitor's screen automatically at the recognized resolution. 
    // This feature is available only in RGB input mode (to be checked).
    //----------------------
    //----------------------------
    public setIntelligentAuto(enabledIntelligentAuto: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    } 

    //----------------------------
    public promise_setIntelligentAuto(enabledIntelligentAuto: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    } 

    //----------------------------
    public getIntelligentAuto(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    } 

    //----------------------------
    public promise_getIntelligentAuto(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    } 


    //------------------
    //  getSignageInfo supplies all general information about the signage tv
    //    like:
    // 		    Portrait mode. Refer to the Signage.OsdPortraitMode for more detail.
		//        ISM(Image Sticking Minimization) method. Refer to the Signage.IsmMethod for more detail.
		//        Digital Audio Input Mode. An object with input type/Signage.DigitalAudioInput pair.
    //        check screen information
    //-------------------

    //----------------------------
    public getSignageInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    //-----------------------------
    public promise_getSignageInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    //------------------
    //  portraitMode
    //------------------

    //---------------------------
    public setPortraitMode(portraitMode: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    //------------------------
    public promise_setPortraitMode(portraitMode: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    //--------------------------
    public getPortraitMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    //---------------------------
    public promise_getPortraitMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    //------------------
    //  studioMode
    //------------------

    //-------------------------------
    public setStudioMode(studioMode: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    //---------------------------------
    public promise_setStudioMode(studioMode: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    //----------------------------------
    public getStudioMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    //---------------------------------
    public promise_getStudioMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    //------------------
    //  setISMMethod
    //------------------
    
    //------------------------------
    public setISMMethod(ismMethod: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }
    
    //------------------------------
    public promise_setISMMethod(ismMethod: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    //------------------------------
    getISMMethod(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }
    
    //------------------------------
    promise_getISMMethod(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    //------------------
    //  setTileInfo
    //
    //You can configure the integrated screen in the same way as each screen is configured.
    // To use this function
    //    - Must be used with multiple monitors.
    //    - Must be operated after connecting the monitors using DP Cable and distributor.
    //    - Tile mode: row x column (r = 1 to 15, c = 1 to 15)
    //    - 15 x 15 available
    //-- Row (1-15)
    //   Set the number of Tile rows.
    //-- Column (1-15)
    //   Set the number of Tile columns.
    //-- Tile ID (1-225)
    //   Set an ID for the Tile.
    // The ID you selected will be displayed on the screen.
    //-- Natural
    //   For more natural display, the image is partly omitted to account for the distance between the screens.
    //-- Reset
    //   Resets the Tile Mode option.
    //    If you select Tile Reset, all Tile settings are reset and the screen returns to the Full Screen Mode.
    //------------------

    //------------------------------
    public setTileInfo(tileInfo: amGeneralTileInfo.am_general.A_TileInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }


    //------------------------------
    public promise_setTileInfo(tileInfo: amGeneralTileInfo.am_general.A_TileInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    //------------------------------
    public getTileInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    //------------------------------
    public promise_getTileInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    //------------------
    //  register/unregister/get Monitoring Info
    //-----------------

    //------------------------------
    public registerSystemMonitorInfo(systemMonitoringInfo: amGeneralSystemMonitorInfo.am_general.A_SystemMonitorInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    //------------------------------
    public promise_registerSystemMonitorInfo(systemMonitoringInfo: amGeneralSystemMonitorInfo.am_general.A_SystemMonitorInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //------------------------------
    public unregisterSystemMonitorInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    //------------------------------
    public promise_unregisterSystemMonitorInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    //------------------------------
    public getSystemMonitorInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    //------------------------------
    public promise_getSystemMonitorInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

  

    //------------------
    //  get usage data : uptime, etc.
    //------------------

    //------------------------------
    public getUsageData(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    //------------------------------
    public promise_getUsageData(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }



    //---------------------
    //  get usage permissions
    //----------------------

    //------------------------------
    public setUsagePermissions(usagePermissions: amGeneralUsagePermissions.am_general.A_UsagePermissions, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    //------------------------------
    public promise_setUsagePermissions(usagePermissions: amGeneralUsagePermissions.am_general.A_UsagePermissions, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    //------------------------------
    public getUsagePermissions(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    //------------------------------
    public promise_getUsagePermissions(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

  }
} 