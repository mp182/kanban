# Kanban Board App 📋

This repository contains a Kanban board web application developed in Angular 17, utilizing Firebase for authentication and Firestore as the database. The project was inspired by the course available at [FireShip.io](https://fireship.io/courses/angular/).

## Features 🚀

- **Board Management:** Create, edit, and delete boards to organize your tasks.
- **Custom Cards:** Add and manage cards with customized content within each board.
- **Card Movement:** Change the status of cards by dragging and dropping them into corresponding columns.

## Installation 🛠️

1. Clone this repository to your local machine using `git clone`.
2. Install dependencies using npm or yarn:

   ```bash
   npm install
   ```

3. Configure your Firebase project:

   - Create a project on [Firebase](https://console.firebase.google.com/).
   - Obtain your Firebase project configuration (credentials).
   - Paste the Firebase configuration into the `app.module.ts` file in the root of the project. You can find where to insert the configuration by following the setup instructions provided in the Firebase documentation or tutorials.

## Usage 🚀

Once you have installed the dependencies and configured your Firebase project, you can run the application locally using the following command:

```bash
npm start
```

This will launch the application in your default browser. From there, you can start creating boards and managing your tasks.

## Demo 🌐

You can see a live demo of this application [here](https://firestarter.fireship.io/kanban).

## Contributing 🤝

Contributions are welcome! If you want to improve this application, make sure to follow these guidelines:

1. Open an issue to discuss the change you would like to make.
2. Fork the repository and create a new branch for your contribution (`git checkout -b feature/new-feature`).
3. Make your changes and commit them with clear explanations.
4. Submit your changes via a pull request.

## License 📝

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
