import React from "react";
import { Link } from "react-router";


export default function Demo3() {

    return (
        <div style={{ marginLeft: "20vw", marginRight: "20vw" }}>
            <div className="content">
                <h1>Identifying Usability Issues</h1>
                <h2>Analyzing and Identifying flaws in an Interface</h2>
                <p>
                    I looked at websites of locations nearby, and found this particular website. It seems like an older website that uses some outdated designs, non-user friendly colors, and is a bit unorganized. I felt like I could definetly improve this website.
                </p>
                <a href="https://www.saintmarycranston.org">
                    <p>The website of Saint Mary's Church, in Cranston Rhode Island.</p>
                    <img src="src/assets/resdesignweb.png" alt="Saint Marry's Church, in Cranston RI, website."></img>
                </a>
                <p>
                    Here I describe the Usability of the website:
                </p>
                <table >
                    <tr>
                        <th>
                            Efficiency
                        </th>
                        <th>
                            Learnability
                        </th>
                        <th>
                            Memorability
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <ul>
                                <li>Many contrast and font color/ heading problems, makes it hard to read. </li>
                                <li>Many links go to outside sources instead of documents being natively accessible.</li>
                                <li>Alternate text not available.</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Difficult to learn where to find certain information.</li>
                                <li>"Our Faith" and "Beliefs" are two different dropdowns despite being synonyms.</li>
                                <li>Buttons versus what is not a button is not intuitive. Too many different buttons.</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Information is unorganized and therefore hard to remember.</li>
                                <li>Everything stays in the same place upon reloading website, which helps for remembering.</li>
                                <li>Changing the size of the window displaces buttons and text greatly, makign it hard to use. </li>
                            </ul>
                        </td>
                    </tr>



                </table>

                <p>
                    When using WAVE, the web accesibility evaluation tool, it found that there were very significant amount of contrast
                    problems, as well as almost none or all of the images did not have alternate text. It also found that there were many readibility errors, because of several different types of text and columns.
                    There are also several links to documents that should be natively accessible. It also found many ARIA features, which are common for older websites.
                    I definetly agree with WAVE in the reability and contrast problems this website has.

                </p>
                <p> These problems make it difficult to use the website, and negatively affect user experience. Users may not be able to naviagte around the website efficently or be able to read or understand the information present. Some users may feel as if the website was not made with them in consideration.  </p>

            </div>
            <div className="content" >
                <h1>Visual Redesign</h1>
                <h2>Creating a visual design style guide and mockups</h2>
                <p>Below, I have created a Visual Design Style Guide (made in Figma)
                    to represent a guide to the changes I will make.
                    I wanted to stay true to some of the original website,
                    hence why I kept the font of the Church name as a logo
                    and kept the original blue colors. I also stylized the image of the Church
                    to serve as a nice "home" logo. The font design is now consistently Open Sans
                    as to make the website more readible. The buttons are more rounded and have better contrast.
                    The colors are now consistent and there are no gradient features in the website.
                    The buttons are now similar to eachother with slight variations based on function.
                    These redesigns make the website easier to use and make it more aesthetically pleasing.
                </p>
                <img src="src/assets/Visual Design Style Guide.png"></img>
                <p> Below I have made my comptuer redesign (made through Figma)
                    Starting from top to bottom:
                    <ul>
                        <li>The navigation bar is centered</li>
                        <li>Navigation bar follows as user scrolls</li>
                        <li>Navigation options are merged and simplified</li>
                        <li>Website is split into sections</li>
                        <li>Relevant sections are moved closer to the top of the screen</li>
                        <li>Headers and fond is consistent</li>
                    </ul>
                </p>
                <img src="src/assets/Redesign_Computer.png"></img>
                <p> I wanted to make sure that, unlike the original website, the website could adjust
                    to the window size. For my redesign in smaller window sizes, such as the Tablet or Iphone,
                    I make buttons, pictures, icons, sections, and text smaller than in the computer version.
                    I also align some text to the left and center instead of splitting text over multiple columns.
                    In addition, instead of keeping the buttons in the navigation bar, I have an arrow that points upward
                    when closed, and down when open. When open, the options of other pages are shown. The
                    navigation bar with the logo follows you as you scroll.
                </p>
                <img src="src/assets/Redesign_Tablet.png"></img>
                <img src="src/assets/Redesign_Iphone.png"></img>
            </div>
            <div className="content" >
                <h1>Responsive Redesign</h1>
                <h2>Making a new and improved webpage</h2>
                <p>Click <Link to="/redesign" style={{ fontWeight: "bold", textDecoration: "underline" }}>Here</Link> to see my redesign of this webpage.</p>
                <p>My redesign of the webpage is much more accessible when not on computer, allowing for users to be able to experience it on other devices. In addition, the website has less redudancy, is reasier to read, and has similar intutive buttons. Headers are cordinated and are easy to read. These and the changes mentioned above makes the website much more accessible to users, across platforms, ages, and abilties. </p>
            </div>
        </div>
    )

}