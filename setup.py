# Windows-only cx_freeze setup file
from cx_Freeze import *
import sys

from version import buildVersion

if sys.version_info < (3, 0, 0):
    sys.exit("Python versions lower than 3 are not supported.")

def is_64bit() -> bool:
    return sys.maxsize > 2**32

base = None
if sys.platform == "win32":
    base = "Win32GUI"

includefiles = ["quirks",
                "smilies",
                "themes",
                "docs",
                "README.md",
                "LICENSE",
                "CHANGELOG.md",
                "server.json",
                "PCskins.png",
                "Pesterchum.png"]
build_exe_options = {
    "includes": ["PyQt5",
                 "pygame",
                 "feedparser",
                 "magic",
                 "ostools",
                 "requests",
                 "urllib",
                 "pytwmn",
                 "re",
                 "oyoyo",
                 "ssl"],
    "excludes": ["collections.sys",
                 "collections._sre",
                 "collections._json",
                 "collections._locale",
                 "collections._struct",
                 "collections.array",
                 "collections._weakref"],
    "include_files": includefiles,
    "include_msvcr": True
}

bdist_mac_options = {
    'iconfile': 'trayicon32.icns',
    'bundle_name': "Pesterchum"
}

description = "Клиент мгновенного обмена сообщениями, копирующий внешний вид клиентов из веб-комикса Эндрю Хасси Homestuck."
icon = "pesterchum.ico"

# See https://stackoverflow.com/questions/15734703/use-cx-freeze-to-create-an-msi-that-adds-a-shortcut-to-the-desktop
shortcut_table = [
    ("DesktopShortcut",        # Shortcut
     "DesktopFolder",          # Directory_
     "Pesterchum",             # Name
     "TARGETDIR",              # Component_
     "[TARGETDIR]pesterchum.exe",# Target
     None,                     # Arguments
     description,              # Description
     None,                     # Hotkey
     None,                     # Icon (Is inherited from pesterchum.exe)
     None,                     # IconIndex
     None,                     # ShowCmd
     'TARGETDIR'               # WkDir
     ),
    ("StartMenuShortcut",        # Shortcut
     "StartMenuFolder",          # Directory_
     "Pesterchum",             # Name
     "TARGETDIR",              # Component_
     "[TARGETDIR]pesterchum.exe",# Target
     None,                     # Arguments
     description,              # Description
     None,                     # Hotkey
     None,                     # Icon
     None,                     # IconIndex
     None,                     # ShowCmd
     'TARGETDIR'               # WkDir
     )
    ]

msi_data = {"Shortcut": shortcut_table}
bdist_msi_options = {'data': msi_data,
                     'summary_data': {
                         'comments': "FL1P",
                         'keywords': "Pesterchum"},
                     'upgrade_code': "{86740d75-f1f2-48e8-8266-f36395a2d77f}",
                     'add_to_path': False, # !!!
                     'all_users': True,
                     'install_icon': "pesterchum.ico"}

setup(
            name = "Достанькореша",
            version = buildVersion,
            url = "https://github.com/Daosp/pesterchum-Dpeta-altservers-rus",
            description = description,#"P3ST3RCHUM",
            options = {"build_exe": build_exe_options,
                       "bdist_msi": bdist_msi_options,
                       "bdist_mac": bdist_mac_options},
            executables = [Executable("pesterchum.py",
                                      base=base,
                                      icon=icon
                                      )])
