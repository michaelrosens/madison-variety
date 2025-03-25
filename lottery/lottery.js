const { createApp } = Vue

createApp({
    data() {
        return {
            lotteries: []
        }
    },
    mounted() {
        this.fetchLotteryResults();
        // Refresh every hour (3600000 milliseconds)
        setInterval(this.fetchLotteryResults, 3600000);
    },
    methods: {
        async fetchLotteryResults() {
            try {
                const powerball = await this.getPowerballResults();
                const megaMillions = await this.getMegaMillionsResults();
                this.lotteries = [
                    powerball,
                    megaMillions,
                ];
            } catch (error) {
                console.error("Error fetching lottery results:", error);
            }
        },

        async getPowerballResults() {
            try {
                const response = await fetch('https://www.lotteryusa.com/powerball');
                const text = await response.text();

                // Extract numbers
                const numberRegex = /<li class="result-number">(\d+)<\/li>/g;
                let match;
                let numbers = [];
                while ((match = numberRegex.exec(text)) !== null) {
                    numbers.push(match[1]);
                }

                // Extract powerball number
                const powerballRegex = /<li class="result-powerball">(\d+)<\/li>/;
                const powerballMatch = powerballRegex.exec(text);
                const powerballNumber = powerballMatch ? powerballMatch[1] : 'N/A';
                numbers.push(`PB: ${powerballNumber}`);

                 // Extract jackpot
                const jackpotRegex = /Estimated Jackpot<\/div>\s*<div class="jackpot">(\$[0-9,]+)/;
                const jackpotMatch = jackpotRegex.exec(text);
                const jackpot = jackpotMatch ? jackpotMatch[1] : 'N/A';
            

                return {
                    name: 'Powerball',
                    numbers: numbers.join(', '),
                    jackpot: jackpot,
                    lastUpdated: new Date().toLocaleString(),
                };
            } catch (error) {
                console.error("Error fetching Powerball results:", error);
                return {
                    name: 'Powerball',
                    numbers: 'Error fetching results',
                    lastUpdated: new Date().toLocaleString(),
                };
            }
        },

        async getMegaMillionsResults() {
             try {
                const response = await fetch('https://www.lotteryusa.com/mega-millions');
                const text = await response.text();

                // Extract numbers
                const numberRegex = /<li class="result-number">(\d+)<\/li>/g;
                let match;
                let numbers = [];
                while ((match = numberRegex.exec(text)) !== null) {
                    numbers.push(match[1]);
                }

                // Extract megaball number
                const megaballRegex = /<li class="result-megaball">(\d+)<\/li>/;
                const megaballMatch = megaballRegex.exec(text);
                const megaballNumber = megaballMatch ? megaballMatch[1] : 'N/A';
                numbers.push(`MB: ${megaballNumber}`);

                 // Extract jackpot
                const jackpotRegex = /Estimated Jackpot<\/div>\s*<div class="jackpot">(\$[0-9,]+)/;
                const jackpotMatch = jackpotRegex.exec(text);
                const jackpot = jackpotMatch ? jackpotMatch[1] : 'N/A';

                return {
                    name: 'Mega Millions',
                    numbers: numbers.join(', '),
                    jackpot: jackpot,
                    lastUpdated: new Date().toLocaleString(),
                };
            } catch (error) {
                console.error("Error fetching Mega Millions results:", error);
                return {
                    name: 'Mega Millions',
                    numbers: 'Error fetching results',
                    lastUpdated: new Date().toLocaleString(),
                };
            }
        }
    }
}).mount('#app')
