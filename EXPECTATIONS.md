# Frontend DEV - Online Users Component Create a page with a “online users” component, using HTML/CSS/JS.

## Design spec:
  - Component name: Online users.
  - The component is minimized at startup.
  - Only the title and the show/hide toggle are visible
  - Pressing the toggle expands the component
  - Once opened, the open-button will change its label
  - Pressing the toggle collapses the component to its default state
  * No specific design required but component must be responsive and statuses change must be animated.
## Main aspects:
    1. Given I am a user
    When I visit the page
    Then I see a “online users” component
    And that component will be rendered as a standalone component in an inactive state
    2. The component will be active only when the list of online users has been fetched Inside it there will be a list of all online users showing their avatars and their full names.
    3. The list of online user is retrieved fetching datas (JSON format) from an external service. No requirements for the service: the response can be static (mocked)
## Constraints:
    1. Avoid any CSS framework
    2. Use BEM syntax with html / css
    3. Use Css Flexbox
    4. Choose whether or not to use js frameworks / libraries
    5. Test the external service
    6. Test the component behaviours
