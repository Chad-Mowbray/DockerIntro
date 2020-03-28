# Introduction to Docker


Has this ever happened to you...?

You write a Python program on your local machine, and of course you are using the latest and greatest version of Python (say 3.8).  You finish it up and then push it up to Github for all the world, and yourself, to use.  A few weeks later you are on another machine and decide your program would come in handy.  So you pull down your repo and run your program.

All of a sudden, you get strange errors.  Modules are missing, some library doesn't work, or there are syntax errors.  But you are sure you tested it well on your local machine before you pushed it up to Github.  What is happening?

After some investigation, you realize that the computer you are trying to run your program on only has Python 2.7.  At this point you have a couple options:
1. Go through your program and change anything that isn't compatable with Python 2.7.  Hopefully, nothing in your program requires a feature that isn't compatable with Python 2.7...
2. Update the version of Python on the computer you are currently using.  Hopefully, you have permission to install a new program...

At this point you are probably annoyed and frustrated.  Just imagine if you had a much more complicated program that used several languages, libraries, operating systems, etc.  It can get very messy very quickly.

Fortunately there is something out there that can solve this problem for us: Docker.  

![docker_logo](readme/docker_logo.png)

Docker basically takes your program and wraps it up in everything it needs to run.  So wherever you run it, it has everything that it needs. 

This technology is called "containerization".  It comes from the shipping industry, where everything is shipped in uniform containers.  That way, the people shipping it only have to worry about the outermost layer.  The tanker captain doesn't care if the shipping container is full of rice, teddy bears, or farm equipment-- they all stack the same way.

Docker puts your application in a self-sufficient "container" that will run the same anywhere.  As long as your machine has Docker, you don't need to worry about what version of Python is installed.  You tell Docker everything your application needs to run, and the rest is taken care of.

Most likely that sounds very abstract and complicated.  I would suggest not wasting too much time trying to wrap your head around the nuts and bolts.  We want to <i>use</i> it, and using it is pretty easy.


How does Docker know what our application needs to run?  Quite simply, use a Dockerfile to tell it.  Here is what a basic Dockerfile looks like:










