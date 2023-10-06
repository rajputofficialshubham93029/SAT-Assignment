package com.example.backend;

public class Users 
{
	public String name;
	public Users(String name, String address, String city, String country, int pincode, int score, String result) {
		super();
		this.name = name;
		this.address = address;
		this.city = city;
		this.country = country;
		this.pincode = pincode;
		this.score = score;
		this.result = result;
	}

	public String address;
	public String city;
	public String country;
	public int pincode;
	public int score;
	public String result;
	
	
	public String getResult() {
		return result;
	}
	public void setResult(String result) {
		this.result = result;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public int getPincode() {
		return pincode;
	}
	public void setPincode(int pincode) {
		this.pincode = pincode;
	}
	public int getScore() {
		return score;
	}
	public void setScore(int score) {
		this.score = score;
	}
	
	@Override
	public String toString() {
		return "Users [name=" + name + ", address=" + address + ", city=" + city + ", country=" + country + ", pincode="
				+ pincode + ", score=" + score + " result="+ result+"]";
	}
	

}
