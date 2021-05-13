export default {
  data: (vue) => ({
    currentTime: vue.getFormattedDate(),
  }),
  mounted() {
    const setTimer = () => setTimeout(() => {
      this.currentTime = this.getFormattedDate();
      setTimer();
    }, 1000);
    setTimer();
  },
  methods: {
    convertTo12HourFormat(hour) {
      if (hour == 0) {
        return '00'
      } else {
        return hour % 12;
      }
    },
    getFormattedDate() {
      const date = new Date();
      const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ];
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      const currentDay = days[date.getDay()];
      const currentMonth = months[date.getMonth()];
      const currentDate = `${currentMonth} ${this.getCardinals(date.getDate())} ${date.getFullYear()}`;
      const currentHour = this.convertTo12HourFormat(date.getHours());
      const currentMinute = date.getMinutes();
      const currentSecond = date.getSeconds();
      const period = currentHour >= 12 ? 'pm' : 'am';
      const time = `${currentHour}:${currentMinute}:${currentSecond} ${period}`;

      const formattedDate = `${currentDay}, ${currentDate}, ${time}`

      return formattedDate;
    },
    getCardinals(num) {
      const ones = num % 10;
      const tens = num % 100;

      if (tens < 11 || tens > 13) {
        switch (ones) {
          case 1:
            return num + 'st';
          case 2:
            return num + 'nd';
          case 3:
            return num + 'rd';
        }
      }

      return num + 'th';
    }
  }
};
