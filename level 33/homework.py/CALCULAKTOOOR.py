print("welcome to calculator")
num1=int(float(input("number1:")))
pmm=str(input("+-/*:"))
num2=int(float(input("number2:")))
if pmm == "+":
    print(num1+num2)
if pmm == "-":
    print(num1-num2)
if pmm == "/":
    if num2==0:
        print("number 2 can't be zero")
    else:
     print(num1/num2)
if pmm == "*":
    print(num1*num2)
if pmm == "//":
   if num2==0:
        print("number 2 can't be zero")
   else:
     print(num1//num2)
if pmm == "**":
    print(num1**num2)