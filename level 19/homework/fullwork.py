#დავალება 1
print("1 ნაბიჯი:")
for i in range(126, -1, -1):
    print(i, end=" ")
print("\n")

print("2 ნაბიჯი:")
for i in range(126, -1, -2):
    print(i, end=" ")
print("\n")

print("3 ნაბიჯი:")
for i in range(126, -1, -3):
    print(i, end=" ")
#დავალება 2
sum_result = 0
for i in range(1, 48):
    sum_result += i
print("ჯამი (+):", sum_result)

product_result = 1
for i in range(1, 48):
    product_result *= i
print("კორპორაცია (*):", product_result)
#დავალება 3
i = 100
while i >= 1:
    print(i, end=" ")
    i -= 1
