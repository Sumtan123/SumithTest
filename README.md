# SumithTest
## Test answers - Sumith S Tantry

### 1) Mention the working of Internet Website in Terms of Front-end & Back-end Divisions
A typical internet website consists of the user, a large computer/server and a database. In the front end development part of the website, the user makes a HTTP request to the server and gets back a response. It involves the client side of the website that users interact with directly. 
The back end development part of an internet website refers to the server side of the website. It involves searching a particular item in the database and then fetching data depending on the requirement from the server. It processes the request, extracting relevant data, and performing any necessary actions based on the request type and data received. This can include tasks like validating data, interacting with databases, executing business logic, or integrating with external services or APIs. The front-end handles the user interface and presentation, while the back-end manages the underlying logic, data storage, and processing.



### 2) What are tags in HTML? Explain the each category of tag with an Example.
In HTML, the tags are the building blocks which are used to structure and define the elements within a webpage. They are enclosed in angular brackets (<>). There are many types of tags in html, like 
i) Structural tags like html which defines the html document, head which defines the header section, body which contains the main content of the webpage.
ii) Text formatting tags like h1 to h6 which define the various headings, p which denotes paragraph 
iii) Link tags like anchor tag a which is used to create hyperlinks 
iv) List tags like ul which represents an unordered list, ol which represents an ordered list, li to define list items 
v) Table tags like table, tr which represents a table row, th defines table header, td defines table data
vi) Form tags like form, input which are used to create a form 
vii) Media tags like img, video, audio are used to insert images, videos and audio files.


### 3) Explain the working Procedure of Virtual DOM.
Virtual dom stands for virtual document object model which is basically a programming concept where a virtual object is created. It is mostly implemented by ReactJS. In traditional web development, whenever some changes are made to the state or data of a web application, the entire HTML document has to be reloaded or manipulated to reflect those changes. 
The working procedure of the Virtual DOM involves
Initialization: When the application starts or a component is rendered, the initial state of the Virtual DOM is created. It represents the structure and content of the user interface.

Rendering: The Virtual DOM generates a lightweight copy of the actual browser DOM, which is an in-memory representation of the HTML structure. This copy mirrors the structure of the real DOM.

Updates: When changes occur in the application's state or data, the Virtual DOM gets updated accordingly. This can be triggered by user interactions, data updates, or other events.

Updating the Real DOM: Once the changes are calculated, the Virtual DOM efficiently updates only the necessary parts of the real DOM to reflect the changes. It avoids re-rendering the entire document, which improves performance.

Reconciliation: After the updates are applied to the real DOM, the Virtual DOM and the real DOM are in sync. The user interface now reflects the updated state of the application.

### 4) Mention some Differences between MySQL and No SQL
i) MySQL is a relational database management system where data is organized into tables with predefined schemas and supports relationships between tables whereas NoSQL is a non-relational or distributed database management system including key-value, document, columnar, and graph.

ii) MySQL primarily supports vertical scalability, which means increasing the server's resources (CPU, RAM) to handle larger workloads whereas NoSQL supports horizontal scalability which means it can distribute data across multiple servers, allowing for easy scaling by adding more servers to the database .


iii) MySQL uses a fixed schema where tables have predefined structures, column names, and data types and changes to the schema require altering the table structure whereas NoSQL is schemaless, allowing for flexible and dynamic data structures and each document or record can have different structures within the same collection or database.


### 5) Explain any one DBMS Technology in your own words. 
 One of the DBMS technologies is MongoDB which is a document-oriented NoSQL database used for high volume data storage. It provides high scalability and performance by leveraging horizontal scaling. MongoDB can distribute data across multiple servers or clusters, allowing for easy scaling as data grows. 
MongoDB offers a flexible schema design. It does not enforce a fixed schema, allowing documents in a collection to have different structures and fields. MongoDB is widely used in a range of applications, including content management systems, real-time analytics, social networks, e-commerce platforms, and other scenarios where scalability, flexibility, and performance are crucial.

