const apiKey =
  "YdweyU7xO3pPdcWE9Uq0MfhpQFIB5Aep7-P-yTgdrNfqjwvaEZFIC-Jw0M8E7Uz8L0riy2Ms3tbsiKsfEMt7c6SAt9vn0w0xh4WhtU9OtHlrLqQNsuiK6AHCpQyxX3Yx";

export const Yelp = {
  search(term, location, sortBy) {
    const endpoint = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
    return fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              ZipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count,
              url: business.url,
            };
          });
        }
      });
  },
};
