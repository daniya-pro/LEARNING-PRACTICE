function namecap() {

    var name1 = ["adam pagal", "alex lol", "aaron mad", "ben mental", "carl gadha", "daniya haider", "david worship", "edward falsegod", ]
    var Nameffc = []
    var Name2lfc = []
    var lstothr = []
    var Lastothr = []
    var whole = []


    for (var i = 0; i < name1.length; i++) {
        var spaceind = name1[i].indexOf(' ')
        Nameffc[i] = name1[i].slice(0, 1).toUpperCase()
        Name2lfc[i] = name1[i].slice(spaceind + 1, spaceind + 2).toUpperCase()
        lstothr[i] = name1[i].slice(1, spaceind)
        Lastothr[i] = name1[i].slice(spaceind + 2)
        whole[i] = Nameffc[i] + lstothr[i] + ' ' + Name2lfc[i] + Lastothr[i name1[i] = whole[i] document.write('<p>' + name1[i] + '<br/></p>')
        }
    }