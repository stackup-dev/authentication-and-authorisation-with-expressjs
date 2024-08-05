# Frontend

This contains the files for the webpage. This contains a basic login modal and a register modal.

## How to run

Using `python3`, you can run a live server by running the following command at the **root of the `web-front-end` directory**.

```bash
python3 -m http.server
```

This will run a live server at the URL http://0.0.0.0:8000 or http://127.0.0.1:8000. Sometimes, VSCode by default does a Port redirect which you can see at **Ports tab** i.e. http://localhost:8001.

> [!NOTE]
> If you are using GitHub Codespaces, Gitpod or similar, those URLs might be redirected in VSCode Web (or VSCode desktop). You should check the **Ports** tab of your editor. Your URL
http://localhost:8080 might be redirected to something like http://orange-marmalade.github.codespace.dev (not a real link). If it is set to private while running, please set it to
Public by right-clicking the row of where the redirected URL is.

Make sure the backend is running. Instructions to run the backend is located at the `back-end` directory's `README.md`.