/**
 * SAPI Sample Data - SysInfo
 */


(function(){  

var data_5800 = {
			"battery":{
				"batterystrength":{
					"Status":85,
					"Entity":"Battery",
					"Key":"BatteryStrength",
					"close":function(){}
					},
				"chargingstatus":{
					"Status":0,
					"Entity":"Battery",
					"Key":"ChargingStatus",
					"close":function(){}
					}
			},
			"connectivity":{
				"bluetooth":{
					"Status":1,
					"Entity":"Connectivity",
					"Key":"BlueTooth",
					"close":function(){}
					},
				"infrared":{
					"Status":-1,
					"Entity":"Connectivity",
					"Key":"InfraRed",
					"close":function(){}
					},
				"activeconnections":{
					"ConnectionList":[{
								"IAPID":5,
								"IAPName":"Browser",
								"IAPConnectionName":"",
								"NetworkName":"Browser",
								"ConnectionType":7,
								"ConnectionStatus":1,
								"close":function(){}
								},{
								"IAPID":1,
								"IAPName":"airtelgprs.com",
								"IAPConnectionName":"Mobile Office",
								"NetworkName":"GPRS",
								"ConnectionType":6,
								"ConnectionStatus":1,
								"close":function(){}
								}],
					"Entity":"Connectivity",
					"Key":"ActiveConnections",
					"close":function(){}
				},					
				"wlanmacaddress":{
					"StringData":"00:21:fe:97:c5:27",
					"Entity":"Connectivity",
					"Key":"WLanMacAddress",
					"close":function(){}
					}
			},
			"device":{
				"firmwareversion":{
					"StringData":"V 20.0.012 RnD\n04-03-09\nRM-356\n(c)NMP",
					"Entity":"Device",
					"Key":"FirmwareVersion",
					"close":function(){}
					},
				"platformversion":{
					"MajorVersion":"5",
					"MinorVersion":"0",
					"Entity":"Device",
					"Key":"PlatformVersion",
					"close":function(){}
					},
				"producttype":{
					"StringData":"RM-356",
					"Entity":"Device",
					"Key":"ProductType",
					"close":function(){}
					},
				"manufacturer":{
					"StringData":"Nokia",
					"Entity":"Device",
					"Key":"Manufacturer",
					"close":function(){}
					},
				"machineid":{
					"Status":536926806,
					"Entity":"Device",
					"Key":"MachineId",
					"close":function(){}
					},
				"phonemodel":{
					"StringData":"5800 XpressMusic",
					"Entity":"Device",
					"Key":"PhoneModel",
					"close":function(){}
					},
				"imei":{
					"StringData":"004401102480155",
					"Entity":"Device",
					"Key":"IMEI",
					"close":function(){}
					}
			},
			"display":{
				"brightness":{
					"Status":50,
					"Entity":"Display",
					"Key":"Brightness",
					"close":function(){}
					},
				"screensavertimeout":{
					"Status":15,
					"Entity":"Display",
					"Key":"ScreenSaverTimeout",
					"close":function(){}
					},
				"keyguardtime":{
					"Status":60,
					"Entity":"Display",
					"Key":"KeyGuardTime",
					"close":function(){}
					},
				"keyguardtime":{
					"Status":60,
					"Entity":"Display",
					"Key":"KeyGuardTime",
					"close":function(){}
					},
				"autolocktime":{
					"Status":0,
					"Entity":"Display",
					"Key":"AutoLockTime",
					"close":function(){}
					},
				"autolockstatus":{
					"Status":0,
					"Entity":"Display",
					"Key":"AutoLockStatus",
					"close":function(){}
					},
				"lighttimeout":{
					"Status":45,
					"Entity":"Display",
					"Key":"LightTimeout",
					"close":function(){}
					},
				"displayresolution":{
					"XPixels":640,
					"YPixels":360,
					"Entity":"Display",
					"Key":"DisplayResolution",
					"close":function(){}
					},
				"displayorientation":{
					"Status":3,
					"Entity":"Display",
					"Key":"DisplayOrientation",
					"close":function(){}
					},
				"wallpaper":{
					"StringData":"C://Data//Others//wallpaper.jpeg",
					"Entity":"Display",
					"Key":"Wallpaper",
					"close":function(){}
					}
				
			},
			"features":{
				"bluetooth":{
					"Status":1,
					"Entity":"Features",
					"Key":"BlueTooth",
					"close":function(){}
					},
				"infrared":{
					"Status":0,
					"Entity":"Features",
					"Key":"InfraRed",
					"close":function(){}
					},
				"camera":{
					"Status":1,
					"Entity":"Features",
					"Key":"CAMERA",
					"close":function(){}
					},
				"memorycard":{
					"Status":1,
					"Entity":"Features",
					"Key":"MemoryCard",
					"close":function(){}
					},
				"fmradio":{
					"Status":1,
					"Entity":"Features",
					"Key":"FMRADIO",
					"close":function(){}
					},
				"qwerty":{
					"Status":1,
					"Entity":"Features",
					"Key":"QWERTY",
					"close":function(){}
					},
				"wlan":{
					"Status":1,
					"Entity":"Features",
					"Key":"WLAN",
					"close":function(){}
					},
				"usb":{
					"Status":1,
					"Entity":"Features",
					"Key":"USB",
					"close":function(){}
					},
				"pen":{
					"Status":1,
					"Entity":"Features",
					"Key":"Pen",
					"close":function(){}
					},
				"led":{
					"Status":0,
					"Entity":"Features",
					"Key":"LED",
					"close":function(){}
					},
				"coverui":{
					"Status":0,
					"Entity":"Features",
					"Key":"CoverUI",
					"close":function(){}
					},
				"sidevolumekeys":{
					"Status":1,
					"Entity":"Features",
					"Key":"SideVolumeKeys",
					"close":function(){}
					},
				"vibra":{
					"Status":1,
					"Entity":"Features",
					"Key":"Vibra",
					"close":function(){}
					}
			},
			"general":{
				"connectedaccessories":{
					"AccessoryList":[{"AccessoryType":0,"AccessoryState":1}],
					"Entity":"General",
					"Key":"ConnectedAccessories",
					"close":function(){}
					},
				"accessorystatus":{
					"AccessoryInfo":{"AccessoryType":0,"AccessoryState":0},
					"Entity":"General",
					"Key":"AccessoryStatus",
					"close":function(){}
					},
				"inputlanguage":{
					"Status":1,
					"Entity":"General",
					"Key":"InputLanguage",
					"close":function(){}
					},
				"supportedlanguages":{
					"LanguageList":[1,2,3,5,13,4],
					"Entity":"General",
					"Key":"SupportedLanguages",
					"close":function(){}
					},
				"predictivetext":{
					"Status":0,
					"Entity":"General",
					"Key":"PredictiveText",
					"close":function(){}
					},
				"vibraactive":{
					"Status":1,
					"Entity":"General",
					"Key":"VibraActive",
					"close":function(){}
					},
				"availableusbmodes":{
					"StringList":["PC Suite","Mass storage","Image transfer","Media transfer"],
					"Entity":"General",
					"Key":"AvailableUSBModes",
					"close":function(){}
					},
				"activeusbmode":{
					"StringData":"Mass storage",
					"Entity":"General",
					"Key":"ActiveUSBMode",
					"close":function(){}
					},
				"flipstatus":{
					"Status":-1,
					"Entity":"General",
					"Key":"FlipStatus",
					"close":function(){}
					},
				"gripstatus":{
					"Status":1,
					"Entity":"General",
					"Key":"GripStatus",
					"close":function(){}
					},
				"displaylanguage": {
						"Entity": "General",
						"Key": "DisplayLanguage",
						"StringData": "en-GB",
						"close": function(){}
					}				
			},
			"memory":{
				"listdrives":{
					"DriveList":["C:\\","D:\\","E:\\","Z:\\"],
					"Entity":"Memory",
					"Key":"ListDrives",
					"close":function(){}
					},
				"memorycard":{
					"Status":1,
					"Entity":"Memory",
					"Key":"MemoryCard",
					"close":function(){}
					},
				"driveinfo":{
					"Drive": {
							"C:\\": {
								"Drive": "C:\\",
								"CriticalSpace": 131072,
								"MediaType": 9,
								"TotalSpace": 90210304,
								"FreeSpace": 79319040,
								"DriveName": "",
								"BatterState": 0,
								"close":function(){}
								},
							"D:\\": {
								"Drive": "D:\\",
								"CriticalSpace": 2700000,
								"MediaType": 5,
								"TotalSpace": 52469760,
								"FreeSpace": 52457472,
								"DriveName": "",
								"BatterState": 0,
								"close":function(){}
								},
							"Z:\\": {
								"Drive": "Z:\\",
								"CriticalSpace": 131072,
								"MediaType": 7,
								"TotalSpace": 0,
								"FreeSpace": 0,
								"DriveName": "RomDrive",
								"BatterState": 0,
								"close":function(){}
								}
							},
					"Entity":"Memory",
					"Key":"DriveInfo",
					"close":function(){}
					}
			},
			"network":{
				"registrationstatus":{
					"Status":4,
					"Entity":"Network",
					"Key":"RegistrationStatus",
					"close":function(){}
					},
				"networkmode":{
					"Status":0,
					"Entity":"Network",
					"Key":"NetworkMode",
					"close":function(){}
					},
				"signalstrength":{
					"Status":61,
					"Entity":"Network",
					"Key":"SignalStrength",
					"close":function(){}
					},
				"currentnetwork":{
					"NetworkName":"Airtel",
					"NetworkStatus":1,
					"NetworkMode":1,
					"CountryCode":"404",
					"NetworkCode":"45",
					"LocationStatus":false,
					"Entity":"Network",
					"Key":"CurrentNetwork",
					"close":function(){}
					}
			}
	}; 
	/**
	 * register data!
	 */
	device.implementation.loadData('Service.SysInfo', '', data_5800);

})();
