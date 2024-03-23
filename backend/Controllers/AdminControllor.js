import Admin from "../Models/AdminModel.js"


//not to be used in frontend
const CreateAdmin =async (req,res)=>{
    try {
        const admin = await Admin.create({
            dailyUserRegistrationCounts: [],
            dailyBusinessRegistrationCounts: [],
            totaluserCount: 0,
            totalBusinessCount: 0,
          });
        return res.status(200).json({
            message:"Admin Created Succesfully",
            admin
        })
        
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
    }

}
const GetAllBusinessList = (req,res)=>{
    res.status(200).json({
        message:"all list of GetAllBusinessList"
    })
}
const GetAllListUsers=  (req,res)=>{
    res.status(200).json({
        message:"all list of users"
    })
}
const GetPastSevenDaysRegitraionCount =async (req,res)=>{
    try {
    const admin = await Admin.findOne();
    if (!admin) {
      return res.status(404).json({ message: "Admin document not found" });
    }
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    const past7DaysRegistrationCounts = [];
    for (let i = 0; i < 7; i++) {
        const date = new Date(currentDate);
        date.setDate(date.getDate() - i); 
      const userCountRecord = admin.dailyUserRegistrationCounts.find(
        (record) => record.date.getTime() === date.getTime()
      );
      const userCount = userCountRecord ? userCountRecord.count : 0;
      const businessCountRecord = admin.dailyBusinessRegistrationCounts.find(
        (record) => record.date.getTime() === date.getTime()
      );
      const businessCount = businessCountRecord ? businessCountRecord.count : 0;
      past7DaysRegistrationCounts.push({
        date: `Day ${i}`,
        userCount,
        businessCount,
      });
    
    }
    res.status(200).json({
        success: true,
        data: past7DaysRegistrationCounts,
      });
    } catch (error) {
        
    }
}

export  {GetAllListUsers,GetAllBusinessList,CreateAdmin,GetPastSevenDaysRegitraionCount}