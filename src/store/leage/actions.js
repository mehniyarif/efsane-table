import axios from "@/axios.js";
import requestsHelper from '@/services/helpers/requestsHelper'

export default {

  fetchLeages(ignore, options) {
    let helpers = new requestsHelper(options);
    let queryset = helpers.createQueryset();

    return new Promise((resolve, reject) => {
      axios
        .get("/competitions/" + queryset)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
};
