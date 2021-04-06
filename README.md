# Достанькореша
Поддерживается репозиторий Достанькореша ghostDunk'a. Подключается к irc.pesterchum.xyz по умолчанию с момента выключения официального сервера (поменять на другие серверы можно в server.json!!!). Достанькореша - это клиент обмена мгновенными сообщениями, который копирует внешний вид клиентов из веб-комикса Эндрю Хасси Homestuck.

Репозиторий Dpet'ы основан (и был скопирован на зеркала) на исправлениях nickserv pesterchum-karxi + Hydrothermal.

Проверьте файл [CHANGELOG.md], чтобы узнать изменения!

Проверьте файл [TODO.md], чтобы увидеть текущие цели основного репозитория >:3c

[CHANGELOG.md]: https://github.com/Dpeta/pesterchum-alt-servers/blob/py3_pyqt5/CHANGELOG.md
[TODO.md]: https://github.com/Dpeta/pesterchum-alt-servers/blob/py3_pyqt5/TODO.md

## РУКОВОДСТВА

Старые файлы README и руководства смотрите в папке [docs].

Dpeta крайне рекомендует прочитать эти руководства, если вы новичок в Достанькореше:
- [README-pesterchum.mkdn]
- [trollquirks.mkdn]

Руководства по особенностям и темам Python также находятся в папке [docs]. Если вы хотите настроить градиентное правило (gradient quirk), вам следует взглянуть на это [руководство][gradient-guide].

[gradient-guide]: https://paste.0xfc.de/?e60df5a155e93583#AmcgN9cRnCcBycmVMvw6KJ1YLKPXGbaSzZLbgAhoNCQD
[trollquirks.mkdn]: https://github.com/Dpeta/pesterchum-alt-servers/blob/py3_pyqt5/docs/trollquirks.mkdn
[README-pesterchum.mkdn]: https://github.com/Dpeta/pesterchum-alt-servers/blob/py3_pyqt5/docs/README-pesterchum.mkdn
[docs]: https://github.com/Dpeta/pesterchum-alt-servers/tree/py3_pyqt5/docs/


## УСТАНОВКА
Загрузите соответствующий выпуск с [Releases][releases]. Для установки загрузите архив-файл и извлеките его в любой каталог, а затем запустите исполняемый файл : )

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

``python setup.py bdist --format=zip``

#### Mac:
``python setup.py bdist``

### PYINSTALLER СБОРКА
#### Linux (также может работать на других платформах!!): 
``pyinstaller pesterchum.spec``

## РУСИФИКАЦИЯ
Переводом и остальным занимается Daosp (тупой челик, который хренового знает инглиш и питон)
### Прогресс первевода:
* Основные файлы переведены, нужно проверять
* Темы (посмотрите в [конце][pcott]):
    * Pesterchum переведён визуально и текстово (ВТ)
    * Trollian - ВТ, нужно проверять
    * остальное - Т, нужно проверять
* [Руководство по созданию своих тем][themes.mkdn]

Я могу ошибаться, так что отправляйте мне найденные вами ошибки перевода в [Issues][issues-rus], если ошибка связана с работой клиента, то тогда нужно обращаться к самому [Dpet'е][issues] (ДООЛ: он англоговорящий)

[pcott]: https://github.com/Daosp/pesterchum-Dpeta-altservers-rus/blob/py3_pyqt5/README.md#%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B5%D1%81%D1%81-%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4%D0%B0-%D1%82%D0%B5%D0%BC
[themes.mkdn]: https://github.com/Daosp/pesterchum-Dpeta-altservers-rus/blob/py3_pyqt5/docs/themes.mkdn
[issues-rus]: https://github.com/Daosp/pesterchum-Dpeta-altservers-rus/issues
[issues]: https://github.com/Dpeta/pesterchum-alt-servers/issues

## СМАЙЛЫ
Просто для удобства. :3 (Взято из [README-karxi.mkdn])

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

## ПРОГРЕСС ПЕРЕВОДА ТЕМ
* battlefield:
- [X] Текст
- [ ] Визуал
- [ ] Проверка
* BettyBother:
- [X] Текст
- [ ] Визуал
- [ ] Проверка
* Cdasl:
- [X] Текст
- [ ] Визуал
- [ ] Проверка
* crosbytop:
- [X] Текст
- [ ] Визуал
- [ ] Проверка
* dad:
- [X] Текст
- [ ] Визуал
- [ ] Проверка
* danceofthorns:
- [X] Текст
- [ ] Визуал
- [ ] Проверка
* enamel:
- [X] Текст
- [ ] Визуал
- [ ] Проверка
* enoirmel:
- [X] Текст
- [ ] Визуал
- [ ] Проверка
* FRESHjamz:
- [X] Текст
- [ ] Визуал
- [ ] Проверка
* gold:
- [X] Текст
- [ ] Визуал
- [ ] Проверка
* gold xl:
- [X] Текст
- [ ] Визуал
- [ ] Проверка
* jadeenamel:
- [X] Текст
- [ ] Визуал
- [ ] Проверка
* johntierchum:
- [X] Текст
- [ ] Визуал
- [ ] Проверка
* MSChum:
- [X] Текст
- [ ] Визуал
- [ ] Проверка
* niccage:
- [X] Текст
- [ ] Визуал
- [ ] Проверка
* paperchum:
- [X] Текст
- [ ] Визуал
- [ ] Проверка
* pesterchum:
- [X] Текст
- [X] Визуал
- [X] Проверка
* pesterchum2.5:
- [X] Текст
- [ ] Визуал
- [ ] Проверка
* sbahj:
- [X] Текст
- [ ] Визуал
- [ ] Проверка
* Scratch:
- [X] Текст
- [ ] Визуал
- [ ] Проверка
* squiddlechum:
- [X] Текст
- [ ] Визуал
- [ ] Проверка
* steamchum:
- [X] Текст
- [ ] Визуал
- [ ] Проверка
* strifekind:
- [X] Текст
- [ ] Визуал
- [ ] Проверка
* Teal Trollian:
- [X] Текст
- [ ] Визуал
- [ ] Проверка
* trollian:
- [X] Текст
- [X] Визуал
- [ ] Проверка
* trollian2.5:
- [X] Текст
- [ ] Визуал
- [ ] Проверка
* typewriter:
- [X] Текст
- [ ] Визуал
- [ ] Проверка
