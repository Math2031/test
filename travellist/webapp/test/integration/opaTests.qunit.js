sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'sap/fe/demo/travellist/test/integration/FirstJourney',
		'sap/fe/demo/travellist/test/integration/pages/TravelList',
		'sap/fe/demo/travellist/test/integration/pages/TravelObjectPage'
    ],
    function(JourneyRunner, opaJourney, TravelList, TravelObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('sap/fe/demo/travellist') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTravelList: TravelList,
					onTheTravelObjectPage: TravelObjectPage
                }
            },
            opaJourney.run
        );
    }
);