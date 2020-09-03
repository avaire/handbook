# What is a middleware?
Middlewares are used in the bot to define the rules a guild, or a user has to find to. This can be anything from needing a specific role, to having the exact permissions required to accept the actions taken in the command. It all depends on how it's setup, and how commands work when setting it up. 

AvaIre's plugin API, of course, allows for making this effect very very very simple. Simply by adding a class with it's rules in the java code.

## Middlewares
Presuming you've followed the handbook step by step, your project should now have 2 classes, 1 main class and 1 class for the command.
Within that command you had the "middleware's" visisible:
``` java
    @Override
    public List <String> getMiddleware() { 
        return Arrays.asList(
            "require:user,general.manage_server", 
            "throttle:guild,1,5" 
        );
    }
```

Within this arraylist, you specify the exact "rules"/middlewares you want to use. You can do this with the current existing ones. And you can [create your own](./create-your-first-middleware.html). 

## AvaIre middlewares

### hasAnyRole - Check if user has any listed role.
The ``hasAnyRole`` middleware, checks if a user has any of the specific roles required to run the command, separated by the ``,``'s
``` java
    @Override
    public List <String> getMiddleware() { 
        return Arrays.asList(
            "hasAnyRole:Owner,Developer"
        );
    }
```

### hasVoted - Check if user has voted the past 12 hours.
The ``hasVoted`` middleware, checks if a user has voted in the guild the command was executed in.
``` java
    @Override
    public List <String> getMiddleware() { 
        return Arrays.asList(
            "hasVoted"
        );
    }
```

### isBotAdmin - Checks if user is an bot admin.
The ``isBotAdmin`` middleware, checks if a user is added to the [bot admins in the config.yml](https://github.com/avaire/avaire/blob/master/src/main/resources/config.yml#L468-L480). These are the bot owners, able to install plugins and run the system commands.
``` java
    @Override
    public List <String> getMiddleware() { 
        return Arrays.asList(
            "isBotAdmin"
        );
    }
```

### require - Check if user has all specific permissions listed.
The ``require`` middleware, checks if a user has all permissions listed in the agruments of the middleware
``` java
    @Override
    public List <String> getMiddleware() { 
        return Arrays.asList(
            "require:user,general.administrator",
            "require:all,general.ban_members",
            "require:bot,text.manage_messages,text.read_message_history"
        );
    }
```

The ``require`` middleware can be used in multiple ways, this is the argument composition:  
``require:<user/bot/all>,<permissions divided by commas>,<permission>,<permission>``  
* ``user`` - The user who ran the command. Needs permissions defined in the next argument  
* ``bot`` - THe bots needs the permissions defined in the next argument  
* ``all`` - Both the bot and the user need the permission to work (Example: ``general.ban_members``)  

All permissions can be found in [com.avairebot.permissions.Permissions](https://github.com/avaire/avaire/blob/master/src/main/java/com/avairebot/permissions/Permissions.java#L28-L60). (Reminder to use the ``general.`` | ``text.`` | ``voice.`` to define the permisions in the require argument).

### requireOne - Check if user has ONE OF the specific permissions listed.
The ``requireOne`` middleware, checks if a user has ONE permissions listed in the agruments of the middleware. It works the same as the [``require``](@requireone-check-if-user-has-all-specific-permissions-listed) middleware.
``` java
    @Override
    public List <String> getMiddleware() { 
        return Arrays.asList(
            "requireOne:user,general.administrator",
            "requireOne:all,general.ban_members",
            "requireOne:bot,text.manage_messages,text.read_message_history"
        );
    }
```

### hasDJLevel - Checks if user has the required DJ Level.
The ``hasDJLevel`` middleware, checks if a user has the required DJ Level. (This depends on the DJ Level settings of the guild, if the guild has ``all`` enabled for example, they're able to use all commands with this middleware).
``` java
    @Override
    public List <String> getMiddleware() { 
        return Arrays.asList(
            "hasDJLevel"
        );
    }
```

### throttle - Manage the "cooldown" of commands
The ``throttle`` middleware, put a cooldown on when the command can be executed. This can be done on either the ``channel``, ``user`` or ``guild``.
``` java
    @Override
    public List <String> getMiddleware() { 
        return Arrays.asList(
            "throttle:guild,1,5",
            "throttle:user,1,5",
            "throttle:channel,1,5"
        );
    }
```
The format uses: ``throttle:<target>,<amount>,<time>``.  
* ``<target>``:
    * ``guild`` - Applied across the entire guild. No matter the channel or user 
    * ``user`` - Applied to the user running the command only
    * ``channel`` - Applied to the channel where the command is ran
* ``<amount>``:
    * Define the amount of times you want the command have ran within the cooldown specified in ``<time>``.
* ``<time>``: 
    * Define the time it takes to run the command again, if you've defiened a number value higher then 1 in ``<amount>``, it will check the amount of tiems a command has been ran. (This also depends on the ``<target>`` argument)

### musicChannel - Checks if the command is executed in a music channel.
The ``musicChannel`` middleware, checks if a command is being ran in a Music Channel. (This middleware depends on the settings of the guild for the music channels. If a channel is not set, the command will work anywhere)
``` java
    @Override
    public List <String> getMiddleware() { 
        return Arrays.asList(
            "musicChannel"
        );
    }
```

### musicChannel - Checks if the command is executed in DM's.
The ``isDMMessage`` middleware, checks if a command is sent in DM's
``` java
    @Override
    public List <String> getMiddleware() { 
        return Arrays.asList(
            "isDMMessage"
        );
    }
```

## Why use the middlewares?
The middlewares are a comfortable system to manage the access and control over the access to a command. You're able to [create your own middleware](./create-your-first-middleware.html)s as well. Just follow the handbook on the next page. 