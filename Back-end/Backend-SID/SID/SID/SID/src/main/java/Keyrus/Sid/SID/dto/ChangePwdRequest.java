package Keyrus.Sid.SID.dto;



public class ChangePwdRequest {

	String userName;
	String currentPwd;
	String newPwd;
	

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getNewPwd() {
		return newPwd;
	}

	public void setNewPwd(String newPwd) {
		this.newPwd = newPwd;
	}

	
	public String getCurrentPwd() {
		return currentPwd;
	}

	public ChangePwdRequest() {
		// TODO Auto-generated constructor stub
	}
	
}
