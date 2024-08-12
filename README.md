<p align="center">
  <img src="https://img.icons8.com/external-tal-revivo-duo-tal-revivo/100/external-markdown-a-lightweight-markup-language-with-plain-text-formatting-syntax-logo-duo-tal-revivo.png" width="100" />
</p>
<p align="center">
    <h1 align="center">FE</h1>
</p>

<p align="center">
	<img src="https://img.shields.io/github/license/Bruno-Elvis/fe?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/Bruno-Elvis/fe?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/Bruno-Elvis/fe?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/Bruno-Elvis/fe?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=flat&logo=Autoprefixer&logoColor=white" alt="Autoprefixer">
	<img src="https://img.shields.io/badge/styledcomponents-DB7093.svg?style=flat&logo=styled-components&logoColor=white" alt="styledcomponents">
	<img src="https://img.shields.io/badge/YAML-CB171E.svg?style=flat&logo=YAML&logoColor=white" alt="YAML">
	<img src="https://img.shields.io/badge/Jest-C21325.svg?style=flat&logo=Jest&logoColor=white" alt="Jest">
	<img src="https://img.shields.io/badge/Webpack-8DD6F9.svg?style=flat&logo=Webpack&logoColor=black" alt="Webpack">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<br>
	<img src="https://img.shields.io/badge/Progress-5CE500.svg?style=flat&logo=Progress&logoColor=white" alt="Progress">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/SemVer-3F4551.svg?style=flat&logo=SemVer&logoColor=white" alt="SemVer">
	<img src="https://img.shields.io/badge/SVGO-3E7FC1.svg?style=flat&logo=SVGO&logoColor=white" alt="SVGO">
	<img src="https://img.shields.io/badge/Lodash-3492FF.svg?style=flat&logo=Lodash&logoColor=white" alt="Lodash">
	<img src="https://img.shields.io/badge/Ajv-23C8D2.svg?style=flat&logo=Ajv&logoColor=white" alt="Ajv">
	<img src="https://img.shields.io/badge/Immer-00E7C3.svg?style=flat&logo=Immer&logoColor=white" alt="Immer">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
	<img src="https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white" alt="Express">
</p>
<hr>

## 🔗 Quick Links

