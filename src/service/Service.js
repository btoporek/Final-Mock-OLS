export default class Service {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  async getCourses() {
    try {
      const response = await this.httpClient.get(
        "https://63f112b35703e063fa524823.mockapi.io/courses"
      );
      return response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async createCourse(course) {
    try {
      const response = await this.httpClient.post(
        "https://63f112b35703e063fa524823.mockapi.io/courses",
        course
      );
      return response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async editCourse(id, course) {
    const targetUrl = "https://63f112b35703e063fa524823.mockapi.io/courses/";
    try {
      const response = await this.httpClient.put(`${targetUrl}/${id}`, course);
      return response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getRoster() {
    try {
      const response = await this.httpClient.get(
        "https://63f112b35703e063fa524823.mockapi.io/roster"
      );
      return response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
