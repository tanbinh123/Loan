package com.loanapplication1.restfulwebservices.loan;
import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.loanapplication1.restfulwebservices.loan.Loan;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class LoanJPAResource {
	

	
	@Autowired
	private LoanJPARepository loanJPARepository;
	
	@GetMapping("/jpa/getAllLoan/{usernameforeign}")
	public List<Loan> getAllLoans(@PathVariable String usernameforeign )
	{
		return loanJPARepository.findByUsernameforeign(usernameforeign);
		
	}
	
	@GetMapping("/jpa/getloanmanager/{username}")
	public List<Loan> getloanManager(@PathVariable String username )
	{
		return loanJPARepository.findAll();
		
	}
	
	@DeleteMapping("/jpa/delete/{username}/{loanId}")
	public ResponseEntity<Void> deleteLoan(
			@PathVariable String username, @PathVariable long loanId)
	{
		loanJPARepository.deleteById(loanId); 
		return ResponseEntity.noContent().build();
		 
		
	}
	@GetMapping("/jpa/getLoan/{username}/{loanId}")
	public Loan specificLoan(@PathVariable String username , @PathVariable long loanId )
	{
		return loanJPARepository.findById(loanId).get();
		
	}
	
	@GetMapping("/jpa/getLoanManager/{username}/{loanId}")
	public Loan specificLoanManager(@PathVariable String username , @PathVariable long loanId )
	{
		return loanJPARepository.findById(loanId).get();

		
	}
	
	@PutMapping("/jpa/update/{username}/{loanId}")
	public ResponseEntity<Loan> updateLoan(
			@PathVariable String username, @PathVariable long loanId,
			@RequestBody Loan loan){
		
		loan.setStatus("pending");
		loan.setUsernameforeign(username);
		Loan loanupdated= loanJPARepository.save(loan);
		return new ResponseEntity<Loan>(loan, HttpStatus.OK);
		
	}
	
	@PostMapping("/jpa/add/{username}")
	public ResponseEntity<Loan> addLoan(
			@PathVariable String username, 
			@RequestBody Loan loan){
		
		
		loan.setStatus("pending");
		loan.setUsernameforeign(username);
		Loan createdLoan= loanJPARepository.save(loan);
		System.out.println("Checking");
		System.out.println(createdLoan);
		URI uri=ServletUriComponentsBuilder.fromCurrentRequest()
					.path("/{loanId}").buildAndExpand(createdLoan.getloanId()).toUri();
		
		return ResponseEntity.created(uri).build();
		
	}
	
	@GetMapping("/jpa/addRejectLoanInfo/{loanId}")
	public ResponseEntity<Loan> rejectLoan( @PathVariable long loanId )
	{
		Loan createdLoan= loanJPARepository.findById(loanId).get();
		createdLoan.setStatus("rejected");
		Loan loanupdated= loanJPARepository.save(createdLoan);
		return new ResponseEntity<Loan>(loanupdated, HttpStatus.OK);
	
	}
	@GetMapping("/jpa/addApproveLoanInfo/{loanId}")
	public ResponseEntity<Loan> approveLoan( @PathVariable long loanId )
	{
		Loan createdLoan= loanJPARepository.findById(loanId).get();
		createdLoan.setStatus("approved");
		Loan loanupdated= loanJPARepository.save(createdLoan);
		return new ResponseEntity<Loan>(loanupdated, HttpStatus.OK);
		
	}
	
	
	

}
