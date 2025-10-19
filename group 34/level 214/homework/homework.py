
#! მაკლია task 8

def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

print(bubble_sort([64, 34, 25, 12, 22, 11, 90]))


def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_index = i
        for j in range(i + 1, n):
            if arr[min_index] > arr[j]:
                min_index = j
        arr[i], arr[min_index] = arr[min_index], arr[i]
    return arr

print(selection_sort([64, 34, 25, 12, 22, 11, 90]))


def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr

print(insertion_sort([64, 34, 25, 12, 22, 11, 90]))


#! Bubble Sort
#? იდეა: მრავალჯერ გადის სიაზე და ადარებს მეზობელ ელემენტებს.
#? თუ მარცხენა ელემენტი მეტია მარჯვენაზე — ცვლის მათ ადგილს.
#? ყოველი გავლით უდიდესი ელემენტი “ამოტივტივდება” ბოლოში.
#* Time Complexity:
#*   საუკეთესო შემთხვევა (Best): O(n) — სია უკვე დალაგებულია (ოპტიმიზირებულ ვერსიაში).
#*   საშუალო შემთხვევა (Average): O(n²)
#*   ყველაზე ცუდი შემთხვევა (Worst): O(n²)

#! Selection Sort
#? იდეა: ყოველი ნაბიჯით პოულობს უმცირეს ელემენტს და აყენებს მას თავის სწორ პოზიციაზე.
#? ანუ "ირჩევს" მინიმუმს და ცვლის ადგილს მიმდინარე პოზიციასთან.
#? Time Complexity:
#*   საუკეთესო შემთხვევა (Best): O(n²) — შედარებები მაინც საჭიროა.
#*   საშუალო შემთხვევა (Average): O(n²)
#*   ყველაზე ცუდი შემთხვევა (Worst): O(n²)

#! Insertion Sort
#? იდეა: თითოეული ელემენტი თავის ადგილას “ჩასვამს” უკვე დალაგებულ ნაწილში.
#? მუშაობს ისე, როგორც ბანქოების ხელით დალაგება.
#? Time Complexity:
#*   საუკეთესო შემთხვევა (Best): O(n) — თუ სია თითქმის დალაგებულია.
#*   საშუალო შემთხვევა (Average): O(n²)
#*   ყველაზე ცუდი შემთხვევა (Worst): O(n²) — როცა სია საპირისპირო რიგითაა.


#! რატომ არის სორტირება მნიშვნელოვანი მასივში
#? სორტირება(Sorting) — არის მონაცემების დალაგება გარკვეული წესით (ზრდადობით ან კლებადობით).
#? ის ძალიან მნიშვნელოვანია, რადგან ამარტივებს მონაცემთა დამუშავებას, ძიებას და ანალიზს.

#! მიზეზები:
#* 1. ამარტივებს ძიებას — დალაგებულ მასივში შეგვიძლია გამოვიყენოთ Binary Search (O(log n)), ნაცვლად ჩვეულებრივი ხაზობრივი ძიებისა (O(n)).
#* 2. აადვილებს მონაცემთა ანალიზს — მარტივად ვპოულობთ მინიმუმს, მაქსიმუმს, მედიანას და ტოპ შედეგებს.
#* 3. აუცილებელია სხვა ალგორითმებისთვის — ბევრი ალგორითმი მუშაობს მხოლოდ დალაგებულ მონაცემებზე (მაგ. Binary Search Tree, Merge Algorithms).
#* 4. აუმჯობესებს ეფექტურობას — დალაგება ხშირად არის პირველი ნაბიჯი მონაცემთა ოპტიმალური დამუშავებისთვის.

#! მაგალითი:
#? დავალაგოთ გამოცდების ქულების სია, რათა მარტივად ვიპოვოთ საუკეთესო, უარესი და მედიანა.
#* scores = [85, 90, 72, 100, 67, 88, 94]
#* sorted_scores = sorted(scores)
#* lowest = sorted_scores[0]
#* highest = sorted_scores[-1]
#? ამ გზით, სორტირება გვაძლევს საშუალებას მარტივად დავამუშავოთ და შევაფასოთ მონაცემები.


def sort_georgian_letters(text):
    alphabet = "აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ"
    order = {}
    index = 0
    for y in alphabet:
        order[y] = index
        index += 1

    letters = []
    for x in text:
        if x in order:
            letters.append(x)
            
    n = len(letters)
    for i in range(n - 1):
        for j in range(n - i - 1):
            if order[letters[j]] > order[letters[j + 1]]:
                temp = letters[j]
                letters[j] = letters[j + 1]
                letters[j + 1] = temp
    result = ""
    for ch in letters:
        result += ch
    return result

print(sort_georgian_letters("ბგადჯვზა"))


def sort_objects_simple(arr):
    n = len(arr)
    for i in range(n - 1):
        for j in range(n - i - 1):
            first = arr[j]
            second = arr[j + 1]
            
            swap = False
            if first['order'] > second['order']:
                swap = True
            elif first['order'] == second['order']:
                if first['id'] < second['id']:
                    swap = True

            if swap:
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
    return arr

objects = [
    {"order": 2, "id": 101},
    {"order": 1, "id": 200},
    {"order": 2, "id": 150},
    {"order": 1, "id": 100},
]
for i in sort_objects_simple(objects):
    print(i)