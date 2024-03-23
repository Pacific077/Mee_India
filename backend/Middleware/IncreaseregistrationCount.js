import Admin from "../Models/AdminModel.js"

const increaseRegistrationCountMiddleware = async (req, res, next) => {
    try {
      const admin = await Admin.findOne();
      console.log("admin",admin)
      if (admin) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        // Check if there's already a record for today
        const todayRecordIndex = admin.dailyUserRegistrationCounts.findIndex(record => record.date.getTime() === today.getTime());
        if (todayRecordIndex !== -1) {
            admin.dailyUserRegistrationCounts[todayRecordIndex].count++;
          } else {
            admin.dailyUserRegistrationCounts.push({ date: today, count: 1 });
          }
          admin.totaluserCount += 1;
        await admin.save();
      }
      res.status(200).json({
            success: true,
            message: "User Registered",
        });
    } catch (err) {
      // Handle errors
      console.error('Error in increaseRegistrationCountMiddleware:', err);
      res.status(500).send('Internal Server Error');
    }
  };

export default increaseRegistrationCountMiddleware;