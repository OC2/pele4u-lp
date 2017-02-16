// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('pele', ['ionic'
                       ,'ngCordova'
                       ,'ngStorage'
                       ,'tabSlideBox'
                       ,'pele.controllers'
                       ,'pele.factories'
                       ,'pele.config'
                       ,'pele.services'
                       //-----------------------------------------//
                       //--           MENU                      --//
                       //-----------------------------------------//
                       ,'pele.P1_appsListCtrl'
                       //-----------------------------------------//
                       //--       Authentication                --//
                       //-----------------------------------------//
                       ,'pele.authCtrl'
                       //-----------------------------------------//
                       //--        docApprove                   --//
                       //-----------------------------------------//
                       ,'pele.P2_moduleListCtrl'
                       //-----------------------------------------//
                       //--        docApprove/PO                --//
                       //-----------------------------------------//
                       ,'pele.p3_po_moduleDocListCtrl'
                       ,'pele.p4_po_doc_10002Ctrl'
                       //-----------------------------------------//
                       //--        docApprove/HR                --//
                       //-----------------------------------------//
                       ,'pele.p3_hr_moduleDocListCtrl'
                       ,'pele.p4_hr_docCtrl'
                       //-----------------------------------------//
                       //--          scsn Print
                       //-----------------------------------------//
                       ,'pele.p2_scan_printCtrl'
                       //-----------------------------------------//
                       //--           Settings                  --//
                       //-----------------------------------------//
                       ,'fileLogger'
                       ])

.run(function($ionicPlatform , $state , $ionicLoading , $fileLogger , PelApi , appSettings  ) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    /*
    PelApi.writeToLog(config_app.LOG_FILE_INFO_TYPE ,'=============== Start ==============');
    //----------------------------------
    //--    Create/Open Log File
    //----------------------------------
    PelApi.writeToLog(config_app.LOG_FILE_INFO_TYPE ,'setStorageFilename');
    $fileLogger.setStorageFilename(config_app.LOG_FILE_NAME);
    //----------------------------------
    //--   Delete Old Log File data
    //----------------------------------
    PelApi.writeToLog(config_app.LOG_FILE_INFO_TYPE ,'deleteLogfile');
    $fileLogger.deleteLogfile();
    */

    //-----------------------------------------
    //--   Registration for Push Notification
    //-----------------------------------------
    PelApi.writeToLog(config_app.LOG_FILE_INFO_TYPE ,'Open Notification Event');
    //---------- Open Notification Event -----
    var notificationOpenedCallback = function(jsonData) {
      console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
      PelApi.writeToLog(config_app.LOG_FILE_INFO_TYPE,'notificationOpenedCallback: ' + JSON.stringify(jsonData));
    };

    if(window.plugins !== undefined) {

      var isIOS = ionic.Platform.isIOS();
      var isAndroid = ionic.Platform.isAndroid();
      if ("PD" === appSettings.enviroment)
      {
        // OLD spec="1.10.2"

        // window.plugins.OneSignal.init("1d0135a7-da67-4953-b241-2385bfcedcd9", {googleProjectNumber: "655668363586"}, notificationOpenedCallback);
        PelApi.writeToLog(config_app.LOG_FILE_INFO_TYPE ,'PD Send registration');
        window.plugins.OneSignal
          .startInit("1d0135a7-da67-4953-b241-2385bfcedcd9", "655668363586")
          .inFocusDisplaying(window.plugins.OneSignal.OSInFocusDisplayOption.Notification)
          .endInit();

        console.log('OneSignal : PD' );
        PelApi.writeToLog(config_app.LOG_FILE_INFO_TYPE,'OneSignal : PD');
      }else{
        // OLD spec="1.10.2"

        // window.plugins.OneSignal.init("922ef47f-6abc-4df5-80ea-801a8b081fa1", {googleProjectNumber: "1005906386682"}, notificationOpenedCallback);
        PelApi.writeToLog(config_app.LOG_FILE_INFO_TYPE ,appSettings.enviroment + ' Send registration');

        window.plugins.OneSignal
          .startInit("922ef47f-6abc-4df5-80ea-801a8b081fa1", "1005906386682")
          .inFocusDisplaying(window.plugins.OneSignal.OSInFocusDisplayOption.Notification)
          .endInit();

        console.log('OneSignal : ELSE' );
        PelApi.writeToLog(config_app.LOG_FILE_INFO_TYPE,'OneSignal :' + appSettings.enviroment);

      }

      window.plugins.OneSignal.getIds(function(ids) {
        config_app.PLAYER_ID = ids.userId;
        console.log('getIds: ' + JSON.stringify(ids));
        PelApi.writeToLog(config_app.LOG_FILE_INFO_TYPE,'window.plugins.OneSignal.getIds :' + ids.userId);
      });


    }

    //----------------------------------------
    //--    Get Version from config.xml
    //----------------------------------------
    if(window.cordova != undefined){
    window.cordova.getAppVersion(function (version) {

        config_app.APP_VERSION = version;
        console.log("window.cordova.getAppVersion() : " + config_app.APP_VERSION);
        PelApi.writeToLog(config_app.LOG_FILE_INFO_TYPE, "window.cordova.getAppVersion() : " + config_app.APP_VERSION);

      });
    }


    if (window.cordova && window.cordova.plugins.Keyboard)
    {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }


    //----------------------------------
    //--    Go To Application List
    //----------------------------------
    $state.go("app.p1_appsLists");

  });
})

