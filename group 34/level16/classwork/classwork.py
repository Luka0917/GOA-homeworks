# 1

age = int(input("enter your age:"))

if age >= 5 and age < 13:
    print("you are a child")
elif age >= 13 and age < 18:
    print("you are a teenager")
else:
    print("you are an adult")

# 2

films = ["harry potter", "avengers:endgame", "creed 3"]
songs = ["Bohemian Rhapsody", "Stairway to Heaven", "Imagine"]
combine = films + songs

print(combine[len(combine) - 1])
print(films[2])
print(songs[1])