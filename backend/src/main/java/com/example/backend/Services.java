package com.example.backend;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

public class Services 
{
	public static Connection getConnection()
	{
		String url = "jdbc:mysql://localhost:3306/SAT";
        String username = "root";
        String password = "root";

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = DriverManager.getConnection(url, username, password);
            return connection;
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
	}
	
	
	// get all users data
	public static ArrayList<Users> getAllUsers()
	{
		ArrayList<Users> al = new ArrayList<>();
		try
		{
			Connection connection = getConnection();
			Statement st = connection.createStatement();
			ResultSet rs = st.executeQuery("select * from users order by score desc");
			while(rs.next())
			{
				Users user = new Users(rs.getString(1) , rs.getString(2), rs.getString(3), rs.getString(4) , rs.getInt(5) , rs.getInt(6) ,rs.getString(7));
				al.add(user);
			}
		}
		catch(SQLException e)
		{
			e.printStackTrace();
		}
		return al;
	}
	
	
	
	public static boolean isNameAlreadyPresent(String name)
	{
		try
		{
			Connection connection = getConnection();
			PreparedStatement ps = connection.prepareStatement("select count(*) from users where name=?");
			ps.setString(1, name);
			ResultSet rs = ps.executeQuery();
			rs.next();
			if(rs.getInt(1) == 1)
			{
				return true;
			}
			else
			{
				return false;
			}
		}
		catch(SQLException e)
		{
			e.printStackTrace();
		}
		return false;
	}

	
	
	public static String insertUser(Users user)
	{
		try
		{
			Connection connection = getConnection();
			PreparedStatement ps = connection.prepareStatement("insert into users values(?,?,?,?,?,?,?)");
			ps.setString(1, user.getName());
			ps.setString(2, user.getAddress());
			ps.setString(3, user.getCity());
			ps.setString(4, user.getCountry());
			ps.setInt(5, user.getPincode());
			ps.setInt(6, user.getScore());
			ps.setString(7, user.getResult());
			int i = ps.executeUpdate();
			if(i == 1)
			{
				return "user inserted";
			}
			else
			{
				return "error";
			}
		}
		catch(SQLException e)
		{
			e.printStackTrace();
		}
		
		
		return "error";
	}
	
	
	
	
	
	public static String updateUser(String name , int score , String result)
	{
		try
		{
			Connection connection = getConnection();
			PreparedStatement ps = connection.prepareStatement("update users set score=?,result=? where name=?");
			ps.setInt(1, score);
			ps.setString(2, result);
			ps.setString(3, name);
			int i = ps.executeUpdate();
			if(i == 1)
			{
				return "user updated";
			}
			else
			{
				return "error";
			}
		}
		catch(SQLException e)
		{
			e.printStackTrace();
		}
		
		
		return "error";
	}
	
	
	
	
	
	public static String deleteUser(String name)
	{
		try
		{
			Connection connection = getConnection();
			PreparedStatement ps = connection.prepareStatement("delete from users  where name=?");
			ps.setString(1, name);
			int i = ps.executeUpdate();
			if(i == 1)
			{
				return "user deleted";
			}
			else
			{
				return "error";
			}
		}
		catch(SQLException e)
		{
			e.printStackTrace();
		}
		
		
		return "error";
	}
}
