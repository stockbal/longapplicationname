sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/mycompany/longapplicationname/test/integration/pages/MainListReport' ,
        'com/mycompany/longapplicationname/test/integration/pages/MainObjectPage',
        'com/mycompany/longapplicationname/test/integration/OpaJourney'
    ],
    function(JourneyRunner, MainListReport, MainObjectPage, Journey) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/mycompany/longapplicationname') + '/index.html'
        });

        JourneyRunner.run(
            {
                pages: { onTheMainPage: MainListReport, onTheDetailPage: MainObjectPage }
            },
            Journey.run
        );
    }
);