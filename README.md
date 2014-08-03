#### The TinyHabits App

I'm building this small app to play around with Angular. The main idea is to give users a way to track their tiny habits (read about BJ Fogg's Tiny Habits Method).

##### How it works:

User logs in and provides basic information such as name, age, and description. They then enter their tiny habits (up to three). Once they've saved their tiny habits information, they can begin logging / tracking their progress.


##### Application Design

There will be three separate views.

1. Personal data view
2. Tiny habits view
3. Log view

Each view will be associated with a controller for handling the interactions.

1. UserInfoController
2. HabitsInfoController
3. HabitsLogController

Each view will also be associated with a specific url. Our router will map the urls to the views.

1. /user
2. /habits
3. /log
