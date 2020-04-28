from locust import HttpLocust, TaskSet, task, between


class WebsiteTasks(TaskSet):
    @task
    def getRest(self):
        self.client.get("/user")

    @task
    def postRest(self):
        self.client.post("/user")

    @task
    def getGql(self):
        self.client.get("/graphql?query={getUsers{id,email,username}}")

    @task
    def mutation(self):
        self.client.get(
            "/graphql?query=mutation{generateUser{id,email,username}}")


class WebsiteUser(HttpLocust):
    task_set = WebsiteTasks
    wait_time = between(0, 9)
