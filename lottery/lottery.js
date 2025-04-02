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
    async fetchLotteryResults() {
      try {
        const megaResponse = await fetch("https://api.apiverve.com/v1/lottery?numbers=megamillions", {
          method: "GET",
          headers: {
            "x-api-key": "08e39234-3faf-4249-aad0-ec5cf0d66947"
          }
        });
        
        const powerballResponse = await fetch("https://api.apiverve.com/v1/lottery?numbers=powerball", {
          method: "GET",
          headers: {
            "x-api-key": "08e39234-3faf-4249-aad0-ec5cf0d66947"
          }
        });
        
        const megaData = await megaResponse.json();
        const powerballData = await powerballResponse.json();
        
        console.log("Mega Millions API Response:", megaData);
        console.log("Powerball API Response:", powerballData);
        
        if (megaData.status !== "ok" || !megaData.data || powerballData.status !== "ok" || !powerballData.data) {
          throw new Error("Invalid API response structure");
        }
        
        this.lotteries = [
          {
            name: "Mega Millions",
            numbers: megaData.data.numbers.join(", "),
            jackpot: megaData.data.jackpot,
            lastUpdated: new Date().toLocaleString()
          },
          {
            name: "Powerball",
            numbers: powerballData.data.numbers.join(", "),
            jackpot: powerballData.data.jackpot,
            lastUpdated: new Date().toLocaleString()
          }
        ];
      } catch (error) {
        console.error("Error fetching lottery results:", error);
        this.lotteries = [{
          name: "Lottery Results",
          numbers: "Error fetching results",
          jackpot: "N/A",
          lastUpdated: new Date().toLocaleString()
        }];
      }
    }
  }


  
  
}).mount("#app");