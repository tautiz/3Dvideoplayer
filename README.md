# Virtual Art Sessions


## Points of interest

Here are some starting points to help you poke through the code:

- 3D painting & pointcloud engine : /static/src/js/viewer
- Data from artist sessions (all sessions from 5 of the artists) : /data/sketches/
- Sketch viewer/editor : /static/src/js/pages/test.js
- Proxy to serve Cloud Storage media through app engine (work around for DOM 18 exception in some browsers): /sitepackages/djangae/storage.py



## Running the project

To get started:

### Environment setup
 - Clone this repo 
 - Install frontend dependencies by running `bower install && npm install`

### Running 
 - Run `php -S localhost:8000` (where is index.html located), to run the application.
 
# Working with remote videos
 - run `python ./scripts/download_videos.py`
 - access any view that requires a video and wait for a bit so the video can get uploaded to the local GCS

Note: the delay happens only when you're accessing the video for the first time.



This repository mirrors the active [Virtual Art Sessions](http://g.co/VirtualArtSessions) site (code name Project Udon) and has been opened up with the Apache License 2.0 so that anyone interested can dig around and see how it works. This is meant to accompany the explanations in the [case study](https://developers.google.com/web/showcase/case-study/art-sessions).

## Code Credits
- Tautvydas Dulskis
