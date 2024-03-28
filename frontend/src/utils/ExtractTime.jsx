const ExtractTime = (dateTimeString)=> {
    const dateTime = new Date(dateTimeString);
    const indianTime = dateTime.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' });
    return indianTime;
  }

  export default ExtractTime