.config(function( $stateProvider
                , $urlRouterProvider
                ) {
   $stateProvider
      .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })
    //---------------------------------------------------------------------------//
    //--                           MENU                                        --//
    //---------------------------------------------------------------------------//
    .state('app.p1_appsLists', {
      url: '/p1_appsLists',
      views: {
        'menuContent': {
          templateUrl: 'templates/p1_appsLists.html',
          controller: 'P1_appsListCtrl'
        }
      }
    })
    //----------------------------------------------------------------------------//
    //--                         docApprove
    //----------------------------------------------------------------------------//
    .state('app.p2_moduleList', {
      url: '/p2_moduleList/:AppId/:Title/:Pin',
      views: {
        'menuContent': {
          templateUrl: 'templates/apps/DocApprove/p2_moduleList.html',
          controller:  'P2_moduleListCtrl'
        }
      }
    })

    //-------------------------------------------//
    //--               PO                      --//
    //-------------------------------------------//
    .state('app.p3_po_moduleDocList', {
      url: "/p3_po_moduleDocList/:AppId/:FormType/:Pin",
      views: {
        'menuContent': {
          templateUrl: "templates/apps/DocApprove/PO/p3_po_moduleDocList.html",
          controller: 'p3_po_moduleDocListCtrl'
        }
      }
    })
    .state('app.doc_10002', {
      url: "/doc_10002/:DocId/:DocInitId",
      views: {
        'menuContent': {
          templateUrl: "templates/apps/DocApprove/PO/p4_po_doc_10002.html",
          controller: 'p4_po_doc_10002Ctrl'
        }
      }
    })
    //-------------------------------------------//
    //--               HR                      --//
    //-------------------------------------------//
    .state('app.p3_hr_moduleDocList', {
      url: "/p3_hr_moduleDocList/:AppId/:FormType/:Pin",
      views: {
        'menuContent': {
          templateUrl: "templates/apps/DocApprove/HR/p3_moduleDocList.html",
          controller: 'p3_hr_moduleDocListCtrl'
        }
      }
    })
                //--------------------------------------------//
                //--             HR/242                     --//
                //--------------------------------------------//
    .state('app.doc_242', {
      url: "/doc_242/:AppId/:DocId/:DocInitId",
      views: {
        'menuContent': {
          templateUrl: "templates/apps/DocApprove/HR/p4_doc_242.html",
          controller: 'p4_hr_docCtrl'
        }
      }
    })
                //--------------------------------------------//
                //--            HR/806                      --//
                //--------------------------------------------//
    .state('app.doc_806', {
      url: "/doc_806/:AppId/:DocId/:DocInitId",
      views: {
        'menuContent': {
          templateUrl: "templates/apps/DocApprove/HR/p4_doc_806.html",
          controller: 'p4_hr_docCtrl'
        }
      }
    })
                //--------------------------------------------//
                //--                   HR/807               --//
                //--------------------------------------------//
    .state('app.doc_807', {
      url: "/doc_807/:AppId/:DocId/:DocInitId",
      views: {
        'menuContent': {
          templateUrl: "templates/apps/DocApprove/HR/p4_doc_807.html",
          controller: 'p4_hr_docCtrl'
        }
      }
    })
    //----------------------------------------------------------------------------//
    //--                         End docApprove
    //----------------------------------------------------------------------------//

    //---- home ----//
    .state('app.home', {
      url: '/home/:showLoading',
      views: {
        'menuContent': {
          templateUrl: 'templates/p1_appsLists.html',
          controller: 'homeCtrl'
        }
      }
    })
    //---------------------------------------------------------------------------//
    //--                        Authentication                                 --//
    //---------------------------------------------------------------------------//
    .state('app.login', {
      url: '/auth',
      views:{
        'menuContent': {
          templateUrl: 'templates/auth/login.html',
          controller: 'LoginCtrl'
        }
      }
    })
    .state('app.forgot-password', {
        url: '/auth',
        views:{
          'menuContent': {
            templateUrl: 'templates/auth/forgot-password.html',
            controller: 'ForgotPasswordCtrl'
          }
        }
      })
    //---------------------------------------------------------------------------//
    //--                         Settings                                      --//
    //---------------------------------------------------------------------------//
    .state('app.settings', {
        url: '/settings',
        views:{
          'menuContent': {
            templateUrl: 'templates/settings/settingsList.html',
            controller: 'SettingsListCtrl'
          }
        }
    })
    .state('app.settings.sendLog', {
        url: '/sendLog',
        views: {
          'menuContent': {
            templateUrl: 'templates/settings/sendLog.html',
            controller: 'SendLogCtrl'
          }
        }
  })
  .state('app.appProfile', {
      url: '/appProfile',
      views: {
        'menuContent': {
          templateUrl: 'templates/settings/appProfile.html',
          controller: 'AppProfileCtrl'
        }
      }
    })
  //------------------------------------------------------//
  //--            delete after test                     --//
  //------------------------------------------------------//
  .state('app.dir', {
       url: '/dir',
       views: {
         'menuContent': {
           templateUrl: 'templates/dir.html',
           controller: 'DirCtrl'
         }
       }
     })
  .state('app.file', {
       url: '/file',
       views: {
         'menuContent': {
           templateUrl: 'templates/file.html',
           controller: 'FileCtrl'
         }
       }
  })
  //----------------------------------------------------------//
  //--              PrintScaner
  //----------------------------------------------------------//
  .state('app.p2_scan_print', {
     url: '/scan_print',
     views: {
       'menuContent': {
         templateUrl: 'templates/apps/scanPrint/p2_scan_print.html',
         controller: 'p2_scan_printCtrl'
       }
     }
  })
  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home',{'showLoading':'Y'});
});