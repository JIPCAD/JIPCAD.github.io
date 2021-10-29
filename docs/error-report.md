---
sidebar_position: 5
---
# Error Reporting Module
(Go to NOME3/Application/Parsing/SourceManager.CPP). There, you will find the `ReportErrors` and `CheckStatement` Methods, the two key methods in building an instance checker. 

`ReportErrors` Method parses the nom.g4 file, and tokenizes the code so it can be parsed by the CheckStatement Methods

`CheckStatement` Method goes through, line-by-line, the code looking for key phrases. If it finds an illegal phrase before it finds a legal phrase, it immediately errors. 

## Important Variables: 
```c++
std::vector<std::vector<std::string>> parsedcode -> 2d Vector which contains each word for the code by line numbers. 
std::unordered_map<std::string, std::string> shapemap -> Hashmap that maps each phrase to its endphrase (circle -> endcircle) 
std::unordered_map<std::string, std::string> idmap; -> Map of IDs
std::unordered_map<std::string, std::string> referencemap; -> Map of References (store anything you have to remember other than ids) 
```

## Building Instance Syntax Checkers:

 Starting at line 212, There is a place where you can call your instance syntax checkers. Each checker takes in the parsed code, idmap, referencemap, the ith and jth location of where you are currently checking, and the shapemap. 
Your function should either return {error} or a vector of the ith and jth location of where your syntax checker found the endphrases. There are already a lot of syntax checkers implemented, you can use things like CheckInstance() to check an instance if your syntax checker comes up to an instance for example. 
These functions are implemented for you 

```c++
balancedbracket(std::string)
isNumber(std::string)
checkcount(std::string, char) -> counts instances of char in string
CheckSubdivision(std::vector<std::vector<std::string>> parsedcode, std::unordered_map<std::string, std::string> &idmap, int i, int j, std::unordered_map<std::string, std::string> shapemap)
CheckInstance(std::vector<std::vector<std::string>> parsedcode, std::unordered_map<std::string, std::string> &idmap, int i, int j, std::unordered_map<std::string, std::string> shapemap)
CheckBank(std::vector<std::vector<std::string>> parsedcode, std::unordered_map<std::string, std::string> &referencemap, std::unordered_map<std::string, std::string> &idmap, int i, int j, std::unordered_map<std::string, std::string> shapemap)
CheckGroup(std::vector<std::vector<std::string>> parsedcode, std::unordered_map<std::string, std::string> &idmap, int i, int j, std::unordered_map<std::string, std::string> shapemap)
```
 
In your function, you should be checking for 
* Correct Number of phrases
* Valid IDs (use idmap) 
* Appropriate use of optional phrases
* No reserved characters
* No illegal phrases (only expected ones)
* Balanced Brackets


