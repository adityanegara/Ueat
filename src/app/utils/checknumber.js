const checkNumber = (a,b) =>{
    console.log(`Nilai A : ${a}, tipe A ${isNaN(a)}`);
    console.log(`Nilai B : ${b}, tipe B ${isNaN(b)}`);
    if((isNaN(a) != true) && (isNaN(b) != true)){
        console.log("checknumber true");
        return true;
    }else{
        console.log("checknumber false");
        return false;
    }
}

export default checkNumber;