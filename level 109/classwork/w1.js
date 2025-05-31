let car ={
    brend: "lada",
    model: "jiguli",
    color: "chorni"
};
let txt = 'this is'+ car.brend+"model name is"+car.model+"and color is"+car.color
for (let info in car){
    console.log(info)
    console.log(car[info])
    console.log(txt)
}