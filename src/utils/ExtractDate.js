
  const ExtractDate = (date) => {
    const parsedDate = new Date(date);
    const year = parsedDate.getFullYear();
    const month = parsedDate.getMonth() + 1; // getMonth returns 0-based month
    const day = parsedDate.getDate();
    const hours = parsedDate.getHours();
    const min = parsedDate.getMinutes();
    const today = new Date();
    const currMonth = today.getMonth() + 1;
    const currYear = today.getFullYear();
    const currDay = today.getDate();
    const currHours =today.getHours();
    const currMin = today.getMinutes();
    if(year!=currYear){
        return `${currYear-year} years ago`;
    }
    if(month !=currMonth){
        return `${currMonth - month} months ago`;
    }
    if(day !=currDay){
        return `${currDay -day} days ago`;
    }
    if(hours !=currHours){
        return `${currHours -hours} hours ago`;
    }
    return `${currMin -min} minutes ago`;

  };


// Example usage in your App componen

export default ExtractDate ;
