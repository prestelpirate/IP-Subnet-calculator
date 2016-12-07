/**
 * SAPI Sample Data - Sensor
 */

(function(){

var property = {
	"AccelerometerAxis":{
		"Availability":{
			"PropertyId":"Availability",
			"PropertyDataType":0,
			"ItemIndex":-1,
			"ReadOnly":true,
			"PropertyValue":1
			},
		"ChannelAccuracy":{
			"PropertyId":"ChannelAccuracy",
			"PropertyDataType":1,
			"ItemIndex":-1,
			"ReadOnly":true,
			"PropertyValue":10
			},
		"ChannelDataFormat":
		{
			"PropertyId":"ChannelDataFormat",
			"PropertyDataType":0,
			"ItemIndex":-1,
			"ReadOnly":true,
			"PropertyValue":2
		},
		"ChannelScale":
		{
			"PropertyId":"ChannelScale",
			"PropertyDataType":0,
			"ItemIndex":-1,
			"ReadOnly":true,
			"PropertyValue":0
		},
		"ChannelUnit":
		{
			"PropertyId":"ChannelUnit",
			"PropertyDataType":0,
			"ItemIndex":-1,
			"ReadOnly":true,
			"PropertyValue":10
		},
		"ConnectionType":
		{
			"PropertyId":"ConnectionType",
			"PropertyDataType":0,
			"ItemIndex":-1,
			"ReadOnly":true,
			"PropertyValue":1
		},
		"DataRate":
		{
			"PropertyId":"DataRate",
			"PropertyDataType":0,
			"ItemIndex":-1,
			"ReadOnly":true,
			"PropertyValue":0
		},
		"Description":
		{
			"PropertyId":"Description",
			"PropertyDataType":2,
			"ItemIndex":-1,
			"ReadOnly":true,
			"PropertyValue":"Accelerometer"
		},
		"MeasureRange":
		{
			"PropertyId":"MeasureRange",
			"PropertyDataType":1,
			"ItemIndex":-1,
			"ReadOnly":true,
			"PropertyValue":0
		},
		"ScaledRange":
		{
			"PropertyId":"ScaledRange",
			"PropertyDataType":0,
			"ItemIndex":-1,
			"ReadOnly":true,
			"PropertyValue":8
		}
	},
	"AccelerometerDoubleTapping":
	{
		"Availability":
		{
			"PropertyId":"Availability",
			"PropertyDataType":0,
			"ItemIndex":-1,
			"ReadOnly":true,
			"PropertyValue":1
		},
		"ChannelAccuracy":
		{
			"PropertyId":"ChannelAccuracy",
			"PropertyDataType":1,
			"ItemIndex":-1,
			"ReadOnly":true,
			"PropertyValue":10
		},
		"ChannelDataFormat":
		{
			"PropertyId":"ChannelDataFormat",
			"PropertyDataType":0,
			"ItemIndex":-1,
			"ReadOnly":true,
			"PropertyValue":2
		},
		"ChannelScale":
		{
			"PropertyId":"ChannelScale",
			"PropertyDataType":0,
			"ItemIndex":-1,
			"ReadOnly":true,
			"PropertyValue":0
		},
		"ChannelUnit":
		{
			"PropertyId":"ChannelUnit",
			"PropertyDataType":0,
			"ItemIndex":-1,
			"ReadOnly":true,
			"PropertyValue":10
		},
		"ConnectionType":
		{
			"PropertyId":"ConnectionType",
			"PropertyDataType":0,
			"ItemIndex":-1,
			"ReadOnly":true,
			"PropertyValue":1
		},
		"Description":
		{
			"PropertyId":"Description",
			"PropertyDataType":2,
			"ItemIndex":-1,
			"ReadOnly":true,
			"PropertyValue":"Accelerometer"
		},
		"MeasureRange":
		{
			"PropertyId":"MeasureRange",
			"PropertyDataType":1,
			"ItemIndex":-1,
			"ReadOnly":true,
			"PropertyValue":0
		},
		"ScaledRange":
		{
			"PropertyId":"ScaledRange",
			"PropertyDataType":0,
			"ItemIndex":-1,
			"ReadOnly":true,
			"PropertyValue":8
		}
	},
	"Orientation":
	{
		"Availability":
		{
			"PropertyId":"Availability",
			"PropertyDataType":0,
			"ItemIndex":-1,
			"ReadOnly":true,
			"PropertyValue":1
		},
		"DataRate":
		{
			"PropertyId":"DataRate",
			"PropertyDataType":0,
			"ItemIndex":-1,
			"ReadOnly":true,
			"PropertyValue":0
		},
		"MeasureRange":
		{
			"PropertyId":"MeasureRange",
			"PropertyDataType":0,
			"ItemIndex":-1,
			"ReadOnly":true,
			"PropertyValue":0
		}
	},
	"Rotation":
	{
		"Availability":
		{
			"PropertyId":"Availability",
			"PropertyDataType":0,
			"ItemIndex":-1,
			"ReadOnly":true,
			"PropertyValue":1
		},
		"ChannelAccuracy":
		{
			"PropertyId":"ChannelAccuracy",
			"PropertyDataType":1,
			"ItemIndex":-1,
			"ReadOnly":true,
			"PropertyValue":0.041666666666666664
		},
		"DataRate":
		{
			"PropertyId":"DataRate",
			"PropertyDataType":0,
			"ItemIndex":-1,
			"ReadOnly":true,
			"PropertyValue":0
		},
		"MeasureRange":
		{
			"PropertyId":"MeasureRange",
			"PropertyDataType":1,
			"ItemIndex":-1,
			"ReadOnly":true,
			"PropertyValue":359
		}
	}
};
var data_all =[{
		"ChannelId":7,
		"ContextType":2,
		"Quantity":10,
		"ChannelType":270553214,
		"Location":"NoLoc",
		"VendorId":"Nokia",
		"DataItemSize":24,
		"ChannelDataTypeId":270553214
		},
		{
		"ChannelId":8,
		"ContextType":2,
		"Quantity":11,
		"ChannelType":270553217,
		"Location":"NoLoc",
		"VendorId":"Nokia",
		"DataItemSize":16,
		"ChannelDataTypeId":270553215
		},
		{
		"ChannelId":10,
		"ContextType":3,
		"Quantity":12,
		"ChannelType":270553224,
		"Location":"NoLoc",
		"VendorId":"Nokia",
		"DataItemSize":16,
		"ChannelDataTypeId":270553224
		},
		{
		"ChannelId":11,
		"ContextType":3,
		"Quantity":13,
		"ChannelType":270553225,
		"Location":"NoLoc",
		"VendorId":"Nokia",
		"DataItemSize":24,
		"ChannelDataTypeId":270553225
		}];
		
var data_accelerometerAxis = [{
		"ChannelId":7,
		"ContextType":2,
		"Quantity":10,
		"ChannelType":270553214,
		"Location":"NoLoc",
		"VendorId":"Nokia",
		"DataItemSize":24,
		"ChannelDataTypeId":270553214
		}];
		
var data_accelerometerDoubleTapping = [{
		"ChannelId":8,
		"ContextType":2,
		"Quantity":11,
		"ChannelType":270553217,
		"Location":"NoLoc",
		"VendorId":"Nokia",
		"DataItemSize":16,
		"ChannelDataTypeId":270553215
		}];
		
var data_orientation = [{
		"ChannelId":10,
		"ContextType":3,
		"Quantity":12,
		"ChannelType":270553224,
		"Location":"NoLoc",
		"VendorId":"Nokia",
		"DataItemSize":16,
		"ChannelDataTypeId":270553224
		}];
		
var data_rotation = [{
		"ChannelId":11,
		"ContextType":3,
		"Quantity":13,
		"ChannelType":270553225,
		"Location":"NoLoc",
		"VendorId":"Nokia",
		"DataItemSize":24,
		"ChannelDataTypeId":270553225
		}];


var dataRet_accelerometerAxis = [{
		"DataType":"AxisData",
		"TimeStamp": Date.parse(new Date()),
		"XAxisData":30,
		"YAxisData":30,
		"ZAxisData":30,
		"close" : function() {}
		}];
		
var dataRet_accelerometerDoubleTapping = [{
		"DataType":"DoubleTappingData",
		"TimeStamp": Date.parse(new Date()),		
		"DeviceDirection":30
		}];
		
var dataRet_orientation = [{
		"DataType":"OrientationData",
		"TimeStamp": Date.parse(new Date()),
		"DeviceOrientation":"DisplayUp",
		"close" : function() {}	
		}];
		
var dataRet_rotation = [{
		"DataType":"RotationData",
		"TimeStamp": Date.parse(new Date()),
		"XRotation":30,
		"YRotation":35,
		"ZRotation":30,
		"close" : function() {}
		}];

    /**
     * register data!
     */
	device.implementation.loadData('Service.Sensor','SensorProperty',property);
    device.implementation.loadData('Service.Sensor', 'All', data_all);
    device.implementation.loadData('Service.Sensor', 'AccelerometerAxis', data_accelerometerAxis);
    device.implementation.loadData('Service.Sensor', 'AccelerometerDoubleTapping', data_accelerometerDoubleTapping);
    device.implementation.loadData('Service.Sensor', 'Orientation', data_orientation);
    device.implementation.loadData('Service.Sensor', 'Rotation', data_rotation);
    device.implementation.loadData('Service.Sensor', 'AccelerometerAxisRet', dataRet_accelerometerAxis);
    device.implementation.loadData('Service.Sensor', 'AccelerometerDoubleTappingRet', dataRet_accelerometerDoubleTapping);
    device.implementation.loadData('Service.Sensor', 'OrientationRet', dataRet_orientation);
    device.implementation.loadData('Service.Sensor', 'RotationRet', dataRet_rotation);

})();
	