from locust import HttpUser, between, task

class WebsiteUser(HttpUser):
    wait_time = between(5, 15)

    @task
    def login(self):
        self.client.post("/api/login", json={"email": "user@example.com", "password": "password"})

    @task
    def view_users(self):
        self.client.get("/api/users")
