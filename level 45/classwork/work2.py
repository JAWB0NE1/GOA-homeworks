def count_letters(text):
    count = 0
    for char in text:
        if char.isalpha():
            count += 1
    return count
text = "Hello, World! 123"
result = count_letters(text)
print("Text contains", result, "letters.")