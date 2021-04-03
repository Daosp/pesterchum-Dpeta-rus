# Достанькореша
Поддерживается репозиторий Достанькореша ghostDunk'a. Подключается к irc.pesterchum.xyz по умолчанию с момента выключения официального сервера (поменять на другие серверы можно в server.json!!!). Достанькореша - это клиент обмена мгновенными сообщениями, который копирует внешний вид клиентов из веб-комикса Эндрю Хасси Homestuck.

Этот репозиторий основан (и был скопирован на зеркала) на исправлениях nickserv pesterchum-karxi + Hydrothermal.

Проверьте файл [CHANGELOG.md], чтобы узнать что изменилось!
Проверьте файл [TODO.md], чтобы увидеть текущие цели основного репозитория >:3c

Старые файлы README и гайды смотрите в папке [docs]. (Dpeta удалил macBuilds от Lexicality, так как он больше не применим)

[CHANGELOG.md]: https://github.com/Dpeta/pesterchum-alt-servers/blob/py3_pyqt5/CHANGELOG.md
[docs]: https://github.com/Dpeta/pesterchum-alt-servers/tree/py3_pyqt5/docs/
[TODO.md]: https://github.com/Dpeta/pesterchum-alt-servers/blob/py3_pyqt5/TODO.md

## УСТАНОВКА
Загрузите соответствующий выпуск для своей платформы с [releases][releases]. Если вы работаете в Windows, вы можете использовать установщик, для ручной установки загрузите zip-файл и извлеките его в любой каталог, а затем запустите исполняемый файл : )
 
[releases]: https://github.com/Daosp/pesterchum-Dpeta-altservers-rus/releases

## BUILDING
Самостоятельная сборка Достанькореша не требуется !!! Это актуально только в том случае, если вы знаете, что делаете >:3c

### REQUIREMENTS:

 - [Python 3]

#### PYTHON DEPENDENCIES
 - [pygame]
 - [PyQt5] (And, depending on your package manager & platform, python3-pyqt5.qtmultimedia)
 - [feedparser]
 - [python-magic]
 - [ostools]
 - [requests]

[Python 3]: https://www.python.org/downloads/
[PyQt5]: https://pypi.org/project/PyQt5/
[pygame]: https://pypi.org/project/pygame/
[feedparser]: https://pypi.org/project/feedparser/
[python-magic]: https://pypi.org/project/python-magic/
[ostools]: https://pypi.org/project/ostools/
[requests]: https://pypi.org/project/requests/
### CX_FREEZE METHOD

#### Windows:
``python setup.py build``
or
``python setup.py bdist_msi``

#### Mac:
``python setup.py bdist``

### PYINSTALLER METHOD
#### Linux (might also work on other platforms!!): 
``pyinstaller pesterchum.spec``

## РУСИФИКАЦИЯ
Переводом и остальным занимается Daosp (тупой челик, который хренового знает инглиш и питон)

## СМАЙЛЫ
Просто для удобства. :3 (Взято из докментов [README-karxi.mkdn])

* `:rancorous:`
* `:apple:`
* `:bathearst:`
* `:cathearst:`
* `:woeful:`
* `:pleasant:`
* `:blueghost:`
* `:slimer:`
* `:candycorn:`
* `:cheer:`
* `:duhjohn:`
* `:datrump:`
* `:facepalm:`
* `:bonk:`
* `:mspa:`
* `:gun:`
* `:cal:`
* `:amazedfirman:`
* `:amazed:`
* `:chummy:`
* `:cool:`
* `:smooth:`
* `:distraughtfirman:`
* `:distraught:`
* `:insolent:`
* `:bemused:`
* `:3:`
* `:mystified:`
* `:pranky:`
* `:tense:`
* `:record:`
* `:squiddle:`
* `:tab:`
* `:beetip:`
* `:flipout:`
* `:befuddled:`
* `:pumpkin:`
* `:trollcool:`
* `:jadecry:`
* `:ecstatic:`
* `:relaxed:`
* `:discontent:`
* `:devious:`
* `:sleek:`
* `:detestful:`
* `:mirthful:`
* `:manipulative:`
* `:vigorous:`
* `:perky:`
* `:acceptant:`
* `:olliesouty:`
* `:billiards:`
* `:billiardslarge:`
* `:whatdidyoudo:`

[README-karxi.mkdn]: https://github.com/Dpeta/pesterchum-alt-servers/tree/py3_pyqt5/docs/README-karxi.mkdn
