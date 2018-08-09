# Xkcd Fetcher

# Requirements

Fetch 10 items at the time starting from comic number 1
Display the items on a 2x2 grid with the 2 items side by side, each items should display the comic as an image (the JSON response contains the Image URL e.g. https://imgs.xkcd.com/comics/woodpecker.png )
As the user scrolls a new HTTP request needs to be triggered that fetches the next 10 comics and so on, (Lazy loading)
Nicely display how many comics have been loaded at the top of your web app
When selecting a comic from the list, a gallery should open showing the full screen version of the comic and the title of the comic at the top of the full screen gallery

# Design principles
Mobile first web app, it needs to work well on mobile screens
The user needs to be able to navigate back to the main list from the gallery 

# Approach
Upon initial research I was able to discover the json interface provided by xkcd (https://xkcd.com/json.html). As a first step the idea is to use this as a backend, obviously this will not be efficient because we have to fetch 10 comic strips at a time and making 10 network calls doesn’t sound like a good idea but this helps us to kickstart quickly and focus on the front end first. Another neat idea to try will be to store the json responses in local storage and fetch the data from local store at the time of scroll. This will create a separate of concern between the UI and the actual crawler / fetcher. 

For the front end, let’s begin by using some simple things first. After research it seems that the best way to create a good modern responsive design will be to use react along with a UI framework like material UI. But in the interest of time I am now pivoting towards using a simple fluid layout based on css. 

Let’s start with a simple index.html and begin. Using live-server as the web server to locally test and deploy the app.

# Installation
Get the code. 
Use npm install live-server to install the live-server or you can use a web server of your choice. 
Then go to the folder and use the command 
live-server
This should start a web browser with the app running. 

# What was missed / Learnings
* The gallery on click is not yet implemented. 
* I found a nice a way to use offline storage but ran out of time to implement it. Could be a next step as explained here (https://medium.com/codingthesmartway-com-blog/pure-javascript-building-a-real-world-application-from-scratch-5213591cfcd6)
* Realized that something like a material UI using react would have been probably better over vanilla js and css but the learning curve for that seemed a bit too high in the begining. Although will be a nice exercise to try that. 
* While the layout is responsive, the strategy of using a fluid layout and showing even images of right and odd on the left is a good begining but it falls flat when images are of different size. We also need to implement some kind of cropping technique when the images are over a certain size. 
* Learned a lot about css media queries but in the end used a simple css way to make the site responsive. I think this needs more research. Initially wanted to use something like https://developer.mozilla.org/en-US/docs/Archive/Apps/Tools_and_frameworks/App_templates but somehow ended up not using it. 

# References (Some of the web resources I reffered to):
* https://developer.mozilla.org/en-US/docs/Web/Apps/Progressive/Responsive/Mobile_first#First_things_first_%E2%80%94_mobile_as_a_default
* https://www.html5rocks.com/en/mobile/responsivedesign/
* https://medium.com/codingthesmartway-com-blog/pure-javascript-building-a-real-world-application-from-scratch-5213591cfcd6
* Many posts on stackoverflow ofcourse
* https://getbootstrap.com/docs/3.3/css/ -- Didn't use this in the end
* https://material-ui.com/layout/grid/ -- Should have used this :-( 
* https://www.programmableweb.com/api/xkcd