const BASE_URL = "http://127.0.0.1:4001";

document.getElementById("grantAdmin").addEventListener("click", () => {
	fetch(`${BASE_URL}/auth/grant/admin`, {
		method: "POST",
		credentials: "include",
	})
		.then((response) => response.json())
		.then((response) => {
			if (response.status === 200) {
				alert("Admin rights granted");
			} else {
				alert(response.message);
			}
		});
});

document.getElementById("grantUser").addEventListener("click", () => {
	fetch(`${BASE_URL}/auth/grant/user`, {
		method: "POST",
		credentials: "include",
	})
		.then((response) => response.json())
		.then((response) => {
			if (response.status === 200) {
				alert("User rights granted");
			} else {
				alert(response.message);
			}
		});
});

document.getElementById("loadAdmin").addEventListener("click", () => {
	fetch(`${BASE_URL}/auth/load/admin`, {
		credentials: "include",
	})
		.then((response) => response.json())
		.then((response) => {
			if (response.status === 200) {
				window.location.href = "pages/admin.html";
			} else {
				alert(response.message);
			}
		});
});

document.getElementById("loadUser").addEventListener("click", () => {
	fetch(`${BASE_URL}/auth/load/user`, {
		credentials: "include",
	})
		.then((response) => response.json())
		.then((response) => {
			if (response.status === 200) {
				window.location.href = "pages/user.html";
			} else {
				alert(response.message);
			}
		});
});

document.getElementById("logout").addEventListener("click", () => {
	fetch(`${BASE_URL}/auth/logout`, {
		method: "POST",
		credentials: "include",
	})
		.then((response) => response.json())
		.then((response) => {
			if (response.status === 200) {
				alert("Logged out successfully");
				window.location.href = "../index.html";
			} else {
				alert(response.message);
			}
		});
});
