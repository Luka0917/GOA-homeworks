# 8kyu

# https://www.codewars.com/kata/574b1916a3ebd6e4fa0012e7

def is_opposite(s1,s2):
    if (s1 == '' or s2 == '') or (len(s1) != len(s2)):
        return False
    for i in range(len(s1)):
        if s1[i].lower() != s2[i].lower() or s1[i] == s2[i]:
            return False
    return True