> - [📂 Repository Structure](#-repository-structure)
> - [🧩 Modules](#-modules)
> - [🚀 Getting Started](#-getting-started)
>   - [⚙️ Installation](#️-installation)
>   - [🤖 Running fe](#-running-fe)
> - [🤝 Contributing](#-contributing)
> - [📄 License](#-license)

---

## 📂 Repository Structure

```sh
└── fe/
    ├── README.md
    ├── package.json
    ├── public
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── logo192.png
    │   └── logo512.png
    ├── src
    │   ├── assets
    │   │   ├── images
    │   │   │   ├── emptyBox.svg
    │   │   │   ├── icons
    │   │   │   │   ├── arrow.svg
    │   │   │   │   ├── checkCircle.svg
    │   │   │   │   ├── edit.svg
    │   │   │   │   ├── trash.svg
    │   │   │   │   └── xCircle.svg
    │   │   │   ├── logo.svg
    │   │   │   ├── magniffierQuestion.svg
    │   │   │   └── sad.svg
    │   │   └── styles
    │   │       ├── global.js
    │   │       └── themes
    │   │           └── default.js
    │   ├── components
    │   │   ├── App
    │   │   │   ├── index.js
    │   │   │   └── styles.js
    │   │   ├── Button
    │   │   │   ├── index.js
    │   │   │   └── styles.js
    │   │   ├── ContactForm
    │   │   │   ├── index.js
    │   │   │   └── styles.js
    │   │   ├── FormGroup
    │   │   │   ├── index.js
    │   │   │   └── styles.js
    │   │   ├── Header
    │   │   │   ├── index.js
    │   │   │   └── styles.js
    │   │   ├── Input.js
    │   │   ├── Loader
    │   │   │   ├── index.js
    │   │   │   └── styles.js
    │   │   ├── Modal
    │   │   │   ├── index.js
    │   │   │   └── styles.js
    │   │   ├── PageHeader
    │   │   │   ├── index.js
    │   │   │   └── styles.js
    │   │   ├── ReactPortal
    │   │   │   └── index.js
    │   │   ├── Select.js
    │   │   ├── Spinner
    │   │   │   ├── index.js
    │   │   │   └── styles.js
    │   │   └── Toast
    │   │       ├── ToastContainer
    │   │       │   ├── index.js
    │   │       │   └── styles.js
    │   │       └── ToastMessage
    │   │           ├── index.js
    │   │           └── styles.js
    │   ├── errors
    │   │   └── APIError.js
    │   ├── hooks
    │   │   ├── useAnimatedUnmount.js
    │   │   ├── useErrors.js
    │   │   ├── useIsMounted.js
    │   │   └── useSafeAsyncAction.js
    │   ├── index.js
    │   ├── lib
    │   │   └── EventManager.js
    │   ├── pages
    │   │   ├── EditContact
    │   │   │   └── index.js
    │   │   ├── NewContact
    │   │   │   └── index.js
    │   │   └── home
    │   │       ├── index.js
    │   │       └── styles.js
    │   ├── routes.js
    │   ├── services
    │   │   ├── CategoriesService.js
    │   │   ├── ContactsService.js
    │   │   ├── mappers
    │   │   │   ├── CategoryMapper.js
    │   │   │   └── ContactMapper.js
    │   │   └── utils
    │   │       └── HttpClient.js
    │   └── utils
    │       ├── formatPhone.js
    │       ├── isEmailValid.js
    │       └── toast.js
    └── yarn.lock
```

---

## 🧩 Modules

<details closed><summary>.</summary>

| File                                                                       | Summary                                  |
| ---                                                                        | ---                                      |
| [package.json](https://github.com/Bruno-Elvis/fe/blob/master/package.json) |  `package.json` |
| [yarn.lock](https://github.com/Bruno-Elvis/fe/blob/master/yarn.lock)       |  `yarn.lock`    |

</details>

<details closed><summary>public</summary>

| File                                                                          | Summary                                       |
| ---                                                                           | ---                                           |
| [index.html](https://github.com/Bruno-Elvis/fe/blob/master/public/index.html) |  `public/index.html` |

</details>

<details closed><summary>src</summary>

| File                                                                     | Summary                                   |
| ---                                                                      | ---                                       |
| [routes.js](https://github.com/Bruno-Elvis/fe/blob/master/src/routes.js) |  `src/routes.js` |
| [index.js](https://github.com/Bruno-Elvis/fe/blob/master/src/index.js)   |  `src/index.js`  |

</details>

<details closed><summary>src.services</summary>

| File                                                                                                    | Summary                                                       |
| ---                                                                                                     | ---                                                           |
| [CategoriesService.js](https://github.com/Bruno-Elvis/fe/blob/master/src/services/CategoriesService.js) |  `src/services/CategoriesService.js` |
| [ContactsService.js](https://github.com/Bruno-Elvis/fe/blob/master/src/services/ContactsService.js)     |  `src/services/ContactsService.js`   |

</details>

<details closed><summary>src.services.utils</summary>

| File                                                                                            | Summary                                                      |
| ---                                                                                             | ---                                                          |
| [HttpClient.js](https://github.com/Bruno-Elvis/fe/blob/master/src/services/utils/HttpClient.js) |  `src/services/utils/HttpClient.js` |

</details>

<details closed><summary>src.services.mappers</summary>

| File                                                                                                      | Summary                                                            |
| ---                                                                                                       | ---                                                                |
| [CategoryMapper.js](https://github.com/Bruno-Elvis/fe/blob/master/src/services/mappers/CategoryMapper.js) |  `src/services/mappers/CategoryMapper.js` |
| [ContactMapper.js](https://github.com/Bruno-Elvis/fe/blob/master/src/services/mappers/ContactMapper.js)   |  `src/services/mappers/ContactMapper.js`  |

</details>

<details closed><summary>src.errors</summary>

| File                                                                                | Summary                                            |
| ---                                                                                 | ---                                                |
| [APIError.js](https://github.com/Bruno-Elvis/fe/blob/master/src/errors/APIError.js) |  `src/errors/APIError.js` |

</details>

<details closed><summary>src.utils</summary>

| File                                                                                       | Summary                                               |
| ---                                                                                        | ---                                                   |
| [toast.js](https://github.com/Bruno-Elvis/fe/blob/master/src/utils/toast.js)               |  `src/utils/toast.js`        |
| [isEmailValid.js](https://github.com/Bruno-Elvis/fe/blob/master/src/utils/isEmailValid.js) |  `src/utils/isEmailValid.js` |
| [formatPhone.js](https://github.com/Bruno-Elvis/fe/blob/master/src/utils/formatPhone.js)   |  `src/utils/formatPhone.js`  |

</details>

<details closed><summary>src.pages.home</summary>

| File                                                                                | Summary                                              |
| ---                                                                                 | ---                                                  |
| [styles.js](https://github.com/Bruno-Elvis/fe/blob/master/src/pages/home/styles.js) |  `src/pages/home/styles.js` |
| [index.js](https://github.com/Bruno-Elvis/fe/blob/master/src/pages/home/index.js)   |  `src/pages/home/index.js`  |

</details>

<details closed><summary>src.pages.EditContact</summary>

| File                                                                                     | Summary                                                    |
| ---                                                                                      | ---                                                        |
| [index.js](https://github.com/Bruno-Elvis/fe/blob/master/src/pages/EditContact/index.js) |  `src/pages/EditContact/index.js` |

</details>

<details closed><summary>src.pages.NewContact</summary>

| File                                                                                    | Summary                                                   |
| ---                                                                                     | ---                                                       |
| [index.js](https://github.com/Bruno-Elvis/fe/blob/master/src/pages/NewContact/index.js) |  `src/pages/NewContact/index.js` |

</details>

<details closed><summary>src.components</summary>

| File                                                                                | Summary                                              |
| ---                                                                                 | ---                                                  |
| [Select.js](https://github.com/Bruno-Elvis/fe/blob/master/src/components/Select.js) |  `src/components/Select.js` |
| [Input.js](https://github.com/Bruno-Elvis/fe/blob/master/src/components/Input.js)   |  `src/components/Input.js`  |

</details>

<details closed><summary>src.components.Spinner</summary>

| File                                                                                        | Summary                                                      |
| ---                                                                                         | ---                                                          |
| [styles.js](https://github.com/Bruno-Elvis/fe/blob/master/src/components/Spinner/styles.js) |  `src/components/Spinner/styles.js` |
| [index.js](https://github.com/Bruno-Elvis/fe/blob/master/src/components/Spinner/index.js)   |  `src/components/Spinner/index.js`  |

</details>

<details closed><summary>src.components.Button</summary>

| File                                                                                       | Summary                                                     |
| ---                                                                                        | ---                                                         |
| [styles.js](https://github.com/Bruno-Elvis/fe/blob/master/src/components/Button/styles.js) |  `src/components/Button/styles.js` |
| [index.js](https://github.com/Bruno-Elvis/fe/blob/master/src/components/Button/index.js)   |  `src/components/Button/index.js`  |

</details>

<details closed><summary>src.components.ReactPortal</summary>

| File                                                                                          | Summary                                                         |
| ---                                                                                           | ---                                                             |
| [index.js](https://github.com/Bruno-Elvis/fe/blob/master/src/components/ReactPortal/index.js) |  `src/components/ReactPortal/index.js` |

</details>

<details closed><summary>src.components.Header</summary>

| File                                                                                       | Summary                                                     |
| ---                                                                                        | ---                                                         |
| [styles.js](https://github.com/Bruno-Elvis/fe/blob/master/src/components/Header/styles.js) |  `src/components/Header/styles.js` |
| [index.js](https://github.com/Bruno-Elvis/fe/blob/master/src/components/Header/index.js)   |  `src/components/Header/index.js`  |

</details>

<details closed><summary>src.components.FormGroup</summary>

| File                                                                                          | Summary                                                        |
| ---                                                                                           | ---                                                            |
| [styles.js](https://github.com/Bruno-Elvis/fe/blob/master/src/components/FormGroup/styles.js) |  `src/components/FormGroup/styles.js` |
| [index.js](https://github.com/Bruno-Elvis/fe/blob/master/src/components/FormGroup/index.js)   |  `src/components/FormGroup/index.js`  |

</details>

<details closed><summary>src.components.Modal</summary>

| File                                                                                      | Summary                                                    |
| ---                                                                                       | ---                                                        |
| [styles.js](https://github.com/Bruno-Elvis/fe/blob/master/src/components/Modal/styles.js) |  `src/components/Modal/styles.js` |
| [index.js](https://github.com/Bruno-Elvis/fe/blob/master/src/components/Modal/index.js)   |  `src/components/Modal/index.js`  |

</details>

<details closed><summary>src.components.Loader</summary>

| File                                                                                       | Summary                                                     |
| ---                                                                                        | ---                                                         |
| [styles.js](https://github.com/Bruno-Elvis/fe/blob/master/src/components/Loader/styles.js) |  `src/components/Loader/styles.js` |
| [index.js](https://github.com/Bruno-Elvis/fe/blob/master/src/components/Loader/index.js)   |  `src/components/Loader/index.js`  |

</details>

<details closed><summary>src.components.PageHeader</summary>

| File                                                                                           | Summary                                                         |
| ---                                                                                            | ---                                                             |
| [styles.js](https://github.com/Bruno-Elvis/fe/blob/master/src/components/PageHeader/styles.js) |  `src/components/PageHeader/styles.js` |
| [index.js](https://github.com/Bruno-Elvis/fe/blob/master/src/components/PageHeader/index.js)   |  `src/components/PageHeader/index.js`  |

</details>

<details closed><summary>src.components.Toast.ToastMessage</summary>

| File                                                                                                   | Summary                                                                 |
| ---                                                                                                    | ---                                                                     |
| [styles.js](https://github.com/Bruno-Elvis/fe/blob/master/src/components/Toast/ToastMessage/styles.js) |  `src/components/Toast/ToastMessage/styles.js` |
| [index.js](https://github.com/Bruno-Elvis/fe/blob/master/src/components/Toast/ToastMessage/index.js)   |  `src/components/Toast/ToastMessage/index.js`  |

</details>

<details closed><summary>src.components.Toast.ToastContainer</summary>

| File                                                                                                     | Summary                                                                   |
| ---                                                                                                      | ---                                                                       |
| [styles.js](https://github.com/Bruno-Elvis/fe/blob/master/src/components/Toast/ToastContainer/styles.js) |  `src/components/Toast/ToastContainer/styles.js` |
| [index.js](https://github.com/Bruno-Elvis/fe/blob/master/src/components/Toast/ToastContainer/index.js)   |  `src/components/Toast/ToastContainer/index.js`  |

</details>

<details closed><summary>src.components.ContactForm</summary>

| File                                                                                            | Summary                                                          |
| ---                                                                                             | ---                                                              |
| [styles.js](https://github.com/Bruno-Elvis/fe/blob/master/src/components/ContactForm/styles.js) |  `src/components/ContactForm/styles.js` |
| [index.js](https://github.com/Bruno-Elvis/fe/blob/master/src/components/ContactForm/index.js)   |  `src/components/ContactForm/index.js`  |

</details>

<details closed><summary>src.components.App</summary>

| File                                                                                    | Summary                                                  |
| ---                                                                                     | ---                                                      |
| [styles.js](https://github.com/Bruno-Elvis/fe/blob/master/src/components/App/styles.js) |  `src/components/App/styles.js` |
| [index.js](https://github.com/Bruno-Elvis/fe/blob/master/src/components/App/index.js)   |  `src/components/App/index.js`  |

</details>

<details closed><summary>src.lib</summary>

| File                                                                                     | Summary                                             |
| ---                                                                                      | ---                                                 |
| [EventManager.js](https://github.com/Bruno-Elvis/fe/blob/master/src/lib/EventManager.js) |  `src/lib/EventManager.js` |

</details>

<details closed><summary>src.hooks</summary>

| File                                                                                                   | Summary                                                     |
| ---                                                                                                    | ---                                                         |
| [useSafeAsyncAction.js](https://github.com/Bruno-Elvis/fe/blob/master/src/hooks/useSafeAsyncAction.js) |  `src/hooks/useSafeAsyncAction.js` |
| [useErrors.js](https://github.com/Bruno-Elvis/fe/blob/master/src/hooks/useErrors.js)                   |  `src/hooks/useErrors.js`          |
| [useAnimatedUnmount.js](https://github.com/Bruno-Elvis/fe/blob/master/src/hooks/useAnimatedUnmount.js) |  `src/hooks/useAnimatedUnmount.js` |
| [useIsMounted.js](https://github.com/Bruno-Elvis/fe/blob/master/src/hooks/useIsMounted.js)             |  `src/hooks/useIsMounted.js`       |

</details>

---

## 🚀 Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

* **JavaScript**: `version x.y.z`

### ⚙️ Installation

1. Clone the fe repository:

```sh
git clone https://github.com/Bruno-Elvis/fe
```

2. Change to the project directory:

```sh
cd fe
```

3. Install the dependencies:

```sh
npm install
```

### 🤖 Running fe

Use the following command to run fe:

```sh
node app.js
```

---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/Bruno-Elvis/fe/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/Bruno-Elvis/fe/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/Bruno-Elvis/fe/issues)**: Submit bugs found or log feature requests for Fe.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/Bruno-Elvis/fe
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## 📄 License

MIT

---

[**Return**](#-quick-links)

---
