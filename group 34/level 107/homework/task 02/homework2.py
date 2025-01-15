def find_last_repeated_element(arr):
     seen = {}
     last_repeated = None
     for num in arr:
         if num in seen:
             last_repeated = num
         seen[num] = seen.get(num, 0) + 1
     if last_repeated is None:
         print("მასივში არც ერთი ელემენტი არ მეორდება")
     else:
         print(last_repeated)
find_last_repeated_element([5, 1, 3, 4, 1, 3, 12])