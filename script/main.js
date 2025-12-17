function calc() {
    let $ = document
    // arabic
    let theFa = parseFloat($.getElementById("fa").value) || 0
    let theTa = parseFloat($.getElementById("ta").value) || 0
    let thePa = parseFloat($.getElementById("pa").value) || 0
    let theEa = parseFloat($.getElementById("ea").value) || 0
    let theMa = $.getElementById("ma")

    let theRatea = (theFa+theTa+thePa+(theEa*2))/5
    theMa.value = Math.round(theRatea*100)/100
    let theTotala = theRatea * 2 
    
    // الشريعة
    let theFs = parseFloat($.getElementById("fs").value) || 0
    let theTs = parseFloat($.getElementById("ts").value) || 0
    let theEs = parseFloat($.getElementById("es").value) || 0
    let theMs = $.getElementById("ms")

    let theRates = (theFs+theTs+(theEs*2))/4
    theMs.value = Math.round(theRates*100)/100
    let theTotals = theRates*2
    //رياضيات 
    let theFm = parseFloat($.getElementById("fm").value) || 0
    let theTm = parseFloat($.getElementById("tm").value) || 0
    let theEm = parseFloat($.getElementById("em").value) || 0
    let theMm = $.getElementById("mm")

    let theRatem = (theFm+theTm+(theEm*2))/4
    theMm.value = Math.round(theRatem*100)/100
    let theTotalm = theRatem*5
    // انجليزية 
    let theFe = parseFloat($.getElementById("fe").value) || 0
    let theTe = parseFloat($.getElementById("te").value) || 0
    let thePe = parseFloat($.getElementById("pe").value) || 0
    let theEe = parseFloat($.getElementById("ee").value) || 0
    let theMe = $.getElementById("me")
    let theRatee = (theFe+theTe+thePe+(theEe*2))/5
    theMe.value = Math.round(theRatee*100)/100
    let theTotale = theRatee*2
    // علوم 
    let theFc = parseFloat($.getElementById("fc").value) || 0
    let theTc = parseFloat($.getElementById("tc").value) || 0
    let thePc = parseFloat($.getElementById("pc").value) || 0
    let theEc = parseFloat($.getElementById("ec").value) || 0
    let theMc = $.getElementById("mc")

    let theRatec = (theFc+theTc+thePc+(theEc*2))/5
    theMc.value = Math.round(theRatec*100)/100
    let theTotalc =  theRatec*6
    //فرنسية 
    let theFf = parseFloat($.getElementById("ff").value) || 0
    let theTf = parseFloat($.getElementById("tf").value) || 0
    let thePf = parseFloat($.getElementById("pf").value) || 0
    let theEf = parseFloat($.getElementById("ef").value) || 0
    let theMf = $.getElementById("mf")

    let theRatef = (theFf+theTf+thePf+(theEf*2))/5
    theMf.value = Math.round(theRatef*100)/100
    let theTotalf = theRatef*2
    // تاريخ و جغرافيا 
    let theFh = parseFloat($.getElementById("fh").value) || 0
    let theTh = parseFloat($.getElementById("th").value) || 0
    let theEh = parseFloat($.getElementById("eh").value) || 0
    let theMh = $.getElementById("mh")

    let theRateh = (theFh+theTh+(theEh*2))/4
    theMh.value = Math.round(theRateh*100)/100
    let theTotalh =  theRateh*2
    //فيزياء 
    let theFp = parseFloat($.getElementById("fp").value) || 0
    let theTp = parseFloat($.getElementById("tp").value) || 0
    let thePp = parseFloat($.getElementById("pp").value) || 0
    let theEp = parseFloat($.getElementById("ep").value) || 0
    let theMp = $.getElementById("mp")
    let theRatep = (theFp+theTp+thePp+(theEp*2))/5
    theMp.value = Math.round(theRatep*100)/100
    let theTotalp = theRatep*5
    //رياضة
    let theFo = parseFloat($.getElementById("fo").value) || 0
    let theTo = parseFloat($.getElementById("to").value) || 0
    let theEo = parseFloat($.getElementById("eo").value) || 0
    let theSS = parseInt($.getElementById("sh").value) || 0
    let theMo = $.getElementById("mo")
    let theRateo = (theFo+theTo+(theEo*2))/4
    theMo.value = Math.round(theRateo*100)/100
    let theTotalo = theRateo*theSS
// total rate
// العلب 
let theTotalinput = $.getElementById("theTotal") // علبة المجموع
let theProjectsn =parseFloat($.getElementById("theProjects").value)|| 10 //مشاريع
let theBook = parseFloat($.getElementById("theBook").value)|| 10 // مطالعة
let theTotarlinput = $.getElementById("theTotalr") // علبة المعدل 
let theMark = $.getElementById("mark")
let theCoefficient = $.getElementById("coefficient")
//المجاميع


let proj = theProjectsn - 10
let book = theBook-10
let Total_materials = theTotala + theTotals + theTotalm +theTotale + theTotalc+theTotalf +theTotalh +theTotalp + theTotalo + book + proj // مجموع
let coefficient = 26+theSS
if (coefficient === 27) {
    theCoefficient.textContent = "27"
}else if (coefficient === 26){ 
    theCoefficient.textContent = "26"
}
let theTotal = Total_materials/coefficient


// معدل
theTotalinput.value = Total_materials // اظهار مجموع

theTotarlinput.value = Math.round(theTotal*1000)/1000// اظهر المعدل 
if (parseFloat(theTotal) < 10) {
theMark.textContent = "راسب 💔"
}else if (parseFloat(theTotal) === 10) {
    theMark.textContent = "ناجح ❤️‍🩹"
}else if (parseFloat(theTotal) > 10) {
        theMark.textContent = "ناجح 🎉"

}else {
    theMark.textContent ="يوجد خطا,تحقق من القيم"
}

}

