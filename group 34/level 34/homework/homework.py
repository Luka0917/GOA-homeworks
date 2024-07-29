print("----- 1 -----")

def find_short(s):   # ვქმნით ფუნქციას სახელად find_short და შიგნით ვაგდებთ ერთ პარამეტრს სახელად s
    list1 = s.split(" ")   # ვქმნით ცვლადს სახელად list1 და შიგნით ფუნქციის პარამეტრს split-ის დახმარებით ვშლით სტრინგს სფეისებით


    word_len = len(list1[0])   # ვქმნით ცვლადს სახელად word_len სადაც სიის პირველი სიტყვის სიგრძეს ვაგდებთ ამ შემთხვევაში bitcoin-7
    for i in list1:   # for loop-ით გადავუვლით list1-ის სიას
        if len(i) < word_len:   # if-ის დახმარებით ვამოწმებთ არის თუ არა ამ list1-ში უფრო მოკლე სიტყვები ვიდრე word_len
            word_len = len(i)   # და თუ არის ამ სიტყვას ვუტოლებთ word_len-ს
    
    # word_len = 3
    return word_len   # ვაბრუნებთ მოკლე სიტყვას word_len

print(find_short("bitcoin take over the world maybe who knows perhaps"))

print("----- 2 -----")

full_name = "luka tatuashvili"
print(full_name.split("a"))

print("----- 3 -----")

goa = "goal-oriented-academy"
print(goa.split("-"))

print("----- 4 -----")

text1 = "hello, my name is luka, i am 15 years old"
print(text1.split(", "))

print("----- 5 -----")

fruits = "apple orange banana pineapple"
print(fruits.split(" "))

print("----- 6 -----")

vegetables = "tomato potato carrot corn"
print(vegetables.split("t"))

print("----- 7 -----")

text2 = "luka*toko*andria"
print(text2.split("*"))

print("----- 8 -----")

text3 = "apple#banana#cherry#orange"
print(text3.split("#", 1))

print("----- 9 -----")

drinks = "cola borjomi nabeghlavi likani"
print(drinks.split("i"))

print("----- 10 -----")

text4 = "this car is expensive"
print(text4.split("e"))

print("----- 11 -----")

text5 = "this book is interesting"
print(text5.split("t"))

print("----- 12 -----")

