def categorize_age(age):
    if age >= 0 and age <= 12:
        return "You are a child."
    elif age >= 13 and age <= 19:
        return "You are a teenager."
    elif age >= 20 and age <= 64:
        return "You are an adult."
    elif age >= 65:
        return "You are a senior."
    else:
        return "Invalid age"
try:
    age = int(input("Please enter your age: "))
    result = categorize_age(age)
    print(result)
except ValueError:
    print("Please enter a valid number for age.")