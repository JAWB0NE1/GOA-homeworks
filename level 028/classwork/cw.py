import random

def guess_number():
    number_to_guess = random.randint(1, 100)
    attempts = 0
    print("შეიყვანეთ რიცხვი 1-დან 100-მდე და პროგრამა დააკმაყოფილებს იმას, რომ გამოიცნოს იგი.")
    
    while True:
        user_guess = int(input("შეიყვანეთ თქვენი ნომერი: "))
        attempts += 1
        if user_guess < number_to_guess:
            print("თქვენი რიცხვი პატარაა, სცადეთ უფრო დიდი.")
        elif user_guess > number_to_guess:
            print("თქვენი რიცხვი დიდია, სცადეთ უფრო პატარა.")
        else:
            print(f"გილოცავთ! თქვენ გამოიცანით რიცხვი {number_to_guess}. ცდა ნომერი: {attempts}")
            break

guess_number()