                                                       Lego Website Clone
# Lego Website Clone

This project aims to recreate the lego.com website using React, SCSS, and other web technologies. Our goal is to create a responsive and interactive website that closely resembles the original lego.com site.

## Getting Started

1. Clone the repository to your local machine.

   ```git clone https://github.com/Develhope-FS-INT-6-Team2/lego-react.git```

2. Navigate to the project directory.

   ```cd root directory of LEGOREACT ```

3. Install the required dependencies.

   ```npm install```

4. Start the development server.

   ```npm start```

   Your React application will now be running at http://localhost:3000. or Network IP 192.168.X.X

## Workflow for Team Members

### Creating a branch for your assignment

1. Before starting a new assignment, make sure your local repository is up-to-date with the remote repository.

   ```git switch main```
   ```git pull```

2. Create a new branch for your assignment. Use a descriptive name for your branch, such as feature/header-component or feature/product-listing-page.

   ```git switch -c <your-branch-name>```

### Working on your assignment

1. Begin working on your assignment by creating new components or modifying existing ones in the src folder.

2. Commit your changes regularly to keep track of your progress. Be sure to write descriptive commit messages.

   ```git add .
   git commit -m "Your descriptive commit message"```

3. Push your changes to the remote repository.

   ```git push origin <your-branch-name>```

### Submitting your work

1. Once you have completed your assignment, push your final changes to the remote repository.

   ```git push origin <your-branch-name>```

2. Create a pull request on GitHub, comparing your branch with the main branch. Add a description of your work, and request a review from your teammates or project lead.

3. After receiving feedback, make any necessary changes, and push the updates to your branch.

4. Once your work has been approved, merge your pull request into the main branch. Be sure to delete your branch after the merge is complete.

```
                                                  Project Structure
legoReact/
│
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── fonts/
│   │   └── icons/
│   │
│   ├── components/              <--- Components folder: Store reusable React components
│   │   ├── Header/              <--- Header component folder
│   │   │   ├── Header.js        <--- Header component logic
│   │   │   └── Header.scss      <--- Header component styles
│   │   ├── Footer/              <--- Footer component folder
│   │   │   ├── Footer.js        <--- Footer component logic
│   │   │   └── Footer.scss      <--- Footer component styles
│   │   └── other components/    <--- Other reusable components
│   │
│   ├── css/
│   │   └── main.css
│   │
│   ├── scss/
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   └── main.scss
│   │
│   ├── js/
│   │   ├── main.js
│   │   └── other scripts (if necessary)
│   │
│   ├── App.js                   <--- App.js: Main container for your React application
│   ├── index.js                 <--- index.js: Entry point for your React application
│   └── other React files (if necessary)
│
├── .gitignore
├── package.json (if using npm or yarn)
├── README.md
└── other configuration files (if necessary, e.g., webpack.config.js)
  ```
