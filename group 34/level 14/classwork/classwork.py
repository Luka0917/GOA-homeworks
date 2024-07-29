# 1

num = 0
while num < 10:
    print("luka")
    num = num +1

# 2

print("Guess game")

secret_num = 0
while secret_num != 5:
    secret_num = int(input("guess the number:"))
    if secret_num == 5:
        print("you won!")
    else:
        print("you lost")