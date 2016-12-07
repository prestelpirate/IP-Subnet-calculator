/**
 * SAPI Sample Data - Location
 */

(function(){

		
var data_basicLocationInformation = {
			"Longitude":0.02892424,
			"Latitude":51.508074,
			"Altitude":836.5
		}
		
var data_genericLocationInfo = {
			"Longitude":0.02892424,
			"Latitude":51.508074,
			"Altitude":836,
			"HorizontalSpeed":0.05999999865889549,
			"HorizontalSpeedError":1.0199999809265137,
			"SatelliteNumView":11,
			"SatelliteNumViewUsed":7,
			"Heading":203.89999389648438,
			"HeadingError":2.89898989898232,
			"MagneticCourse":205.89999389600000,
			"MagneticCourseError":1.09090389600000,
			"TrueCourse":203.89999389648438,
			"TrueCourseError":2.89898989898232,
			"MagneticHeading":205.89999389600000,
			"MagneticHeadingError":1.09090389600000
		}; 

    /**
     * register data!
     */
    device.implementation.loadData('Service.Location', 'BasicLocationInformation', data_basicLocationInformation);
    device.implementation.loadData('Service.Location', 'GenericLocationInfo', data_genericLocationInfo);

})();
	