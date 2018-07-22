## Super Procrastinator Newsfeed
A customizable Newsfeed that shows a few stories from different news sources for today's news. Ability to determine which news site you would like to get news from through the edit feature. Each news story is a link to that story. 

Backend: https://github.com/kschlunz/super-procrastinator-project

## Screenshots 

![I AM A PICTURE](https://i.imgur.com/JrZy7bH.png)

Shows a list of news sources on the left and the current news sources displayed as links on the right

![edit box](https://i.imgur.com/pT1LjSv.png)

Shows a Google Map with all of a users saved places as markers.

## Demo
https://youtu.be/pBEcKJnKaaM

## Tech/framework used
React, CSS

#### Get request to Rails backend API 
````
componentDidMount(){
    fetch("http://localhost:3000/api/v1/list_items")
    .then(res => res.json())
    .then(res => this.setState({
        listArray: res
    }))
  }
````

## Features
The ability to customize a newsfeed and have updated news stories everyday. Used API:  "https://newsapi.org/v2/top-headlines?country=us&apiKey=#{ENV['NewsAPIKey']}"


## Installation
Clone down a copy, Run Yarn Install, Run Yarn Start and run on a different localhost than the Rails s.

## Contributors
  Helen Liutongco - https://github.com/hliutongco
  Kate Schlunz - https://github.com/kschlunz

## License
© [Kate Schlunz, Helen Liutongco]()
