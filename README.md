# NearMePedia Project
## Andrea Righi - Matr. n. 15483 -- Cristiano Lucian - Matr. n. 15850

In order to make the app work, it is enough to run npm install in the root directory, it will create all the node_modules necessary to run the whole system.

In our application, we implemented two additional functions:
- the map view, which can be seen in the reading list section, showing all the saved wikipedia articles
- the language choice, which can be defined in the settings section, which allows the user to select a language

We have a slight bug in the Nearby section: the container setState does not update correctly the state, therefore the component does not render again itself. The search actions are performed correctly, but nothing is showed in the UI.

Moreover, in iOs systems, the wikipedia articles do not open the web browser: anyway, it works in the Android environment.

We are sorry for the late sending
