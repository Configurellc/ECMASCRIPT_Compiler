# ECMASCRIPT Compiler
```This README is in: DRAFT ```
## Introduction

We develop in a world today where JavaScript is no longer our limitation but the browsers that are in use in our prod enviorments are. Use this easy to use compiler to transform the latest Ecmascript into compatiable JS code for your browser. Before we get started with all the fun stuff there are a few bare minimum pre-requistes needed if you want to accomplish this from your local machine, I will provide links and update this README with time, its recommended that use your personal computer. The method that we will be accomplishing this task is within the browser. This allows us to access this tool and compile our JS from anywhere and not just limited to our local machines.  

## Pre-Requisites(Local Use)
- [Node.js](https://nodejs.org/en/)
- [Git Bash](https://www.gnu.org/software/bash/)

## Getting Started

Get setup in 10 minutes or less using the following steps so you can began compiling your ECMASCRIPT.

- [ ] GitHub Account- If you do not already have a GitHub account follow this [link](https://github.com/join) to create one. If you do have a GitHub account ensure you are logged in. 
- [ ] Online IDE Account - If you currently use an online Integrated Development Enviornment (IDE) ensure that it offers you a virtual command line as well as supports node. If you do not have an account I will be providing you a list of top online IDE that support both. 

## Choosing Online IDE

There are many great online IDE's available on the internet I will list out a few that are free to use. 

1. [Cloud9](https://www.cloud.io) - This is my preferred editor and if you were lucky enough to sign up anytime before Amazon's acquisition its still available for you. If not, sorry they have closed down any further signups. You can register for their **AWS Cloud9** version [here](https://aws.amazon.com/cloud9/) but amazon will require a credit card to be on file.

2. [Eclipse Che (codenvy)](https://www.eclipse.org/che/)- When Amazon eventually deprecates Cloud9 this will be its successor. Codenvy is a very powerful web IDE with a great front end interface. Use the **SaaS- Create Free Account** choice if you go with this IDE. The software was created by Red Hat Software, they will require to create an account which will act as the master login if you decide to use more their technologies.

3. [Codeanywhere](https://codeanywhere.com/) - This a great editor with the tools needed to compile ECMASCRIPT the only drawback is its free model is extremely limited. On its free model you are given 120 mins max a day which may not be a bad thing if you are simply pasting this code into this tool to compile your ECMASCRIPT. Also on the free model you are limited to one container/workspace but you can create multiple projects within that container.

## Setting Up your IDE

Now that you've chosen which enviornment you will be using to compile your ECMASCRIPT I will walk you through how to set everything up and repeat the process for future projects. 

#### Cloud9 Setup
https://www.youtube.com/watch?v=iTfPsPdewC8#action=share

#### Elcipse Che Setup
https://youtu.be/CLveq5r_Gus

#### Codeanywhere
coming soon

## Run Script

The time has finally come..it time to compile your ecmascript into compatiable JS for your browser run the below script in your terminal:
``` ./node_modules/.bin/babel src --out-dir lib --presets=@babel/env ```

Once  completed check the ``` ./lib/script.js ``` file for your browser compatiable code. 

## Conclusion

There is a lot of cutting edge frameworks that are out there, but with the strides JavaScript have made with the language over the last 4 years JS has become much more dynamic, almost cutting the total number of lines of code needed to execute tasks in half when comparing to previous methods of accomplishing tasks using JS. I hope this repository helps you accomplish those tasks in half the time as well.  
