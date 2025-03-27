const { createApp } = Vue;

createApp({
  data() {
    return {
      lotteries: []
    };
  },
  mounted() {
    this.fetchLotteryResults();
    // Refresh every hour (3600000 milliseconds)
    setInterval(this.fetchLotteryResults, 3600000);
  },
  methods: {
    fetchLotteryResults() {
      this.getPowerballResults();
    },

    getPowerballResults() {
      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          try {
            const response = JSON.parse(xhr.responseText);
            console.log("Powerball API Response:", response);

            if (!response || !response.result) {
              throw new Error("Invalid API response structure");
            }

            const result = response.result;

            this.lotteries = [{
              name: "Powerball Checker",
              numbers: result.numbers ? result.numbers.join(", ") + ` PB: ${result.powerball}` : "N/A",
              jackpot: result.jackpot || "N/A",
              message: result.message || "",
              lastUpdated: new Date().toLocaleString()
            }];
          } catch (error) {
            console.error("Error processing Powerball results:", error);
            this.lotteries = [{
              name: "Powerball Checker",
              numbers: "Error fetching results",
              jackpot: "N/A",
              message: "",
              lastUpdated: new Date().toLocaleString()
            }];
          }
        }
      };

      xhr.open("GET", "https://api.collectapi.com/chancegame/usaPowerballChecker?pb=12&numbers=12%2C33%2C54%2C57%2C60");
      xhr.setRequestHeader("content-type", "application/json");
      xhr.setRequestHeader("authorization", "apikey 7a8ZGtfZEoloiaGHteuTSK:1dSgmb4ifZg02TiXziRQqL");

      xhr.send(null);
    }
  }
}).mount("#app");
