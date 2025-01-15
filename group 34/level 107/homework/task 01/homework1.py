def max_sum():
    n = int(input("Enter n: "))

    user_lst = []
    for i in range(n):
        user = int(input(f"Enter number #{i+1}: "))
        user_lst.append(user)
    user_lst.sort(reverse = True)
    return user_lst[0] + user_lst[1]

print(max_sum())