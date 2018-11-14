# Delatre Front End Assignment

## Per the guidelines in the attached [ASSIGNMENT EXPECATION README](./EXPECTATION.md).

### TASK - `I kindly ask you to describe in writing how would you develop task described in the assignment. This is not intended to be a full analysis of that case scenario, but a starting point for a discussion.`

#### Report
1. After reading the assignment, my first inclination was to begin building out a simple wireframe to accomplish the task immediately (which I did, hence the github project including some NFL convicts). This is a very simple task that requires the following.

  - an event listener monitoring a click event that toggles the visibility of a list of names
  - a fetch process that collects data from some source
  - a list of elements including names and other information to be created on response of the fetch
  - some dom manipulation that changes the button label, the visibility of the list, and some transitional animation


2. Things I must keep in mind are that I can only use HTML, CSS, and JavaScript. It was established that I also use Flexbox and the BEM naming system.

3. I also need it to be responsive. Easy enough since this is a very simple app.

4. I also need to consider is testing.

  - I need to test the fetch response to ensure I am retrieving good data, consistent data, and that after appropriate load testing, that we never overload the service and always receive data.
  - I need to also test my DOM manipulation events. This includes button, list, and animation behavior.


  - Button behavior
    - On page load, the button should be in an inactive state, with messaging to indicate clicking it to see a list of users
    - On click, the button label should change suggesting it has been opened, and is now ready to be closed. Change of styles may be considered as well.
    - On click, the list must be opened.


  - List behavior
    - On click of button, list must display
    - On click to close list, the list must disappear
    - The display and disappear must include some animation
    - Content should be listed as expected, including name, avatar, etc.

5. I should also test for responsiveness. On all visible sizes of mobile, tablet, and desktop emulators in the browser, there should be no run off of content, sizes, and style should all remain consistent.

6. As this project becomes more refined, other things to consider include...

  - Performance
  - Browser Compatibility
  - Component and Functional Reusability
  - Whether existing frameworks, libraries, or packages shall be used to improve the project
  - Whether styles or interactions can be enhanced for a better user experience
  - What are the kpi's (key performance indicators) for measuring success
