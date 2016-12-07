/**
 * SAPI Sample Data - MediaManagement
 */

(function(){

	var music_data = [{
		"FileNameAndPath":"E:\\Sounds\\Digital\\Album1\\Breathless.mp3",
		"Type":"Media",
		"FileName":"Breathless",
		"FileExtension":".mp3",
		"Drive":"E:",
		"MimeType":"audio/mpeg",
		"MediaType":1,
		"FileDate":"Friday, 12 February, 2009 12:01:24 am",
		"FileSize":4552794,
		"Artist":"ABC",
		"SongName":"Breathless",
		"TrackNumber":"2",
		"Album":"Album1",
		"Genre":"Pop",
		"Composer":"XYZ",
		"close": function(){}
	},{
		"FileNameAndPath":"E:\\Sounds\\Digital\\Album1\\New song.mp3",
		"Type":"Media",
		"FileName":"music1",
		"FileExtension":".mp3",
		"Drive":"E:",
		"MimeType":"audio/mpeg",
		"MediaType":1,
		"FileDate":"Friday, 10 February, 2009 12:01:24 am",
		"FileSize":1232794,
		"Artist":"ABC",
		"SongName":"music1",
		"TrackNumber":"1",
		"Album":"bhoole bisre geet",
		"Genre":"Pop",
		"Composer":"Marc Seales",
		"close": function(){}
	},{		
		"FileNameAndPath":"E:\\Sounds\\Digital\\Album1\\Classic song.mp3",
		"Type":"Media",
		"FileName":"Classic song",
		"FileExtension":".mp3",
		"Drive":"E:",
		"MimeType":"audio/mpeg",
		"MediaType":1,
		"FileDate":"Friday, 11 February, 2009 12:01:24 am",
		"FileSize":3212794,
		"Artist":"ABC",
		"SongName":"Classic song",
		"TrackNumber":"3",
		"Album":"Album1",
		"Genre":"Pop",
		"Composer":"XYZ",
		"close": function(){}
	},{		
		"FileNameAndPath":"E:\\Sounds\\Digital\\Album1\\Folk sonk.mp3",
		"Type":"Media",
		"FileName":"Folk sonk",
		"FileExtension":".mp3",
		"Drive":"E:",
		"MimeType":"audio/mpeg",
		"MediaType":1,
		"FileDate":"Friday, 9 February, 2009 12:01:24 am",
		"FileSize":3412794,
		"Artist":"ABC",
		"SongName":"Folk sonk",
		"TrackNumber":"4",
		"Album":"Album1",
		"Genre":"Pop",
		"Composer":"XYZ",
		"close": function(){}
	},{		
		"FileNameAndPath":"E:\\Sounds\\Digital\\Album1\\National anthem.mp3",
		"Type":"Media",
		"FileName":"National anthem",
		"FileExtension":".mp3",
		"Drive":"E:",
		"MimeType":"audio/mpeg",
		"MediaType":1,
		"FileDate":"Friday, 14 February, 2009 12:01:24 am",
		"FileSize":4512794,
		"Artist":"ABC",
		"SongName":"National anthem",
		"TrackNumber":"5",
		"Album":"Album1",
		"Genre":"Pop",
		"Composer":"XYZ",
		"close": function(){}
	},{
		"FileNameAndPath":"E:\\Sounds\\Digital\\Album1\\Dance sequence.mp3",
		"Type":"Media",
		"FileName":"Dance sequence",
		"FileExtension":".mp3",
		"Drive":"E:",
		"MimeType":"audio/mpeg",
		"MediaType":1,
		"FileDate":"Friday, 15 February, 2009 12:01:24 am",
		"FileSize":9110000,
		"Artist":"ABC",
		"SongName":"Dance sequence",
		"TrackNumber":"6",
		"Album":"Album1",
		"Genre":"Pop",
		"Composer":"XYZ",
		"close": function(){}
	}];
	
	var sound_data = [{
		"FileNameAndPath":"E:\\Sounds\\Simple\\Dance sequence-old.mp3",
		"Type":"Media",
		"FileName":"Dance sequence-old",
		"FileExtension":".mp3",
		"Drive":"E:",
		"MimeType":"audio/mpeg",
		"MediaType":1,
		"FileDate":"Friday, 11 February, 2009 12:01:24 am",
		"FileSize":1002794,
		"close": function(){}
	},{
		"FileNameAndPath": "E:\\Sounds\\Simple\\Rooster.mp3",
		"Type": "Media",
		"FileName": "Rooster",
		"FileExtension": ".mp3",
		"Drive": "E:",
		"MimeType": "audio/mpeg",
		"MediaType": 1,
		"FileDate": "Friday, 8 February, 2009 12:01:24 am",
		"FileSize": 911000,
		"close": function(){}
	
	}];
	var image_data = [{
		"FileNameAndPath":"E:\\IMAGES\\Water.JPG",
		"Type":"Media",
		"FileName":"Water",
		"FileExtension":".JPG",
		"Drive":"E:",
		"MimeType":"image/jpeg",
		"MediaType":3,
		"FileDate":"Monday, 04 August, 2008 8:31:46 pm",
		"FileSize":25275,
		"close": function(){}
	},{
		"FileNameAndPath":"E:\\IMAGES\\Beach.JPG",
		"Type":"Media",
		"FileName":"Beach",
		"FileExtension":".JPG",
		"Drive":"E:",
		"MimeType":"image/jpeg",
		"MediaType":3,
		"FileDate":"Wednesday, 28 May, 2008 8:52:16 am",
		"FileSize":35151,
		"close": function(){}
	},{
		"FileNameAndPath":"E:\\IMAGES\\CountrySide.jpg",
		"Type":"Media",
		"FileName":"CountrySide",
		"FileExtension":".jpg",
		"Drive":"E:",
		"MimeType":"image/jpeg",
		"MediaType":3,
		"FileDate":"Monday, 24 March, 2008 12:27:32 am",
		"FileSize":44318,
		"close": function(){}
	},{
		"FileNameAndPath":"E:\\IMAGES\\CoolBlue.JPG",
		"Type":"Media",
		"FileName":"CoolBlue",
		"FileExtension":".JPG",
		"Drive":"E:",
		"MimeType":"image/jpeg",
		"MediaType":3,
		"FileDate":"Monday, 04 August, 2008 8:31:46 pm",
		"FileSize":25275,
		"close": function(){}
	},{
		"FileNameAndPath":"E:\\IMAGES\\Swimming.JPG",
		"Type":"Media",
		"FileName":"Swimming",
		"FileExtension":".JPG",
		"Drive":"E:",
		"MimeType":"image/jpeg",
		"MediaType":3,
		"FileDate":"Wednesday, 28 May, 2008 8:52:16 am",
		"FileSize":35151,
		"close": function(){}
	},{
		"FileNameAndPath":"E:\\IMAGES\\Sky.jpg",
		"Type":"Media",
		"FileName":"Sky",
		"FileExtension":".jpg",
		"Drive":"E:",
		"MimeType":"image/jpeg",
		"MediaType":3,
		"FileDate":"Monday, 24 March, 2008 12:27:32 am",
		"FileSize":44318,
		"close": function(){}
	},{
		"FileNameAndPath":"E:\\IMAGES\\john_terry.jpg",
		"Type":"Media",
		"FileName":"john_terry",
		"FileExtension":".jpg",
		"Drive":"E:",
		"MimeType":"image/jpeg",
		"MediaType":3,
		"FileDate":"Monday, 24 March, 2008 12:27:32 am",
		"FileSize":44318,
		"close": function(){}
	}];

	var video_data = [{
		"FileNameAndPath":"C:\\Data\\Videos\\Inside water.3gp",
		"Type":"Media",
		"FileName":"Inside water",
		"FileExtension":".3gp",
		"Drive":"C:",
		"MimeType":"video/3gpp",
		"MediaType":4,
		"FileDate":"Wednesday, 08 April, 2009 5:04:18 pm",
		"FileSize":1103067,
		"close": function(){}
	},{
		"FileNameAndPath":"C:\\Data\\Videos\\Daring.mp4",
		"Type":"Media",
		"FileName":"Daring",
		"FileExtension":".mp4",
		"Drive":"C:",
		"MimeType":"video/mp4",
		"MediaType":4,
		"FileDate":"Wednesday, 07 April, 2009 5:04:18 pm",
		"FileSize":1020200,
		"close": function(){}
	},{
		"FileNameAndPath":"C:\\Data\\Videos\\On the train.mp4",
		"Type":"Media",
		"FileName":"On the train",
		"FileExtension":".mp4",
		"Drive":"C:",
		"MimeType":"video/mp4",
		"MediaType":4,
		"FileDate":"Wednesday, 10 April, 2009 5:04:18 pm",
		"FileSize":9090900,
		"close": function(){}
	},{
		"FileNameAndPath":"C:\\Data\\Videos\\video1.mp4",
		"Type":"Media",
		"FileName":"video1",
		"Artist":"Kishore",
		"Genre":"Rock",
		"FileExtension":".mp4",
		"Drive":"C:",
		"MimeType":"video/mp4",
		"MediaType":4,
		"FileDate":"Wednesday, 21 May, 2009 5:04:18 pm",
		"FileSize":9090900,
		"close": function(){}
	}];
	
	var streaming_data = [{}]; 	
		
    /**
     * register data!
     */
    device.implementation.loadData('Service.MediaManagement', 'Music', music_data);
    device.implementation.loadData('Service.MediaManagement', 'Sound', sound_data);
    device.implementation.loadData('Service.MediaManagement', 'Image', image_data);
    device.implementation.loadData('Service.MediaManagement', 'Video', video_data);
    device.implementation.loadData('Service.MediaManagement', 'StreamingURL', streaming_data);

})();
	