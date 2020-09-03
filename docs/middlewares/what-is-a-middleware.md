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

        MiddlewareHandler.register("isBotAdmin", new IsBotAdminMiddleware(this));
        MiddlewareHandler.register("require", new RequirePermissionMiddleware(this));
        MiddlewareHandler.register("requireOne", new RequireOnePermissionMiddleware(this));
        MiddlewareHandler.register("hasDJLevel", new RequireDJLevelMiddleware(this));
        MiddlewareHandler.register("throttle", new ThrottleMiddleware(this));
        MiddlewareHandler.register("musicChannel", new IsMusicChannelMiddleware(this));
        MiddlewareHandler.register("isDMMessage", new IsDMMessageMiddleware(this));