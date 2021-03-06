/*********************/
const env = "LP";
/********************/

const EnvCodes = {
  PD: "PROD",
  DV: "DEV",
  QA: "QA",
  LP: "LP"
};

const SSOEnv = {
  PD: "PD",
  DV: "DV",
  QA: "QA",
  LP: "LP"
}

const spinConfig = {
  template: '<img ng-click="stopLoading()" class="spinner" src="./img/spinners/puff.svg">',
  animation: 'fade-in',
  noBackdrop: false,
  minWidth: 50,
  delay: 1000
};

const apiConfig = {
  env: env,
  uri: "http://msso.pelephone.co.il",
  wifi_uri: "https://msso.pelephone.co.il",
  api: "http://msso.pelephone.co.il/PCBarCode/PrintCenterBar.asmx/WhoMI",
  sapi: "https://msso.pelephone.co.il/PCBarCode/PrintCenterBar.asmx/WhoMI",
  google_play_app_link: "https://play.google.com/store/apps/details?id=com.int_pele.pele4u",
  apple_store_app_link: "https://appsto.re/il/yYQKab.i",
  timeout: 15000,
  menuTimeout: 15000,
  translateFlag: "N",
  flashTime: 2500,

  OneSignal: {
    DV: {
      appId: '430ad45c-c555-41f5-87c4-46f9d4be0cc1',
      visualLevel: 0,
      logLevel: 0
    },
    QA: {
      appId: "922ef47f-6abc-4df5-80ea-801a8b081fa1",
      visualLevel: 0,
      logLevel: 0
    },
    PD: {
      appId: "1d0135a7-da67-4953-b241-2385bfcedcd9",
      visualLevel: 0,
      logLevel: 0
    },
    LP: {
      appId: "1d0135a7-da67-4953-b241-2385bfcedcd9",
      visualLevel: 0,
      logLevel: 0
    },
  },
  services: {
    GetUserMenu: {
      timeout: 15000,
      retry: 2,
      "endpoint": "/" + SSOEnv[env] + "/MobileServices/SSOService.svc/json/GetUserMenu",
      "RequestHeader": ""
    },
    GetUserNotifNew: {
      timeout: 15000, // $http timeout
      retry: 2,
      "endpoint": "/" + SSOEnv[env] + "/REST/GetUserNotifNew",
      "RequestHeader": {
        "ServiceName": "GetUserNotificationsNew",
        "AppID": "MobileApp",
        "EnvCode": "MobileApp_" + EnvCodes[env],
        "Timeout": "15"
      }
    },
    GetUserModuleTypes: {
      timeout: 15000,
      retry: 2,
      "endpoint": "/" + SSOEnv[env] + "/REST/GetUserModuleTypes",
      "RequestHeader": {
        "ServiceName": "GetUserModuleTypes",
        "AppID": "MobileApp",
        "EnvCode": "MobileApp_" + EnvCodes[env],
        "Timeout": "15"
      }
    },
    GtUserFormGroups: {
      timeout: 15000,
      retry: 2,
      "endpoint": "/" + SSOEnv[env] + "/REST/GtUserFormGroups",
      "RequestHeader": {
        "ServiceName": "GetUserFormGroups",
        "AppID": "MobileApp",
        "EnvCode": "MobileApp_" + EnvCodes[env],
        "Timeout": "15"
      }
    },
    GetUserNotif: {
      timeout: 15000,
      retry: 2,
      "endpoint": "/" + SSOEnv[env] + "/REST/GetUserNotif",
      "RequestHeader": {
        "ServiceName": "GetUserNotifications",
        "AppID": "MobileApp",
        "EnvCode": "MobileApp_" + EnvCodes[env],
        "Timeout": "15"
      }
    },
    SubmitNotif: {
      timeout: 25000,
      "endpoint": "/" + SSOEnv[env] + "/REST/SubmitNotif",
      "RequestHeader": {
        "ServiceName": "SubmitNotifications",
        "AppID": "MobileApp",
        "EnvCode": "MobileApp_" + EnvCodes[env],
        "Timeout": "25"
      }
    },
    GetUserPoOrdGroup: {
      timeout: 15000,
      retry: 2,
      "endpoint": "/" + SSOEnv[env] + "/REST/GetUserPoOrdGroup",
      "RequestHeader": {
        "ServiceName": "GetUserPoOrdGroup",
        "AppID": "MobileApp",
        "EnvCode": "MobileApp_" + EnvCodes[env],
        "Timeout": "15"
      }
    },
    GetUserRqGroups: {
      timeout: 15000,
      retry: 2,
      "endpoint": "/" + SSOEnv[env] + "/REST/GetUserRqGroups",
      "RequestHeader": {
        "ServiceName": "GetUserRqGroups",
        "AppID": "MobileApp",
        "EnvCode": "MobileApp_" + EnvCodes[env],
        "Timeout": "15"
      }
    },
    GetFileURI: {
      timeout: 15000,
      retry: 2,
      "endpoint": "/" + SSOEnv[env] + "/REST/GetFileURI",
      "RequestHeader": {
        "ServiceName": "ShareFile-GetFileURI",
        "AppID": "MobileApp",
        "EnvCode": "MobileApp_" + EnvCodes[env],
        "Timeout": "15"
      }
    },
    IsSessionValidJson: {
      timeout: 20000,
      retry: 2,
      "endpoint": "/" + SSOEnv[env] + "/MobileServices/SSOService.svc/json/IsSessionValidJson",
      "RequestHeader": ""
    }
  }
};

