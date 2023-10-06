package com.example.backend;
import java.util.ArrayList;
import java.util.*;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class Controllers 
{
	
@GetMapping("/users")	
public ArrayList<Users> getAllUsersController()
{
	return Services.getAllUsers();
}

// insert users
@PostMapping("/users")
public String insertController(@RequestBody Map<String, Object> data )
{
	String name = (String)data.get("name");
	if(Services.isNameAlreadyPresent(name))
	{
		return "user already exist";
	}
	
	
	String address = (String)data.get("address");
	String city = (String)data.get("city");
	String country = (String)data.get("country");
	int pincode = Integer.parseInt((String)data.get("pincode"));
	int score = Integer.parseInt((String)data.get("score"));
	String result = score > 30 ? "Pass" : "Fail";
	Users user = new Users(name , address , city , country , pincode , score , result);
	return Services.insertUser(user);
	
}




@PutMapping("/users")
public String updateController(@RequestBody Map<String, Object> data )
{
	String name = (String)data.get("name");
	int score = Integer.parseInt((String)data.get("score"));
	String result = score > 30 ? "Pass" : "Fail";
	return Services.updateUser(name , score , result);	
}


@DeleteMapping("/users/{name}")
public String updateController(@PathVariable String name)
{
	return Services.deleteUser(name);	
}




		
}
