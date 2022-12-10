---
sidebar_position: 1
---

# Mac

>This is a quick setup for new students working on JIPCAD on Mac. If the below instructions do not work, please also look at the mini guide Toby Chen recently wrote: https://github.com/cyj0912/Nome3/wiki (which also contains Fedora, Ubuntu, and macOS homebrew commands), or ask an experienced macOS JIPCAD member.

Go to your desired repository in your terminal and run the following command to add all the JIPCAD files and required submodules.

```bash
git clone --recursive https://github.com/JIPCAD/JIPCAD
```


## Dependencies
JIPCAD requires the most recent version of its dependencies so run:

```bash
brew install qt5
brew install open-mesh
brew install pugixml
brew install cmake
brew install opensubdiv
```

You'll also need to download: ANTLR parser generator (https://www.antlr.org/download/antlr-4.8-complete.jar). Zachary informed me you can just do `brew install antlr`, and that should work. Make sure to install Java as well.


## Compile
To compile JIPCAD, run the following commands:

```bash
cd JIPCAD
mkdir build && cd build
cmake .. && make
```

The above commands will create a build folder, and compile and make JIPCAD. This may take a few minutes so wait until the make has completed. Once it has completed, navigate to `build/Application/Binaries`. In the Binaries folder there should be a JIPCAD executable. Run this program and it will open up an `untitled.nom` preview. From the menu bar at the top of your screen run `File/Open` and select the .nom file you would like to run. You will now be able to see your .nom instance in a 3-D display!


## Troubleshooting

Most likely, CMake is going to complain about 'Could NOT find ANTLR (missing: ANTLR_EXECUTABLE)'. If this happens, you just need to manually set `ANTLR_EXECUTABLE=<path to antlr-4.8-complete.jar>`. You can either manually edit the `CMakeCache.txt` file under your build directory, or pass it as a command line argument to CMake. I think the command line argument is just `cmake JIPCAD -D ANTLR_EXECUTABLE=<path to antlr-4.8-complete.jar>`.

If you still get an error related to ANTLR, first make sure the file path is correct. Then, copy paste this file https://github.com/JIPCAD/JIPCAD/blob/master/CMake/Modules/ExternalAntlr4Cpp.cmake into your ExternalAntlr4Cpp.cmake.



Upon your first run of CMake, it may complain about 'Foundation does not contain a CMakeLists.txt file.' This is because when you clone the repository, git does not by default clone all the submodules, so the Foundation subfolder is empty by default. You can either re-clone the repo with `git clone --recursive` or run `git submodule update --init --recursive`. If you have further questions, read the top portion of this short tutorial on git submodules - https://www.vogella.com/tutorials/GitSubmodules/article.html.