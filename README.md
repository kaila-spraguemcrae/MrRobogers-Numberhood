# _Mr. Roboger's Numberhood_

#### _This project will take user inputs and respond, 10.30.2020_

#### By _**Kaila Sprague McRae**_

## Description

_This project will take user inputs and respond accordingly. The project was created to practice using JavaScript fundamentals and Test Driven Development._

## Setup/Installation Requirements

### View Online

_To view my live website, Mr. Roboger's Numberhood, visit [https://kaila-spraguemcrae.github.io/MrRobogers-Numberhood/](https://kaila-spraguemcrae.github.io/MrRobogers-Numberhood/)_

### Open Locally

_Go to my GitHub repository here, [https://github.com/kaila-spraguemcrae/MrRobogers-Numberhood](https://github.com/kaila-spraguemcrae/MrRobogers-Numberhood), and click on the green 'Code' button to clone the repository, Open with GitHub Desktop OR Download the ZIP file_

##### To clone:
1. _Push the green 'Clone' button and copy the URL._
2. _Open Terminal or GitBash and input the command:_ `git clone https://github.com/kaila-spraguemcrae/MrRobogers-Numberhood`
3. _To view the code, open the copied directory with Visual Studio Code or your preferred text editor by inputing the command `code .` in your terminal._
4. _To view the website, open index.html in Chrome or your preferred browser._

## Known Bugs
**Fixed bug (10.30.2020):** _NaN is being pushed to the Array_

## Support and contact details

_If you run into any problems or have any questions please contact me via [email](mailto:kaila.sprague@icloud.com)._

## Specs
Describe: roboTalk();

Test: "It will return a range of numbers starting from '0' to the user inputed number."
Expect: roboTalk(4).toEqual(["0", "1", "2", "3", "4"]);

Test: "It will replace numbers containing a '1' with 'Beep!'."
Expect: roboTalk(1).toEqual(["0", "Beep!"]);

Test: "It will replace numbers containing a '2' with 'Boop!'."
Expect: roboTalk(2).toEqual(["0", "Beep!", "Boop!"])

Test: "It will replace numbers containing a '3' with 'Won't you be my neighbor?'."
Expect: roboTalk(3).toEqual(["0","Beep!","Boop!","Won't you be my neighbor?"])

## Technologies Used

_This project uses the following technologies:_

- HTML
- JavaScript
- JQuery
- CSS
- Bootstrap
- GitHub

### License

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Copyright (c) 2020 Kaila Sprague McRae