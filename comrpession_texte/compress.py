dico = {'texte': '1',
        'lorem': '2',
        'qui': '3',
        'donc': '4',
        'est': '5',
        'que': '6',
        'pour': '7',
        'ceci': '8',
        'faux-texte': '9',
        'dans': '10',
        'plus': '11',
        'avec': '12'}


def A(text):
    list = text.split()

    return list


def B(list):
    text = ' '.join(list)
    print(text)
    return text


def C(list, dic):
    result = []
    for elem in list:
        if elem in dic:
            result.append(dic[elem])
        else:
            result.append(elem)

    print(result)
    return result


C(['mais', 'ceci', 'est', 'un', 'long', 'faux-texte'], dico)


def reverse_dictionnary(dic):
    reverse = dict()
    for key in dic:
        val = dic[key]
        reverse[val] = key

    print(reverse)
    return reverse


reverse_dictionnary(dico)


def Decompress(list, dic):
    reverse_dictionnary(dic)
    return C(list, dic)


def D(list):
    dico = dict()
    for elem in list:
        if elem not in dico and list.count(elem) > 1 and len(elem) > 3:
            dico[elem] = list.count(elem)
    print(dico)
    return dico


D(['ceci', 'est', 'un', 'faux-texte', 'ceci', 'est'])
