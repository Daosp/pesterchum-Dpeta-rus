# Hardcoded messages that NickServ sends and what to display to the user instead

messages = {
    "Ваш корешник нельзя зарегестрировать.":
        "", # display the same
    "Пароль принят - теперь вы признаны":
        "", # display the same
    "Если вы не поменяете в течение 1 минуты, я поменяю ваш ник.":
        "У вас есть 1 минута, чтобы определить.",
    "Если вы не поменяете в течение 20 секунд, я поменяю ваш ник.":
        "У вас есть 20 секунд, чтобы определить."
}

def translate(msg):
    if msg in messages:
        if messages[msg] == "":
            return msg
        return messages[msg]
    return None
