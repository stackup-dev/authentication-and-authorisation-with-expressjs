document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const updateForm = document.getElementById("updateForm");
  const logoutButton = document.getElementById("logout");
  const editProfileButton = document.getElementById("editProfile");
  const cancelEditButton = document.getElementById("cancelEdit");

  const BASE_URL = "http://localhost:4001";

  if (loginForm) {
    loginForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      try {
        let response = await fetch(`${BASE_URL}/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
          credentials: "include",
        });
        response = await response.json();
        if (response.ok) {
          window.location.href = "pages/profile.html";
        } else {
          alert("Login failed!");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      }
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const username = document.getElementById("username").value;
      const contact_number = document.getElementById("contact_number").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      try {
        let response = await fetch(`${BASE_URL}/auth/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password, contact_number }),
          credentials: "include",
        });
        response = await response.json();
        if (response.ok) {
          window.location.href = "../index.html";
        } else {
          alert("Registration failed!");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      }
    });
  }

  if (updateForm) {
    updateForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const name = document.getElementById("editName").value;
      const email = document.getElementById("editEmail").value;
      const contact_number = document.getElementById("editContact").value;
      try {
        const response = await fetch(`${BASE_URL}/auth/user`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: name, email, contact_number }),
          credentials: "include",
        });
        const data = await response.json();
        if (data.ok) {
          loadUserProfile();
          document.getElementById("editProfileForm").style.display = "none";
          document.getElementById("userProfile").style.display = "block";
          alert("Profile updated successfully!");
        } else {
          alert("Update failed!");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      }
    });
  }

  if (logoutButton) {
    logoutButton.addEventListener("click", async () => {
      try {
        let response = await fetch(`${BASE_URL}/auth/logout`, {
          method: "POST",
          credentials: "include",
        });
        response = await response.json();
        if (response.ok) {
          window.location.href = "../index.html";
        } else {
          alert("Logout failed!");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      }
    });
  }

  if (editProfileButton) {
    editProfileButton.addEventListener("click", () => {
      document.getElementById("userProfile").style.display = "none";
      document.getElementById("editProfileForm").style.display = "block";
    });
  }

  if (cancelEditButton) {
    cancelEditButton.addEventListener("click", () => {
      document.getElementById("userProfile").style.display = "block";
      document.getElementById("editProfileForm").style.display = "none";
    });
  }

  async function loadUserProfile() {
    try {
      const response = await fetch(`${BASE_URL}/auth/user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      if (data.ok) {
        const user = data.user;
        document.getElementById("userName").innerText = user.username;
        document.getElementById("userEmail").innerText = user.email;
        document.getElementById("userContact").innerText = user.contact_number;
        document.getElementById("editName").value = user.username;
        document.getElementById("editEmail").value = user.email;
        document.getElementById("editContact").value = user.contact_number;
      } else {
        alert("Failed to load profile!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  }

  if (window.location.pathname.endsWith("profile.html")) {
    loadUserProfile();
  }
});
