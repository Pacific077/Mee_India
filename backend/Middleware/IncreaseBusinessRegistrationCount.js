import Admin from "../Models/AdminModel.js"

const increaseBusinessRegistrationCount = async (req, res, next) => {
    try {
      const admin = await Admin.findOne();
      console.log("admin",admin)
      if (admin) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        // Check if there's already a record for today
        const todayRecordIndex = admin.dailyBusinessRegistrationCounts.findIndex(record => record.date.getTime() === today.getTime());
        if (todayRecordIndex !== -1) {
            admin.dailyBusinessRegistrationCounts[todayRecordIndex].count++;
          } else {
            admin.dailyBusinessRegistrationCounts.push({ date: today, count: 1 });
          }
        await admin.save();
      }
      res.status(200).json({
            success: true,
            message: "Bussiness Registered",
        });
    } catch (err) {
      // Handle errors
      console.error('Error in increaseRegistrationCountMiddleware:', err);
      res.status(500).send('Internal Server Error');
    }
  };

export default increaseBusinessRegistrationCount;