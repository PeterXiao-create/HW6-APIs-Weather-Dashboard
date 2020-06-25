# 06 Server-Side APIs: Weather Dashboard

Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

Use the [OpenWeather API](https://openweathermap.org/api) to retrieve weather data for cities. The documentation includes a section called "How to start" that will provide basic setup and usage instructions. Use `localStorage` to store any persistent data. (_You will need to register for an api key from OpenWeather API if you haven't already._)

No starter code is provided. Build this application from scratch!

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs

WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history

WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe

WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity

WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city

WHEN I open the weather dashboard
THEN I am presented with the last searched city forecast
```

The following image demonstrates the application functionality:

![weather dashboard demo](./Assets/06-server-side-apis-homework-demo.png)

## Video Demo

[Panopto: Homework 6 Demo](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=cf6a8a83-cc2e-442b-9fd0-abd90127dd90)

## Review

You are required to submit the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

## Repository Quality Requirements

* The repository must have a unique name. (e.i. Does not contain words like "assignment" or "homework" in the repository name.)

* Follows best practices for file structure and naming conventions.
  * Avoid uppercase letters in file names. (Except for .js files which export a constructor or React component.)
  * File names MUST NOT contain spaces. Use "-" or "_" to separate words in a file name.
  * Avoid using special characters.
  * Organize assets using folders.
  * Has an `index.html` file at the root of the repo if deploying on GitHub pages.

* Follows best practices for code formatting.
  * Variable and function names use consistent casing such as camelCase or snake case. Avoid single letter names for things.
  * Indentation applied to functions, objects, and other code blocks.
  * Uses consistent indentation characters: tabs, 2 spaces, or 4 spaces.
  * Comments used where code is difficult to understand or reason for a series of expressions is not obvious.

* Repository contains a quality readme with a description, screenshot, link to deployed application, etc. (see [Good README Guide](../../01-HTML-Git-CSS/04-Supplemental/Good-README-GUIDE/README.md))

* Several commits should be made during the development process as features and assets were completed/updated. Refer to [Commit Early and Often](#commit-early-and-often) below.

## Application Quality Requirements

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

## Commit Early and Often

One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:

* Your commit history is a signal to employers that you are actively working on projects and learning new skills.

* Your commit history allows you to revert your codebase in the event that you need to return to a previous state.

Follow these guidelines for committing:

* Make single-purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits.

* Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history.

* Don't commit half-done work, for the sake of your collaborators (and your future self!).

* Test your application before you commit to ensure functionality at every step in the development process.

We would like you to have well over 200 commits by graduation, so commit early and often!

---

© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
