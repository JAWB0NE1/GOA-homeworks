def password():
   pas=int(input("enter password"))
   while pas > 123:
      print("incorect")
      int(input("enter password"))
   while pas < 123:
      print("incorect")
      int(input("enter password"))
   while pas == 123:
      print("correct password")
      name=str(input("whats your name?:"))
      if name == "David":
         print("hello creator")
      else :
         print("you are not my creator")

password()
