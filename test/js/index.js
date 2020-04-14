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
        whole[i] = Nameffc[i] + lstothr[i] + ' ' + Name2lfc[i] + Lastothr[i] + name1[i] + whole[i] + document.write('<p>' + name1[i] + '<br/></p>')
        }
    }


    //other test
    function $dollar(bill) {
        /*Note if youre bill is 100$ or more than hundred so your tax and shipping is free butt if it is between 50 and 100 it will take shipping fee in $ and wewill also take tex of 3 percent(%)$ bu if it is smaller than 50 we will take only shipping fee*/



        //variables start here

        var total;

        //variables  end here

        // if start here
        if (isNaN(bill)) {

            console.log('noob NaN')

        }


        // if end here

        // another if start here

        if (bill >= 100) {

            var total = bill


            console.log("you're bill is " + total)


        }

        //another if end here

        //else if starts here
        else if (bill <= 50) {

            total = bill + 5



            console.log("you'r bill is " + total)
        } else if (bill > 50) {

            total = (bill + (5 + 3))



            console.log("you'r bill is " + total)

        } else {
            alert('noob')
        }
    }
