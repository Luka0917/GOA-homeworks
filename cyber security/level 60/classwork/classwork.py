# https://www.codewars.com/kata/58d76854024c72c3e20000de/train/python

def reverse_alternate(st):
    st = st.split()
    for i in range(1, len(st), 2):
        st[i] = st[i][::-1]
    return " ".join(st)