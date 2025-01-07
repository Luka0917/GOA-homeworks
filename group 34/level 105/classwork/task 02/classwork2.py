# 5kyu

#  https://www.codewars.com/kata/514a024011ea4fb54200004b/train/python

def domain_name(url):
    if "://" in url:
        url = url.split("://")[1]
    if url.startswith("www."):
        url = url[4:]
    return url.split('.')[0]