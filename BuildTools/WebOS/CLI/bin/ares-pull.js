var path=require("path"),log=require("npmlog"),nopt=require("nopt"),pullLib=require("./../lib/pull"),commonTools=require("./../lib/common-tools"),version=commonTools.version,cliControl=commonTools.cliControl,help=commonTools.help,setupDevice=commonTools.setupDevice,appdata=commonTools.appdata,eula=commonTools.eula,processName=path.basename(process.argv[1]).replace(/.js/,"");
process.on("uncaughtException",function(a){log.error("uncaughtException",a.toString());log.info("uncaughtException",a.stack);cliControl.end(-1)});
var knownOpts={device:[String,null],"device-list":Boolean,version:Boolean,help:Boolean,ignore:Boolean,level:"silly verbose info http warn error".split(" "),"wait-for-device":Boolean},shortHands={d:["--device"],D:["--device-list"],V:["--version"],h:["--help"],i:["--ignore"],v:["--level","verbose"],w:["--wait-for-device"]},argv=nopt(knownOpts,shortHands,process.argv,2);log.heading=processName;log.level=argv.level||"warn";log.verbose("argv",argv);eula.checkEula(function(a){if(a)return finish(a);proceed()});
function proceed(){var a;argv["device-list"]?setupDevice.showDeviceListAndExit():argv.version?version.showVersionAndExit():argv.help?(showUsage(),cliControl.end()):a=pull;a&&version.checkNodeVersion(function(b){a(finish)})}var options={appId:"com.ares.defaultName",device:argv.device,waitForDevice:argv["wait-for-device"],ignore:argv.ignore,sourcePath:argv.argv.remain[0],destinationPath:argv.argv.remain[1]};function showUsage(){help.display(processName,appdata.getConfig(!0).profile)}
function pull(a){options.destinationPath||(options.destinationPath=".");options.sourcePath&&options.destinationPath||(showUsage(),cliControl.end(-1));pullLib.pull(options,finish)}function finish(a,b){log.info("finish():","err:",a);a?(log.error(processName+": "+a.toString()),cliControl.end(-1)):(log.info("finish():",b),b&&b.msg&&console.log(b.msg),cliControl.end())};
