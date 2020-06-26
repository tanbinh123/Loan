package com.loanapplication1.restfulwebservices.loan;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface LoanJPARepository extends JpaRepository<Loan, Long> {
	
	List<Loan> findByUsernameforeign(String usernameforeign);
	

}
