import math
print("")

answer = input("On which figure do you want to calculate the area?:")

if answer.lower() == "rectangle":
    print("")
    width = int(input("Enter width of rectangle:"))
    height = int(input("Enter height of rectangle:"))
    print("")
    print(f"The area of rectangle is: {width * height}")
    print("")

elif answer.lower() == "circle":
    print("")
    radius = int(input("Enter radius of circle:"))
    print("")
    print(f"The area of circle is: {3.14 * (radius ** 2)}")
    print("")

elif answer.lower() == "triangle":
    print("")
    a = int(input("Enter the length of one side of the triangle:"))
    b = int(input("Enter the length of second side of the triangle:"))
    c = int(input("Enter the length of third side of the triangle:"))
    print("")
    s = (a + b + c) / 2
    print(f"The area of rectangle is {math.sqrt(s * (s - a) * (s - b) * (s - c))}")
    print("")

else:
    print("")
    print("I cant calculate are of that")
    print("")