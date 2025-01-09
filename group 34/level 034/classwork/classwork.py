# https://www.codewars.com/kata/5556282156230d0e5e000089/train/python

def dna_to_rna(dna):
    rna = ""
    for i in dna:
        if i != "T":
            rna += i
        else:
            rna += "U"
    return rna

# https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/python

def find_short(s):
    list1 = s.split(" ")


    word_len = len(list1[0])
    for i in list1:
        if len(i) < word_len:
            word_len = len(i)
    
    return word_len