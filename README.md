# Activity Feed App

## Description

This is a simple ReactJS application that allows users to view, archive, and unarchive calls. The app consists of two main sections: the Activity Feed and Archived Feed.

## Architecture

src/
|-- containers/
|   |-- ActivityBoard.jsx
|-- components/
|   |   |-- common/
|   |   |   |-- ActivityDetail.jsx
|   |   |   |-- CallWidget.jsx
|   |   |-- ActivityFeed.jsx
|   |   |-- ArchivedFeed.jsx
|-- redux/
|   |-- actions.js
|   |-- actionTypes.js
|   |-- callsReducer.js
|   |-- rootReducer.js
|   |-- store.js
|-- App.jsx
|-- index.js

## Features

- **Activity Feed:** Displays a list of active calls.
- **Archived Feed:** Displays a list of archived calls.
- **Activity Detail:** Shows detailed information about a call.
- **Archived Button:** Allows the user to archive a call. Archived calls are moved to the Archived Calls section.
- **Unarchive Button:** Allows the user to unarchive a call. Unarchived calls are moved back to the Activity Feed.
- **Archive All:** A button to archive all calls in the Activity Feed.
- **Unarchive All:** A button to unarchive all calls in the Archived Calls section.

## Installation

1. Clone the repository:
   git clone https://github.com/DevarsheeSolanki141/c19941e4.git
