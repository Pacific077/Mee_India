const  IsVailidMongoId = (id)=>{
    if (typeof id !== 'string') {
        return false;
      }
      const validObjectIdRegex = /^[0-9a-fA-F]{24}$/;
      return validObjectIdRegex.test(id);
}
export default IsVailidMongoId