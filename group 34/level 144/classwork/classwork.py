# 8kyu

# https://www.codewars.com/kata/58cb43f4256836ed95000f97

def find_difference(a, b):
    return abs((a[0] * a[1] * a[2]) - (b[0] * b[1] * b[2]))

# https://www.codewars.com/kata/5625618b1fe21ab49f00001f

def say_hello(name):
    return f'Hello, {name}'

# https://www.codewars.com/kata/55f73be6e12baaa5900000d4

def goals(laLiga, copaDelRey, championsLeague):
    return laLiga + copaDelRey + championsLeague

# https://www.codewars.com/kata/57f24e6a18e9fad8eb000296

def how_much_i_love_you(nb_petals):
    phrases = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"]
    return phrases[(nb_petals - 1) % 6]

# https://www.codewars.com/kata/577ff15ad648a14b780000e7

def greet(language):
    greetings = {
        "english": "Welcome",
        "czech": "Vitejte",
        "danish": "Velkomst",
        "dutch": "Welkom",
        "estonian": "Tere tulemast",
        "finnish": "Tervetuloa",
        "flemish": "Welgekomen",
        "french": "Bienvenue",
        "german": "Willkommen",
        "irish": "Failte",
        "italian": "Benvenuto",
        "latvian": "Gaidits",
        "lithuanian": "Laukiamas",
        "polish": "Witamy",
        "spanish": "Bienvenido",
        "swedish": "Valkommen",
        "welsh": "Croeso"
    }
    return greetings.get(language.lower(), "Welcome") if isinstance(language, str) else "Welcome"

# https://www.codewars.com/kata/59342039eb450e39970000a6

def odd_count(n):
    return n // 2

# https://www.codewars.com/kata/55ecd718f46fba02e5000029

def between(a,b):
    result = []
    for i in range(a, b + 1):
        result.append(i)
    return result