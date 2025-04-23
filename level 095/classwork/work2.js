
function love(){
    let random=Math.floor(Math.random() * 101)
    let name1=prompt("enter your name:")
    let name2=prompt("enter you crush:")
    alert(`${name1} და ${name2}, თქვენი სიყვარულის პროცენტია ${random}%`)
}
alert(love())
