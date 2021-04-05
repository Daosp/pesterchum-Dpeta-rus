# Достанькореша
Поддерживается репозиторий Достанькореша ghostDunk'a. Подключается к irc.pesterchum.xyz по умолчанию с момента выключения официального сервера (поменять на другие серверы можно в server.json!!!). Достанькореша - это клиент обмена мгновенными сообщениями, который копирует внешний вид клиентов из веб-комикса Эндрю Хасси Homestuck.

Этот репозиторий основан (и был скопирован на зеркала) на исправлениях nickserv pesterchum-karxi + Hydrothermal.

Проверьте файл [CHANGELOG.md], чтобы узнать изменения!
Проверьте файл [TODO.md], чтобы увидеть текущие цели основного репозитория >:3c

[CHANGELOG.md]: https://github.com/Dpeta/pesterchum-alt-servers/blob/py3_pyqt5/CHANGELOG.md
[TODO.md]: https://github.com/Dpeta/pesterchum-alt-servers/blob/py3_pyqt5/TODO.md

## РУКОВОДСТВА

Старые файлы README и руководства смотрите в папке [docs]
Dpeta крайне рекомендует прочитать эти руководства, если вы новичок в Достанькореше:
- [README-pesterchum.mkdn]
- [trollquirks.mkdn]

Руководства по особенностям и темам Python также находятся в папке [docs]. Если вы хотите настроить градиентное правило (gradient quirk), вам следует взглянуть на [этих руководствах][gradient-guide].

[gradient-guide]: https://paste.0xfc.de/?e60df5a155e93583#AmcgN9cRnCcBycmVMvw6KJ1YLKPXGbaSzZLbgAhoNCQD
[trollquirks.mkdn]: https://github.com/Dpeta/pesterchum-alt-servers/blob/py3_pyqt5/docs/trollquirks.mkdn
[README-pesterchum.mkdn]: https://github.com/Dpeta/pesterchum-alt-servers/blob/py3_pyqt5/docs/README-pesterchum.mkdn
[docs]: https://github.com/Dpeta/pesterchum-alt-servers/tree/py3_pyqt5/docs/


## УСТАНОВКА
Загрузите соответствующий выпуск с [releases][releases]. Если вы работаете в Windows, вы можете использовать установщик, для ручной установки загрузите zip-файл и извлеките его в любой каталог, а затем запустите исполняемый файл : )

Из-за природы cx_freeze и pyinstaller некоторые библиотеки (как glibc) динамически связаны. Если исполняемый файл для вашей платформы несовместим с версией вашей операционной системы, смотрите следующий раздел для прямого запуска Достанькореша.
 
[releases]: https://github.com/Daosp/pesterchum-Dpeta-altservers-rus/releases

## ЗАПУСК И СБОРКА
Вот краткое руководство, что делать, чтобы запустить Pesterchum из командной строки и создать его, если хотите (то есть создать исполняемый файл). Прямой запуск Достанькореша или самостоятельная сборка Достанькореша не требуется!!! Это актуально только в том случае, если вы знаете, что делаете >:3c

### НЕОБХОДИМО:

 - [Python 3]

#### PYTHON ЗАВИСИМОСТИ
 - [pygame]
 - [PyQt5] (И, в зависимости от вашего менеджера пакетов и платформы, python3-pyqt5.qtmultimedia)
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
### CX_FREEZE СБОРКА

#### Windows:
``python setup.py build``
или
``python setup.py bdist_msi``

#### Mac:
``python setup.py bdist``

### PYINSTALLER СБОРКА
#### Linux (также может работать на других платформах!!): 
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
