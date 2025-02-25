import './App.css'
import DropdownFilter from "./multi-select.js";
import React, { SetStateAction, useState } from "react";

function App() {
  const [price, setPrice] = useState<Array<string>>([]);
  const options = [
    { value: "inexpensive", label: "$" },
    { value: "moderately inexpensive", label: "$$" },
    { value: "moderately expensive", label: "$$$" },
    { value: "expensive", label: "$$$$" }
  ];


  //top navbar,
  //image with text on top, moves a little bit
  //alt text for each image
  //paragraphs, with top colored text, header, and text
  //each part will be colored differently
  //3C1518 and 69140E as other colors
  return (
    <>
      <div>
        <div className="nav">
          <a href="">Projects</a>
          <a href="">Resume</a>
          <a href="">Journey</a>
        </div>
        <div className="content" style={{ backgroundColor: "#ffffff" }}>
          <h2>The Concept</h2>
          <h1>Part 1:<br></br>Input</h1>
          <p>I decided that I wanted to look into the multi-select dropdown tool, as I wanted to use it in a project I had in mind.
            My first step was to investigate the use of multi-select dropdown tools online.
            I looked specifically at Google Maps (price dropdown), Bing Shopping (brand dropdown), and Google Calendar (calendar dropdown).
            Below, I have some images from each application throughout their use stages.
          </p>
          <table>
            <tr>
              <th> Use Stages
              </th>
              <th>
                Google Maps
              </th>
              <th>
                Google Calendar
              </th>
              <th>
                Bing Shopping
              </th>
            </tr>
            <tr>
              <td>closed state</td>
              <td><img src="src/assets/Screenshot 2025-02-11 at 1.50.40 PM.png" alt="Price drop down of google maps"></img></td>
              <td><img src="src/assets/Screenshot 2025-02-11 at 1.31.35 PM.png" alt="Google calendar dropdown other claendar closed"></img></td>
              <td><img src="src/assets/Screenshot 2025-02-11 at 5.38.30 PM.png" alt="Bing shopping Brand dropdown closed"></img></td>
            </tr>
            <tr>
              <td>open state</td>
              <td><img src="src/assets/Screenshot 2025-02-11 at 1.57.12 PM.png" alt="price dropdown on google maps open, with price options unchecked"></img></td>
              <td><img src="src/assets/Screenshot 2025-02-11 at 1.31.53 PM.png" alt="Other calendar dropdown open, with options of several calendars unchecked"></img></td>
              <td><img src="src/assets/Screenshot 2025-02-11 at 5.38.48 PM.png" alt="Brand dropdown open, word show more are at bottom, fiev unchecked optiosn displayed"></img></td>
            </tr>
            <tr>
              <td>options clicked</td>
              <td><img src="src/assets/Screenshot 2025-02-11 at 1.58.41 PM.png" alt="multiple price options checked"></img></td>
              <td><img src="src/assets/Screenshot 2025-02-11 at 1.32.39 PM.png" alt="multiple calendar options checked"></img></td>
              <td><img src="src/assets/Screenshot 2025-02-11 at 5.39.05 PM.png" alt="multiple brand options checked"></img></td>

            </tr>

          </table>
          <p>
            I found that there are a few important differences when it comes to these different multi-select tools. Most multi select tools are defaulted to be open. All multiselect tools have an arrow that is pointing down when the select bar is open, and up when the select bar is closed. The select bar does not usually state what you have selected. If it does not show you what you have selected, it will show you what you have selected in another area of the screen somehow. Usually, there is a nice animation when you open and close the select tool. Also, when you hover over the button to “checkmark” (all three applications used box like squares and checkmarks) there usually is an indication that it is clickable, done through shading or highlighting.
          </p>
          <p>
            Something neat is that while on google calendars, I can navigate through the dropdown with my keyboard when I press on the dropdown. I can use space, to select a button, the arrow keys to navigate the options in the dropdown, and tab to navigate through the buttons on one of the options. There is a similar but slightly different functionality for google maps price dropdown.
            <br />
            Bing allows you to see more/ show less, which is very useful for a long list. However, navigating with the keyboard is much more difficult. I can only use tab, but arrow keys and other buttons prove ineffective. I can’t seem to copy the text of the brands, but I can drag and drop the options into new tabs, which is neat. There seems to be a small error with the alignment of the dropdown arrow, as it keeps moving horizontally when I open and close the dropdown.
          </p>
          <p>As I mentioned before, the functionalities and memorable items of these dropdowns all have checkmark boxes and a clickable arrow on the right side of the title word. If I want to create a dropdown, keeping these features is important. </p>
          <p> Here is a simple table I made in regards to the usabliltiy of each application.</p>
          <table>
            <tr>
              <th>
                Interaction Type
              </th>
              <th> Google Maps</th>
              <th> Google Calendar</th>
              <th> Google Maps</th>
            </tr>
            <tr>
              <td>mouse</td>
              <td>works fine, there are some nice features in order to clear and finish out of the dropdown, but there is a lack of animations.</td>
              <td>works well, the ui is smooth, uses animations, and several indicative highlights to suggest what is being clicked/ selected.</td>
              <td>works well, the ui could be smoohter, uses animation, but there are no almsot highlights to suggest what is being clicked.</td>
            </tr>
            <tr>
              <td>keyboard</td>
              <td>difficult to navigate to, need use tab and arrow keys. This is easier done with voice over. Works well otherwise</td>
              <td>diificult to access dropdown with keyboard. Once at dropdown, navigation through options is simple. Uses arrow keys to traverse options. </td>
              <td>tab and keybaord makes it evry easy to transverse through options, but only in voice over. The keys otherwise do nothin/ provide scroll only. </td>
            </tr>
            <tr>
              <td>touchpad</td>
              <td>Some of the buttons are diffult to press, specifcally the "Done" button and the "Clear" button. Otherwise, it works okay.</td>
              <td>The misclicks do not have much consequences which is nice. There is a way to delete your options in this case, however there is a popup beforehand. The highlighting helps to know where you are clicking. </td>
              <td>Things here are easily clickable, however due ot tiles not highlighting or geting darker when you are pressing, sometimes you don't know what you are pressing, which can make selection difficult. </td>
            </tr>

          </table>

        </div>
        <div className="content" style={{ backgroundColor: "#fff5e6" }}>
          <h2>Comparing Interactions</h2>
          <h1>Part 2:<br></br>Output</h1>
          <p> An input, whether a keybaord tap or a cursor hover, can cause an output. In this case, An output may be the appearance of new elements, items changing color or shade, emboldened borders or text, or a shift in element focus. Below, I create a comprehensive, in-depth analysis of several inputs and their respective outputs. The table allows the easy comparison of multi-select dropdowns from each application.<br></br> An asterick (*) represents any notations regarding the VoiceOver useage.</p>
          <table>
            <tr>
              <th>
                Input Type
              </th>
              <th> Google Maps</th>
              <th> Google Calendar</th>
              <th> Google Maps</th>
            </tr>
            <tr>
              <td>Space Pressed</td>
              <td>First checkbox in the dropdown is checked if dropbox is open. Space also opens the dropbox if closed. Otherwise needs to be pressed in conjunction with arrow keys (sometimes doesn’t work at all)
                *voice over tells you to use control+option space to open menu</td>
              <td>Does not do anything in relevance to dropdown, needs to be pressed in conjunction with arrow keys, if used will check mark the other boxes</td>
              <td>Spacebar scrolls down through the rest of the drop downs</td>
            </tr>
            <tr>
              <td>Enter Pressed</td>
              <td>Enter button has the same functionality as space button
              </td>
              <td>Enter does nothing</td>
              <td>Opens and closes dropdown if tab is navigated over toe dropdown; otherwise, nothing
              </td>
            </tr>
            <tr>
              <td>Tab Pressed</td>
              <td>If dropdown is pressed, tab will make an option gray. If pressed again, it will make the next option gray, unit tab is pressed on the last option, in which it will close out the dropdowns.
                *works well with voice over when navigating dropdowns and options, reads off options
              </td>
              <td>Very difficult to navigate to multi-select dropdowns with tab. If tab is pressed while dropdowns are selected/recently have been pressed, the first option will be come gray (previously white) and a blue circle will surround the checkbox option. If pressing tab again from there, will go through rest of choices for the specific option, creating a blue circle around each. Eventually, tab gets off the dropbox option and then is no longer selecting options from the dropbox
              </td>
              <td>A blue line appears above an below a dropdown/ dropdown option, and each time tab is pressed, it proceeds to the next option
                *tab can be helpful for navigating options but does not tell you you are on a dropdown.
              </td>
            </tr>
            <tr>
              <td>
                Arrow Keys Pressed
              </td>
              <td>
                If the dropdown is opened, the top and left arrow keys will select options in an upward matter, shown by a blue line above  and below the option as well as the option becoming darker, or greyed. The down and right arrow keys will do the same but in a downwards matter. If it gets to the top or bottom of the dropdown, it will loop around to the top/bottom option.

                *each open is read through voice over when navigating with arrow keys, though usually causes dropdown options to close and doesn’t work well

              </td>
              <td>Can navigate through the options, as shown by  a grayed, or darked options. Left and right arrow keys do nothing.

                *Voice over reads each option as you navigate through. It also tells you if it is checkmarked or not
              </td>
              <td>Scrolls through the dropdowns, left and right arrows do nothing.
                *In regards to voice over, is very useful for navigating through options and reading all different parts of options
              </td>
            </tr>
            <tr>
              <td> Number Keys Pressed
              </td>
              <td>
                Nothing Happens
              </td>
              <td>Shortcuts related to the calendar itself occur, but not related to the multi-select dropdown. </td>
              <td>
                Nothing Happens
              </td>
            </tr>
            <tr>
              <td> Double-click Option
              </td>
              <td>
                Selects option, then unselects option, as denoted by check mark in square box appearing, and then disappearing

              </td>
              <td>Selects option, then unselects option, as denoted by check mark in square box appearing, and then disappearing
              </td>
              <td>Selects as normal, a check mark appears inside square box of option and the site reloads.
              </td>
            </tr>
            <tr>
              <td> Double-click Arrow / Title of Dropdown
              </td>
              <td>
                If dropdown is open: makes the dropdown box flicker, twice. The drop down does not disappear.
                If the dropdown is closed: makes the dropdown open, then flicker once.
              </td>
              <td>If dropdown is closed: makes dropdown open, then close. The arrow flips twice while doing this. If dropdown is open: makes dropdown close, then open. The arrow flips twice while doing this.

              </td>
              <td>If dropdown is closed: makes dropdown start to open, then close. The arrow flips twice while doing this. If dropdown is open: makes dropdown start to close, then open. The arrow flips twice while doing this.

              </td>
            </tr>
            <tr>
              <td> Double-click Checkmark / Title of Option
              </td>
              <td>
                If checkmark is checked: makes checkmark uncheck, then checks.
                If the checkmark is not checked: makes the checkmark check, then uncheck.

              </td>
              <td>If checkmark is checked: makes checkmark uncheck, then checks.
                If the checkmark is not checked: makes the checkmark check, then uncheck. (a sphere around the checkbox turns the color of the option in light opacity while being clicked)
              </td>
              <td>Same functionality as checkmark being clicked once.
              </td>
            </tr>
            <tr>
              <td>Click once not on, but surrounding Dropdown

              </td>
              <td>
                If open, closes the dropdown.
                *There are “done” and “clear” options that voice over covers

              </td>
              <td>No affect</td>
              <td>No affect</td>
            </tr>
            <tr>
              <td> On Hover of Elements
              </td>
              <td>
                On hover of dropdown title or arrow,  title darkens. One over of checkboxes or options, the options darken.

              </td>
              <td>On hover of dropdown title or arrow,  title darkens. One over of checkboxes or options, the options darken. If hover is on checkboxes, the checkbox will create a sphere around the checkbox that has a light opacity of the color of the option.
              </td>
              <td>Only an unmarked checkbox reacts to hover: the check mark box border becomes lighter
              </td>
            </tr>
            <tr>
              <td> Click Arrow Dropdown Title Once
              </td>
              <td>
                If dropdown is closed: opens dropdown. If dropdown is open, makes dropdown flicker. During press down, causes button to become dark.
                *voice over starts to read the first option

              </td>
              <td>If drop down is closed, drop down options appear, and arrow points upward. If dropdown is opened, the dropdown options disappear and the arrow points downward. During press, the title of dropdown becomes darker.
                *Voice over tells you name of dropdown, and if you clicked on the expanded/ close button
              </td>
              <td>If dropdown is closed, the arrow does an animation to point upwards and the options animate to “open.”If dropdown is open, the arrow does an animation to point downwards and the options animate to “closed.”
                *Voice Over is NOT helpful in this case. It does not tell you that you are currently selecting an option
              </td>
            </tr>
            <tr>
              <td> Click box attched to Option
              </td>
              <td>
                Blue box with white checkmark fills in check mark box/ disappears when is clicked if checkmarked
                *voice over tells you about the option clicked

              </td>
              <td>Does an animation where a box of the option color with a white checkmark fills in check mark box/ an animation of the color and checkmark happens when clicked if checkmarked. Sphere around checkbox becomes darker during click
                *voice over tells you that you checked or unchecked the named option
              </td>
              <td>Blue box with white checkmark fills in check mark box/ disappears when is clicked if checkmarked. Page reloads after click.
                *Voice over tells you that you checked or unchecked th named option, but because the page reloads it then proceeds to read off every ui element on the screen.
              </td>
            </tr>
            <tr>
              <td> Click Option Title
              </td>
              <td>
                Blue box with white checkmark fills in check mark box/ disappears when is clicked if checkmarked
                *voice over tells you about the option clicked

              </td>
              <td>Does an animation where a box of the option color with a white checkmark fills in check mark box/ an animation of the color and checkmark happens when clicked if checkmarked.
                *voice over tells you that you checked or unchecked the named option
              </td>
              <td>Blue box with white checkmark fills in check mark box/ disappears when is clicked if checkmarked. Page reloads after click.
                *Voice over tells you that you checked or unchecked th named option, but because the page reloads it then proceeds to read off every ui element on the screen.
              </td>
            </tr>

          </table>
        </div>
        <div className="content">
          <h2>Redsigning Interaction</h2>
          <h1>Part 3: <br></br>State Models & Component Redesign
          </h1>
          <p>Even though the Bing Shoppping dropdown does have some important issues, I found that Google Maps Price Dorpdown had issues as well. Therefore, I decided that in order to investigate how to make the ideal dropdown, I first had to analyize the flow of interactions, and improve upon a current implementation. The Google Maps multi-select dropdown has some great features, but also some bad features. Below, I made an thorough state model of the Google Maps dropdown, when using both mouse and keyboard. Following those charts, I redesigned the state models in a way that would improve the current dropdown. I made these charts using Figma.  </p>
          <h2 style={{ color: "#3C1518", paddingTop: "100px" }} > Original Flow State: Mouse</h2>
          <img src="src/assets/Flow Chart Template (Copy).png" alt="bad flow chart"></img>
          <h2 style={{ color: "#3C1518", paddingTop: "100px" }} > Original Flow State: Keyboard</h2>
          <img src="src/assets/Flow Chart Template (Copy)-2.png" alt="bad flow chart"></img>
          <h2 style={{ color: "#3C1518", paddingTop: "100px" }} > Redesigned Flow State: Mouse</h2>
          <img src="src/assets/Flow Chart Template (Copy)-3.png" alt="good flow chart"></img>
          <h2 style={{ color: "#3C1518", paddingTop: "100px" }} > Redesigned Flow State: Keyboard</h2>
          <img src="src/assets/Flow Chart Template (Copy) copy.png" alt="good flow chart"></img>
          <p>When making the redesigns, I had to think about some features that Google Maps did not have that Bing Shopping and Google Calendar had. With Google Maps, clicking on the title made the dropdown 'flicker', as in, disappear for half a second and then come back. It was important that when clicking on the title of the dropdown, the dropdown would close. This was also changed in the Keyboard Redesign as well. Now, you can focus the title and pressing space or enter will close the dropdown again. This allows for a more intutive interatcion between users and the dropdown. In VoiceOver, this would be called the "close [title of dropdown] Dropdown button". The main tradeoff here is that the 'Done' button becomes somewhat redundant. However, considering that Google Maps is used by a variety of people, the 'Done' button may be more accessible for some populations. <br></br> VoiceOver would also come into play with the "Done" and "Clear" buttons. In VoiceOver, the "Clear" Button would be called "clear [title of dropdown] button" and the "Done" Button would be called "close [title of dropdown] button". By making sure that the buttons are correctly labeled in VoiceOver, better accessiblity can be provided. <br></br> It is also important that the title button is focused, even after openign the dropdown, rather than the first dropdown item as through the VoiceOver and keyboard interactions. This way, The user still knows they are on the dropdown. Although the User would not be immediately directed to the options, it allows the user to know that the dropdown can be closed again, and is more organized overall. <br></br> There is a third issue with the keyboard accessibility, and the issue has to do with the fact that pressign the down arrow key while focused on the clear button closes the dropdown. Closing the dropdown is not the responsibility of the "Clear" Button. What should happen instead is that you tab over to the "Done" Button then either press space, enter or down arrow key to close the dropdown. Although this maybe be seen as taking away a feature, I can see it as causing confusion when a user presses the down arrow key, just trying to navigate to other options in the dropdown. <br></br> Last but not least is the visual "flow." The dropdown provided here is very static and does not have any transition from one state to the next (fade, animation, etc). By including transitions between states, changes can become easier on the eyes and end up being more appealing. In addition, It allows for the User to see mroe clearly how their interaction is effecting the dropdown.</p>
          <p>Below, I made an annotated redesign of the Google Maps Dropdown in Figma. This annotated element expresses some of the changes I addressed above. </p>
          <a href="https://www.figma.com/proto/deKKXtx84t2C4axleYbV1d/Accessible-Redesign?node-id=14-281&t=TvcuVb3lvMHX7gKE-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=14%3A281" style={{ cursor: "pointer", fontSize: "40px", color: "black" }}>Click HERE to USE the prototype in Figma! (Demo is not complete)</a>
          <img src="src/assets/design annotation.jpg" alt="design which makes good sense"></img>
        </div>
        <div className="content" style={{ backgroundColor: "#fff5e6" }}>
          <h2>Overview</h2>
          <h1>Part 4: <br></br>Reflection</h1>
          <p>Questions for myself: <br></br>
            Where did the components you observed do well in terms of usability and accessibility? How have you applied this to your design?
            When it came to voice over descriptions and navigation using tab and arrow keys, the components I observed succeeded in terms of accessibility. There were also common themes like arrows, darkening of itmes, and checkmarks, all of which I applied to my design.
            <br></br>
            Are there accessibility considerations that were not addressed that you accounted for in your own component design?
            Many accessibility considerations were made with the orginal componet designs. However, they all made it somewhat difficult to navigate to in the webpage, and in some cases voice over descriptions are simple. In the new design, I hope to make this easier.

            <br></br>
            How does the change you’ve made in your own design solve for a “mismatch” in our world?
            The main changes I made create a better match between the component and its users- both for people who are familiar with technology, as well as for people that have poor eyesight or need to use VoiceOver.
            I mentioned preivously in-depth at the end of Part 3 about how each change helps specifcially. In general, the changes make sure certain buttons have better descriptions, better flow between Ui elements, and make the title of the dropdown a button which helps people who are familiar with these intitive designs. Mismatches created because the compoennt is not as accessible for those who are more familair with technology, less familair with technology, and have blindness are solved from my changes.
            <br></br>
            How does the accessibility/inaccessibility of inputs or outputs from Part 1 and Part 2 impact users with impairments either positively or negatively, respectively.
            Being able to select, close, and open the dropdowns with the keyboard while using VoiceOver enables for people that are blind to be able to access informaiton and apps more easily. The outputs,
            such as the VoiceOver descriptions and the darkening of items when hovering over them also helps in this regard. Intuitive design when it comes to these inputs and outputs allows for more accessibility
            throughout different groups of people. Google Maps dropdown that I selected has a "done" button that many other dropdown components do not have.
            Though, this feature is definetly more accessible for those who aren't as familiar. In regards to inaccessibility, The Bing Shopping dropdown was pretty bad when it came to showing users what was clickable (through highlighting or darkening elements) and navigating with VoiceOver. Although it was descriptive, whenever you select an option, the focus and VoiceOver starts to run throughout the whole page without any further inputs. This completely loses the place of someone who is listenign to see where in the page they are.
            <br></br>
            Between mouse, keyboard, touch/mobile, and screen reader users, which do you think are most commonly prioritized in the process of creating components? How might this impact the user experience?
            Mouse is most commonly prioritized in the process of creating components. This is because a significant majority of people that would benefit from these components, as well as the ones who design these components, are familiar with technology and do not have colorblindness or blindness. Therefore, the User exeperiecne will be signficantly poorer for those with blindness, colorblindness, or less familiarity with technology.
          </p>
        </div>
        <div className="content">
          <h2>My Custom Element</h2>
          <h1>Part 5: <br></br>The Product</h1>
          <p> I have made a dropdown inspired by my case study. Now, I can use it in my other projects too! There are a few things I still need to change, such as the shading when hovering over sections, but otherwise it is somewhat complete. Try using it below!</p>
          <DropdownFilter
            title="Price"
            options={options}
            selectedValues={price}
            onChange={setPrice}
          />
        </div>
      </div>
    </>
  )
}

export default App
