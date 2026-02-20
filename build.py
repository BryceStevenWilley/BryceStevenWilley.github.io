#!/usr/bin/env python3

import os
from shutil import copytree, rmtree

sub_projects = [
    "dart-projects",
    "litlookahead-slides",
    "comp600talk",
    "engi600talk",
    "visioning_texts",
    "docacon-slides",
    "docacon23-slides",
]

for proj in sub_projects:
    copytree(f"../{proj}", f"_site/{proj}")
    rmtree(f"_site/{proj}/.git", ignore_errors=True)
    rmtree(f"_site/{proj}/.pub", ignore_errors=True)
    os.remove(f"_site/{proj}/.gitignore")

copytree("../Bryce-Faircamp/.faircamp_build", "_site/music")

