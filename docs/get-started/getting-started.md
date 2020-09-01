# How to get started
::: danger This documentation is still WIP
This documentation is still in progress, we're making it behind the scene!
:::
[[toc]]



## Prerequisites
### Dependencies
Since AvaIre is made with JDA 4.2, all dependencies are packaged within the same file. You can either use the [TC (TeamCity) repository](http://ci.avairebot.com) (Hosted on: http://ci.avairebot.com)

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

When structuring your packages, a certain 


<!-- textlint-disable terminology -->

``` js
.
├── docs
│   ├── .vuepress _(**Optional**)_
│   │   ├── `components` _(**Optional**)_
│   │   ├── `theme` _(**Optional**)_
│   │   │   └── Layout.vue
│   │   ├── `public` _(**Optional**)_
│   │   ├── `styles` _(**Optional**)_
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── `templates` _(**Optional, Danger Zone**)_
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── `config.js` _(**Optional**)_
│   │   └── `enhanceApp.js` _(**Optional**)_
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json

```