/*********************/

angular.module('pele.config', [])
  .constant('$ionicLoadingConfig', spinConfig)
  .value('appSettings', {
    debug: false,
    config: {
      mainMenuKeepAlive: 0, // 0 - means disabled
      APP_VERSION: "117.9",
      SCAN_PRINT_SCANNING_ERROR: "שגיאה בסריקה",
      PIN_CODE_AUTHENTICATION_REQUIRED_CODE: "10000",
      IS_TOKEN_VALID: "N",
      TITLE_WIFI_FIRST_CONNECTION_1: "בעת כניסה ראשונה",
      TITLE_WIFI_FIRST_CONNECTION_2: "יש לעבור לגלישה ברשת סלולרית",
      TITLE_SYSTEM_MESSAGES: "באפשרותך לבצע כניסה ללא קוד הזדהות על ידי מעבר לגלישה ברשת סלולרית",
      OFFLINE_MESSAGE: "לא זוהה חיבור לרשת, יש לבצע רענון לאפליקציה",
      TITLE_OTP_REQUEST: "שלח",
      TITLE_OTP_INPUT: "קוד הזדהות",
      TITLE_SEND_OTP: "כניסה",
      TITLE_RESET_PASSWORD_LINK: "קבלת קוד הזדהות חדש",
      TITLE_SEND_OTP_LINK: "שליחת קוד הזדהות",
      TITLE_FORGOT_PASSWORD: "בקשה לקוד הזדהות",
      TITLE_LOGIN: "הזנת קוד הזדהות",
      PLAYER_ID: "",
      fileLogger: "",
      FileTransferSuccess: "הקובץ הורד בהצלחה",
      EAI_Status: "קובץ אינו זמין",
      TIMEOUT_STATUS: "קובץ אינו זמין",
      FILE_NOT_FOUND: "קובץ אינו זמין",
      FILE_TIMEOUT: "קובץ אינו זמין",
      Application_Status: "קובץ אינו זמין",
      StatusCode: "קובץ אינו זמין",
      LOG_FILE_NAME: "Pele4U.txt",
      LOG_FILE_MAIL_RECIPIENT: {
        QA: "keen@pelephone.co.il",
        PD: "Mobile_Admins_HR@pelephone.co.il",
        LP: "Mobile_Admins_HR@pelephone.co.il",
        DEFAULT: "ghadad@gmail.com",
        DV: "ghadad@gmail.com"
      },
      LOG_FILE_MAIL_SUBJECT: "Pele4U Log File",
      LOG_FILE_INFO_TYPE: "I",
      LOG_FILE_DEBUG_TYPE: "D",
      LOG_FILE_ERROR_TYPE: "E",
      LOG_FILE_WARN_TYPE: "W",
      WIFI_CHECK: true,
      network: "",
      isOnline: "",
      pinCodeLock: false,
      interfaceErrorTitle: "שגיאת ממשק",
      wifiTitle: "WiFi- יש להתנתק מ",
      wifiSubTitle: "לצורך הזדהות ראשונית",
      declineTitle: "לפני דחייה",
      declineSubTitle: "חובה להזין הערה",
      Pin: "",
      pinCodeErrorVal: "קוד הזדהות שגוי",
      pinCodeErrorInit: "לא הוגדר קוד מחמיר. יש להגדיר בפורטל או ב-55",
      pinCodeErrorLock: "קוד הזדהות ננעל, נא לפנות ל-55",
      pinCodeSubTitlePCR: "חובה להזין קוד מחמיר",
      pinCodeSubTitlePWA: "קוד הזדהות שגוי",
      pinCodeSubTitlePDA: "קוד מחמיר נחסם, נא לפנות ל-55",
      pinCodeSubTitlePNE: "קוד מחמיר לא קיים ...",
      pinCodeSubTitleNRP: "קוד מחמיר נעול. צריך לאפס ...",
      PO_ORG_NAME: "",
      SETTINGS_DIRECTORY_NAME: "PELE4U_SETTINGS",
      ATTACHMENT_DIRECTORY_NAME: "PELE4U_ATTACHMENTS",
      MSISDN_WRITE_FILE_ERROR_CODE: "WFE",
      MSISDN_WRITE_FILE_ERROR_DESC: "שגיאה בכתיבה אל תוך קובץ MISDN",
      MSISDN_READ_FILE_ERROR_CODE: "RWE",
      MSISDN_READ_FILE_ERROR_DESC: "שגיאת קריאה מקובץ MSISDN",
      MSISDN_STATUS_VALID: "Valid",
      MSISDN_ERROR_DEFAULT: "סטאטוס של MSISDN לא מוקר",
      MSISDN_STATUS: "",
      MSISDN_FILE_NAME: "MSISDN.txt",
      MSISDN_VALUE: "",
      ATTACHMENT_TIME_OUT: 10000,
      ATTACHMENT_SHORT_TEXT: "טקסט קצר",
      ATTACHMENT_LONG_TEXT: "טקסט ארוך",
      ATTACHMENT_TYPE_NOT_SUPORTED_FOR_OPEN: "סוג הקובץ אינו נתמך",
      getUserMenuErrorMsg: "שגיאה בטעינת רשימת אפליקציות",
      getUserModuleTypesErrorMag: "בקשה הסתיימה עם שגיאה , נא לרענן מסך",
      EAI_ERROR_DESC: "שגיאה בממשק.",
      loadingMsg: "ממתין לטעינת נתונים ...",
      isAddNoteTitle: "האם ברצונך להוסיף הערה?",
      errorMsg: "",
      pinCodeErrorInd: "N",
      pinCodeReq: "Y",
      token: "",
      user: "",
      userName: "",
      PIN: "0",
      GetUserMenu: "",
      GetUserModuleTypes: "",
      docDetails: {},
      ApprovRejectBtnDisplay: true,
      UP_TO_DATE: "N",
      MSSO_PRINT_URL: "https:/*/msso.pelephone.co.il",
      MSSO_PRINT_WRONG_BARCODE: "ברקוד לא משויך למדפסת ...",
      INI_DOC_INIT_ID_UNDEFINED: "לא מקושר מסמך יזום"
    },
    apiConfig: apiConfig,
    api: "http://msso.pelephone.co.il/PCBarCode/PrintCenterBar.asmx/WhoMI",
    timeout: 15000,
    defaultHttpTimeout: 15000,
    menuTimeout: 15000,
    translateFlag: "N",
    flashTime: 2500,
    GOOGLE_PLAY_APP_LINK: "https://play.google.com/store/apps/details?id=com.int_pele.pele4u",
    APPLE_STORE_APP_LING: "https://appsto.re/il/yYQKab.i",
    PIN_STATUS: {
      "EOL": "", //- End of life
      "PAD": "גישה נחסמה, נה לפנות ל 55 ...", // - Pin access denied after 3 time
      "PWA": "גישה הלא נכונה ...", // - Pin wrong access
      "NRP": "קוד מחמיר נעול. צריך לאפס ...", // - Need to reset Pin
      "PNE": "קוד מחמיר לא קיים ...", //  Pin not Exist
      "PCR": "הזינו קוד מחמיר, אפליקצייה דורשת הזדהות",
      "InValid": "", // - general error
      "Valid": "",
      "SYS_ERROR": "שגיאה מערכתי ...",
      "OLD": "הגרסה אינה עדכנית, נדרש לבצע התקנה לגרסה אחרונה. "
    },
    tabs: [{
      "text": "סבב מאשרים"
    }, {
      "text": "תוכן טופס"
    }],
    ATTACHMENT_BLUE_STYLE: {
      "color": "blue"
    },
    ATTACHMENT_GRAY_STYLE: {
      "color": "gray"
    },
    MODULE_TYPES_FORWARD_PATH: {
      "HR": {
        state: "app.p3_hr_moduleDocList"
      },
      "TSK": {
        state: "app.tsk_list"
      },
      "POAPPRV": {
        state: "app.p3_po_moduleDocList"
      },
      "PELRQAPR": {
        state: "app.p3_rq_moduleDocList"
      },
      "PO": {
        state: "app.ini_list"
      },
      "FIN": {
        state: "app.inv_list"
      }
    },
    ACTION_HISTORY: {
      "FORWARD": "אישור",
      "NO_ACTION": "לא נדרש אישור",
      "REJECT": "דחייה",
      "WAITING": "ממתין"
    },
    APPROVE: {
      text: '<i id="APPROVE" class="icon ion-checkmark-circled text-center"></i> אישור',
      code: "APPROVE",
      action: "APPROVE"
    },
    APPROVE_AND_NOTE: {
      text: '<i id="APPROVE_AND_NOTE" class="icon ion-checkmark-circled text-center"></i> אישור עם הערה',
      code: "APPROVE_AND_NOTE",
      note: true,
      action: "APPROVE"
    },
    OK: {
      text: '<i id="OK"      class="icon ion-checkmark-circled text-center"></i> אישור',
      code: "OK",
      action: "OK"
    },
    REJECT: {
      text: '<i id="REJECT"  class="icon ion-close-circled    text-center" style="color:#F71914"></i> דחיה',
      code: "REJECT",
      note: true,
      action: "REJECT"
    },
    env: env,
    shareFileDirectory: "/My Files &amp; Folders/"
  })