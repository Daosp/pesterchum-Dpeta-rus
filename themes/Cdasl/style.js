{"inherits": "pesterchum",
 "main":
 {"style": "",
  "background-image": "$path/pcbg.png",
  "size": [300,620],
  "icon": "$path/trayicon.jpg",
  "newmsgicon": "$path/trayicon2.jpg",
  "windowtitle": "COOL DUDE AND STONER LOU",
  "menu" : { "style": "font-family: 'Courier'; font: bold; color: black; font-size: 14px; background-color: #00ff00;border:2px solid green",
             "menuitem": "font-size:14px;" },
  "close": { "image": "$path/x.gif",
             "loc": [282, 4]},
  "minimize": { "image": "$path/m.gif",
                "loc": [264, 10]},
  "chums": { "style": "border:2px solid green; background-color: black;color: white;font: bold;font-size:14px;font-family: 'Courier';selection-background-color:#646464; ",
             "loc": [15, 300],
             "size": [270, 100]
           },
  "mychumhandle": { "label": 
                    { "text": "",
                      "loc": [12,415],
                      "style": "color: black ;font:bold; font-family: 'Courier';" 
                    },
                    "handle": { "loc": [15,450],
                                "size": [240, 25],
                                "style": "background-color: black; padding: 3px; padding-left: 25px; color:white; font-family:'Courier'; font:bold; text-align:left; border:2px solid #ffff00;"
                              },
                    "colorswatch": { "loc": [255,450],
                                     "size": [30,25],
                                     "text": "C" },
                    "currentMood": [20, 455]
                  },
  "addchum":  { "style": "background: rgba(0, 255, 0, 100%); border:2px solid green; font: bold; color: black; font-family:'Courier';",
                "loc": [15,410],
                "size": [90, 30],
                "text": "ДОБАВИТЬ"
              },
  "pester": { "style": "background:  rgba(0, 255, 0, 100%); border:2px solid green; font: bold; color: black; font-family:'Courier';",
              "loc": [193,410],
              "size": [89, 30],
              "text": "ВЫЕБАТЬ"
            },
  "block": { "style": "background: #F00000; border:2px solid green; font: bold; color: black; font-family:'Courier';",
             "loc": [104,410],
             "size": [90, 30],
             "text": "СУКАСЛУМ"
           },
  "moodlabel": { "style": "font:bold;font-family:'Courier';color:black;",
                 "loc": [12, 480],
                 "text": "НАСТРОЕНИЕ:"
               },
  "moods": [
      { "style": "text-align:left;  background-image:url($path/mellow.jpg);border:2px solid green;color: black; font-family:'Courier'; font:bold; padding-left:3px;", 
        "selected": "text-align:left;  background-image:url($path/mellowcheck.jpg); border:2px solid #c48a00; color: black; font-family:'Courier'; font:bold; padding-left:3px;",
        "loc": [15, 485],
        "size": [91, 30],
        "text": "",
        "icon": "",
        "mood": 13
      },

      { "style": "text-align:left;  background-image:url($path/cool.jpg); border:2px solid green;color: black; font-family:'Courier'; font:bold;padding-left:3px;", 
        "selected": "text-align:left;  background-image:url($path/coolcheck.jpg); border:2px solid #c48a00; color: black; font-family:'Courier'; font:bold;padding-left:3px;",
        "loc": [105, 485],
        "size": [91, 30],
        "text": "",
        "icon": "",
        "mood": 6
      },

      { "style": "text-align:left;  background-image:url($path/stoned.jpg);border:2px solid green;color: black; font-family:'Courier'; font:bold;padding-left:3px;", 
        "selected": "text-align:left;  background-image:url($path/stonedcheck.jpg); border:2px solid #c48a00; color: black; font-family:'Courier'; font:bold;padding-left:3px;",
        "loc": [195, 485],
        "size": [90, 30],
        "text": "",
        "icon": "",
        "mood": 8
      },

      { "style": "text-align:center; border:2px solid black; background:white;color: black; font-family:'Courier'; font:bold;padding-left:3px;", 
        "selected": "background:green; border:2px solid #c48a00; padding: 5px;color: black; font-family:'Courier'; font:bold;padding-left:3px;",
        "loc": [15, 515],
        "size": [270, 30],
        "text": "BLOW THIS JOINT",
        "icon": "$path/shades.jpg",
        "mood": 2
      }
  ]
 },
 "convo": {
    "text": {"beganpester": "начал бесить",
             "ceasepester": "ушел с позором от",
             "blocked": "зарезал глотку",
             "unblocked": "позволил гавкать",
             "blockedmsg": "не слушает",
             "openmemo": "зашел на хату",
             "joinmemo": "начал гавкать в",
             "closememo": "перестал гавкать в",
             "kickedmemo": "ТЕБЯ ВЫГНАЛИ, КУСОК ДЕРЬМА!",
             "idle": "пошел срать!"
  },
  "systemMsgColor": "#646464"
 },
 "memos":
 { "size": [600,425] }
}