# web-front-end

The web frontend consists of a simple modal that gives access roles between admin or regular user.

## How to run

Using `python3`, you can run a live server by running the following command at the **root of the `web-front-end` directory**.

```bash
python3 -m http.server
```

This will run a live server at the URL http://0.0.0.0:8000 or http://127.0.0.1:8000. Sometimes, VSCode by default does a Port redirect which you can see at **Ports tab** i.e. http://localhost:8001.

> [!NOTE]
> If you are using GitHub Codespaces, Gitpod or similar, those URLs might be redirected in VSCode Web (or VSCode desktop). You should check the **Ports** tab of your editor. Your URL
> http://localhost:8080 might be redirected to something like http://orange-marmalade.github.codespace.dev (not a real link). If it is set to private while running, please set it to
> Public by right-clicking the row of where the redirected URL is.

Make sure the backend is running. Instructions to run the backend is located at the `back-end` directory's `README.md`.

## File Structure

`admin` and `user` roles have different access levels. `admin` can access both Admin page and User page.
In contrast, `user` can only access User page.

> [!NOTE]
> Although the back-end code is not perfect e.g. clicking ***again*** the "Give User Rights" button will
> lower the access rights of the user so it cannot access the Admin Page again, the effect of the
> change in role access gives you an idea on how authorisation works.

The directory structure (starting at the root of the project) looks like this

```
.
└── web-front-end
    ├── index.html
    ├── js
    │   ├── README.md
    │   └── scripts.js
    ├── pages
    │   ├── admin.html
    │   └── user.html
    ├── README.md
    └── styles
        └── styles.css
```

You should take a look at `scripts.js` located at [js](./js) directory. This contains handling code where
it talks to the backend for data processing.

