package Keyrus.Sid.SID.dto;

public class DeleteUserRequest {
	
	private String userNameDel;
	private UserRequest admin; 

	public String getUserNameDel() {
		return userNameDel;
	}
	public void setUserNameDel(String userNameDel) {
		this.userNameDel = userNameDel;
	}
	
	
	public UserRequest getAdmin() {
		return admin;
	}
	public void setAdmin(UserRequest admin) {
		this.admin = admin;
	}
	public DeleteUserRequest() {
		// TODO Auto-generated constructor stub
	}
}

