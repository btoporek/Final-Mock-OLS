const ServiceClient = {
  async get(url) {
    return await fetch(url);
  },

  async post(url, course) {
    return await fetch(url, {
      method: "POST",
      body: JSON.stringify(course),
      headers: {
        "Content-Type": "application/json",
      },
    });
  },

  async put(url, id, course) {
    return await fetch(`${url}/${id}`, {
      method: "PUT",
      body: JSON.stringify(course),
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};

export default ServiceClient;
