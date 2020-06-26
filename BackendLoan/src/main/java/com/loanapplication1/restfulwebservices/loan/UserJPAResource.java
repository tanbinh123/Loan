//package com.loanapplication1.restfulwebservices.loan;
//
//import java.net.URI;
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
//
//@RestController
//@CrossOrigin(origins="http://localhost:3000")
//public interface UserApplicationResource {
//	
//	@Autowired
//	private UserHardcodedService loanservice;
//	
//	
//	@GetMapping("/getAllUser")
//	public List<User> getAllUsers()
//	{
//		return userservice.findAll();
//		
//	}
//	
//	
//	@PostMapping("adduser")
//	public ResponseEntity<User> addUser(@RequestBody User user){
//		User createdUser= userservice.save(user);
//		URI uri=ServletUriComponentsBuilder.fromCurrentRequest()
//					.path("/").buildAndExpand(createdUser.getUsername()).toUri();
//		
//		return ResponseEntity.created(uri).build();
//		
//	}
//
//}





package com.loanapplication1.restfulwebservices.loan;
import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import com.loanapplication1.restfulwebservices.loan.User;
import com.loanapplication1.restfulwebservices.loan.UserHardcodedService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class UserJPAResource {
	
	
	@Autowired
	private UserJPARepository userJPARepository;
	


	@PostMapping("/jpa/addUsers")
	public ResponseEntity<User> addUser( 
			@RequestBody User user){
		
		User createdUser= userJPARepository.save(user);
	
		URI uri=ServletUriComponentsBuilder.fromCurrentRequest()
					.path("/{name}").buildAndExpand(createdUser.getName()).toUri();
		
		return ResponseEntity.created(uri).build();
		
	}
	
	
	
	@GetMapping("/jpa/validateuser/{username}/{password}")
	public User validateUser(@PathVariable String username, @PathVariable String password )
	{
		if(userJPARepository.existsById(username))
		{
			User createdUser= userJPARepository.findById(username).get();
			if(createdUser.getPassword().equals(password))
			{
				return createdUser;
			}
		}
		
		return null;
		
	}
	
	@GetMapping("jpa/getnameofapplicant/{username}")
	public User getname(@PathVariable String username)
	{
		return userJPARepository.findById(username).get();
	}
	

	@GetMapping("jpa/isusername/{username}")
	public boolean isusername(@PathVariable String username)
	{
		return userJPARepository.existsById(username);
	}
	
	
	
	

}

