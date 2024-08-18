# web-front-end

The web frontend consists of a simple modal that gives access roles between admin or regular user.

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
