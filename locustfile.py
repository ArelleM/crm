from locust import HttpUser, between, task

class WebsiteUser(HttpUser):
    wait_time = between(5, 15)

    @task
    def login(self):
        self.client.post("/api/login", json={"email": "eve.holt@reqres.in", "password": "pistol"})

    @task
    def view_users(self):
        self.client.get("/api/users")
