export const ImageToUrl =async (files)=>{
  let ImageArr = [];
      try {
        for (let i = 0; i < files.length; i++) {
          let pics = files[i];
          if (pics.type === "image/jpeg" || pics.type === "image/png") {
            const data = new FormData();
            data.append("file", pics);
            data.append("upload_preset", "chat-app");
            data.append("cloud_name", "piyushproj");
  
            const response = await fetch(
              "https://api.cloudinary.com/v1_1/piyushproj/image/upload",
              {
                method: "POST",
                body: data,
              }
            );
  
            if (!response.ok) {
              throw new Error("Upload failed");
            }
  
            const imageData = await response.json();
            console.log("url", imageData.url);
            ImageArr.push(imageData.url)
          }
        }
        return ImageArr

      } catch (error) {
        console.error("Error uploading images:", error);
      }

}