
print("ეს არის პროგრამა რომელიც თვლის საშუალო ქულას და გეუბნება ჩააბარე თუ ვერა")
print("მიუთითე 10 დღის განმავლობაში მიღებული ქულები შეიყვანეთ ქულები აუცილებლად ცალცალკე")
jaqrajaide0=int(input("დღეს მიღებული ქულა:"))
jaqrajaide1=int(input("დღეს მიღებული ქულა:"))
jaqrajaide2=int(input("დღეს მიღებული ქულა:"))
jaqrajaide3=int(input("დღეს მიღებული ქულა:"))
jaqrajaide4=int(input("დღეს მიღებული ქულა:"))
jaqrajaide5=int(input("დღეს მიღებული ქულა:"))
jaqrajaide6=int(input("დღეს მიღებული ქულა:"))
jaqrajaide7=int(input("დღეს მიღებული ქულა:"))
jaqrajaide8=int(input("დღეს მიღებული ქულა:"))
jaqrajaide9=int(input("დღეს მიღებული ქულა:"))
print("მიმდინარეობს ქულების გამოთვლა მინიმალური დასაშვები ქულა-70 ან მეტი")
print("საშუალო ქულა:")
n1=jaqrajaide0+jaqrajaide1
n2=jaqrajaide2+jaqrajaide3
n3=jaqrajaide4+jaqrajaide5
n4=jaqrajaide6+jaqrajaide7
n5=jaqrajaide8+jaqrajaide9
nu=n1+n2+n3+n4+n5
e1=int(n1+n2+n3+n4+n5)
if e1>1000:
    print("მითითებული ნიშნები არასწორია")
elif e1<=0:
    print("მითითებული ნიშნები ვერ იქნება 0 ან უფრო ნაკლები")
e2=e1/10
print(e2)
if e2 >= 70:
    print("გილოცავთ თქვენ ჩააბარეთ")
else:
    print("სპარი გელის")