def main(num1, num2):
    arr = [num1, num2]
    if num1 == num2:
        return num1
    else:
        return max(arr)
print(main(4, 7))