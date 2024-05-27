import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { COLORS } from '../Constraints/Generic'; // Import your color constants

interface CalendarProps {
  onSelectDate: (date: Date) => void; // Function to handle date selection
}

const CalendarComponent: React.FC<CalendarProps> = ({ onSelectDate }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); // State to store the selected date

  const onDayPress = (day: any) => {
    // Convert the selected date to a JavaScript Date object
    const selectedDate = new Date(day.timestamp);
    setSelectedDate(selectedDate); // Update the selected date state
    onSelectDate(selectedDate); // Call the parent component's function to handle date selection
  };

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={onDayPress}
        markedDates={{}} // You can mark specific dates with styles if needed
        theme={{
          calendarBackground: COLORS.AppColor,
          selectedDayBackgroundColor: COLORS.primary,
          todayTextColor: COLORS.primary,
          dayTextColor: COLORS.quaternary,
          textDisabledColor: COLORS.textColor,
        }}
      />
      {selectedDate && ( // Render only if a date is selected
        <View style={styles.selectedDateContainer}>
          <Text style={styles.selectedDateText}>Selected Date: {selectedDate.toDateString()}</Text>
          <Text style={styles.selectedMonthText}>Month: {selectedDate.toLocaleString('default', { month: 'long' })}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.AppColor,
    padding: 20,
  },
  selectedDateContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  selectedDateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textColor,
  },
  selectedMonthText: {
    fontSize: 16,
    color: COLORS.textColor,
  },
});

export default CalendarComponent;
