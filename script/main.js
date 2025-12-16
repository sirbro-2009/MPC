function calc() {
    let $ = document
    // arabic
    let theFa = parseFloat($.getElementById("fa").value)
    let theTa = parseFloat($.getElementById("ta").value)
    let thePa = parseFloat($.getElementById("pa").value)
    let theEa = parseFloat($.getElementById("ea").value)
    let theMa = $.getElementById("ma")

    let theRatea = (theFa+theTa+thePa+(theEa*2))/5
    theMa.value = Math.round(theRatea*100)/100
    let theTotala = theRatea * 2 
    
    // الشريعة
    let theFs = parseFloat($.getElementById("fs").value)
    let theTs = parseFloat($.getElementById("ts").value)
    let theEs = parseFloat($.getElementById("es").value)
    let theMs = $.getElementById("ms")

    let theRates = (theFs+theTs+(theEs*2))/4
    theMs.value = Math.round(theRates*100)/100
    let theTotals = theRates*2
    //رياضيات 
    let theFm = parseFloat($.getElementById("fm").value)
    let theTm = parseFloat($.getElementById("tm").value)
    let theEm = parseFloat($.getElementById("em").value)
    let theMm = $.getElementById("mm")

    let theRatem = (theFm+theTm+(theEm*2))/4
    theMm.value = Math.round(theRatem*100)/100
    let theTotalm = theRatem*5
    // انجليزية 
    let theFe = parseFloat($.getElementById("fe").value)
    let theTe = parseFloat($.getElementById("te").value)
    let thePe = parseFloat($.getElementById("pe").value)
    let theEe = parseFloat($.getElementById("ee").value)
    let theMe = $.getElementById("me")
    let theRatee = (theFe+theTe+thePe+(theEe*2))/5
    theMe.value = Math.round(theRatee*100)/100
    let theTotale = theRatee*2
    // علوم 
    let theFc = parseFloat($.getElementById("fc").value)
    let theTc = parseFloat($.getElementById("tc").value)
    let thePc = parseFloat($.getElementById("pc").value)
    let theEc = parseFloat($.getElementById("ec").value)
    let theMc = $.getElementById("mc")

    let theRatec = (theFc+theTc+thePc+(theEc*2))/5
    theMc.value = Math.round(theRatec*100)/100
    let theTotalc =  theRatec*6
    //فرنسية 
    let theFf = parseFloat($.getElementById("ff").value)
    let theTf = parseFloat($.getElementById("tf").value)
    let thePf = parseFloat($.getElementById("pf").value)
    let theEf = parseFloat($.getElementById("ef").value)
    let theMf = $.getElementById("mf")

    let theRatef = (theFf+theTf+thePf+(theEf*2))/5
    theMf.value = Math.round(theRatef*100)/100
    let theTotalf = theRatef*2
    // تاريخ و جغرافيا 
    let theFh = parseFloat($.getElementById("fh").value)
    let theTh = parseFloat($.getElementById("th").value)
    let theEh = parseFloat($.getElementById("eh").value)
    let theMh = $.getElementById("mh")

    let theRateh = (theFh+theTh+(theEh*2))/4
    theMh.value = Math.round(theRateh*100)/100
    let theTotalh =  theRateh*2
    //فيزياء 
    let theFp = parseFloat($.getElementById("fp").value)
    let theTp = parseFloat($.getElementById("tp").value)
    let thePp = parseFloat($.getElementById("pp").value)
    let theEp = parseFloat($.getElementById("ep").value)
    let theMp = $.getElementById("mp")
    let theRatep = (theFp+theTp+thePp+(theEp*2))/5
    theMp.value = Math.round(theRatep*100)/100
    let theTotalp = theRatep*5
    //رياضة
    let theFo = parseFloat($.getElementById("fo").value)
    let theTo = parseFloat($.getElementById("to").value)
    let theEo = parseFloat($.getElementById("eo").value)
    let theMo = $.getElementById("mo")
    let theRateo = (theFo+theTo+(theEo*2))/4
    theMo.value = Math.round(theRateo*100)/100
    let theTotalo = theRateo*1
// total rate
// العلب 
let theTotalinput = $.getElementById("theTotal") // علبة المجموع
let theProjectsn =parseFloat($.getElementById("theProjects").value)//مشاريع
let theBook = parseFloat($.getElementById("theBook").value)// مطالعة
let theTotarlinput = $.getElementById("theTotalr") // علبة المعدل 
let theMark = $.getElementById("mark")
//المجاميع


let proj = theProjectsn - 10
let book = theBook-10
let Total_materials = theTotala + theTotals + theTotalm +theTotale + theTotalc+theTotalf +theTotalh +theTotalp + theTotalo + book + proj // مجموع
let theTotal = Total_materials/27 // معدل
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
