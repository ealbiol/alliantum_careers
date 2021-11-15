<p align="center">
  <a href="https://www.alliantum.es">
    <img alt="Alliantum.es" src="logo-alliantum.png" width="80" />
  </a>
</p>
<h1 align="center">
  Alliantum.es Site
</h1>

This is the Site Project for Alliantum.es.




### Repository Usage Instructions

## 1.  **Installing Node Modules.**

    npm install

## 2.  **Creating a ```.env.development``` file.**

    <img alt="Alliantum.es" src="env.png" width="180" />

## 3.  **Adding API Keys to the file.**

- This file contains the API Keys for Google Maps and Sendinblue.

- Add your keys in the following way:

  ```GATSBY_GOOGLE_MAPS_API_KEY=<YOUR_API_KEY>```

  ```GATSBY_SENDINBLUE_API_KEY=<YOUR_API_KEY>```

- What are they used for?

  **Google Maps**: This API key is needed to render the maps in the following components:
    
    - GoogleMaps.js
    - OfficeCard.js

  **Sendinblue**: 
  
  Sendinblue is platform for email marketing service.

  This API key is needed to receive the contact details of the users that are interested in receiving new job offers to their emails. These users filled the form of the component ' NotifyMeButton.js '. 

  <img alt="Alliantum.es" src="notify.png" width="180" />

  All users contact details will be received in a dashboard table:

  <img alt="Alliantum.es" src="dashboard.png" />


## 4.  **Setting Sendinblue Lists.**

When users fill the form to receive new job offers they have to choose the department they are interested in. The 'Lists' Sendinblue's functionality is set so that the contact details are sent in different office departments list.

  <img alt="Alliantum.es" src="lists.png" />

The departments list can be found in the component 'NotifyMeButton.js'.






