# 7kyu

#  https://www.codewars.com/kata/55908aad6620c066bc00002a/python

def xo(s):
    s = s.lower()
    x = []
    o = []
    for i in s:
        if i == "x":
            x.append(i)
        elif i == "o":
            o.append(i)
    return len(x) == len(o)