package com.loanapplication1.restfulwebservices.loan;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Loan {
	
	@Id
	@GeneratedValue
	private Long loanId;
	private String loanType;
	private String username;  		//name of the person for the loan
	private String address;
	private String phoneNo;
	private String pan;
	private String aadhar;
	private String amount;
	private String monthlySalary;
	private String status;
	private String email;
	private String usernameforeign;  //username of the customer applying for loan
	protected Loan(){
		
	}
	
	
	public Loan(Long loanId, String loanType, String username, String address, String phoneNo, String amount,
			String monthlySalary, String status, String email, String pan, String aadhar,String usernameforeign ) {
		super();
		this.loanId = loanId;
		this.loanType = loanType;
		this.username = username;
		this.address = address;
		this.phoneNo = phoneNo;
		this.amount = amount;
		this.monthlySalary = monthlySalary;
		this.status = status;
		this.email = email;
		this.pan = pan;
		this.aadhar = aadhar;
		this.usernameforeign = usernameforeign;
	}
	public Long getloanId() {
		return loanId;
	}
	public void setloanId(Long loanId) {
		this.loanId = loanId;
	}
	public String getLoanType() {
		return loanType;
	}
	public void setLoanType(String loanType) {
		this.loanType = loanType;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getAddress() {
		return address;
		
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}
	public String getAmount() {
		return amount;
	}
	public void setAmount(String amount) {
		this.amount = amount;
	}
	public String getMonthlySalary() {
		return monthlySalary;
	}
	public void setMonthlySalary(String monthlySalary) {
		this.monthlySalary = monthlySalary;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getPan() {
		return pan;
	}
	public void setPan(String pan) {
		this.pan = pan;
	}
	public String getAadhar() {
		return aadhar;
	}
	public void setAadhar(String aadhar) {
		this.aadhar = aadhar;
	}
	
	
	public String getUsernameforeign() {
		return usernameforeign;
	}


	public void setUsernameforeign(String usernameforeign) {
		this.usernameforeign = usernameforeign;
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (loanId ^ (loanId >>> 32));
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Loan other = (Loan) obj;
		if (loanId != other.loanId)
			return false;
		return true;
	}
	
	

}
