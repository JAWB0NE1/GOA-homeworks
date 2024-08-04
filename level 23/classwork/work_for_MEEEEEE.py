#საკლასო სამუშაო:
#ააგეთ პროგრამა, რომელიც მოსთხოვს მომხმარებელს, რომ შეიყვანეს რიცხვი 1 - 100 მდე.
#პროგრამის დანიშნულება არის ის, რომ გამოიცნოს მომხმარებლის მიერ შემოტანილი რიცხვი, იმდენჯერ მიეცეს გამოცნობის შესაძლებლობა სანამ საბოლოოდ არ გამოიცნობს.
print("hi this is program that is guessing the number")
number=int(input("enter your number:"))
number2=int(input("enter guess  number:"))
if number == number2:
    print("cungradulations you guess the number")
while number > number2:
    print("number is bigger")
    number2=int(input("enter guess  number:"))
while number < number2:
    print("number is smaller")
    number2=int(input("enter guess  number:"))
