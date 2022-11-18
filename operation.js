const mult=(value1,value2)=>{
    let counter=0;
    let result=0;
    do {
        result+=value1;
        counter++;
    } while (counter<parseInt(value2));
    return result;
}

module.exports=mult;