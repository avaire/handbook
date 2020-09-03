# How to get started
::: danger This documentation is still WIP
This documentation is still in progress, we're making it behind the scene!
:::
[[toc]]



## Prerequisites
### Dependencies
Since AvaIre is made with JDA 4.2, all dependencies are packaged within the same file. You can either use the [TC (TeamCity) repository](http://ci.avairebot.com) (Hosted on: [https://ci.avairebot.com](http://ci.avairebot.com))

### Java
We require at a bare minimum, [Java SDK 8](https://www.oracle.com/java/technologies/java-ee-sdk-download.html) (Oracle requires you to sign in/up to install the SDK). Going lower will not work, since most dependencies within the bot itself are based on Java 8.

### MySQL/SQLite
:::tip If you're using SQLite, skip this requirement
AvaIre supports both MySQL and SQLite. We recommend a MySQL database so you have more ease of use and accessibility during updated, but you may also use SQLite if you just want to develop a plugin for AvaIre
:::

If you're using MySQL, we *recommend* using MySQL 8. However, the bot should run on 5.6 as it's lowest. And MariaDB is also supported!


#### Local AvaIre
If you're making your own custom AvaIre (self host), you can use this in your ``build.gradle``
``` groovy
dependencies {
    compileOnly files('./AvaIre.jar')
}
```

#### TeamServer
Otherwise, you can use the CI server of AvaIre to pull the latest avalible file
``` groovy
repositories {
    teamcityServer{
        url = 'http://ci.avairebot.com'
    }
}

dependencies {
    // Version 0.9.165
    compileOnly tc(buildTypeId: 'Avaire_Build', version: '1', artifactPath: 'AvaIre.jar')
}
```


## How to structure the plugin packages

When structuring your packages, a certain "concistancy" keeps the code clean. This example is directly pulled from the [starboard plugin](https://github.com/avaire/starboard-plugin). On the AvaIre github organization.

``` java
Main-Folder.
└───src
    └───main
        ├─java
        │ └─com
        │   └─avairebot
        │     └─starboard
        │        │   Starboard.java ("Main Class")
        │        ├───command ("All commands get stored here")
        │        │       StarboardCommand.java 
        │        ├───handlers ("Every Listener get's put here")
        │        │       EmoteEventListener.java
        │        │       StarReaction.java  
        │        ├───job ("Place all jobs here that may need to happen")
        │        │       UpdateStarJob.java
        │        └───migrations ("If you're using a database, add your migrations here")
        │                 SetupStarboardTableAndFieldMigration.java
        │
        └───resources
                config.yml ("Create your config for the plugin here")
                plugin.yml ("Add data about the plugin here!") ("Required") // Check below to setup the plugin.yml!
```


## The basics of making a plugin.
**This part already thinks you have everything setup with the packages. You can add packages on the go, just make sure your project stays organised.**

### plugin.yml
When working with the AvaIre self-hosters API, you're able to use the ``plugin.yml`` to define what your plugin does, and what it needs to run. 
This example is directly pulled from the [starboard plugin](https://github.com/avaire/starboard-plugin), in [this file](https://github.com/avaire/starboard-plugin/blob/master/src/main/resources/plugin.yml).

``` yml
name: 'Starboard'
main: 'com.avairebot.starboard.Starboard'
version: '1.2.2'
author: 'Alexis Tan <Senither#0001>'
description: 'Starboard is a simple plugin that can be used to define a starboard channel per-server, users can then react to messages using the star emoji to get messages showing up on in the starboard channel.'
requires: '0.7.71'
```

To explain the ``.yml`` file:
``` yml
name: 'Plugin-Name' # This will be your plugin name, we use this to identify your plugin based on it's name.
main: 'me.author.plugin-name.MainClass' # This will be the main class your plugin starts from. And how (a selfhosted) AvaIre knows, "I need to run this class"
version: '1.2.2' # The version of YOUR plugin
author: 'Alexis Tan ' # The creator of the plugin
description: 'This plugin is a all in one upgrade from me to you.' # This is the explaination of your plugin, mostly what it does and how it works.
requires: '0.7.71' # AvaIre updates alot, so may your plugin. Use this to define the version REQUIRED to run the plugin!.
```

### Main class
Make sure the final class has the packages you defined in the [plugin.yml](#plugin-yml). Otherwise the (selfhosted) AvaIre won't know what class to start!

The basis of every class should be something like this:
``` java
package com.avairebot.starboard;

import com.avairebot.plugin.JavaPlugin;

public class Starboard extends JavaPlugin {
    @Override
    public void onEnable() {
        saveDefaultConfig();
        reloadConfig();
    }
}
```

Depending on what you're going to make, you are going to have to add some statements to the ``onEnable``.
T
his will be explained in the next page, when you [create your first command](../commands/create-your-first-command.html)!