package Keyrus.Sid.SID.dto;

public class ChangeRoleRequest {

	private String newRole, username; 
	private UserRequest admin;
	
	public String getNewRole() {
		return newRole;
	}
	public void setNewRole(String newRole) {
		this.newRole = newRole;
	}
	public UserRequest getAdmin() {
		return admin;
	}
	public void setAdmin(UserRequest admin) {
		this.admin = admin;
	}
	
	
	
public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
public ChangeRoleRequest() {
	// TODO Auto-generated constructor stub
}	
}
