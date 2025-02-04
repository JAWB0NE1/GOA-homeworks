function getDayName(day) {
    switch(day) {
      case 1:
        return "ორშაბათი";
      case 2:
        return "სამშაბათი";
      case 3:
        return "ოთხშაბათი";
      case 4:
        return "ხუთშაბათი";
      case 5:
        return "პარასკევი";
      case 6:
        return "შაბათი";
      case 7:
        return "კვირა";
      default:
        return "არასწორი დღე";
    }
}
let dayNumber = parseInt(prompt("შეიყვანეთ კვირის დღე (1-7):"));
alert(getDayName(dayNumber));