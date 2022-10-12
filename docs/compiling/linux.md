---
sidebar_position: 3
---

# Linux

Go to your desired repository in your terminal and run the following command to add all the JIPCAD files and required submodules.

```bash
git clone --recursive https://github.com/JIPCAD/JIPCAD
```


## Dependencies

>Note: I (Max Vogel) have only gone through the Arch installation process. I am copying the other dependencies from the [old wiki](https://github.com/cyj0912/Nome3/wiki), but I have not tested them. If you are using a different distribution, please let me know if the below instructions work for you.

### Arch

```bash
yay -S make gcc opensubdiv pugixml antlr4 qt5-3d
```

### Debian/Ubuntu

```bash
sudo apt install g++ cmake libpugixml-dev qtbase5-dev
```

### Fedora
```bash
sudo dnf install gcc-c++ cmake pugixml-devel qt5-devel OpenMesh-devel libuuid-devel
```


### Installing Qt

The last compatible version of Qt is 5.12. You can install this by building from git, which Qt has a [nice guide on](https://wiki.qt.io/Building_Qt_5_from_Git). On Arch, I was unable to install from the regular Qt repo, [found here](https://code.qt.io/cgit/qt/qt5.git/), and instead had to resort to the [KDE fork](https://invent.kde.org/qt/qt/qt5/-/tree/5.15.2):

```bash
git clone -b 5.12 --recursive https://invent.kde.org/qt/qt/qt5.git
cd qt5
git checkout 5.12
perl init-repository
./configure
sudo make -j1 install
mkdir build && cd build
```

## Compile

To compile JIPCAD, run the following commands:

```bash
cd JIPCAD
mkdir build && cd build
cmake .. && make
```