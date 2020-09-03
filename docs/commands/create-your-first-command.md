# Create your first command!
Welcome to the second page in the Developer Documentation about AvaIre plugins!

If you've been following this handbook from the start, you will now have a main class something similar to this:
``` java
package com.avairebot.starboard;

import com.avairebot.plugin.JavaPlugin;

public class PluginName extends JavaPlugin {
    @Override
    public void onEnable() {
        saveDefaultConfig();
        reloadConfig();
    }
}
```


## Create the package and class
You're going to create a new package called ``commands``, within that package, you can name your command anything. But we'd recommend using the default naming type. For this example, our command is going to be ``HelloCommand``. When you've added that class to the ``commands`` package, you should have this as a class now:

``` java
package com.avairebot.starboard.command;

public class StarboardCommand {

}
``` 

### Extend the class with the command class
Since we're not able to work from an empty class, we'll implement the "[Command](https://github.com/avaire/avaire/blob/master/src/main/java/com/avairebot/contracts/commands/Command.java)". Class from **AvaIre**. 

### Import methods
You should get "import methods" option from your IDE now, if you don't. Just copy over this text, and replace the placeholders. (Make sure the lowercase placeholders stay lowercase)

``` java
package com.avairebot.commands.fun;

import com.avairebot.AvaIre;
import com.avairebot.commands.Category;
import com.avairebot.commands.CategoryHandler;
import com.avairebot.commands.CommandMessage;
import com.avairebot.contracts.commands.Command;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class HelloCommand extends Command {

    private final AvaIre starboard; // This is a variable to call the main class, this will be explained later.

    public HelloCommand(AvaIre starboard) { // If your main class is called `Starboard`, the variable for the main class should be the same here
        super(starboard, false); // Define the mainclass here.

        this.starboard = starboard; // and here
    }

    @Override
    public String getName() {
        return "Hello Command"; // Enter the name should
    }

    @Override
    public String getDescription() {
        return "Says hello to the command executor"; // Explain what the main pourpase is of the command
    }

    @Override
    public List <String> getUsageInstructions() { // Explain how to use a command here
        return Arrays.asList( // Explain how a feature works, or what it does, every new String add's up to the final string.
            "`:command` - The bot says hello to you!",
            "`:command <@user>` - Say hello to the person executing the command"
        );
    }

    @Override
    public List <String> getExampleUsage() { // Put the usage example's here
        return Collections.singletonList( // If you have only 1 argument, then make it a "singletonList", instead of a "Arrays.asList"
            "`:command @user` - Says hello to a user."
        );
    }

    @Override
    public List <String> getTriggers() { // Triggers is going to be the most intresting, the first String is the actual command. The commands after that are going to be the aliases!
        return Arrays.asList("hi", "hey");
    }

    @Override
    public List <String> getMiddleware() { // These are the requirements a user or a guild has to obide by. There are alot of possibilities here. (See "Middlewares" for more information on this)
        return Arrays.asList(
            "require:user,general.manage_server", // The User needs the MANAGE_SERVER permission to run this command.
            "throttle:guild,1,5" // This is the cooldown for the command, saying a cooldown/throttle per guild is applied.
        );
    }

    @Override
    public Category getCategory() {
        return CategoryHandler.fromLazyName("fun"); // What category should the command be place in? (This can be anu of the existing ones, or your own custom one. We'll explain that on the next page how to add one)
    }

    /**
     * The command executor, this method is invoked by the command handler
     * and the middleware stack when a user sends a message matching the
     * commands prefix and one of its command triggers.
     *
     * @param context The command message context generated using the
     *                JDA message event that invoked the command.
     * @param args    The arguments given to the command, if no arguments was given the array will just be empty.
     * @return true on success, false on failure.
     */

    @Override
    public boolean onCommand(CommandMessage context, String[] args) {
        if (context.message.getMentionedMembers().size() < 1) {
            context.makeSuccess("Hello " + context.member.getAsMention()).queue();
            return true;
        } else if (context.message.getMentionedMembers().size() == 1 ) {
            context.makeSuccess(context.member.getAsMention() + " says hello to " + context.message.getMentionedMembers()).queue();
            return true; // WHen we say true, the bot sees it as a success and starts looking for the throttle time
        } else {
            context.makeError("You may only tag 1 user at a time for this!").queue();
            return false; // We say the command failed here, to say the command failed, and we'll allow the command to be executed again without the throttle
        }
    }

}

``` 

### Adding the command to the main class
If your command is now complete, you should head on over back to your main class. It should still look like how you left it, let's add a new line to this!

``` java
package com.avairebot.starboard;

import com.avairebot.plugin.JavaPlugin;

public class PluginName extends JavaPlugin {
    @Override
    public void onEnable() {
        saveDefaultConfig();
        reloadConfig();

        registerCommand(new HelloCommand(this)); // This will register the command in the bot itself. Adding it into the "Fun" category.
    }
}
```

### Category's
The command should now be added into the bot! That's about all you had to do to make the plugin work with one simple command.
If you want your own category, you could use 
``` java
registerCategory("Name", "default_prefix")
```
Make sure to add this before the commands! The default prefix is also going to be the prefix the plugin is going to use. (We'd recommend getting this from the bot OR using a config file with your plugin).


On the next page, we're going to explain the [middlewares] used in commands!
