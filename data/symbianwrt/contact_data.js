/**
 * SAPI Sample Data - Contacts
 */

(function(){


	var data_contacts = [{
	    "id": "1234",
	    "FirstName": {
	        "Label": "First name",
	        "Value": "Alice"
	    },
	    "LastName": {
	        "Label": "Last name",
	        "Value": "Moller"
	    },
	    "LandPhoneGen": {
	        "Label": "Telephone",
	        "Value": "0230328732"
	    },
	    "SyncClass": {
	        "Label": "Synchronisation",
	        "Value": "private"
	    }, 
		"close" : function() {}
	}];
	
	var data_groups = [{
        "id": "7890",
        "GroupLabel": "Silver club #5488",
        "Contents": ["1234"],
		"close" : function() {}
    }];	
		
    var data_database = [{
        "DBUri": "cntdb://c:contacts.cdb"
    },{
        "DBUri": "sim://global_adn"
	}];
    
    
    /**
     * register data!
     */
    device.implementation.loadData('Service.Contact', 'Contact', data_contacts);
    device.implementation.loadData('Service.Contact', 'Group', data_groups);
    device.implementation.loadData('Service.Contact', 'Database', data_database);
    
})();
