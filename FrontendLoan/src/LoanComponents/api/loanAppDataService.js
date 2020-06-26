import axios from "axios";

class loanAppDataService{
    retriveLoanForUsername(name){

        console.log('Retrive loan by username');
        return axios.get(`http://localhost:8085/jpa/getAllLoan/${name}`
       
        );
    }

    retriveLoanForManager(name)
    {
        console.log('Retrive loan by username');
        return axios.get(`http://localhost:8085/jpa/getloanmanager/${name}`);
    }
    deleteLoanByID(name, loanId){
        console.log('Delete loan by id');
        return axios.delete(`http://localhost:8085/jpa/delete/${name}/${loanId}`);
    }
    findLoanByID(name, loanId){
        console.log('Find loan by id');
        return axios.get(`http://localhost:8085/jpa/getLoan/${name}/${loanId}`);
    }
    findLoanByIDManager(name, loanId){
        console.log('Find loan by id');
        return axios.get(`http://localhost:8085/jpa/getLoanManager/${name}/${loanId}`);
    }
    isUser(username, password){
        console.log('find user by username and password');
        return axios.get(`http://localhost:8085/jpa/validateuser/${username}/${password}`);
    }
    updateLoan(name, loanId, loan){
        console.log('Update Loan');
        return axios.put(`http://localhost:8085/jpa/update/${name}/${loanId}`, loan);
    }
    addLoan(name, loan){
        console.log('Add Loan');
        return axios.post(`http://localhost:8085/jpa/add/${name}`, loan);
    }
    addUser(user){
        console.log('Add USer');
        console.log(user);
        return axios.post(`http://localhost:8085/jpa/addUsers`, user);
    }


    rejectLoan(loanId){
        console.log('Reject Loan for user');
       
        return axios.get(`http://localhost:8085/jpa/addRejectLoanInfo/${loanId}` );
    }
    approveLoan(loanId){
        console.log('Approve Loan for user');
       
        return axios.get(`http://localhost:8085/jpa/addApproveLoanInfo/${loanId}` );
    }
    
    retrieveUserFromUsername(username)
    {
        console.log('Get name of the applicant')
        return axios.get(`http://localhost:8085/jpa/getnameofapplicant/${username}`);
    }
    
    existusername(username)
    {
        console.log('Get name of the applicant')
        return axios.get(`http://localhost:8085/jpa/isusername/${username}`);
    }
}

export default new loanAppDataService;