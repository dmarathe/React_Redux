
## Problem Statement:

1.Display a grid of documents from this RSS feed: http://curate.trap.it/api/v4/tc/traps/95ebae1c435f4dccabbf835685f3bf8f/atom/ 

2. Every document should hav e a “ delete” button. Once the button is clicked the document disappears from the list. 

3. Every document has a “ Pin” button that pins the element on top of the list. Once a document is pinned it sho ws an “ Unpin” button.

# Functionality:
1. Pin the document 
..* On pin the document, it will be placed first in 1-st column
2. Unpit the document
..* On unpin the document, it will be placed pushed last of list
3.Delete the document

Implemented column design so that we can preserve image aspect ratio and utilize most of space on page without white
space.

#Technologies/Libraries used:
1. React
2. Redux
3. Webpack
4. Babel
5. Jquery - AJAX CAll
6. Underscore

# How to Run
cd Trapit
npm install
npm start

goto http://localhost:3000

## TODO
Need to use middleware and move ajax call in actions. 

