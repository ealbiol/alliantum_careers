<p align="center">
  <a href="https://www.alliantum.es">
    <img alt="Alliantum.es" src="logo-alliantum.png" width="80" />
  </a>
</p>
<h1 align="center">
  Alliantum.es Site
</h1>

This is the Site Project for Alliantum.es.




## Repository Usage Instructions

1.  **Installing Node Modules.**
    ```shell
    npm install
    ```

2.  **Creating a ```.env.development``` file.**

    <img alt="Alliantum.es" src="env.png" width="180" />

2.  **Adding API Keys to the file.**

- This file contains the API Keys for Google Maps and Sendinblue.

- What are they used for?

  Google Maps: This API key is needed to render the maps in the following components:
    
    - GoogleMaps
    - OfficeCard

- Add your keys in the following way:

  ```GATSBY_GOOGLE_MAPS_API_KEY=<YOUR_API_KEY>```
  
  ```GATSBY_SENDINBLUE_API_KEY=<YOUR_API_KEY>```



